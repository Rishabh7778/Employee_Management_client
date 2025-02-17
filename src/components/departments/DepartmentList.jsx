import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { columns, DepartmentButtons } from '../../utils/DepartmentHelper';
import axios from 'axios';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState([])

  // Use a functional update to ensure you work with the latest state.
  const onDepartmentDelete = (deletedId) => {
    setDepartments(prevDepartments =>
      prevDepartments.filter(dep => dep._id !== deletedId)
    );
    setFilteredDepartments(prevFiltered =>
      prevFiltered.filter(dep => dep._id !== deletedId)
    );
  };


  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(true);
      let sno = 1;
      try {
        const response = await axios.get('http://localhost:8000/api/department', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log("API Response:", response.data);
        // Ensure that the API response contains an array in "departments"
        if (response.data.success && Array.isArray(response.data.departments)) {
          const data = response.data.departments.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            action: (
              <DepartmentButtons
                Id={dep._id}
                onDepartmentDelete={onDepartmentDelete}
              />
            )
          }));
          setDepartments(data);
          setFilteredDepartments(data)
        } else {
          console.warn("Invalid department data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
        alert(error.response?.data?.error || "Server Error!");
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);


  const filterDepartments = (e) => {
    const records = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredDepartments(records);
  }

  return (
    <>
      {loading ? <div>Loading....</div> :
        <div className="p-6">
          <h3 className="text-center text-xl font-semibold mb-4">Manage Department</h3>
          <div className="flex justify-between items-center border p-4 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search by department name"
              className="border p-2 rounded-lg w-2/3"
              onChange={filterDepartments}
            />
            <Link
              to="/admin-dashboard/add-department"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add New Department
            </Link>
          </div>
          <div>
            <DataTable columns={columns} data={filteredDepartments} />

          </div>
        </div>
      }
    </>
  );
};

export default DepartmentList;
