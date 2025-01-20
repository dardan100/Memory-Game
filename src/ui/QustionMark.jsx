import React from "react";
import questionInfo from "../assets/images/questionInfo.png";

export default function QustionMark() {
  return (
    <div className="w-[60px] fixed bottom-[30px] bg-gradient-to-r from-red-700 to-orange-500 rounded-full right-[50px] ml-[30px] px-4 py-4">
      <img src={questionInfo} alt="" />
    </div>
  );
}
