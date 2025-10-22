import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CatalogNav from "./components/CatalogNav";
import ProblemNav from "./components/ProblemNav";
import { FilterProvider } from "./context/FilterContext";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHome = currentPath === "/";
  const isConceptPage = currentPath.startsWith("/concepts");
  const isProblemPage = currentPath.startsWith("/problems");

  return (
    <div className="min-h-screen bg-[#101922]">
      {isHome && <Navbar />}
      {isConceptPage && <CatalogNav />}
      {isProblemPage && <ProblemNav />}

      <main className="p-6">
        <FilterProvider>
          <Outlet />
        </FilterProvider>
      </main>
    </div>
  );
};

export default App;
