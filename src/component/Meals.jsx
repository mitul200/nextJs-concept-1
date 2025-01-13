"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  // const loadData = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
  //     );
  //     const data = await res.json();
  //     console.log(data.meals);
  //     setMeals(data.meals);
  //   } catch (error) {
  //     setError("No data found");
  //   }
  // };

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();

      if (data.meals) {
        setMeals(data.meals);
        setError("");
      } else {
        setMeals([]);
        setError("No data found");
      }
    } catch (error) {
      setError("Something went wrong");
      setMeals([]);
    }
  };

  // useEffect(() => {
  //   loadData();
  // }, []);

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
        <button onClick={() => loadData()} className="search-btn">
          Search
        </button>
        {/* <div className="mt-12 grid grid-cols-3 gap-5">
          {meals?.length > 0 &&
            !error &&
            meals.map((meal) => (
              <div key={meal?.idMeal} className="border border-solid  p-4">
                <h6>Name : {meal?.strMeal}</h6>
                <h6>About :{meal?.strInstructions}</h6>
              </div>
            ))}
          {error && <h1>No Data Found....</h1>}
        </div> */}
        <div className="mt-12 grid grid-cols-3 gap-5">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal?.idMeal} className="border border-solid p-4">
                <h6>Name: {meal?.strMeal}</h6>
                <h6>About: {meal?.strInstructions}</h6>
              </div>
            ))
          ) : (
            <h1>{error}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meals;
