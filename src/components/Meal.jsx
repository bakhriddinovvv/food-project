import React, { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import MealCategory from "./MealCategory";

function Meal() {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const [catName, setCatName] = useState("");
  const [catList, setCatList] = useState(false);
  const [catData, setCatData] = useState("");

  function searchMeal(evt) {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
        });
      setSearch("");
    }
  }
  function searchMeal2() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals);
      });
    setSearch("");
  }
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
    .then((res) => res.json())
    .then((data) => setCatData(data.meals));

  return (
    <div className="text-center">
      <div className="text-center">
        <h2 className="font-bold text-[35px]  mb-4">
          Find Meals For Your Ingredients
        </h2>
        <blockquote className="text-[18.8px] mb-4">
          Real Food doesn't have ingredients, real food is ingredients. <br />
          <cite>- Jamie Oliver</cite>
        </blockquote>
      </div>
      <div className="mx-auto text-center mt-16  ">
        <div className="flex justify-center w-[33rem] mx-auto">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
            className="placeholder:text-[#d65108] text-[#d65108]  pl-4 text-[1.2rem] border w-[30rem] h-[3.5rem] border-[#d65108] outline-none rounded-bl-[30px] rounded-tl-[30px]"
            placeholder="Enter an ingredient"
            type="text"
          />
          <button
            onClick={() => {
              searchMeal2();
            }}
            type="submit "
            className="bg-[#d65108] text-white rounded-tr-[30px] rounded-br-[30px] w-[3rem] flex justify-center items-center text-[1.8rem] "
          >
            <FaSearch />
          </button>
        </div>
        {/* Select Meal Category */}

        <div
          onClick={() => {
            setCatList(!catList);
          }}
          className="relative flex cursor-pointer items-center border border-[#d65108] w-[33rem] mx-auto mt-4 h-[3.5rem] rounded-[30px]"
        >
          <div className="text-[#d65108] text-[1.2rem] ml-4">
            Select food category
          </div>
          <button className="absolute right-0  bg-[#d65108] text-white h-[3.5rem] flex justify-center items-center w-[3rem] text-[2rem]  rounded-tr-[30px] rounded-br-[30px]">
            <FaChevronDown />
          </button>
        </div>

        {catList ? (
          <ul className="text-[#d65108]  text-[1.2rem] overflow-y-scroll h-[15rem] border w-[33rem] rounded-[8px] leading-[2.8] mx-auto mt-2 border-[#d65108]">
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Beef");
                setCatList(false);
              }}
            >
              Beef
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Chicken");
                setCatList(false);
              }}
            >
              Chicken
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Dessert");
                setCatList(false);
              }}
            >
              Dessert
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Lamb");
                setCatList(false);
              }}
            >
              Lamb
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Miscellaneous");
                setCatList(false);
              }}
            >
              Miscellaneous
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Pasta");
                setCatList(false);
              }}
            >
              Pasta
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Pork");
                setCatList(false);
              }}
            >
              Pork
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Seafood");
                setCatList(false);
              }}
            >
              Seafood
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Side");
                setCatList(false);
              }}
            >
              Side
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Starter");
                setCatList(false);
              }}
            >
              Starter
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Vegan");
                setCatList(false);
              }}
            >
              Vegan
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Vegetarian");
                setCatList(false);
              }}
            >
              Vegetarian
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Breakfast");
                setCatList(false);
              }}
            >
              Breakfast
            </li>
            <li
              className="hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setCatName("Goat");
                setCatList(false);
              }}
            >
              Goat
            </li>
          </ul>
        ) : (
          ""
        )}

        <h2 className="font-bold text-[2rem] mt-12">Your search results:</h2>
      </div>
      {/* Meal Item  */}
      <div className="flex flex-wrap gap-6 justify-center">
        {Mymeal == null
          ? ""
          : Mymeal.map((res) => {
              return <MealItem data={res} />;
            })}
      </div>
      {/* Meal Category */}
      <div className="flex flex-wrap gap-6 justify-center">
        {catData == null ? (
          ""
        ) : (
          <MealCategory
            data={catData}
            setSearch={setSearch}
            searchMeal={searchMeal}
          />
        )}
      </div>
    </div>
  );
}

export default Meal;
