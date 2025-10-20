import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Select from "react-select";

const CodeEditor = ({ problem }) => {
  const [language, setLanguage] = useState({ value: "javascript", label: "JavaScript" });
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("Test Cases");

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  const runCode = () => {
    try {
      if (language.value === "javascript") {
        // Capture console output
        let logs = [];
        const originalConsole = console.log;
        console.log = (...args) => logs.push(args.join(" "));
        new Function(code)();
        console.log = originalConsole;
        setOutput(logs.join("\n"));
      } else {
        setOutput("Running code for this language is not implemented yet.");
      }
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <div className="flex w-full h-full">
      {/* Left Panel: Problem */}
      <div className="w-1/3 bg-gray-800 p-5 text-white overflow-y-auto">
        <h2 className="text-2xl font-bold mb-3">{problem.title}</h2>
        <p className="mb-3">{problem.description}</p>
        {problem.examples && (
          <>
            <h3 className="font-semibold mb-2">Examples:</h3>
            {problem.examples.map((ex, i) => (
              <div key={i} className="bg-gray-700 p-2 rounded mb-2">
                <pre>{ex}</pre>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Right Panel: Editor */}
      <div className="flex-1 flex flex-col">
        {/* Top Controls */}
        <div className="flex items-center justify-between bg-gray-900 p-3">
          <Select
            options={languages}
            value={language}
            onChange={setLanguage}
            className="w-40 text-black"
          />
          <div>
            <button
              onClick={runCode}
              className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
            >
              Run Code
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1">
          <Editor
            height="60%"
            language={language.value}
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </div>

        {/* Bottom Tabs */}
        <div className="h-1/3 bg-gray-900 text-white flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            {["Test Cases", "Console"].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 cursor-pointer ${
                  activeTab === tab ? "border-b-2 border-green-500" : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-3 overflow-y-auto flex-1 bg-black text-green-400 font-mono">
            {activeTab === "Console" ? (
              <pre>{output || "Console output will appear here..."}</pre>
            ) : (
              <pre>{problem.testCases?.join("\n") || "Test cases will appear here..."}</pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
