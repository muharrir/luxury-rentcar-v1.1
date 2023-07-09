import React from "react";
import Hamburger from "./Hamburger";
import ProfileMenu from "./ProfileMenu";
import Logo from "./Logo";
import MenuDesktop from "./MenuDesktop";

export default function Navbar() {
  return (
    <nav className="relative my-6 mx-6 md:my-10 md:mx-10 lg:mx-32">
      <div className="flex items-center justify-between">
        <Hamburger />
        <Logo />
        <MenuDesktop />
        <ProfileMenu />
      </div>
    </nav>
  );
}
