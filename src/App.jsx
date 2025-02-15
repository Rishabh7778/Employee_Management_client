import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ProtectedRoute from "./utils/ProtectedRoute";
import RoleBaseRoute from "./utils/RoleBaseRoute";
import Unauthor from './pages/Unauthorized';
import AdminSummary from './components/dashboard/AdminSummary';
import DepartmentList from './components/departments/DepartmentList';
import AddDepartment from './components/departments/AddDepartment';
import EditDepartment from './components/departments/EditDepartment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/admin-dashboard" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin-dashboard/login' element={<Login />} />
        {/* Nest the AdminSummary route under /admin-dashboard */}
        <Route path='/admin-dashboard' element={
          <ProtectedRoute>
            <RoleBaseRoute requiredRole={["admin"]}>
              <AdminDashboard />
            </RoleBaseRoute>
          </ProtectedRoute>
        }>
          <Route index element={<AdminSummary />} />
          <Route path='/admin-dashboard/departments' element={<DepartmentList />} />
          <Route path='/admin-dashboard/add-department' element={<AddDepartment />} />
          <Route path='/admin-dashboard/department/:id' element={<EditDepartment />} />
        </Route>
        <Route path='/employee-dashboard' element={<EmployeeDashboard />} />
        <Route path='/unauthorized' element={<Unauthor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
