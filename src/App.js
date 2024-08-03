import React from "react";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  let [courses, setCourses] = useState("");
  let [loading, setLoading] = useState(false);
  let [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();

      // console.log(output.data);
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen w-full h-[100%] flex flex-col flex-wrap">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          ></Filter>
        </div>

        <div>
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <Cards courses={courses} category={category}></Cards>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
