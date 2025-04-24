"use client";
import { motion } from "framer-motion";
import { AlignRight, Search } from "lucide-react";
import { navVariants } from "../../motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="px-5 w-full 2xl:max-w-[1280px] mx-auto flex justify-between items-center py-5">
        <Search />
        <h1 className="text-2xl font-extrabold leading-[30px] text-white">
          Metaversus
        </h1>
        <Image
          src="/01-project-metaverse/menu.svg"
          alt="menu"
          height={24}
          width={24}
        />
      </div>
    </motion.nav>
  );
}
