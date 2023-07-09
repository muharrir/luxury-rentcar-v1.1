"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PopularCard({ title, brand, img, price, href, alt }) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={`${
          pathname == "/catalog" ? "bg-darkGrey" : "bg-white"
        } rounded-2xl px-5 py-4 hover:transition-all hover:scale-105 `}
      >
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{brand}</p>
        <div>
          <Image
            src={img}
            width={500}
            height={500}
            alt={alt}
            priority={true}
            className="mt-4 rounded-2xl object-cover max-h-[180px]"
          />
        </div>
        <div className="mt-2">
          <h3 className="text-base font-bold text-blue-800">
            Rp.{price}
            <span className="text-gray-400 text-sm font-normal">/day</span>
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default PopularCard;
