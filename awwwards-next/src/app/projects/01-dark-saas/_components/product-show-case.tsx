"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductShowCase() {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "start start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const z = useTransform(scrollYProgress, [0, 1], [-500, 10]);

  return (
    <div className="gradient-06">
      <section className="px-5 max-w-[1200px] mx-auto py-[72px] ">
        <div className="max-w-[576px] mx-auto ">
          <h2 className="text-white text-[48px] text-center font-bold">
            Intuitive interface
          </h2>
          <p className="text-white/70 text-center text-[20px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div
          ref={target}
          className=" mt-[56px] rounded-2xl overflow-hidden perspective-[2000px]"
        >
          <motion.div
            style={{
              rotateX: rotate,
              z,
            }}
            className=" aspect-video relative origin-bottom"
          >
            <Image
              src="/01-project-dark-saas/app-screen 1.png"
              fill
              alt=""
              className="object-cover rounded-2xl overflow-clip"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
