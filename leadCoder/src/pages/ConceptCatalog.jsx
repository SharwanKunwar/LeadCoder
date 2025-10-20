
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
  const currentCards = (conceptsData || []).slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil((conceptsData || []).length / cardsPerPage);

  console.log(totalPages);

  return (
    <MainLayout>
      <>
      hell
      </>
    </MainLayout>
  );
}

export default ConceptCatalog;
