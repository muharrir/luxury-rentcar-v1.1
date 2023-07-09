import Link from "next/link";
import { bruno_ace } from "@/app/fonts";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1
        className={`font-bruno font-bold cursor-pointer text-2xl md:text-3xl`}
      >
        LUXURY
      </h1>
    </Link>
  );
}
