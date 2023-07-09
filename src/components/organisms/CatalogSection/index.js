"use client";
import Loading from "@/components/atoms/loading";
import { fetchData } from "@/redux/carSlice";
// import car from "@/data/car.json";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopularCard = React.lazy(() =>
  import("@/components/molecules/popularCard")
);

export default function CatalogContent() {
  // Reshuffle position catalog
  // const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  // const newCar = shuffle(car);

  const [searchCar, setSearchCar] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.dataCar.dataCar);

  return (
    <div className="mx-32 mb-20">
      <div className="grid grid-cols-3 ">
        <div className="relative col-start-2">
          <input
            type="text"
            placeholder="Search Cars ..."
            className="w-full bg-darkgrey border-2 rounded-xl py-3 pl-10 shadow-lg shadow-blue-200 animate-pulse border-blue-900 focus:outline-blue-500 focus:shadow-none focus:animate-none"
            onChange={(e) => setSearchCar(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute top-[14px] left-3 w-6 h-6 stroke-blue-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-4 gap-10">
        {data &&
          data
            .filter((e) => e.name.toLowerCase().includes(searchCar))
            .map((v, i) => (
              <Suspense fallback={<Loading />} key={i}>
                <PopularCard
                  title={v.name}
                  brand={v.brand}
                  img={v.thumbnail}
                  alt={v.name}
                  price={v.price}
                  href={`/catalog/${v.name.toLowerCase().replace(" ", "-")}`}
                />
              </Suspense>
            ))}
      </div>
    </div>
  );
}
