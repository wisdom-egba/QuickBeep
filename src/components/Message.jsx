import React from "react";

const Message = ({ text }) => {
  console.log(text);
  return (
    <div className="mt-[40px] flex items-start justify-end mb-2 ">
      <div className="bg-white p-2 rounded-lg shadow-sm mr-4 border-purple-600 border-l-4">
        <p className="px-5 bg-purple-300 rounded-md italic text-gray-500 text-[18px]">
          {text.senderId}
        </p>
        {text.content}
      </div>
    </div>
  );
};

export default Message;
