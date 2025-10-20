// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CatalogNav from '../components/CatalogNav'
import Sidebar from "../components/Sidebar";


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <CatalogNav /> */}
      <div className=" px-20 my-2 flex flex-col gap-3">
        <h1 className="text-4xl">Concept Catalog</h1>
        <p>Explore Programming concepts to build your skills.</p>
      </div>
      

      <div className="flex flex-1 px-20">
        {/* Sidebar (hidden on small screens, can toggle later) */}
        <aside className="hidden md:block w-72 ">
          <div className="h-full py-7">
            <Sidebar />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-6 ">
          {/* If the component is used as wrapper with children, render them;
              otherwise render the nested route Outlet. */}
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
