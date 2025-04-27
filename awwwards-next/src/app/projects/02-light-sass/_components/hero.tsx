"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-x-clip bg-accent font-sans">
      <section className="relative px-5 lg:px-10 pb-[78px] md:pb-[64px] md:flex justify-between items-center  z-10 max-w-[1120px] mx-auto">
        <div className="max-w-[478px] shrink-0">
          <a className="inline-block font-medium text-sm rounded-md px-3 py-1 border border-secondary/10 h-[30px] mt-8 md:mt-12 tracking-tight">
            Version 2.0 is here
          </a>
          <h1 className="gradient-01 bg-clip-text text-transparent text-5xl md:text-7xl font-bold mt-6 md:mt-8 tracking-[-0.06em] leading-none font-sans">
            Pathway to <br /> productivity
          </h1>
          <p className="text-primary text-xl tracking-tight mt-6 md:mt-8">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex items-center mt-[30px]">
            <a
              href=""
              className="bg-black text-white inline-flex justify-center items-center rounded-md px-4 py-2 font-medium tracking-tight"
            >
              Get for free
            </a>
            <a
              href=""
              className="font-sans2 text-black flex items-center  px-4 py-2 font-medium tracking-tight ml-1"
            >
              Learn More <ArrowRight className="size-4 ml-1" />
            </a>
          </div>
        </div>
        <div className="relative size-[335px] shrink-0 md:size-[648px] md:-right-4 lg:right-12 mt-[80px] md:mt-0 mx-auto  md:-ml-10 lg:ml-10 md:top-8">
          <motion.img
            animate={{
              y: 30,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
            className="size-[320px] md:size-[648px] absolute object-cover object-left"
            src="/02-project-light-sass/hero-image 1.png"
            width={648}
            height={648}
            alt=""
          />
          <Image
            className="hidden absolute md:block size-[220px] object-cover object-left translate-x-[-50%] translate-y-[-35px] scale-[0.96] lg:translate-x-[-55%]"
            src="/02-project-light-sass/cylinder 1.png"
            width={220}
            height={220}
            alt=""
          />
          <Image
            className="hidden absolute lg:block size-[220px] bottom-0 right-0 lg:bottom-[-18px] lg:right-[5px] translate-y-1/3 object-cover object-left"
            src="/02-project-light-sass/half-torus 1.png"
            width={220}
            height={220}
            alt=""
          />
        </div>
      </section>
      <div className="absolute inset-0 overflow-clip">
        <div className="h-[200%] aspect-[1500/1762] md:aspect-[3072/1416] xl:aspect-auto  xl:w-[200%] absolute top-0 left-0 -translate-x-1/2 gradient-02 z-0" />
      </div>
    </div>
  );
}
