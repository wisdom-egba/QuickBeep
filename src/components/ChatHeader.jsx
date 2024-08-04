import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[rgb(88,16,172)] fixed w-full ">
      <div className="px-4 md:pl-0 py-3 md:px-12 md:py-3 flex justify-between items-center ">
        <div className="flex justify-between gap-3 w-full">
          <button
            className="flex items-center gap-2 text-white"
            onClick={() => navigate("/")}
          >
            <BiArrowBack size={34} color="white" /> Back
          </button>
          <h1 className=" font-bold text-white flex items-center md:items-start justify-center md:justify-start text-md ">
            Quick-<span className="text-[#d8c2f1]">Beep</span>
            <IoChatbubblesOutline size={25} />
          </h1>
        </div>
        {/* <div className="flex justify-center gap-2 items-center ">
          <p className="text-gray-100">
            Hello
            <span className="text-[#d8c2f1]">dksjdks</span>
          </p>
          <img className="w-14 h-14 rounded-full mr-4" src="" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default ChatHeader;
