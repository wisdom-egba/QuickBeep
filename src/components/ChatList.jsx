import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChatList = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMessage = async () => {
      const apiUrl = `/api/messages`; //Rendering the API endpoint
      try {
        setIsLoading(true);
        const res = await fetch(apiUrl);
        console.log(res);
        const data = await res.json();
        console.log(data); //Fetches data
        setMessages(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessage();
  }, []);
  const navigate = useNavigate();

  // let description = chatData.messages.map((item) => {
  //   return item;
  // });

  const onUserClick = () => {};

  return (
    <div className="absolute w-full mt-[65px]">
      {messages.map((item, index) => {
        return (
          <Link
            to={`/chat/message`}
            key={index}
            className="flex items-center cursor-pointer hover:bg-gray-100 px-4 py-3 border-b-[2px] border-gray-300 w-full mx-auto bg-gray-200"
          >
            <img className="w-10 h-10 rounded-full mr-4" src="" alt="" />
            <div className="flex flex-col">
              <h3 className="text-base font-medium">{item.senderId}</h3>
              <p className="text-sm text-gray-500">
                {item.content.substring(0, 45) + "..."}
              </p>
            </div>
            <span className="text-sm text-gray-500 ml-auto">
              {item.timestamp.slice(11, 16)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ChatList;
