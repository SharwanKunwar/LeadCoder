import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CatalogNav from './components/CatalogNav'

const App = () => {

  const location = useLocation();
  const isConceptPage = location.pathname.startsWith("/concepts");

  return (
    <div className="min-h-screen bg-[#101922]">
      {isConceptPage ? <CatalogNav /> : <Navbar />}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
