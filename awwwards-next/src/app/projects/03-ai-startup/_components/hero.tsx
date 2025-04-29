"use client";
import Image from "next/image";
import { Button } from "./button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start 100px", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300])

  return (
    <div ref={container} className="">
      <motion.section className="[background-position-y:-46%] lg:[background-position-y:0%] relative overflow-clip px-5 min-h-[492px] md:min-h-[800px] w-screen flex justify-center items-center"
        style={{
          backgroundImage: "url('/03-project-ai-startup/stars.png')",
          backgroundPositionY,
        }}
        
        animate={{
          backgroundPositionX: "100%",
        }}
        
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 120,
        }}>
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="gradient-01 mt-16 text-transparent text-8xl md:text-[168px] font-semibold leading-none tracking-tighter bg-clip-text">
            AI SEO
          </h1>
          <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 md:max-w-[576px]">
            Elevate your site's visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
          <Button variant="gradient" className="mt-5">
            Join waitlist
          </Button>
        </div>
        <div className="absolute inset-0 ">
          <div className="gradient-02 z-10 absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[256px] md:size-[384px] border border-white/20 "></div>
          <div className="animate-hero  size-[344px] md:size-[580px] absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-40">
            <div className="absolute size-2 rounded-full bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute size-2 rounded-full bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute size-2 rounded-full bg-white top-1/2 right-0 translate-x-1/2 -translate-y-1/2 outline-1 outline-offset-4 outline-white"></div>
          </div>
          <div className="size-[444px] md:size-[780px] border-dashed absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-40"></div>
          <div className="size-[544px] md:size-[980px] absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-30"></div>
          <div className="absolute inset-0  gradient-03"></div>
        </div>
        {/* <Image
          src="/03-project-ai-startup/stars.png"
          alt=""
          fill
          className="object-cover"
        /> */}
      </motion.section>
    </div>
  );
}
