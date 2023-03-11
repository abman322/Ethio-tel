import React from "react";

function HeroBanner({ header, description, image, btnText }) {
  return (
    <div className=" flex flex-col sm:flex-row sm:justify-around  items-center justify-center w-full h-[250px] md:h-[400px] bg-gradient-to-r from-[#8cc43f]  to-white text-white border">
      <div className=" mx-5">
        <h2 className=" font-bold text-xl sm:text-2xl md:text-4xl">
          {" "}
          {header}{" "}
        </h2>
        <p className=" mt-4">{description}</p>
        <button className=" mt-4 bg-white text-black p-2 rounded-lg text-sm">
          {btnText}
        </button>
      </div>
      <div className=" hidden sm:block w-[200px] md:w-[400px]">
        <img
          src={image} //"https://mir-s3-cdn-cf.behance.net/project_modules/disp/7a1c7e9995317.560ddb5268ce3.png"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
