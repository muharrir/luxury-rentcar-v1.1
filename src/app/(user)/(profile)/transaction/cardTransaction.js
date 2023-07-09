import Image from "next/image";
import React from "react";

export default function CardTransaction() {
  const data = [
    {
      id: 1,
      image: "/assets/images/supra2.jpg",
      name: "New Supra GR",
      brand: "Toyota",
      price: "800.000",
      status: "pending",
    },
    {
      id: 2,
      image: "/assets/images/corolla2.webp",
      name: "New Corolla GR",
      brand: "Toyota",
      price: "1.000.000",
      status: "success",
    },
    {
      id: 3,
      image: "/assets/images/fortuner1.jpg",
      name: "New Fortuner GR",
      brand: "Toyota",
      price: "600.000",
      status: "failed",
    },
  ];

  return (
    <div className="grid grid-rows-1 gap-5 mt-10 lg:grid-cols-2 lg:mt-[78px] ">
      {data.map((v, i) => (
        <div className="flex w-full bg-darkGrey rounded-2xl p-3" key={i.id}>
          <div className="flex w-full">
            {/* Image */}
            <div className="max-w-[40%] h-[100px] lg:h-[110px] rounded-2xl">
              <Image
                src={v.image}
                alt={v.name}
                width={800}
                height={800}
                className="w-full h-full rounded-lg object-fill"
              />
            </div>

            {/* Information */}
            <div className="ml-2 flex flex-col justify-between">
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-clip">
                  {v.name}
                </h2>
                <p className="text-gray-400 text-xs lg:text-base">{v.brand}</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-500 text-sm lg:text-base">
                  Rp. {v.price}
                  <span className="text-gray-400 font-light text-xs">/day</span>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <h1
              className={`w-[53px] lg:w-[63px] ml-1 px-1 py-2 rounded-lg font-bold uppercase text-center text-[10px] lg:text-xs ${
                v.status == "success"
                  ? "bg-green-500 text-green-900"
                  : v.status == "pending"
                  ? "bg-yellow-500 text-yellow-900"
                  : "bg-red-500 text-red-900"
              }`}
            >
              {v.status}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
