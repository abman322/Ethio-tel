import React, { useState, useEffect } from "react";
import Catagory from "./Catagory";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TopHeader() {
  const router = useRouter();
  const [path, setPath] = useState(true);

  console.log(router.asPath);
  return (
    <div className=" flex items-center pb-2 ml-4">
      <Link href={"/"}>
        <Catagory catagory={"FOR ME"} active={router.pathname == "/" && true} />
      </Link>
      <Link href={"/business"}>
        <Catagory
          catagory={"FOR MY BUSINESS"}
          active={router.pathname == "/business" && true}
        />
      </Link>
      <Catagory catagory={"FOR INVESTORS"} />
    </div>
  );
}
