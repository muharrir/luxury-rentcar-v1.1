import PopularCard from "@/components/molecules/popularCard";
import car from "@/data/car.json";
import React from "react";

export default function PopularCars() {
  return (
    <section className="py-10 lg:py-[100px] px-6 md:px-10 lg:px-28 bg-darkGrey">
      {/* Title */}
      <div className="sm:space-y-1 md:space-y-2">
        <h2 className="text-2xl md:text-[26px] font-bold">Popular Cars</h2>
        <p className="text-sm md:text-base text-gray-400">Start your big day</p>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {car.slice(0, 4).map((v, i) => (
          <PopularCard
            title={v.name}
            brand={v.brand}
            img={v.thumbnail}
            alt={v.name}
            price={v.price}
            href={`/catalog/${v.name.toLowerCase().replace(" ", "-")}`}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
