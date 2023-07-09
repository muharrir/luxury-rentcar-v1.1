"use client";
import Button from "@/components/atoms/Button";
// import Image from "next/image";
import React from "react";
// import midtrans from "public/assets/svgs/logo-midtrans.svg";
// import mastercard from "public/assets/svgs/logo-mastercard.svg";
import Link from "next/link";
// import PaymentType from "@/components/PaymentType";
// import ReviewOrder from "@/components/ReviewOrder";
import Cookies from "js-cookie";
import Lottie from "lottie-react";
import auth from "../../../../public/assets/lottie/auth.json";

export default function Checkout() {
  const token = Cookies.get("token");

  return (
    <>
      {!token ? (
        <section className="md:h-[calc(100vh-7.25rem)] w-full bg-slate-100 md:flex">
          <div className="md:w-1/2 pb-10 md:flex md:items-center md:justify-center">
            <div>
              {/* <Image
                className="w-full max-w-sm md:max-w-md 2xl:max-w-3xl mx-auto"
                src={imageMobil}
                alt="cars"
              /> */}
              <div className="mt-5 text-center text-xl 2xl:text-2xl font-bold">
                <h1>All New Mazda MX-5</h1>
                <h2 className="mt-5">Mazda</h2>
                <h2 className="mt-5 text-lg 2xl:text-xl">Rp. 780.000 /day</h2>
              </div>
            </div>
          </div>

          <hr className="mt-2 mx-8 border-t-2 md:hidden" />

          <div className="md:flex md:justify-center md:items-center py-8 bg-slate-100 md:w-1/2">
            <div className="max-w-sm mx-auto md:mx-0 lg:bg-white rounded-2xl 2xl:p-10 2xl:max-w-lg">
              <div className="w-full p-5 text-center">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">
                  Checkout now!
                </h1>
                <p className="text-sm lg:text-base font-normal text-gray-600 mt-3 mb-7 lg:mb-2">
                  Choose your payment method and make payment
                </p>
              </div>
              {/* Checkout */}
              <div className="w-full px-5 text-sm lg:text-base">
                <h2 className="mb-2 text-base font-semibold">Review Order</h2>
                {/* <ReviewOrder title="From" value="20-05-2023" />
                <ReviewOrder title="Until" value="22-05-2023" />
                <ReviewOrder title="Total day" value="2 days" />
                <ReviewOrder title="Grand total" value="Rp. 1.560.000" /> */}

                <h2 className="mt-2 text-base font-semibold">Payment Method</h2>
                {/* Payment */}
                {/* <div class="mt-3 grid md:grid-cols-2 gap-4 md:gap-[30px] items-center">
                  <PaymentType
                    payment="MasterCard"
                    name="mastercard"
                    image={mastercard}
                  />
                  <PaymentType
                    payment="Midtrans"
                    name="midtrans"
                    image={midtrans}
                  />
                </div> */}

                <div class="mb-5">
                  {/* <Link href={"/booking/checkout/success"}>
                    <Button name="Booking" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center  ">
          <div className="mt-10 w-3/5 flex items-center justify-center h-1/2">
            <Lottie animationData={auth} loop={true} className="w-1/2" />
          </div>
          <h1 className="text-xl">
            Ooops! You are not authenticated. Please login.
          </h1>
        </div>
      )}
    </>
  );
}
