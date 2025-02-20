import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';

const Summary = () => {
    const { user } = useAuth();

    return (
        <div className="flex items-center bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-md mx-auto p-6 border border-gray-200">
            {/* Icon Section with Gradient Background */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 flex items-center justify-center rounded-full">
                <FaUser className="text-5xl" />
            </div>

            {/* Welcome Text Section */}
            <div className="pl-6 flex flex-col">
                <p className="text-2xl font-semibold text-gray-700">Welcome,</p>
                <p className="text-3xl font-bold text-blue-600">{user?.name || "Guest"}</p>
            </div>
        </div>
    );
};

export default Summary;
