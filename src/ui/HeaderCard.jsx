import React from "react";
import db from "../assets/images/db-z.png";
import { useMemoryGame } from "../context/ContextApi";

export default function HeaderCard() {
  const { dispatch } = useMemoryGame();
  return (
    <div>
      <img
        className="md:w-[350px] 2xl:w-[450px] w-[200px] m-6 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer flex justify-center"
        src={db}
        alt="LOGO"
        onClick={() => dispatch({ type: "restartGame" })}
      />
    </div>
  );
}
