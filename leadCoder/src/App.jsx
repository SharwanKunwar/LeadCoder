import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-[#101922]">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
