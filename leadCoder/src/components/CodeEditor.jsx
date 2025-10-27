import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import { useProblemStore } from "../store/useProblemStore";

const CodeEditor = ({ problem }) => {
  const [language, setLanguage] = useState({
    value: "javascript",
    label: "JavaScript",
  });
  const [code, setCode] = useState("// here");
  const [output, setOutput] = useState(""); // actual console output
  const [testResult, setTestResult] = useState(""); // test case result message
  const [activeTab, setActiveTab] = useState("Test Cases");

  const { markCompleted } = useProblemStore();

  const languages = [
    { 
      value: "c", 
      label: "C", 
      snipt: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}` 
    },
    { 
      value: "javascript", 
      label: "JavaScript", 
      snipt: `// JavaScript Initial Code
console.log("Hello, World!");` 
    },
    { 
      value: "python", 
      label: "Python", 
      snipt: `# Python Initial Code
print("Hello, World!")` 
    },
    { 
      value: "java", 
      label: "Java", 
      snipt: `// Java Initial Code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}` 
    }
  ];

  const runCode = () => {
    try {
      if (language.value === "javascript") {
        let logs = [];
        const originalConsole = console.log;

        console.log = (...args) => logs.push(args.join(" "));
        new Function(code)();
        console.log = originalConsole;

        const actualOutput = logs.join("\n");
        setOutput(actualOutput); // show actual output in Console tab

        // Check against test cases
        if (problem.testCases && problem.testCases.length > 0) {
          const expected = problem.expectedOutput.join("\n").trim();
          const result = actualOutput.trim();

          if (result === expected) {
            setTestResult("✅ All test cases passed!");
          } else {
            setTestResult("❌ Some test cases failed.");
          }
        } else {
          setTestResult("");
        }
      } else {
        setOutput("Running code for this language is not implemented yet.");
        setTestResult("");
      }
    } catch (err) {
      setOutput(err.message);
      setTestResult("❌ Some test cases failed.");
    }
  };

  const handleSubmit = () => {
  if (testResult.includes("✅")) {
    markCompleted(problem.id);
    alert("🎉 Problem marked as completed!");
  } else {
    alert("⚠️ Please make sure all test cases pass before submitting.");
  }
};


  return (
    <div className="flex flex-col h-full">
      {/* Top Controls */}
      <div className="flex items-center justify-between bg-gray-900/50 backdrop-blur-2xl p-5 rounded-t-md mastBrightShadow z-10">
        <Select
          options={languages}
          value={language}
          onChange={setLanguage}
          className="w-40 text-black bg-gray-400"
        />
        <div>
          <button
            onClick={runCode}
            className="bg-green-500 text-white px-4 py-1 rounded mr-3 hover:bg-green-600"
          >
            Run Code
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 bg-white/30 backdrop-blur-2xl">
        <Editor
          height="100%"
          language={language.value}
          value={language.snipt}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
          options={{ fontSize: 14, minimap: { enabled: false } }}
        />
      </div>

      {/* Bottom Tabs */}
      <div className="h-1/3 bg-gray-900/50 backdrop-blur-2xl text-white flex flex-col mb-5 rounded-b-md mastBrightShadow">
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

        <div className="p-3 overflow-y-auto flex-1 bg-black/30 backdrop-blur-2xl text-green-400 font-mono rounded-b-md">
          {activeTab === "Console" ? (
            <pre>{output || "Console output will appear here..."}</pre>
          ) : (
            <div>
              <pre>
                {problem.testCases?.join(" ") || "Test cases will appear here..."}
              </pre>
              {testResult && <p className="mt-2">{testResult}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
