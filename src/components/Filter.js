import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function categoryHandler(title) {
    setCategory(title);
  }
  return (
    <div className="flex justify-center gap-8 m-4  ">
      {filterData.map((course) => {
        return (
          <button
            className={`bg-black text-white  px-2 py-1 rounded-md font-semibold text-lg hover:bg-opacity-60
            ${
              category === course.title
                ? " bg-opacity-80 border-2"
                : "bg-opacity-50 border-0"
            }
            
            `}
            key={course.id}
            onClick={() => categoryHandler(course.title)}
          >
            {course.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
