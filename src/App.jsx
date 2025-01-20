import React, { useState } from "react";
import "./App.css";
import video from "./assets/images/db-bg.mp4";
import StartGame from "./components/StartGame";
import { useMemoryGame } from "./context/ContextApi";
import Loading from "./ui/Loading";
import gif from "./assets/images/loadingGif.gif";
import MainCard from "./components/MainCard";
import Lose from "./ui/Lose";

function App() {
  const { status, cards, selectedCharacters } = useMemoryGame();
  console.log(status);

  return (
    <>
      <div className="">
        {/* Video Background */}
        <div className="w-full h-screen absolute inset-0 -z-10">
          <video autoPlay muted loop className="w-screen h-screen object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {status === "loading" && <Loading gif={gif} />}
        {status === "ready" && <StartGame />}
        {status === "playing" && (
          <div>
            <MainCard />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
