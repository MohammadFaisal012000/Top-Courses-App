import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, like, setLike }) => {
  function likeHandler() {
    if (like.includes(course.id)) {
      setLike((prev) =>
        prev.filter((cid) => {
          return cid !== course.id;
        })
      );
      toast.warning("Remove Liked");
    } else {
      if (like.length === 0) {
        // like.push(course.id);
        setLike([course.id]);
      } else {
        setLike((prev) => [...prev, course.id]);
      }
      toast.success("Like Successfully");
    }
  }
  return (
    <div className="w-[300px] rounded-md flex flex-col bg-bgDark bg-opacity-80 overflow-hidden  ">
      <div className="relative">
        <img src={course.image.url} alt="CourseImage" />
        <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center absolute right-2 -bottom-4">
          <button onClick={likeHandler}>
            {like.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
            )}
          </button>
        </div>
      </div>
      <div className="p-[16px]">
        <p className="text-white font-semibold text-lg leading-6  ">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
