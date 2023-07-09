"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Menu() {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Catalog", href: "/catalog" },
    { text: "Stories", href: "/stories" },
    { text: "Maps", href: "/maps" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = window.localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  const pathname = usePathname();
  return (
    <ul className="flex flex-col md:flex-row md:mt-2 md:gap-8 lg:gap-16 space-y-2 md:space-y-0">
      {navs.map((v, i) => (
        <li key={i}>
          <Link
            href={v.href}
            className={`hover:text-black ${
              pathname == v.href
                ? "font-medium hover:text-gray-400"
                : "text-gray-400"
            }`}
          >
            {v.text}
          </Link>

          {pathname == v.href ? (
            <div className="hidden md:block h-1 w-7 bg-black rounded-full"></div>
          ) : (
            <div className="hidden md:block mt-1 h-1 w-7 bg-transparent"></div>
          )}
        </li>
      ))}
      {isLoggedIn ? (
        <></>
      ) : (
        <div className="md:hidden">
          <Link
            href={"/login"}
            className={`hover:text-black ${
              pathname == "/login" ? "hidden" : "text-gray-400"
            }`}
          >
            Log In
          </Link>
        </div>
      )}
    </ul>
  );
}
