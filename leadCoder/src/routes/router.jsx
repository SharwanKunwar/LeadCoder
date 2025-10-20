import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import ConceptCatalog from "../pages/ConceptCatalog";
import ConceptDetail from "../pages/ConceptDetail";
import ProblemSolver from "../pages/ProblemSolver";
import SolutionAnalysis from "../pages/SolutionAnalysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "concepts", element: <ConceptCatalog />},
      { path: "concepts/:id", element: <ConceptDetail /> },
      { path: "problem/:id", element: <ProblemSolver /> },
      { path: "solution/:id", element: <SolutionAnalysis /> },
    ],
  },
  
]);

export default router;
