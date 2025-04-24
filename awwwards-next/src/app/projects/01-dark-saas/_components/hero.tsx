"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-[72px] sm:pt-[96px] gradient-04 pb-[72px] md:pb-[166px] overflow-clip">
      <div className="px-4 relative z-10  w-fit mx-auto">
        <div className="flex justify-center">
          <a
            href="#"
            className="flex border border-white/30 rounded-md px-2 h-[32px] items-center"
          >
            <span className="gradient-03 bg-clip-text text-base text-transparent mr-3">
              Version 2.0 is here
            </span>
            <span className="flex text-white items-center">
              Read More <ArrowRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="text-white flex flex-col items-center justify-center mt-8">
          <h1 className="font-bold text-[72px] md:text-[128px] leading-none">
            One Task <br />
            at a Time
          </h1>
          <div className="hidden md:block relative z-10 h-0 w-full  bg-red-300">
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute left-0 translate-x-[-70%] bottom-[-100px]"
            >
              <Image
                src="/01-project-dark-saas/cursor 1.png"
                height={200}
                width={200}
                alt=""
                draggable="false"
              />
            </motion.div>
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute right-0 translate-x-[80%] bottom-[0px]"
            >
              <Image
                src="/01-project-dark-saas/message 1.png"
                height={200}
                width={200}
                alt=""
                draggable="false"
              />
            </motion.div>
          </div>
          <p className="text-center text-xl mt-8 max-w-[450px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <a
            href=""
            className="inline-flex bg-white justify-center items-center text-black rounded-md h-[48px] px-5 mt-8 font-medium"
          >
            Get for free
          </a>
        </div>
      </div>
      <div className="h-[72px] md:h-[96px] bottom-0 w-full left-0 absolute z-0">
        <div className="absolute h-[100vw] aspect-[2/1] gradient-05 top-[-40px] md:top-[-96px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE]"></div>
      </div>
    </section>
  );
}
