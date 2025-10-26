import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Modal } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useFilters } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";


// Problem dataset
const problemSet = [
  { id: 1, title: "Marshal's Adventure with Variables", category: "Fundamentals", concept: "Variables", difficulty: "Beginner", status: "completed", question: "What is a variable in programming?", solution: "A variable is a named storage that holds a value which can be changed during program execution." },
  { id: 2, title: "Loop of Destiny", category: "Fundamentals", concept: "Loops", difficulty: "Intermediate", status: "pending", question: "What is a loop?", solution: "A loop allows repeating a block of code multiple times until a condition is met." },
  { id: 3, title: "Function Forge", category: "Fundamentals", concept: "Functions", difficulty: "Advanced", status: "completed", question: "What is a function in programming?", solution: "A function is a reusable block of code designed to perform a specific task." },
  { id: 4, title: "The Array Enigma", category: "Fundamentals", concept: "Arrays", difficulty: "Beginner", status: "pending", question: "What is an array?", solution: "An array is a data structure used to store multiple values of the same type." },
  { id: 5, title: "The Constant Mystery", category: "Fundamentals", concept: "Constants", difficulty: "Beginner", status: "pending", question: "What is a constant?", solution: "A constant is a fixed value that cannot be altered during program execution." },
  { id: 6, title: "Conditional Quest", category: "Fundamentals", concept: "Conditionals", difficulty: "Beginner", status: "pending", question: "What is a conditional statement?", solution: "A conditional statement allows executing different code blocks based on a condition." },
  { id: 7, title: "Looping Legends", category: "Fundamentals", concept: "Loops", difficulty: "Beginner", status: "completed", question: "How does a for loop work?", solution: "A for loop iterates over a range or sequence for a fixed number of times." },
  { id: 8, title: "String Sorcery", category: "Fundamentals", concept: "Strings", difficulty: "Beginner", status: "pending", question: "What is a string?", solution: "A string is a sequence of characters used to represent text." },
  { id: 9, title: "Input Odyssey", category: "Fundamentals", concept: "Input/Output", difficulty: "Beginner", status: "pending", question: "How is input handled in most programming languages?", solution: "Input is taken from the user using input functions or streams." },
  { id: 10, title: "Logic Labyrinth", category: "Fundamentals", concept: "Conditionals", difficulty: "Beginner", status: "completed", question: "Explain logical operators.", solution: "Logical operators combine multiple conditions: AND, OR, and NOT." },
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
