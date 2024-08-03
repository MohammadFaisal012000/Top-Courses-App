import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
