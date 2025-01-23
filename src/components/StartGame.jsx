import React, { useEffect } from "react";
import db from "../assets/images/db-z.png";
import { useMemoryGame } from "../context/ContextApi";
import Footer from "./Footer";
export default function StartGame() {
  const { dispatch, level, filterCards } = useMemoryGame();

  const handleDifficulty = (difficulty) => {
    // Set difficulty and trigger game start process
    dispatch({ type: "setDifficulty", payload: difficulty });
  };

  useEffect(() => {
    if (filterCards.length > 0 && level) {
      // Delay game start until after cards are filtered and level is set
      dispatch({ type: "start" });
    }
  }, [filterCards, level, dispatch]); // Run when filterCards or level change

  return (
    <div className="flex flex-col items-center justify-center mt-24 md:mt-16 w-full">
      {/* Logo */}
      <div className="md:w-[550px] w-[350px] m-6 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer flex justify-center">
        <img src={db} alt="DB logo" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-[60px] font-bold mb-8">
        <h1 className="potta-one-regular text-yellow-500 text-center flex-wrap text-3xl md:text-5xl">
          Memory <span className="text-red-600"> Game</span>
        </h1>
      </div>

      {/* Buttons */}

      <div className="flex gap-4 w-auto px-6">
        <button
          onClick={() => handleDifficulty("easy")}
          className="duration-300 hover:scale-110 bg-gradient-to-r from-red-700 to-yellow-500 w-full border-2 px-2 py-2 text-white border-black rounded-lg text-xl cursor-pointer"
        >
          Easy
        </button>
        <button
          onClick={() => handleDifficulty("medium")}
          className="duration-300 hover:scale-110 bg-gradient-to-r from-red-700 to-yellow-500 w-full border-2 px-2 py-2 text-white border-black rounded-lg text-xl cursor-pointer"
        >
          Medium
        </button>
        <button
          onClick={() => handleDifficulty("hard")}
          className="duration-300 hover:scale-110 bg-gradient-to-r from-red-700 to-yellow-500 w-full border-2 px-2 py-2 text-white border-black rounded-lg text-xl cursor-pointer"
        >
          Hard
        </button>
      </div>

      <Footer />
    </div>
  );
}
