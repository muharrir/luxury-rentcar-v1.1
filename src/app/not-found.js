"use client";
import React from "react";
import Lottie from "lottie-react";
import error from "../../public/assets/lottie/404-error.json";

export default function NotFound() {
  return (
    <>
      <div className="flex w-full h-screen">
        <Lottie animationData={error} loop={false} className="flex w-full" />
      </div>
    </>
  );
}
