import React, { useEffect, useState } from 'react'
import { columns, LeaveButton } from '../../utils/LeaveHelper';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Table = () => {

    const [leaves, setLeaves] = useState([]);
    const [filterLeave, setFilterLeave] = useState([]);

    const fetchLeaves = async () => {
        try {
            let sno = 1;
            try {
                const response = await axios.get('http://localhost:8000/api/leave', {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log("API Response:", response.data);
                if (response.data.success) {
                    const data = response.data.leaves.map((leave) => ({
                        _id: leave._id,
                        sno: sno++,
                        employeeId: leave.employeeId.employeeId,
                        name: leave.employeeId.userId.name,
                        leaveType: leave.leaveType,
                        department: leave.employeeId.department.dep_name,
                        days:
                            new Date(leave.endDate).getDate() -
                            new Date(leave.startDate).getDate(),
                        status: leave.status,
                        action: (<LeaveButton Id={leave._id} />)
                    }));
                    setLeaves(data);
                    setFilterLeave(data);
                } else {
                    console.warn("Invalid department data received:", response.data);
                }
            } catch (error) {
                console.error("Error fetching departments:", error);
                alert(error.response?.data?.error || "Server Error!");
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchLeaves();
    }, [])


    const filterByInput = (e) => {
        const data = leaves.filter(leave =>
            leave.employeeId.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterLeave(data);
    };


    const filterByButton = (status) => {
        const data = leaves.filter((leave) =>
            leave.status.toLowerCase().includes(status.toLowerCase())
        );
        setFilterLeave(data);
    }

    return (
        <>
            {filterLeave ? (
                <div>
                    <h3 className='text-center text-2xl font-bold mb-6 text-gray-800' >Leave Management</h3>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                        <div className="w-2/3">
                            <input
                                type="text"
                                onChange={filterByInput}
                                placeholder="Search by department name"
                                className="border p-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => filterByButton("Pending")} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                                Pending
                            </button>
                            <button onClick={() => filterByButton("Approved")} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                                Approved
                            </button>
                            <button onClick={() => filterByButton("Rejected")} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                                Rejected
                            </button>
                        </div>
                    </div>


                    <DataTable columns={columns} data={filterLeave} pagination />

                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default Table
