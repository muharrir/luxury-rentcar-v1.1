import { clearUser } from "@/redux/userSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

function MenuProfile({ logout }) {
  const menuProfile = [
    { id: 1, text: "Transaction", href: "/transaction" },
    { id: 2, text: "Deposits", href: "/deposits" },
    { id: 3, text: "Rewards", href: "/rewards" },
    { id: 4, text: "Settings", href: "/settings" },
  ];

  const route = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    Cookies.remove("token");
    dispatch(clearUser());
    logout();
    route.push("/");
  };

  const pathname = usePathname();
  return (
    <div className="space-y-2 md:space-y-3 text-gray-400 px-2">
      {menuProfile.map((v, i) => (
        <div key={i}>
          <Link href={v.href}>
            <h3
              className={`hover:text-black ${
                pathname == v.href
                  ? "font-medium text-black hover:text-gray-400"
                  : "text-gray-400"
              }`}
            >
              {v.text}
            </h3>
          </Link>
        </div>
      ))}
      <h4 className="hover:text-black" onClick={handleClick}>
        Log Out
      </h4>
    </div>
  );
}

export default MenuProfile;
