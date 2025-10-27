import React from "react";
import { useLocation } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";

function ProblemSolver() {
  const location = useLocation();
  const { problem } = location.state || {}; // safely get problem

  if (!problem)
    return <div className="text-white p-5">No problem selected.</div>;

  return (
    <div className="bg-linear-to-br from-slate-800 via-pink-700 to-sky-400 w-full h-screen flex gap-3 rounded-md">
      {/* Left panel: problem details */}
      <div className=" w-[30%] p-5 overflow-y-auto py-10 no-scrollbar bg-white/30  mt-5 mb-10 ml-5 rounded-md mastShadow">
        <div className="mastShadow p-2 border border-white/30">
          <h1 className="font-bold text-xl"># {problem.title}</h1>
          <p className="mt-2 font-medium text-neutral-200">{problem.question}</p>
        </div>
        <h2 className="text-xl font-bold mt-5">How to solve</h2>
        {problem.description && (
          <p className="mt-2 whitespace-pre-line text-neutral-200">{problem.description}</p>
        )}
        {problem.hint && (
        <div className="mt-4 p-2 bg-slate-500 rounded">
          <strong>Hint:</strong> <span className="text-neutral-200">{problem.hint}</span>
        </div>
        )}
      </div>


      {/* Right panel: Code editor */}
      <div className="w-[70%] p-5">
        <CodeEditor problem={problem} />
      </div>
    </div>
  );
}

export default ProblemSolver;
