import { Checkbox, Button, Radio } from "antd";
import { useFilters } from "../context/FilterContext";

function Sidebar() {
  const {
    selectedCategories,
    setSelectedCategories,
    selectedDifficulty,
    setSelectedDifficulty,
    clearFilters,
  } = useFilters();

  const handleCategoryToggle = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updated);
  };

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };

  return (
    <div className="bg-[#182430] h-[70vh] rounded-xl grid grid-cols-1 py-5 p-5 mastBrightShadow text-white">
      <div className="h-[10vh] flex flex-col justify-center gap-3">
        <h1 className="font-medium">Find Concepts</h1>
        <div className="bg-[#233648] rounded-lg w-full h-[35px] flex items-center mastBrightShadow">
          <i className="ri-search-line text-[#8B8D93] pl-2"></i>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white pl-2 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 font-medium py-3">
        <h1 className="font-bold">Categories</h1>
        {["Fundamentals", "Data Structures", "Algorithms", "OOP", "Web Development"].map((cat) => (
          <Checkbox
            key={cat}
            className="!text-white"
            checked={selectedCategories.includes(cat)}
            onChange={() => handleCategoryToggle(cat)}
          >
            {cat}
          </Checkbox>
        ))}
      </div>

      <div className="flex flex-col gap-2 font-medium py-3">
        <h1 className="text-lg font-bold">Difficulty Level</h1>
        <Radio.Group
          onChange={handleDifficultyChange}
          value={selectedDifficulty}
          className="!flex !flex-col !gap-1"
        >
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <Radio key={level} className="!text-white" value={level}>
              {level}
            </Radio>
          ))}
        </Radio.Group>
      </div>

      <Button onClick={clearFilters} className="bg-[#163450] font-medium mx-5 my-1 p-2 rounded-md">
        Clear Filters
      </Button>
    </div>
  );
}

export default Sidebar;
