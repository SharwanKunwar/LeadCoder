
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import conceptsData from "../data/concepts.json"; // import JSON
import { Button } from "antd";


function ConceptCatalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate current cards
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentCards = conceptsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(conceptsData.length / cardsPerPage);

  return (
    <MainLayout>
      <div className="h-[50px] flex justify-between items-start">
        <p className="font-medium">Showing 6 concepts</p>
        <div className="flex justify-center items-center gap-3">
          <Button>a</Button>
          <Button>a</Button>
        </div>
      </div>
      <div className="h-[88%]">
        <div className="grid grid-cols-3 gap-6">
          {currentCards.map((concept) => (
            <div
              key={concept.id}
              className="bg-white/10 h-[27vh] backdrop-blur-lg border border-white/20 rounded-xl p-5 text-white hover:scale-105 transition-transform duration-300 shadow-md flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">{concept.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{concept.description}</p>
              </div>
              <div>
                <div className="flex justify-between text-[14px]">
                   {/* Category */}
                  {concept.category && (
                    <p
                      className={`px-4 py-1 font-bold rounded-full ${
                        concept.category === "Fundamentals"
                          ? "bg-[#1F3757]"
                          : concept.category === "OOP"
                          ? "bg-purple-400/50"
                          : concept.category === "Algorithms"
                          ? "bg-[#45342A] text-[#FDBA68]"
                          : concept.category === "Data Structures"
                          ? "bg-[#1A4439] text-[#6AEFAC]"
                          : "bg-gray-400"
                      }`}
                    >
                      {concept.category}
                    </p>
                  )}

                {/* Level */}
                {concept.level && (
                  <p
                    className={`font-medium ${
                      concept.level === "Beginner"
                        ? "text-[#86EF91]"
                        : concept.level === "Intermediate"
                        ? "text-[#FDD43B]"
                        : concept.level === "Advanced"
                        ? "text-[#FCA5A5]"
                        : "text-white"
                    }`}
                  >
                    {concept.level}
                  </p>
                )}
              </div>
                <Button size="large" className="!bg-sky-400 !border-none w-full mt-3 !font-bold !text-white">Learn More</Button>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-6 text-white">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>prev</Button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-md ${
                currentPage === i + 1 ? "bg-indigo-500" : "bg-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>Next</Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ConceptCatalog;
