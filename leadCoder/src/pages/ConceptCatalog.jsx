import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
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
          <Button></Button>
          <Button></Button>
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
                  {/* categories condition check  */}
                {
                  concept.category === "Fundamentals" && (
                    <p className="bg-[#1F3757] px-5 py-0.5 font-bold rounded-full">{concept.category}</p>
                  )
                }
                {
                  concept.category === "OOP" && (
                    <p className="bg-purple-400/50 px-5 py-0.5 font-bold rounded-full">{concept.category}</p>
                  )
                }
                {
                  concept.category === "Algorithms" && (
                    <p className="bg-[#45342A] text-[#FDBA68] font-bold px-5 py-0.5 rounded-full">{concept.category}</p>
                  )
                }
                {
                  concept.category === "Data Structures" && (
                    <p className="bg-[#1A4439] text-[#6AEFAC] font-bold px-5 py-0.5 rounded-full">{concept.category}</p>
                  )
                }

                {/* level condition check  */}
                {
                  concept.level === "Beginner" && (
                    <p className="text-[#86EF91] font-medium">{concept.level}</p>
                  )
                }
                {
                  concept.level === "Intermediate" && (
                    <p className="text-[#FDD43B] font-medium">{concept.level}</p>
                  )
                }
                {
                  concept.level === "Advanced" && (
                    <p className="text-[#FCA5A5] font-medium">{concept.level}</p>
                  )
                }
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
