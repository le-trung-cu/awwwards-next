"use client";
import { useAnimationFrame, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/01-project-dark-saas/acme.png", alt: "Acme Logo" },
  { src: "/01-project-dark-saas/quantum.png", alt: "Quantum Logo" },
  { src: "/01-project-dark-saas/echo.png", alt: "Echo Logo" },
  { src: "/01-project-dark-saas/celestial.png", alt: "Celestial Logo" },
  { src: "/01-project-dark-saas/pulse.png", alt: "Pulse Logo" },
  { src: "/01-project-dark-saas/apex.png", alt: "Apex Logo" },
];

export default function LogoTicker() {

  return (
    <section className="py-[32px] md:py-12 bg-white relative">
      <div className="relative max-w-[1024px] mx-auto overflow-hidden">
        <motion.div
          className="flex w-max gap-5 pr-5" // 💥 w-max và pr-5 là chìa khóa
          animate={{ x: ["0%", "-50%"] }} // chỉ cần -50% vì bạn lặp 2 lần
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((item, index) => (
            <div
              key={index}
              className="relative h-[32px] w-[200px] shrink-0" // 👈 dùng w cố định hoặc responsive cũng được
            >
              <Image src={item.src} fill alt="" className="object-contain" />
            </div>
          ))}
        </motion.div>
        <div className="absolute h-full w-[20px] z-10 top-0 left-0 bg-[linear-gradient(to_right,#fff,transparent)]"/>
        <div className="absolute h-full w-[20px] z-10 top-0 right-0 bg-[linear-gradient(to_left,#fff,transparent)]"/>
      </div>
    </section>
  );
}
