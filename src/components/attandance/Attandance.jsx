import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { columns, AttendanceHelper } from '../../utils/AttendanceHelper';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Attandance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredAttendance, setfilteredAttendance] = useState([])

  const statusChange = () => {
    fetchAttendance()
  }

  const fetchAttendance = async () => {
    setLoading(true);
    let sno = 1;
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.get(`${BASE_URL}attendance`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      // console.log("API Response:", response.data);
      if (response.data.success) {
        // console.log(response)
        const data = response.data.attendance.map((att) => ({
          employeeId: att.employeeId.employeeId,
          sno: sno++,
          department: att.employeeId.department.dep_name,
          name: att.employeeId.userId.name,
          action: (<AttendanceHelper status={att.status} employeeId={att.employeeId.employeeId} statusChange={statusChange} />)
        }));
        setAttendance(data);
        setfilteredAttendance(data)
      } else {
        console.warn("data not received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert(error.response?.data?.error || "Server Error!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleFilter = (e) => {
    const records = attendance.filter((emp) => (
      emp.employeeId.toLowerCase().includes(e.target.value.toLowerCase())
    ))
    setfilteredAttendance(records);
  }

  if (!filteredAttendance) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3 className="text-center text-xl font-semibold mb-4">Attendance Mark</h3>
      <div className="flex justify-between items-center border p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search by department name"
          className="border p-2 rounded-lg w-1/3"
          onChange={handleFilter}
        />
        <p className='text-2xl'> Mark Employee for <span className='font-bold underline'>{new Date().toISOString().split("T")[0]}{" "}</span></p>
        <Link
          to="/admin-dashboard/attandanceReport"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Attendance Reports
        </Link>
      </div>
      <div>
        <DataTable columns={columns} data={filteredAttendance} pagination />
      </div>
    </div>
  )
}
export default Attandance
