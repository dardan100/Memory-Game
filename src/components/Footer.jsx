import React, { useState } from "react";
import QustionMark from "../ui/QustionMark";
import Info from "./Info";

export default function Footer() {
  const [isInfoNeeded, setIsInfoNeeded] = useState(false);

  return (
    <div>
      <button onClick={() => setIsInfoNeeded(!isInfoNeeded)}>
        {isInfoNeeded ? <Info info={isInfoNeeded} /> : <QustionMark />}
      </button>
    </div>
  );
}
