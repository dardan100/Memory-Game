import React from "react";
import "./App.css";

import StartGame from "./components/StartGame";
import { useMemoryGame } from "./context/ContextApi";
import Loading from "./ui/Loading";
import gif from "./assets/images/loadingGif.gif";
import MainCard from "./components/MainCard";
import BgVideo from "./components/BgVideo";

function App() {
  const { status } = useMemoryGame();

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}

        <BgVideo />
        {/* Conditional Rendering */}
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
