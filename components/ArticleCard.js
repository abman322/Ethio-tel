import React from "react";
import { urlFor } from "@/components/sane";

export default function ArticleCard({
  image,
  tagline,
  header,
  description,
  buttonText,
}) {
  return (
    <article className=" w-[90%] max-w-[471px]   bg-white rounded-lg mb-16">
      <img
        alt={header}
        className="w-full h-[180px] rounded-t-lg"
        src={image} //"https://thumbs.dreamstime.com/b/portrait-happy-young-beautiful-african-woman-talking-phone-park-afro-hair-relaxing-outdoors-193305228.jpg"
      />
      <div className=" p-3 flex flex-col gap-2 px-7 my-2">
        <p className=" text-primary text-xs"> {tagline}</p>
        <h1>{header}</h1>
        <p className=" text-gray-500">{description}</p>
        <button className=" bg-black text-white w-max p-2 rounded-lg text-sm">
          {buttonText}
        </button>
      </div>
    </article>
  );
}
