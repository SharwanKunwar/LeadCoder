import { useParams } from "react-router-dom";
import { useState } from "react";
import conceptDetails from "../data/conceptDetails.json";
import conceptStory from '../data/conceptStory.json'
import conceptQuestions from '../data/conceptQuestions.json'
import problems from "../data/problems.json";
import MainLayout from "../layouts/MainLayout";
import { Button, Modal } from "antd";
import CodeEditor from "../components/CodeEditor";



function ConceptDetail() {
  const { id } = useParams();
  const concept = conceptDetails.find((item) => item.id === parseInt(id));

  const [code, setCode] = useState(""); // user input
  const [output, setOutput] = useState(""); // console output

  const runCode = () => {
    try {
      // Use eval carefully! Here it's for learning/testing purposes
      const result = eval(code);
      setOutput(String(result));
    } catch (err) {
      setOutput(err.message);
    }
  };



  if (!concept) {
    return (
      <MainLayout>
        <div className="text-center text-red-500 mt-10">
          <h1>Concept Not Found 😢</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="text-white p-10 h-[85vh] space-y-8 bg-[#101922] overflow-y-scroll rounded-xl no-scrollbar">
        <div className="text-white p-6">
          {/* Title and Description */}
          <h1 className="text-4xl font-bold">{concept.title}</h1>
          <p className="text-gray-400 mt-2">{concept.description}</p>

          {/* Introduction */}
          {concept.introduction && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-gray-300 whitespace-pre-line mt-2">{concept.introduction}</p>
            </div>
          )}

          {/* Sections */}
          {concept.sections.map((section, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-2xl font-semibold">{section.heading}</h2>

              {/* Content */}
              {section.content && (
                <p className="text-gray-300 whitespace-pre-line mt-2">{section.content}</p>
              )}

              {/* List (if available) */}
              {section.list && (
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Example / Code (if available) */}
              {section.example && (
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-md mt-4 overflow-x-auto text-sm">
                  {section.example}
                </pre>
              )}
            </div>
          ))}

          {/* Conclusion */}
          {concept.conclusion && (
            <div className="mt-10 border-t border-gray-700 pt-6">
              <h2 className="text-2xl font-semibold">Conclusion</h2>
              <p className="text-gray-300 mt-2">{concept.conclusion}</p>
            </div>
          )}
        </div>


        <h1 className="text-3xl text-red-400 font-medium border-b border-white/30 pb-2">Concept Explanation with Story</h1>
        <div className="h-[500px] p-5 overflow-y-auto no-scrollbar">
            {/* Display Title */}
            <h1 className="text-white text-2xl font-bold mb-3">{conceptStory.title}</h1>
            
            {/* Display Description */}
            <p className="text-neutral-300 mb-3">{conceptStory.description}</p>
            
            {/* Display Introduction */}
            <p className="text-neutral-300 mb-5">{conceptStory.introduction}</p>
            
            {/* Display Sections */}
            {conceptStory.sections.map((section) => (
              <div key={section.heading} className="mb-4">
                <h2 className="text-lg font-bold">{section.heading}</h2>
                {section.content && <p className="text-neutral-300">{section.content}</p>}
                {section.list && (
                  <ul className="list-disc ml-5">
                    {section.list.map((item, index) => (
                      <li className="text-neutral-400" key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.example && (
                  <pre className="bg-gray-800 text-white p-2 rounded my-5 mastBrightShadow">
                    {section.example}
                  </pre>
                )}
              </div>
            ))}
            
            {/* Display Conclusion */}
            <p className="text-white mt-5 font-semibold">{conceptStory.conclusion}</p>
          </div>

          
          
          <h1 className="text-3xl text-red-400 font-medium border-b border-white/30 pb-1">Question you must have to solve</h1>
          <div className="bg-gray-800 p-5 rounded-md text-white">
            {/* Question Title */}
            <h2 className="text-2xl font-bold mb-3">{conceptQuestions.title}</h2>
            
            {/* Question Description */}
            <p className="mb-3">{conceptQuestions.description}</p>
            
            {/* Instructions */}
            <p className="mb-3 font-semibold">Instructions:</p>
            <p className="mb-3">{conceptQuestions.instructions}</p>
            
            {/* Hints */}
            <p className="mb-2 font-semibold">Hints:</p>
            <ul className="list-disc ml-5 mb-3">
              {conceptQuestions.hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
            
            {/* Expected Output */}
            <p className="mb-2 font-semibold">Expected Output:</p>
            <ul className="list-disc ml-5 mb-3">
              {conceptQuestions.expectedOutput.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            
            {/* Bonus Questions */}
            <p className="mb-2 font-semibold">Bonus Questions:</p>
            <ul className="list-disc ml-5">
              {conceptQuestions.bonusQuestions.map((bonus, index) => (
                <li key={index}>{bonus}</li>
              ))}
            </ul>
            
          </div>

          
          {/* <div className="bg-yellow-400 w-screen h-screen absolute top-0 left-0 p-5">
          </div> */}

          <div className="bg-yellow-400 h-[500px]">  
          <CodeEditor problem={problems[0]} />
          </div>
          {/* <div className="h-[200px]"></div> */}
          





      </div>
    </MainLayout>
  );
}

export default ConceptDetail;
