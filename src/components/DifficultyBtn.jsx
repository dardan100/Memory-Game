import React, { useEffect } from "react";
import { useMemoryGame } from "../context/ContextApi";

export default function DifficultyBtn() {
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
  }, [filterCards, level, dispatch]);

  return (
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
  );
}
