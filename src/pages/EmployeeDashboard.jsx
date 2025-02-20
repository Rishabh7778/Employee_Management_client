import React from 'react'
import Navbar from "../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from '../components/employeDashboard/SIdebar';

const EmployeeDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-100">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
