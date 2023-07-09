import IconCard from "@/components/organisms/Benefit/iconCard";
import Link from "next/link";
import React from "react";

export default function BenefitSection() {
  const icon = [
    {
      id: 1,
      icon: "/assets/svgs/ic-car.svg",
      title: "Delivery",
      subtitle: "Just sit tight and wait",
    },
    {
      id: 2,
      icon: "/assets/svgs/ic-card.svg",
      title: "Price",
      subtitle: "12x Pay Installment",
    },
    {
      id: 3,
      icon: "/assets/svgs/ic-securityuser.svg",
      title: "Secure",
      subtitle: "Use your plate number",
    },
    {
      id: 4,
      icon: "/assets/svgs/ic-convert.svg",
      title: "Fast Trade",
      subtitle: "Change car faster",
    },
  ];

  return (
    <div className="md:w-[40%] lg:w-[20%]">
      <h2 className="text-2xl font-bold">Extra Benefits</h2>
      <p className="mt-2 text-gray-500">You drive safety and famous</p>
      <div className="my-10 space-y-8 md:space-y-4 lg:space-y-8">
        {icon.map((v, i) => (
          <IconCard
            icon={v.icon}
            title={v.title}
            subtitle={v.subtitle}
            key={i}
            alt={`Icon-${v.title}`}
          />
        ))}
      </div>
      <Link href={"/catalog"}>
        <button className="mt-5 bg-blue-500 shadow-indigo-400 shadow-lg rounded-full text-white font-bold w-full py-4">
          Explore Cars
        </button>
      </Link>
    </div>
  );
}
