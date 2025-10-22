import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ConceptSidebar from "../components/ConceptSidebar";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isConceptDetailPage = /^\/concepts\/\d+$/.test(currentPath);
  const isConceptPage = currentPath === "/concepts";
  const isProblemsPage = currentPath === "/problems";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page heading */}
      {isConceptPage && (
        <div className="px-20 my-2 flex flex-col gap-3">
          <h1 className="text-4xl">Concept Catalog</h1>
          <p>Explore Programming concepts to build your skills.</p>
        </div>
      )}

      {isProblemsPage && (
        <div >
          {/* <h1 className="text-4xl">Problems</h1> */}
        </div>
      )}

      <div
        className={`flex flex-1 px-20 ${
          isConceptDetailPage ? "flex-row-reverse" : "flex"
        }`}
      >
        {/* Sidebar */}
        <aside className="hidden md:block w-72">
          <div className="h-full py-7">
            {isConceptDetailPage ? <ConceptSidebar /> : <Sidebar />}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 pl-6 pt-6">
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
