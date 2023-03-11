import { React, useState } from "react";

function ChatBot({ isVisible, onClose }) {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singletext, setSingletext] = useState("");
  const [message, setMessage] = useState([]);
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const message = await fetch(
      `https://ethio-tel.vercel.app/api/chat?question=${singletext}`
    );
    const res = await message.json();
    // setMessage(res);
    setMessage((prev) => [...prev, res.message.content]);
    console.log(res.message.content);
    setLoading(false);
    if (singletext != "") setText((prev_state) => [...prev_state, singletext]);
    setSingletext("");
    const elementt = document.getElementById("chatfeild");
  };
  const handleChange = (e) => {
    setSingletext(e.target.value);
    console.log(singletext);
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-0 flex justify-center items-center z-50 "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="absolute bottom-20 right-5 w-3/4 sm:w-2/4 lg:w-1/4 flex flex-col rounded-lg p-3 bg-slate-300">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div
          className=" text-white pb-8 w-full max-h-40  overflow-y-auto scroll-smooth snap-y overflow-hidden"
          id="chatfeild"
        >
          {text.map((element, index) => {
            return (
              <div key={index}>
                <h1 className=" bg-blue-600 ml-auto text-sm px-2 py-1 w-fit m-3  rounded-md ">
                  {element}
                </h1>
                <div className=" text-white bg-slate-500 w-56 p-1 rounded-lg ">
                  {loading ? "..." : message[index]}
                </div>
              </div>
            );
          })}
          {/* Response */}
        </div>
        <form onSubmit={handleSubmit} action="" className=" flex m-2 ">
          <button
            type=""
            className="w-1/6  rounded-2xl justify-center flex p-2 m-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="  text-green-50 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
          </button>
          <input
            className=" bg-slate-100 w-4/6 rounded-full p-3  mr-2"
            onChange={handleChange}
            value={singletext}
            type="text"
            name="chat"
            id="chat"
          />
          <button
            type="submit"
            className="w-1/6 bg-white rounded-2xl justify-center p-2 m-1 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" text-black w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBot;
