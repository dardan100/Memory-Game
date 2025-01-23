import React from "react";
import dbLose from "../assets/images/db-lose.gif";

export default function Lose({ restartGame }) {
  return (
    <div className="flex flex-col relative justify-center items-center text-center shadow-red-800 ">
      <p className="absolute potta-one-regular text-white rounded-xl bg-red-700 shadow-[0_0_20px_5px_rgba(255,0,0,0.6)] py-3 px-3  sm:text-2xl md:text-4xl top-10">
        You Lose!
      </p>
      <img
        src={dbLose}
        alt="You Lose"
        className="w-[800px] 2xl:w-[900px] rounded-lg shadow-2xl shadow-red-700 bg-red-400 p-4"
      />
      <button
        onClick={restartGame}
        className="absolute potta-one-regular text-white rounded-xl bg-blue-700 shadow-[0_0_20px_5px_rgba(0,51,255,0.6)] py-3 px-6 sm:text-xl md:text-2xl bottom-10 hover:bg-blue-800 transition duration-300 ease-in-out"
      >
        Restart
      </button>
    </div>
  );
}
