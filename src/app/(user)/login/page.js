"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/atoms/Forms/FormInput";
import IconEmail from "@/components/atoms/Forms/IconEmail";
import IconPassword from "@/components/atoms/Forms/IconPassword";
import Lottie from "lottie-react";
import rubik from "../../../../public/assets/lottie/rubik.json";
import error from "../../../../public/assets/lottie/error.json";

export const metadata = {
  title: "Login",
  description: "This is a Home Page from Luxury Rent Car",
};

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const route = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid Email Address"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setIsLoading(true);

      try {
        const res = await axios.post(
          "http://localhost:4000/user/login",
          values
        );
        console.log(res);
        if (res) {
          const token = res.data.token;
          Cookies.set("token", token);
          // window.location = "/";
          route.push("/");
        } else {
          console.log("Login failed");
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
    <section className="my-28 md:flex items-center justify-center">
      <div className="flex justify-center items-center">
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
          className="md:w-[500px] bg-darkGrey w-full md:px-16 md:py-16 rounded-2xl mx-6 p-6"
        >
          <div className="mb-8">
            <h1 className="text-indigo-950 font-bold text-4xl">Login</h1>
            <p className="text-sm font-normal text-gray-400 mt-2">
              Login to make car orders easily and quickly
            </p>
          </div>

          <div className="space-y-4">
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
            className="block w-full bg-indigo-950 hover:scale-105 transition-all mt-4 py-3 rounded-2xl text-white font-semibold"
          >
            Login
          </button>
          <div className="mt-4 text-sm">
            Dont have an account?{" "}
            <Link
              href={"/register"}
              className="cursor-pointer text-blue-600 font-semibold hover:underline underline-offset-2"
            >
              Register
            </Link>
          </div>
        </form>

        {/* Error Modal */}
        {showErrorPopup && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="bg-black/50 flex items-center justify-center  min-h-screen">
              <div className="bg-darkGrey rounded-2xl text-center w-[500px] h-[600px]">
                <div className="mt-10 w-full flex items-center justify-center h-1/2">
                  <Lottie
                    animationData={error}
                    loop={true}
                    className="w-1/2 "
                  />
                </div>
                <h2 className="text-2xl font-bold my-4">Login Failed!</h2>
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
      </div>
    </section>
  );
}
0;
export default Login;
