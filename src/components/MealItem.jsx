import React from "react";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
function MealItem(props) {
  const [recipe, setRecipe] = useState(false);

  return (
    <div className=" relative mt-[4rem]  w-[23rem]  rounded-[1rem]  overflow-hidden shadow-lg my-2rem mx-0">
      <img className="w-full block " src={props.data.strMealThumb} alt="food" />
      <h3 className="font-bold text-[24px] mt-4">{props.data.strMeal}</h3>
      <button
        onClick={() => {
          setRecipe(true);
        }}
        className="text-white bg-[#d65108] w-[10rem] text-[22px] h-[3rem] mt-4 mb-12 rounded-[30px] "
      >
        Get Recipe
      </button>

      {recipe ? (
        <div className="hover2 absolute text-white h-[100%] top-0 overflow-y-scroll ">
          <IoMdCloseCircle
            onClick={() => {
              setRecipe(false);
            }}
            className="w-[2rem] h-[2rem] cursor-pointer absolute right-4 top-4"
          />
          <p className=" font-bold text-[1.6rem] mt-8">{props.data.strMeal}</p>
          <p className="mt-4 mb-4 w-[6rem] h-[2.6rem] mx-auto rounded-[10px] bg-white flex items-center justify-center text-[#d65108] font-bold">
            {props.data.strCategory}
          </p>
          <p className="font-bold text-[1.6rem] mb-4">Instructions:</p>
          <p>{props.data.strInstructions}</p>
          <img
            src={props.data.strMealThumb}
            className="h-[6rem] w-[6rem] mt-4 rounded-[50%] mx-auto"
            alt="Rounded Meal Image"
          />
          <div className="mt-4 mb-8">
            <a
              href={props.data.strYoutube}
              className="cursor-ponter underline font-bold text-[1.5rem] "
            >
              Watch Video
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default MealItem;
