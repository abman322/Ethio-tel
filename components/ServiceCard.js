import React from "react";

export default function ServiceCard({ title, Svg, discription }) {
  return (
    <div className=" z-0 rounded-lg mt-3  bg-[#fafafa] hover:border hover:border-white hover:border-b-primary hover:border-b-4 cursor-pointer mr-3">
      <div className=" bg-white flex px-5 py-7">
        <Svg />
        <div className=" ml-5">
          <h1> {title} </h1>
          <p className=" text-slate-500 text-sm">{discription}</p>
        </div>
      </div>
    </div>
  );
}
