import React from "react";

function Catagory({ catagory, active }) {
  return (
    <div className=" w-max mr-7 text-xs hover:cursor-pointer hover: text-primary ">
      {active && <div className=" bg-primary h-1 "></div>}
      {!active && <div className=" h-1 "></div>}
      <p className={active ? `text-primary` : "text-gray-500"}> {catagory}</p>
    </div>
  );
}

export default Catagory;
