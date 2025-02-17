import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBuilding, FaTachometerAlt, FaUsers, FaCalendar, FaCogs, FaMoneyBillWave } from 'react-icons/fa';

const AdminSideBar = () => {
    return (
        <div className="w-72 h-screen bg-gray-900 text-white flex flex-col p-5">
            {/* Sidebar Header */}
            <div className="text-2xl font-bold text-center pb-6 border-b border-gray-700">
                Employee MS
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-5 mt-6">
                <NavLink
                    to="/admin-dashboard"
                    className={({ isActive }) =>
                        `${isActive ? "bg-teal-500" : ""} flex items-center gap-4 px-5 py-4 rounded-lg text-lg hover:bg-gray-800 transition`
                    }
                >
                    <FaBuilding className="text-xl" />
                    <span>Dashboard</span>
                </NavLink>


                <NavLink
                    to="/admin-dashboard/employees"
                    className="flex items-center gap-4 px-5 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    <FaTachometerAlt className="text-xl" />
                    <span>Employees</span>
                </NavLink>

                <NavLink
                    to="/admin-dashboard/departments"
                    className="flex items-center gap-4 px-5 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    <FaUsers className="text-xl" />
                    <span>Department</span>
                </NavLink>

                <NavLink
                    to="/admin-dashboard"
                    className="flex items-center gap-4 px-5 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    <FaCalendar className="text-xl" />
                    <span>Leave</span>
                </NavLink>

                <NavLink
                    to="/admin-dashboard"
                    className="flex items-center gap-4 px-5 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    <FaMoneyBillWave className="text-xl" />
                    <span>Salary</span>
                </NavLink>

                <NavLink
                    to="/admin-dashboard"
                    className="flex items-center gap-4 px-5 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    <FaCogs className="text-xl" />
                    <span>Settings</span>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSideBar;
