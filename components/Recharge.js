import React from "react";

function Recharge() {
  const handleClick = (e) => {
    if (!e.target.classList.contains("active")) {
      const menuElement = document.getElementById("menu");
      const childrenElements = menuElement.childNodes;
      childrenElements.forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");
    }

    const visElement1 = document.getElementById("vis1");
    const visElement2 = document.getElementById("vis2");
    const visElement3 = document.getElementById("vis3");
    const visElement4 = document.getElementById("vis4");
    const visElement5 = document.getElementById("vis5");
    if (e.target.innerText == "Prepaid") {
      console.log("here");
      visElement1.classList.remove("vis");
      visElement2.classList.add("vis");
      visElement3.classList.add("vis");
      visElement4.classList.add("vis");
      visElement5.classList.add("vis");
    } else if (e.target.innerText == "Postpaid") {
      console.log("here1");
      visElement1.classList.add("vis");
      visElement2.classList.remove("vis");
      visElement3.classList.add("vis");
      visElement4.classList.add("vis");
      visElement5.classList.add("vis");
    } else if (e.target.innerText == "DSL") {
      console.log("here2");
      visElement1.classList.add("vis");
      visElement2.classList.add("vis");
      visElement3.classList.remove("vis");
      visElement4.classList.add("vis");
      visElement5.classList.add("vis");
    } else if (e.target.innerText == "Fiber") {
      console.log("here3");
      visElement1.classList.add("vis");
      visElement2.classList.add("vis");
      visElement3.classList.add("vis");
      visElement4.classList.remove("vis");
      visElement5.classList.add("vis");
    } else if (e.target.innerText == "Airtel Black") {
      console.log("here4");
      visElement1.classList.add("vis");
      visElement2.classList.add("vis");
      visElement3.classList.add("vis");
      visElement4.classList.add("vis");
      visElement5.classList.remove("vis");
    }
  };
  return (
    <div className=" flex items-center flex-col bg-white">
      <div className=" ">
        <h1 className="  text-2xl font-semibold m-8">Recharge or pay bills</h1>
      </div>
      <div className=" flex " id="menu">
        <button
          className=" mx-2 rounded-xl text-sm items-center flex bg-[#101010] text-white px-2 py-1 hover:bg-[#101010] active"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" activer text-white w-6 h-6 pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
            />
          </svg>
          Prepaid
        </button>
        <button
          className=" mx-2 rounded-xl text-sm items-center text-white flex bg-[#101010] px-2 py-1 hover:bg-[#101010]"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" activer text-white w-6 h-6 pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          Postpaid
        </button>
        <button
          className=" mx-2 flex rounded-xl text-sm items-center text-white bg-[#101010] px-2 py-1 hover:bg-[#101010]"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" activer text-white w-6 h-6 pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
          DSL
        </button>
        <button
          className=" mx-2 text-white text-sm items-center rounded-xl bg-[#101010] px-2 py-1 hover:bg-[#101010] flex"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" activer text-white w-6 h-6 pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          Fiber
        </button>
        <button
          className=" mx-2 text-white text-sm items-center rounded-xl flex bg-[#101010] px-2 py-1 hover:bg-[#101010]"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" activer text-white w-6 h-6 pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          Package
        </button>
      </div>
      <div className=" w-3/12">
        <form action="" className="flex flex-col m-10">
          <input
            className=" mb-5 bg-white p-2 rounded-xl"
            placeholder="Enter phone Number"
            type="text"
            name="recharge"
            id="recharge"
          />
          <button
            className=" bg-[#101010] text-white rounded-xl p-2  "
            id="vis1"
          >
            Recharge
          </button>
          <button
            className=" bg-[#101010] text-white rounded-xl p-2 vis"
            id="vis2"
          >
            Post pay
          </button>
          <button
            className=" bg-[#101010] text-white rounded-xl p-2 vis"
            id="vis3"
          >
            DSL
          </button>
          <button
            className=" bg-[#101010] text-white rounded-xl p-2 vis"
            id="vis4"
          >
            Fiber
          </button>
          <button
            className=" bg-[#101010] text-white rounded-xl p-2 vis"
            id="vis5"
          >
            Airtel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recharge;
