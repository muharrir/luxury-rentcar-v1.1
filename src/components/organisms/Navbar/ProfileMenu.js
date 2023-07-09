"use client";
import Button from "@/components/atoms/Button";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MenuProfile from "./MenuProfile";
import Cookies from "js-cookie";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, fetchUser } from "@/redux/userSlice";

export default function ProfileMenu() {
  const [clickAva, setClickAva] = useState(false);
  const [resData, setResData] = useState(null);
  const [auth, setAuth] = useState(null);
  const ref = useRef();

  const dispatch = useDispatch();

  const fullname = useSelector((state) => state.user.fullname || resData?.name);
  const profileImage = useSelector(
    (state) => state.user.profileImage || resData?.image
  );

  const token = Cookies.get("token");
  const pathname = usePathname();

  useEffect(() => {
    const checkifClickedOutside = (e) => {
      if (clickAva && ref.current && !ref.current.contains(e.target))
        setClickAva(false);
    };
    document.addEventListener("click", checkifClickedOutside);
    return () => {
      document.removeEventListener("click", checkifClickedOutside);
    };
  }, [clickAva]);

  const fetchData = async () => {
    try {
      setResData(null);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        "http://localhost:4000/user/get-profile",
        config
      );
      // console.log(res.data.data);
      // const { email, fullname, image, username, phone } = res.data.data;
      // const userData = { email, fullname, image, username, phone };
      // console.log(userData);

      // Save user data to localStorage
      // localStorage.setItem("userData", JSON.stringify(userData));

      setResData(res.data.data);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (auth) {
      fetchData();
    }
  }, [auth]);

  useEffect(() => {
    setAuth(Cookies.get("token"));
  }, [pathname]);

  const logout = () => {
    setResData(null);
    setAuth(null);
    dispatch(clearUser());
    fetchData();
  };

  return (
    <div className="relative w-full">
      {auth ? (
        <div className="flex items-center absolute right-0 -top-4 lg:-top-6 lg:space-x-5">
          <div className="hidden lg:block">
            <h3 className=" text-sm text-gray-400">Hello,</h3>
            <p className="text-base font-semibold text-black capitalize">
              {fullname}
            </p>
          </div>
          <div
            className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
            onClick={() => setClickAva(!clickAva)}
            ref={ref}
          >
            <Image
              src={resData?.image ? profileImage : "/assets/svgs/ic-users.svg"}
              width={250}
              height={250}
              alt="profile-image"
              className="rounded-full w-8 h-8 md:w-12 md:h-12"
            />
            {clickAva && (
              <div className="absolute flex flex-col z-20 bg-gray-100 mt-12 md:mt-16 rounded-2xl px-4 md:px-6 py-4 top-0 right-0 w-36 md:w-44">
                <div className="space-y-2 text-gray-400 ">
                  <MenuProfile logout={logout} />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`${
            pathname == "/login"
              ? "hidden"
              : pathname == "/register"
              ? "hidden"
              : "w-10 md:w-auto"
          } absolute -top-7 right-0 `}
        >
          <div className="hidden md:block">
            <Button
              text={"Login"}
              href={"/login"}
              cx={
                "hover:bg-indigo-950 hover:border-none hover:text-white border-gray-300"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
