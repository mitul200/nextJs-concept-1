"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = await res.json();
    console.log(data.meals);
    setMeals(data.meals);
  };

  if (meals.length == 0) {
    return <h6>Loading...</h6>;
  }

  // useEffect(() => {
  //   loadData();
  // }, [search]);

  const handlar = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className=" mt-12">
        <input
          onChange={handlar}
          className="p-3 border-transparent outline-none text-slate-900"
          type="text"
          placeholder="Search Meals..."
        />
        <button
          onClick={() => loadData()}
          className=" p-3 rounded-xl bg-red-500 hover:bg-blue-700 duration-100"
        >
          Search
        </button>
        <div className="mt-12 grid grid-cols-3 gap-5">
          {meals?.map((meal) => (
            <div key={meal?.idMeal} className="border border-solid  p-4">
              <h6>Name : {meal?.strMeal}</h6>
              <h6>About :{meal?.strInstructions}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
