import React from "react";
import { motion } from "framer-motion";
import Mercy from "public/assets/images/mercy.png";
import Image from "next/image";

export default function Illustration() {
  return (
    <div className="relative items-center">
      {/* Text Behind Image */}
      <div className="absolute hidden lg:block  z-0">
        <div className="font-bold text-[198px] tracking-[-0.07em] leading-[110%] text-gray-200">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
          >
            NEW
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
          >
            MERCEDES
          </motion.div>
        </div>
      </div>
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
      >
        <Image
          src={Mercy}
          className="max-w-[963px] z-10 left-1/2 -translate-x-1/2 relative w-full"
          alt="Mercy"
        />
      </motion.div>
    </div>
  );
}
