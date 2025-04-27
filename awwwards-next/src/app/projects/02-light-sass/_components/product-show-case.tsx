"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ProductShowCase() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <div className="gradient-03 overflow-clip">
      <section
        ref={container}
        className="max-w-[1120px] mx-auto py-[96px] px-5 flex flex-col justify-center"
      >
        <div className="max-w-[540px] mx-auto flex flex-col items-center">
          <a className="mx-auto inline-block font-medium text-sm rounded-md px-3 py-1 border border-secondary/10 h-[30px] tracking-tight">
            Boost your productivity
          </a>
          <h1 className="gradient-01 text-center bg-clip-text text-transparent text-3xl md:text-[54px] font-bold mt-5 md:leading-[60px] tracking-[-0.06em] font-sans">
            A more effective way to track progress
          </h1>
          <p className="text-primary text-[22px] text-center tracking-tight leading-[30px] mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="aspect-[335/215] relative p-1 mt-[38px] lg:mx-5">
          <motion.div
            className="absolute inset-0"
            style={{
              translateY,
            }}
          >
            <Image
              src="/02-project-light-sass/product-image 1.png"
              fill
              alt=""
            />
          </motion.div>

          <Image
            className="hidden md:block absolute top-[-130px] right-[-145px]"
            src="/02-project-light-sass/pyramid 1.png"
            height={262}
            width={262}
            alt=""
          />
          <Image
            className="hidden md:block absolute bottom-[55px] left-[-140px] lg:bottom-[90px]"
            src="/02-project-light-sass/torus 2.png"
            height={248}
            width={248}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
