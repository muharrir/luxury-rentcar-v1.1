"use client";
import FormInput from "@/components/atoms/Forms/FormInput";
import IconEmail from "@/components/atoms/Forms/IconEmail";
import IconPassword from "@/components/atoms/Forms/IconPassword";
import IconUsername from "@/components/atoms/Forms/IconUsername";
import axios from "axios";
import { useFormik } from "formik";
import Lottie from "lottie-react";
import success from "../../../../public/assets/lottie/success.json";
import rubik from "../../../../public/assets/lottie/rubik.json";
import error from "../../../../public/assets/lottie/error.json";

import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";

export default function Register() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3)
      .max(15)
      .matches(/^\S*$/, "Whitespace is not allowed"),

    name: Yup.string().required("Fullname is required").min(3),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email Address"),

    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setIsLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:4000/user/register",
          values
        );
        console.log(res);

        if (res) {
          setRegistrationSuccess(true);
        } else {
          console.log("registration failed");
          setShowErrorPopup(true);
          setIsLoading(false);
        }

        formik.resetForm();
      } catch (error) {
        if (error.response) {
          // The server responded with a status code outside the range of 2xx
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage("Server not connected");
        } else {
          // Something happened in setting up the request
          setErrorMessage("An error occurred");
        }
        setIsLoading(false);
        setShowErrorPopup(true);
      }
      setSubmitting(false);
    },
  });

  const handleCloseErrorModal = () => {
    setShowErrorPopup(false);
    setErrorMessage(null); // Reset the error message
  };

  return (
    <section className="my-14 md:flex items-center justify-center relative">
      <div className="flex justify-center items-center">
        {/* Loading */}
        <div
          className={`fixed z-10 inset-0 overflow-y-auto ${
            isLoading ? "block" : "hidden"
          }`}
        >
          <div className="bg-black/80  flex items-center justify-center  min-h-screen">
            <Lottie animationData={rubik} loop={true} className="w-80 h-80 " />
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="md:w-[500px] bg-darkGrey md:px-16 md:py-16 rounded-2xl mx-6 p-6"
        >
          <div className="mb-8">
            <h1 className="text-indigo-950 font-bold text-4xl">Register</h1>
            <p className="text-sm font-normal text-gray-400 mt-2">
              Complete the form below to register your account
            </p>
          </div>

          <div className="space-y-4">
            <FormInput
              clx={
                formik.touched.username && formik.errors.username
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconUsername />}
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Username"
              errorMessage={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : null
              }
              onBlur={formik.handleBlur}
            />

            <FormInput
              clx={
                formik.touched.name && formik.errors.name
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconUsername />}
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Full Name"
              errorMessage={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
              onBlur={formik.handleBlur}
            />

            <FormInput
              clx={
                formik.touched.email && formik.errors.email
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconEmail />}
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email Address"
              errorMessage={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
              onBlur={formik.handleBlur}
            />

            <FormInput
              clx={
                formik.touched.password && formik.errors.password
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconPassword />}
              password={true}
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              errorMessage={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
              onBlur={formik.handleBlur}
            />
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="block w-full bg-indigo-950 hover:scale-105 transition-all mt-4 py-3 rounded-2xl text-white font-semibold"
          >
            Register
          </button>
          <div className="mt-4 text-sm">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="cursor-pointer text-blue-600 font-semibold hover:underline underline-offset-2"
            >
              Login
            </Link>
          </div>
        </form>
      </div>

      {/* Register Success */}
      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          registrationSuccess ? "block" : "hidden"
        }`}
      >
        <div className="bg-black/50 flex items-center justify-center  min-h-screen">
          <div className="bg-darkGrey rounded-2xl text-center w-[500px] h-[600px]">
            <div className="mt-10 w-full flex items-center justify-center h-1/2">
              <Lottie animationData={success} loop={true} className="w-1/2 " />
            </div>
            <h2 className="text-2xl font-bold my-4">
              Registration Successful!
            </h2>
            <p className="text-gray-400">
              Thank you for registering. <br /> Login first to access your
              account!
            </p>
            <Link href={"/login"}>
              <button className="bg-blue-500 text-white font-bold py-3 rounded-full w-52 mt-6">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Error */}
      {showErrorPopup && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="bg-black/50 flex items-center justify-center min-h-screen">
            <div className="bg-darkGrey flex flex-col items-center justify-center rounded-2xl text-center py-6 lg:py-0 md:w-[500px] md:h-[600px]">
              <div className=" w-full flex items-center justify-center h-1/2">
                <Lottie animationData={error} loop={true} className="w-1/2 " />
              </div>
              <h2 className="text-2xl font-bold my-4">Register Failed!</h2>
              <p className="text-gray-400">
                {errorMessage} <br /> Please try again.
              </p>
              <button
                className="bg-red-500 text-white font-bold py-3 rounded-full w-52 mt-6"
                onClick={handleCloseErrorModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
