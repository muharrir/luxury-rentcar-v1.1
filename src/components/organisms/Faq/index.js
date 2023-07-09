import React from "react";
import FaqCard from "./faqCard";

export default function Faq() {
  const faq = [
    {
      id: 1,
      question: "What if I crash the car?",
      answer:
        "Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus voluptates corporis quasi harum odio rem.",
    },
    {
      id: 2,
      question: "What if I crash the car?",
      answer:
        "Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus voluptates corporis quasi harum odio rem.",
    },
    {
      id: 3,
      question: "What if I crash the car?",
      answer:
        "Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus voluptates corporis quasi harum odio rem.",
    },
    {
      id: 4,
      question: "What if I crash the car?",
      answer:
        "Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus voluptates corporis quasi harum odio rem.",
    },
    {
      id: 5,
      question: "What if I crash the car?",
      answer:
        "Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus voluptates corporis quasi harum odio rem.",
    },
    {
      id: 6,
      question: "What if I crash the car?",
      answer:
        "Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus voluptates corporis quasi harum odio rem.",
    },
  ];

  return (
    <section className="md:text-center my-8 lg:my-[100px] mx-6">
      <h1 className="text-xl md:text-[26px] font-bold">
        Frequently Asked Questions
      </h1>
      <p className="mt-2 text-sm md:text-base text-gray-400">
        Learn more about Luxury and get a success
      </p>
      <div className="mt-14 grid grid-rows-1 md:grid-cols-2 lg:mx-80 gap-x-8 gap-y-4 ">
        {faq.map((v, i) => (
          <FaqCard question={v.question} answer={v.answer} key={i} />
        ))}
      </div>
    </section>
  );
}
