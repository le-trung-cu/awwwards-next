"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

function textVariant(delay: number): Variants {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
}

function slideIn(
  direction: "left" | "up" | "right" | "down",
  type: string,
  delay: number,
  duration: number
): Variants {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
}

const headingTopVariant = textVariant(1.1);
const headingButtomVariant = textVariant(1.2);
const slideInRight = slideIn("right", "tween", 0.2, 1);

export default function Hero() {
  return (
    <section>
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 2.2, delayChildren: 0.5 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 py-8"
      >
        <h2 className="relative font-bold z-10 lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white flex flex-col items-center">
          <motion.span
            variants={headingTopVariant}
            initial="hidden"
            whileInView="show"
          >
            METAVERSE
          </motion.span>
          <motion.span
            variants={headingButtomVariant}
            initial="hidden"
            whileInView="show"
            className="flex items-center"
          >
            MA
            <svg
              className="w-[64px] sm:w-[100px] md:w-[160px] lg:w-[250px]"
              width="212"
              height="108"
              viewBox="0 0 212 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 9H162C184.644 9 203 27.3563 203 50V58C203 80.6437 184.644 99 162 99H9V9Z"
                stroke="white"
                strokeWidth="18"
              />
            </svg>
            NESS
          </motion.span>
        </h2>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          className="relative ml-10 2xl:max-w-[1280px] 2xl:mx-auto"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] mt-[-20px] lg:mt-[-100px]" />
          <div className="w-full sm:h-[500px] h-[350px] object-cover relative mt-[-35px] md:mt-[-20px]  rounded-tl-[140px] overflow-hidden">
            <Image src="/01-project-metaverse/cover.png" fill alt="" className="object-cover" />
          </div>

          <Image src="/01-project-metaverse/stamp.png" width={155} height={155} alt="" className="absolute right-10 bottom-0 translate-y-[50%]"/>

          {/* <div className="h-[50vw] hero-gradient rounded-tl-[20vw] top-[-60px] relative"></div>
          <div className="absolute left-10 right-0 to-0 bottom-0 h-[54.5vw] hero-gradient rounded-tl-[20vw] z-10 overflow-hidden">
            <Image src="/01-project-metaverse/cover.png" fill alt="" />
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
