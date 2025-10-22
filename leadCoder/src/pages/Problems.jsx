import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Tag } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useFilters } from "../context/FilterContext";

// Problem dataset
const problemSet = [
  { id: 1, title: "Marshal's Adventure with Variables", category: "Fundamentals", concept: "Variables", difficulty: "Beginner", status: "completed" },
  { id: 2, title: "Loop of Destiny", category: "Fundamentals", concept: "Loops", difficulty: "Intermediate", status: "pending" },
  { id: 3, title: "Function Forge", category: "Fundamentals", concept: "Functions", difficulty: "Advanced", status: "completed" },
  { id: 4, title: "The Array Enigma", category: "Fundamentals", concept: "Arrays", difficulty: "Beginner", status: "pending" },
  { id: 5, title: "The Constant Mystery", category: "Fundamentals", concept: "Constants", difficulty: "Beginner", status: "pending" },
  { id: 6, title: "Conditional Quest", category: "Fundamentals", concept: "Conditionals", difficulty: "Beginner", status: "pending" },
  { id: 7, title: "Looping Legends", category: "Fundamentals", concept: "Loops", difficulty: "Beginner", status: "completed" },
  { id: 8, title: "String Sorcery", category: "Fundamentals", concept: "Strings", difficulty: "Beginner", status: "pending" },
  { id: 9, title: "Input Odyssey", category: "Fundamentals", concept: "Input/Output", difficulty: "Beginner", status: "pending" },
  { id: 10, title: "Logic Labyrinth", category: "Fundamentals", concept: "Conditionals", difficulty: "Beginner", status: "completed" },
];

function Problems() {
  const { selectedCategories, selectedDifficulty } = useFilters();
  const [selectedConcept, setSelectedConcept] = useState("");

  // Get all unique concepts for buttons
  const concepts = Array.from(new Set(problemSet.map((p) => p.concept)));

  // Filter problems by category, difficulty, and concept
  const filteredProblems = problemSet.filter((problem) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(problem.category);
    const matchesDifficulty = problem.difficulty === selectedDifficulty;
    const matchesConcept = !selectedConcept || problem.concept === selectedConcept;

    return matchesCategory && matchesDifficulty && matchesConcept;
  });

  return (
    <>
      {/* Concept Buttons */}
      <div className="bg-[#182430] mx-20 grid grid-cols-10 gap-3 py-4 px-4 rounded-md mastBrightShadow mt-5">
        {concepts.map((concept) => (
          <Button
            key={concept}
            onClick={() => setSelectedConcept(selectedConcept === concept ? "" : concept)}
            className={`!font-medium !text-white !border-none ${
              selectedConcept === concept
                ? "!bg-indigo-500"
                : "!bg-gray-400"
            }`}
          >
            {concept}
          </Button>
        ))}
      </div>

      {/* Problems List */}
      <MainLayout>
        <div className="h-[70vh] mt-1">
          <div className="bg-[#182430] h-[70vh] overflow-y-scroll no-scrollbar scroll-smooth transition-transform rounded-xl mastBrightShadow">
            <div className="grid grid-cols-1 gap-5 p-5">
              {filteredProblems.length > 0 ? (
                filteredProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="bg-gray-700 h-[60px] flex justify-between items-center rounded-md px-4 text-white"
                  >
                    {/* Left Section */}
                    <div className="flex items-center gap-3  w-[50%]">
                      <div
                        className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${
                          problem.status === "completed" ? "bg-green-500" : "bg-gray-500"
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

                    {/* Middle Section */}
                    <h1
                      color={
                        problem.difficulty === "Beginner"
                          ? "green"
                          : problem.difficulty === "Intermediate"
                          ? "orange"
                          : "red"
                      }
                      className="text-base w-[120px] border border-white/30 rounded-sm font-medium text-center"
                    >
                      {problem.difficulty}
                    </h1>

                    <h1
                      color={
                        problem.difficulty === "Beginner"
                          ? "green"
                          : problem.difficulty === "Intermediate"
                          ? "orange"
                          : "red"
                      }
                      className="text-base w-[100px] rounded-sm font-medium text-center"
                    >
                      {problem.concept}
                    </h1>

                    {/* Right Section */}
                    <Button
                      size="Medium"
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
        </div>
      </MainLayout>
    </>
  );
}

export default Problems;
