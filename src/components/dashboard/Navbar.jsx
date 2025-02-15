import React from 'react';
import { useAuth } from '../../context/authContext';

const Navbar = () => {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="text-white text-lg font-semibold">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>Welcome {user?.name || "Admin"}</p>
        )}
      </div>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
