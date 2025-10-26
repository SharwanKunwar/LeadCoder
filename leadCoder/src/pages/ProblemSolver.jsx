import React from "react";
import { useLocation } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";

function ProblemSolver() {
  const location = useLocation();
  const { problem } = location.state || {}; // safely get problem

  if (!problem)
    return <div className="text-white p-5">No problem selected.</div>;

  return (
    <div className="bg-white/30 w-full h-screen flex gap-3 rounded-md">
      {/* Left panel: problem details */}
      <div className=" w-[30%] p-5 overflow-y-auto pb-10 no-scrollbar">
  <h1 className="font-bold text-xl"># {problem.title}</h1>
  <p className="mt-2 text-neutral-400">{problem.question}</p>
  <h2 className="text-xl font-medium mt-5">How to solve</h2>
  {problem.description && (
    <p className="mt-2 whitespace-pre-line text-neutral-300">{problem.description}</p>
  )}
  {problem.hint && (
    <div className="mt-4 p-2 bg-gray-400 rounded">
      <strong>Hint:</strong> {problem.hint}
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
