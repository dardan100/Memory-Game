import React from "react";
import db from "../assets/images/db-z.png";

export default function StartGameUI() {
  return (
    <>
      <div className="md:w-[550px] w-[350px] m-6 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer flex justify-center">
        <img src={db} alt="DB logo" />
      </div>

      <div className="flex flex-col items-center justify-center text-[60px] font-bold mb-8">
        <h1 className="potta-one-regular text-yellow-500 text-center flex-wrap text-3xl md:text-5xl">
          Memory <span className="text-red-600"> Game</span>
        </h1>
      </div>
    </>
  );
}
