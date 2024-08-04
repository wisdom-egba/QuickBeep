import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import chatData from "../db/chatData.json";
const Header = () => {
  let userData = chatData.participants.map((item) => {
    return item;
  });
  console.log(userData);
  return (
    <div className="bg-[rgb(88,16,172)] fixed w-full z-10 ">
      {userData.map((data) => (
        <div
          key={data}
          className="pl-4 md:pl-0 py-1 md:px-12 md:py-1 flex justify-between items-center "
        >
          <div>
            <h1 className=" font-bold text-white flex items-center md:items-start justify-center md:justify-start text-xl ">
              Quick-<span className="text-[#d8c2f1]">Beep</span>
              <IoChatbubblesOutline size={32} />
            </h1>
          </div>
          <div className="flex justify-center gap-2 items-center ">
            <p className="text-gray-100">
              Hello
              <span className="text-[#d8c2f1]">{` ${data.name}`}</span>
            </p>
            <img
              className="w-14 h-14 rounded-full mr-4"
              src={data.avatar}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
