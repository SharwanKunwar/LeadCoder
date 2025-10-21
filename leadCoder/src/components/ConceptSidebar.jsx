import React from "react";
import RelatedConceptCard from "../smallComponents/RelatedConceptCard";
import DiscusCard from "../smallComponents/DiscusCard";

export default function ConceptSidebar() {
  const completedSections = 2;
  const totalSections = 5;
  const progress = Math.round((completedSections / totalSections) * 100);

  return (
    <>
    <div className="bg-white p-4 rounded-md shadow-sm w-full">
      {/* Header */}
      <h1 className="text-gray-900 font-medium text-sm mb-2">
        Your Progress
      </h1>

      <div className="flex justify-center items-center gap-3">
        <div className="w-[90%] flex justify-center items-center">
          {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 flex justify-between">
        <div
          className="bg-lime-500 h-2.5  rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
        </div>

        <div>
          {/* Percentage */}
          <div className="text-right text-sm font-medium text-gray-700 ">
            {progress}%
          </div>
        </div>


      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs">
        You’ve completed {completedSections} of {totalSections} sections.
      </p>





    </div>

      <RelatedConceptCard/>
      <DiscusCard/>
    </>

  );
}
