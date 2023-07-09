"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import car from "@/data/car.json";
import { notFound, useRouter } from "next/navigation";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

export default function Booking({ searchParams }) {
  const [data, setData] = useState(null);
  const [name, setName] = useState();
  const [confirm, setConfirm] = useState(false);

  const route = useRouter();

  useEffect(() => {
    const dataCar = car.find(
      (v) => v.name.toLowerCase().replace(" ", "-") === String(searchParams.car)
    );

    if (dataCar) {
      setData(dataCar);
    } else {
      setData(notFound);
    }
  }, [searchParams.car]);

  const formik = useFormik({
    initialValues: {
      identity_proof: "",
      start_date: "",
      end_date: "",
    },
    validationSchema: Yup.object({
      identity_proof: Yup.string().required(),
      start_date: Yup.date()
        .min(new Date(), "Start date cannot be before today")
        .required("Required"),
      end_date: Yup.date()
        .required("Required")
        .min(
          Yup.ref("start_date"),
          "End date should be at least one day after the start date"
        )
        .test(
          "is-after-start",
          "End date should be one day after the start date",
          function (value) {
            const { start_date } = this.parent;
            const startDate = new Date(start_date);
            const endDate = new Date(value);
            const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
            const diffInDays = Math.round((endDate - startDate) / oneDay);
            return diffInDays === 1;
          }
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="mx-32 mt-20 grid grid-cols-2 items-start">
      {/* Left Content */}
      <div className="bg-darkGrey p-10 rounded-2xl">
        <Image
          className="w-full rounded-2xl"
          src={data?.carousel[0].url || ""}
          width={500}
          height={500}
          alt="cars"
        />
        <div className="flex mt-4 justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {data?.tag} {data?.name}
            </h1>
            <h3 className="text-base text-gray-400">{data?.brand}</h3>
            <h2 className="mt-4 font-bold text-lg text-blue-500">
              Rp. {data?.price}{" "}
              <span className="text-gray-400 text-base font-normal">/day</span>
            </h2>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 animate-pulse rounded-full bg-green-600"></div>
              <h3 className="font-semibold">Available</h3>
            </div>
          </div>
        </div>
      </div>

      <hr className="md:hidden" />

      <div className="flex justify-end">
        <div className="w-[70%] bg-darkGrey rounded-2xl py-10 px-12 justify-end">
          <div>
            <h1 className="text-gray-800 font-bold text-3xl">Booking</h1>
            <p className="text-gray-400 text-sm mt-1">
              Let's fill out the form completely in order to make a payment
            </p>
          </div>

          {/* Input */}
          <form
            onSubmit={formik.handleSubmit}
            className="w-full mt-6 space-y-5"
          >
            <div>
              <label className="font-semibold">NIK / Passport Number</label>
              <input
                name="identity_proof"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.identity_proof}
                className="mt-1 w-full px-3 py-2 rounded-lg border-2 border-gray-300 outline-none focus:border-blue-500"
              />
              {formik.touched.identity_proof && formik.errors.identity_proof ? (
                <div className="text-red-500">
                  {formik.errors.identity_proof}
                </div>
              ) : null}
            </div>

            <div>
              <label className="font-semibold">Proof of KTP / Passport</label>
              <input
                type="file"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 w-full px-3 py-2 rounded-lg border-2 bg-white border-gray-300 outline-none focus:border-slate-500"
              />
            </div>

            <div className="block md:flex md:justify-between gap-4">
              <div>
                <label className="font-semibold px-1">From</label>
                <input
                  type="date"
                  name="start_date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.start_date}
                  className="mt-1 w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
                />
                {formik.touched.start_date && formik.errors.start_date ? (
                  <div className="text-red-500">{formik.errors.start_date}</div>
                ) : null}
              </div>
              <div>
                <label className="font-semibold px-1">Until</label>
                <input
                  type="date"
                  name="end_date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.end_date}
                  className="mt-1 w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
                />
                {formik.touched.end_date && formik.errors.end_date ? (
                  <div className="text-red-500">{formik.errors.end_date}</div>
                ) : null}
              </div>
            </div>

            <Button
              text="Continue"
              href={"/checkout"}
              cx={
                "mt-10 w-full bg-blue-500 hover:shadow-lg text-white py-[14px] border-none"
              }
            />
          </form>
        </div>
      </div>
    </section>
  );
}
