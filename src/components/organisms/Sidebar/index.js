"use client";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";

function Sidebar() {
  const [resData, setResData] = useState(null);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token"); // Get the token from cookies
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      };
      const res = await axios.get("http://localhost:4000/api/getme", config);
      setResData(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(resData);

  return (
    <div className="z-30 fixed flex px-6 py-5 lg:py-10 bg-darkGrey border-2 border-blue-500 rounded-3xl bottom-10 left-5 right-0 mr-5 lg:border-0 lg:flex-col lg:right-auto lg:left-auto lg:bottom-auto lg:w-[18%] lg:min-h-[60%]">
      <div className="hidden lg:block">
        <div className="w-24 h-24 rounded-full">
          <Image
            src={resData?.image ? resData?.image : "/assets/svgs/ic-users.svg"}
            width={300}
            height={300}
            alt="profile-image"
            className="rounded-full w-24 h-24"
          />
        </div>
        <h1 className="font-semibold mt-6">{resData?.fullname}</h1>
        <p className="text-sm text-gray-400">Member</p>
      </div>
      <Menu />
    </div>
  );
}

export default Sidebar;
