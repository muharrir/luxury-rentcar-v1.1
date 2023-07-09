"use client";
import React, { useState } from "react";
import IconDown from "../../../../public/assets/svgs/ic-down.svg";
import Image from "next/image";

function FaqCard({ question, answer }) {
  const [tekan, setTekan] = useState(false);

  const showDropDown = () => {
    setTekan(!tekan);
  };

  return (
    <div
      className={`rounded-3xl border border-gray-400 py-4 px-6 md:px-10 text-start cursor-pointer ${
        tekan == false ? "h-min" : "h-auto"
      }`}
      onClick={showDropDown}
    >
      <div className="flex justify-between">
        <h1 className="font-semibold">{question}</h1>
        {tekan == true ? (
          <Image src={IconDown} className="rotate-180" alt="Icon Up" />
        ) : (
          <Image src={IconDown} alt="Icon Down" />
        )}
      </div>
      <div className={`${tekan == false ? "hidden" : "pt-4"}`}>
        <h2>{answer}</h2>
      </div>
    </div>
  );
}

export default FaqCard;
