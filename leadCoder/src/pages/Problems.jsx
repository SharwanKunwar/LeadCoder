import React, { useState, useEffect } from "react";
import { useProblemStore } from "../store/useProblemStore";
import MainLayout from "../layouts/MainLayout";
import { Button, Modal } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useFilters } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";
import problemSet from "../data/problemSet.json";





function Problems() {
  const { selectedCategories, selectedDifficulty } = useFilters();
  const [selectedConcept, setSelectedConcept] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const navigate = useNavigate();

  const { problems,getProblemById, initializeProblems } = useProblemStore();
  const savedCode = selectedProblem ? getProblemById(selectedProblem.id)?.code : "";
  

  console.log(problemSet);

  
  // ✅ Initialize store once
  useEffect(() => {
    initializeProblems(problemSet);
  }, [problemSet]);

  
  const prob = problems.find(p => p.id === 3);  //check by puting id of problem
  console.log(prob?.id, prob?.status);

  // ✅ Merge store problems with static problem data
  const mergedProblems = problemSet.map((p) => {
    const stored = problems.find((sp) => sp.id === p.id);
    return stored ? { ...p, status: stored.status } : { ...p, status: "pending" };
  });

  // Filter logic (same as before) ...
  const concepts = Array.from(new Set(problemSet.map((p) => p.concept)));
  const filteredProblems = mergedProblems.filter((problem) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(problem.category);
    const matchesDifficulty =
      !selectedDifficulty || problem.difficulty === selectedDifficulty;
    const matchesConcept = !selectedConcept || problem.concept === selectedConcept;
    return matchesCategory && matchesDifficulty && matchesConcept;
  });

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
      {/* Filter Buttons */}
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

    <p className="text-lg font-semibold mb-2">Description:</p>
    <p className="text-gray-600 mb-4">{selectedProblem?.description}</p>

    <p className="text-lg font-semibold mb-2">Solution Code:</p>
    {selectedProblem ? (
      getProblemById(selectedProblem.id)?.code ? (
        <pre className="bg-gray-800 text-green-400 p-2 rounded">
          {getProblemById(selectedProblem.id).code}
        </pre>
      ) : (
        <p className="text-gray-500">No code saved yet.</p>
      )
    ) : null}
  </div>
</Modal>


        </div>
      </MainLayout>
    </>
  );
}

export default Problems;
