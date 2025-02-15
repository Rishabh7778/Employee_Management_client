import React from 'react';

const SummaryCard = ({ icon, text, number, bgColor }) => {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Icon Section with customizable background color */}
      <div className={`${bgColor} text-white p-6 flex items-center justify-center`}>
        <div className="text-4xl">
          {icon}
        </div>
      </div>
      {/* Text and Number Section */}
      <div className="pl-4">
        <p className="text-xl font-semibold text-gray-700">{text}</p>
        <p className="text-3xl font-bold text-gray-900">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
