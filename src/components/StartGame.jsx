import React from "react";
import db from "../assets/images/db-z.png";
import Footer from "./Footer";
import DifficultyBtn from "./DifficultyBtn";
import StartGameUI from "../ui/StartGameUI";

export default function StartGame() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 md:mt-16 w-full">
      <StartGameUI />
      <DifficultyBtn />
      <Footer />
    </div>
  );
}
