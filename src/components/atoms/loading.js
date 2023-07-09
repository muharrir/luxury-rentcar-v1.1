import React from "react";

function Loading() {
  return (
    <div className="bg-gray-300 rounded-2xl px-5 py-4 flex flex-col">
      <div className="bg-gray-600 rounded-2xl p-3 w-[50%] animate-pulse"></div>
      <div className="bg-gray-600 rounded-2xl mt-1 p-2 w-[20%] animate-pulse"></div>
      <div className="bg-gray-600 animate-pulse mt-4 rounded-2xl w-full h-[180px]"></div>
      <div className="bg-gray-600 mt-2 rounded-2xl p-3 w-[60%] animate-pulse"></div>
    </div>
  );
}

export default Loading;
