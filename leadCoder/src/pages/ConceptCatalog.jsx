import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import conceptsData from "../data/concepts.json";
import { Button } from "antd";
import { useFilters } from "../context/FilterContext";

function ConceptCatalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const { selectedCategories, selectedDifficulty } = useFilters();

  const filteredConcepts = conceptsData.filter((concept) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(concept.category);
    const matchLevel =
      !selectedDifficulty || concept.level === selectedDifficulty;

    return matchCategory && matchLevel;
  });

  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentCards = filteredConcepts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredConcepts.length / cardsPerPage);

  return (
    <MainLayout>
      <>
        <div className="h-[50px] flex justify-between items-start text-white">
          <p className="font-medium">
            Showing {filteredConcepts.length} concepts
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6  h-[58vh]">
          {currentCards.map((concept) => (
            <div
              key={concept.id}
              className="bg-white/10 h-[27vh] backdrop-blur-lg border border-white/20 rounded-xl p-5 text-white hover:scale-105 transition-transform duration-300 shadow-md flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">{concept.title}</h2>
                <p className="text-sm text-gray-300 mb-4">
                  {concept.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between text-[12px]">
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
                          : concept.category === "Web Development" 
                          ? "bg-red-400 text-white"
                          : "bg-gray-400"
                      }`}
                    >
                      {concept.category}
                    </p>
                  )}
                  {concept.level && (
                    <p
                      className={`font-medium ${
                        concept.level === "Beginner"
                          ? "text-[#86EF91]"
                          : concept.level === "Intermediate"
                          ? "text-[#FDD43B]"
                          : "text-[#FCA5A5]"
                      }`}
                    >
                      {concept.level}
                    </p>
                  )}
                </div>

                <Link to={`/concepts/${concept.id}`}>
                  <Button size="large" className="!bg-indigo-500 !border-none w-full mt-3 !font-medium !text-white hover:!bg-indigo-600 focus:!bg-indigo-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg" > Learn More </Button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-6 text-white">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}> Prev </Button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-8 h-8 rounded-md ${ currentPage === i + 1 ? "bg-indigo-500" : "bg-gray-400" }`}> {i + 1} </button>
          ))}

          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>Next</Button>
          
        </div>
      </>
    </MainLayout>
  );
}

export default ConceptCatalog;
