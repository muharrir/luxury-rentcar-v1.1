import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ href, text, cx }) {
  return (
    <Link href={href}>
      <button
        type="submit"
        className={twMerge("border px-9 py-4 rounded-full font-semibold", cx)}
      >
        {text}
      </button>
    </Link>
  );
}
