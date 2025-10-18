// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar (hidden on small screens, can toggle later) */}
        <aside className="hidden md:block w-72 border-r border-gray-200 bg-white">
          <div className="h-full p-4">
            <Sidebar />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-6">
          {/* If the component is used as wrapper with children, render them;
              otherwise render the nested route Outlet. */}
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
