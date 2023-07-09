import Image from "next/image";
import React from "react";

export default function Illustration() {
  return (
    <div className="md:w-[60%] lg:w-1/3">
      <Image
        src={"/assets/images/illustration1.png"}
        alt="illustration"
        width={800}
        height={800}
      />
    </div>
  );
}
