import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="mt-[100px] mb-5">
      <div className="flex justify-between items-center text-center  md:text-start md:pl-6 lg:pl-28 py-10 lg:py-6 bg-blue-950">
        <div className="md:w-[40%] lg:w-[27%] z-0 ">
          <h2 className="text-white text-2xl font-bold">
            Drive Yours Today.
            <br />
            Drive Faster.
          </h2>
          <p className="text-white/50 mt-6">
            Get an instant booking to catch up whatever your really want to
            achieve today, yes.
          </p>
          <button className="text-white font-bold bg-indigo-700 shadow-lg shadow-indigo-800 rounded-full mt-10 px-14 py-4">
            Book Now
          </button>
        </div>
        <div className="hidden md:block w-[56%] relative z-10 md:-bottom-24 lg:-bottom-28 ">
          <Image
            src={"/assets/images/mercy-crop.png"}
            alt="Mercy-half"
            width={850}
            height={850}
          />
        </div>
      </div>
      <div className="mt-5 lg:mt-20 text-center">
        <h6 className="text-gray-400 text-sm md:text-base">
          All Rights Reserved. Copyright Luxury 2023.
        </h6>
      </div>
    </section>
  );
}
