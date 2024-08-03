import React from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  let allCourses = [];
  let [like, setLike] = useState([]);

  // List of all courses received from api response
  const getAllCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((category) => {
        category.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <div className="w-11/12 max-width-[1150px] mx-auto">
      <div className=" flex flex-wrap mb-4  mt-4 justify-center gap-4">
        {getAllCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              like={like}
              setLike={setLike}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
