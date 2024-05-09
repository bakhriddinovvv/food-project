import React from "react";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function MealCategory(props) {
  return (
    <>
      {props.data == ""
        ? ""
        : props.data.map((res) => {
            return (
              <div className=" relative mt-[4rem]  w-[23rem]  rounded-[1rem]  overflow-hidden shadow-lg my-2rem mx-0">
                <img
                  className="w-full block "
                  src={res.strMealThumb}
                  alt="food"
                />

                <h3 className="font-bold text-[24px] mt-4">{res.strMeal}</h3>
                <button
                  onClick={() => {
                    props.setSearch(res.strMeal);
                  }}
                  className="text-white bg-[#d65108] w-[10rem] text-[22px] h-[3rem] mt-4 mb-12 rounded-[30px] "
                >
                  Get Recipe
                </button>
              </div>
            );
          })}
    </>
  );
}
export default MealCategory;
