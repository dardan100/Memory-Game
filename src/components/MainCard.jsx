import React, { useEffect, useState } from "react";
import HeaderCard from "../ui/HeaderCard";
import Card from "./Card";
import { useMemoryGame } from "../context/ContextApi";
import Lose from "../ui/Lose";
export default function MainCard() {
  const { movesLeft } = useMemoryGame();
  const [clickCount, setClickCount] = React.useState(0);

  return (
    <>
      <div className="">
        <HeaderCard />
        <div>
          <div className="">
            <Card clickCount={clickCount} setClickCount={setClickCount} />
          </div>
          <div>
            <div className=" mt-10  text-xl flex items-center justify-center">
              <p className="potta-one-regular  text-2xl">
                {" "}
                {clickCount} / {movesLeft}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
