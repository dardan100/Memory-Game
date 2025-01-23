import React from "react";

export default function Loading({ gif }) {
  return (
    <div className="z-10 absolute inset-0 flex flex-col items-center justify-center bottom-32 ">
      {/* Display GIF */}
      <img src={gif} alt="Loading GIF" className="w-[260px] h-[260px]" />
      {/* Loading text */}
      <p className="text-4xl text-center font-bold potta-one-regular text-yellow-500 text-[60px]">
        Loading...
      </p>
    </div>
  );
}
