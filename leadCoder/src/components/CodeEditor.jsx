import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import { useProblemStore } from "../store/useProblemStore";
import { useNavigate } from "react-router-dom";

const CodeEditor = ({ problem }) => {
  const [language, setLanguage] = useState({ value: "javascript", label: "JavaScript" });
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [testResult, setTestResult] = useState("");
  const [activeTab, setActiveTab] = useState("Test Cases");

  const {markCompleted, saveCode} = useProblemStore();
  const navigate = useNavigate();

  const languages = [
    { value: "javascript", label: "JavaScript", snipt: "// JS code" },
    { value: "c", label: "C", snipt: "// C code" },
    { value: "python", label: "Python", snipt: "# Python code" },
    { value: "java", label: "Java", snipt: "// Java code" },
  ];

  const runCode = () => {
    if (language.value !== "javascript") {
      setOutput("⚠️ Only JavaScript execution is supported.");
      setTestResult("");
      return;
    }

    try {
      let logs = [];
      const originalConsole = console.log;
      console.log = (...args) => logs.push(args.join(" "));
      new Function(code)();
      console.log = originalConsole;

      const actual = logs.map((l) => l.trim());
      setOutput(actual.join("\n"));

      if (problem.expectedOutput && problem.expectedOutput.length > 0) {
        const results = problem.expectedOutput.map((exp, idx) => {
          if (actual[idx] === exp) return `✅ Test Case ${idx + 1} Passed`;
          else return `❌ Test Case ${idx + 1} Failed: Expected "${exp}", got "${actual[idx] || "undefined"}"`;
        });
        setTestResult(results.join("\n"));
      } else {
        setTestResult("⚠️ No test cases defined.");
      }
    } catch (err) {
      setOutput(err.message);
      setTestResult("❌ Code execution failed.");
    }
  };

  const handleSubmit = () => {
    if (!testResult) {
      alert("⚠️ Please run your code first.");
      return;
    }

    if (testResult.includes("❌")) {
      alert("⚠️ Some test cases failed. Please fix them before submitting.");
    } else {
      markCompleted(problem.id);
      saveCode(problem.id, code); // ✅ store the code
      alert(`🎉 All test cases passed! Problem marked as completed!\n\nYour Code:\n${code}`);
      navigate(-1); // Go back to previous page
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top Controls */}
      <div className="flex items-center justify-between bg-gray-900/50 p-5 rounded-t-md">
        <Select options={languages} value={language} onChange={setLanguage} className="w-40 text-black bg-gray-400" />
        <div>
          <button onClick={runCode} className="bg-green-500 text-white px-4 py-1 rounded mr-3">Run Code</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-1 rounded">Submit</button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={language.value}
          value={code}
          onChange={setCode}
          theme="vs-dark"
          options={{ fontSize: 14, minimap: { enabled: false } }}
        />
      </div>

      {/* Bottom Tabs */}
      <div className="h-1/3 bg-gray-900/50 text-white flex flex-col mb-5 rounded-b-md">
        <div className="flex border-b border-gray-700">
          {["Test Cases", "Console"].map((tab) => (
            <div key={tab} onClick={() => setActiveTab(tab)} className={`p-2 cursor-pointer ${activeTab === tab ? "border-b-2 border-green-500" : ""}`}>{tab}</div>
          ))}
        </div>
        <div className="p-3 overflow-y-auto flex-1 bg-black/30 text-green-400 font-mono">
          {activeTab === "Console" ? <pre>{output || "Console output will appear here..."}</pre> : <pre>{testResult || "Run your code to see test results..."}</pre>}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
