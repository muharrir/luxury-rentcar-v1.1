import React from "react";
import Menu from "./Menu";

export default function MenuDesktop() {
  return (
    <div className="absolute hidden md:block left-[50%] -ml-28 lg:-ml-52">
      <Menu />
    </div>
  );
}
