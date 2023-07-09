"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import car from "@/data/car.json";
import Image from "next/image";
import IconCheck from "/public/assets/svgs/ic-check.svg";
import { notFound, usePathname, useRouter } from "next/navigation";

export const metadata = {
  title: {
    absolute: "Details",
  },
  description: "This is a Details Page from Luxury Rent Car",
};

function Details({ params }) {
  const [data, setData] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const dataCar = car.find(
      (v) => v.name.toLowerCase().replace(" ", "-") === String(params.details)
    );

    if (dataCar) {
      setData(dataCar);
    } else {
      setData(notFound);
    }
  }, [params.details]);

  return (
    <div className="bg-darkGrey mt-4 px-6 py-10 md:py-14 md:mt-12 md:px-10 lg:px-32 flex flex-col">
      <>
        {/* Breadcumbs */}
        <div className="flex gap-1 md:gap-4 text-sm md:text-base">
          <h3 className="text-indigo-950 cursor-pointer">Home</h3>
          <span className="text-gray-300">/</span>
          <h3 className="text-indigo-950 cursor-pointer">Catalog</h3>
          <span className="text-gray-300">/</span>
          <h3 className="text-indigo-950 cursor-pointer">{data?.name || ""}</h3>
          <span className="text-gray-300">/</span>
          <h3 className="text-gray-400">Details</h3>
        </div>

        {/* Main Content */}
        <div className="mt-6 md:mt-10 grid grid-cols-12 items-start gap-4 md:gap-5 lg:gap-8">
          {/* Left Content */}
          <div className="bg-white col-span-12 flex flex-col md:col-span-8 p-2 md:p-4 rounded-2xl md:rounded-3xl ">
            {data && (
              <Image
                src={data?.carousel[activeImage].url}
                width={500}
                height={400}
                alt={data?.carousel[activeImage].alt}
                className="rounded-xl md:rounded-3xl md:object-fill lg:object-cover w-full min-h-[220px] md:min-h-[350px] lg:max-h-[520px]"
              />
            )}
            <div className="grid grid-cols-4 gap-2 mt-2 md:gap-4 md:mt-4">
              {data?.carousel.map((i, v) => (
                <div key={i.id}>
                  <Image
                    src={i.url}
                    width={500}
                    height={500}
                    alt={i.alt}
                    className={`rounded-xl md:rounded-3xl h-full cursor-pointer max-h-[140px] object-cover ${
                      activeImage == v
                        ? "border-[3px] md:border-[6px] border-orange-400"
                        : ""
                    } `}
                    onClick={() => setActiveImage(v)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white col-span-12 md:col-span-4 p-4 lg:p-6 rounded-2xl md:rounded-3xl">
            <div className="space-y-1 lg:space-y-2 pb-3 lg:pb-6">
              <div className="flex justify-between items-start">
                <h1 className="text-xl lg:text-3xl font-bold">
                  {data?.tag || ""} <br /> {data?.name || ""}
                </h1>
                {/* <Image src={LogoGR} alt="Logo" className="w-10 lg:w-[50px]" /> */}
              </div>
              <p className="text-gray-400 text-base">{data?.brand || ""}</p>
            </div>
            <hr />
            <div className="py-3 space-y-3 lg:py-6 lg:space-y-4">
              {data?.spec.map((i, v) => (
                <div
                  className="flex items-center gap-3 md:gap-2 lg:gap-4"
                  key={v}
                >
                  <div className="md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-indigo-950 flex items-center lg:items-center   lg:justify-center p-1">
                    <Image src={IconCheck} alt="icon-check" />
                  </div>
                  <h4 className="font-semibold lg:font-semibold">{i.text}</h4>
                </div>
              ))}
            </div>
            <hr />
            <div className="pt-3 lg:pt-6 flex gap-4 md:gap-3 lg:gap-0">
              <div className="w-full">
                <h2 className="text-indigo-950 text-xl md:text-sm lg:text-xl font-bold">
                  Rp. {data?.price || ""}
                </h2>
                <p className="text-gray-400 md:text-xs lg:text-base">/day</p>
              </div>
              <div className="flex w-full">
                <button className="bg-blue-600 w-full rounded-full shadow-lg  lg:shadow-xl shadow-blue-600/50">
                  <Link
                    href={{
                      pathname: "/booking",
                      query: {
                        car: data?.name.toLowerCase().replace(" ", "-"),
                      },
                    }}
                  >
                    <h3 className="text-white md:text-xs lg:text-base font-semibold">
                      Rent Now
                    </h3>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Details;
