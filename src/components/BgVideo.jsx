import React, { useEffect, useRef } from "react";
import video from "../assets/images/db-bg.mp4";

export default function BgVideo() {
  const videoRef = useRef(null);

  useEffect(function () {
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
  );
}
