import React, { useEffect, useState } from "react";
import Message from "./Message";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [typeMessage, setTypeMessage] = useState("");
  console.log(messages);
  // const newMessage = {
  //   id,
  //   senderId,
  //   content,
  //   timestamp,
  //   reactions: {
  //     like,
  //     laugh: [],
  //   },
  //   replies,
  //   forwardedFrom,
  // };
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
  // const sendMessage = (text) => {
  //   setMessages([...messages, { text, isUser: true }]); // Add user message
  // };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="flex-grow overflow-y-auto px-4 py-2">
        {/* Render messages from state */}
        {messages.map((message, index) => (
          <Message text={message} isUser={`true`} />
        ))}
      </div>
      <div className="flex items-center justify-end p-2 bg-gray-300">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              sendMessage(e.target.value);
              e.target.value = ""; // Clear input after sending
            }
          }}
        />
        <button
          className="ml-2 py-2 px-4 rounded-md bg-blue-500 text-white outline-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
          onClick={() => sendMessage("Sent from button!")} // Optional button functionality
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
