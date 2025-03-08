import React from "react";
import Mausam from "./Mausam";
import Aqi from "./Aqi";

function Weather({ parentstyles, childstyles }) {
  return (
    <>
      <div className={parentstyles}>
        <div className="items-start flex">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
        </span>
        </div>
        <Mausam styles={childstyles} />
        <Aqi styles={childstyles} />
      </div>
    </>
  );
}

export default Weather;
