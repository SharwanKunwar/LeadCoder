import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Modal } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useFilters } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";


const problemSet = [
  {
  id: 1,
  title: "Print 10 Even Numbers",
  category: "Loops",
  concept: "Loops",
  difficulty: "Beginner",
  status: "pending",
  question: "Write a program to print the first 10 even numbers.",
  description: 
  `In this problem, you need to print the first 10 even numbers (2, 4, 6, 8, ... 20). 
  Even numbers are numbers that can be divided by 2 without any remainder. 

  To solve this:
    1. You will use a loop (like a 'for' loop) to repeat some code multiple times.
    2. Start counting from 2 because it's the first even number.
    3. On each loop iteration, add 2 to get the next even number.
    4. Print the number to the screen inside the loop.

  Concepts to understand:
    - Loops: A way to repeat code multiple times automatically.
    - Even numbers: Numbers divisible by 2 (use "number % 2 === 0" if you want to check).
    - Incrementing numbers: Change the number step by step to get the next number.

  Example:
  2, 4, 6, 8, 10, ..., 20 `
  ,
  hint: "Remember, even numbers are divisible by 2. You can use a for loop starting from 2.",
  testCases: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
  expectedOutput: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
}

];



function Problems() {
  const { selectedCategories, selectedDifficulty } = useFilters();
  const [selectedConcept, setSelectedConcept] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const navigate = useNavigate();

  // Unique concepts for filter buttons
  const concepts = Array.from(new Set(problemSet.map((p) => p.concept)));

  // Apply filters
  const filteredProblems = problemSet.filter((problem) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(problem.category);
    const matchesDifficulty = problem.difficulty === selectedDifficulty;
    const matchesConcept = !selectedConcept || problem.concept === selectedConcept;
    return matchesCategory && matchesDifficulty && matchesConcept;
  });

  // Handle Review or Solve click
  const handleAction = (problem) => {
    if (problem.status === "completed") {
      setSelectedProblem(problem);
      setOpenModal(true);
    } else {
      navigate(`/problem/${problem.id}`, { state: { problem } });
    }
  };

  return (
    <>
      {/* Concept Filter Buttons */}
      <div className="bg-[#182430] mx-20 grid grid-cols-10 gap-3 py-4 px-4 rounded-md mastBrightShadow mt-5">
        {concepts.map((concept) => (
          <Button
            key={concept}
            onClick={() =>
              setSelectedConcept(selectedConcept === concept ? "" : concept)
            }
            className={`!font-medium !text-white !border-none ${
              selectedConcept === concept ? "!bg-indigo-500" : "!bg-gray-400"
            }`}
          >
            {concept}
          </Button>
        ))}
      </div>

      {/* Problems List */}
      <MainLayout>
        <div className="h-[70vh] mt-1">
          <div className="bg-[#182430] h-[70vh] overflow-y-scroll no-scrollbar rounded-xl mastBrightShadow">
            <div className="grid grid-cols-1 gap-5 p-5">
              {filteredProblems.length > 0 ? (
                filteredProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="bg-gray-700 h-[60px] flex justify-between items-center rounded-md px-4 text-white"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-3 w-[50%]">
                      <div
                        className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${
                          problem.status === "completed"
                            ? "bg-green-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {problem.status === "completed" ? (
                          <CheckCircleOutlined className="text-white text-xl" />
                        ) : (
                          <ClockCircleOutlined className="text-white text-xl" />
                        )}
                      </div>
                      <div className="font-semibold">{problem.title}</div>
                    </div>

                    {/* Middle */}
                    <h1 className="text-base w-[120px] border border-white/30 rounded-sm font-medium text-center">
                      {problem.difficulty}
                    </h1>

                    <h1 className="text-base w-[100px] rounded-sm font-medium text-center">
                      {problem.concept}
                    </h1>

                    {/* Right */}
                    <Button
                      onClick={() => handleAction(problem)}
                      className="!bg-indigo-500 !text-white !font-medium !rounded-md !border-none hover:!bg-indigo-700 w-[150px]"
                    >
                      {problem.status === "completed" ? "Review" : "Solve"}
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-300 text-lg">
                  No problems found for the selected filters 😅
                </div>
              )}
            </div>
          </div>

          {/* Review Modal */}
          <Modal
            title={selectedProblem?.title}
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={[
              <Button key="close" onClick={() => setOpenModal(false)}>
                Close
              </Button>,
            ]}
            centered
          >
            <div>
              <p className="text-lg font-semibold mb-2">Question:</p>
              <p className="text-gray-600 mb-4">{selectedProblem?.question}</p>
              <p className="text-lg font-semibold mb-2">Solution:</p>
              <p className="text-gray-600">{selectedProblem?.solution}</p>
            </div>
          </Modal>
        </div>
      </MainLayout>
    </>
  );
}

export default Problems;
