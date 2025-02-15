import React from 'react';
import SummaryCard from './SummaryCard';
import { 
  FaBuilding, 
  FaCalendar, 
  FaCheck, 
  FaHourglassEnd, 
  FaMoneyBill, 
  FaTimes, 
  FaUsers 
} from 'react-icons/fa';

const AdminSummary = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SummaryCard 
          icon={<FaUsers />} 
          text="Total Employees" 
          number={13} 
          bgColor="bg-teal-500" 
        />
        <SummaryCard 
          icon={<FaBuilding />} 
          text="Total Department" 
          number={4} 
          bgColor="bg-indigo-500" 
        />
        <SummaryCard 
          icon={<FaMoneyBill />} 
          text="Monthly Pay" 
          number={"$500"} 
          bgColor="bg-green-500" 
        />
      </div>
      
      <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Leave Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SummaryCard 
          icon={<FaCalendar />} 
          text="Leave Applied" 
          number={13} 
          bgColor="bg-purple-500" 
        />
        <SummaryCard 
          icon={<FaCheck />} 
          text="Leave Approved" 
          number={4} 
          bgColor="bg-blue-500" 
        />
        <SummaryCard 
          icon={<FaTimes />} 
          text="Leave Pending" 
          number={2} 
          bgColor="bg-red-500" 
        />
        <SummaryCard 
          icon={<FaHourglassEnd />} 
          text="Leave Rejected" 
          number={1} 
          bgColor="bg-yellow-500" 
        />
      </div>
    </div>
  );
};

export default AdminSummary;
