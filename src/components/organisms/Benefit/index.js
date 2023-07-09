import React from "react";
import Illustration from "./illustration";
import BenefitSection from "./benefitSection";

export default function Benefit() {
  return (
    <section className="py-[100px] mx-6 lg:mx-0">
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 md:gap-4 lg:gap-32">
        {/* Left Content */}
        <Illustration />
        {/* Right Content */}
        <BenefitSection />
      </div>
    </section>
  );
}
