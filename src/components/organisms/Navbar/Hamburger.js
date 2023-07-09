"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkifClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("click", checkifClickedOutside);
    return () => {
      document.removeEventListener("click", checkifClickedOutside);
    };
  }, [open]);

  return (
    <>
      <div className="z-20 md:hidden w-full">
        <button
          ref={ref}
          className="block md:hidden left-0"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute flex flex-col bg-gray-100 top-6 right-[60%] left-0 mt-6 rounded-2xl px-6 py-4">
            <Menu />
          </div>
        )}
      </div>
    </>
  );
}
