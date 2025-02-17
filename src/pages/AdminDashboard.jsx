import React from "react";
import AdminSideBar from "../components/dashboard/AdminSideBar";
import Navbar from "../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex flex-col flex-1 bg-gray-100">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet /> {/* Child routes (like your long form) will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
