import React, { useEffect, useRef } from "react";
import "./App.css";
import video from "./assets/images/db-bg.mp4";
import StartGame from "./components/StartGame";
import { useMemoryGame } from "./context/ContextApi";
import Loading from "./ui/Loading";
import gif from "./assets/images/loadingGif.gif";
import MainCard from "./components/MainCard";

function App() {
  const { status } = useMemoryGame();
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video plays after user interaction
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log("Autoplay prevented. User interaction required.");
        });
      }
    };

    document.addEventListener("click", handleAutoplay);

    return () => {
      document.removeEventListener("click", handleAutoplay);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <div className="w-full h-screen absolute inset-0 -z-10">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline // Ensures compatibility with mobile browsers
            className="w-screen h-screen object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

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
