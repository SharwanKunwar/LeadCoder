import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Beginner");

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulty("Beginner");
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        selectedDifficulty,
        setSelectedDifficulty,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
