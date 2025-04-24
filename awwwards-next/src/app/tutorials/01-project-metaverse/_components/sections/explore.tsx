"use client";
import Image from "next/image";
import { exploreWorlds } from "../../data";
import { TextTyping } from "../text-typing";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Explore() {
  const [indexExpand, setIndexExpand] = useState(1);

  return (
    <motion.section initial="hidden" whileInView="show" className="pt-30 pb-5">
      <div className="px-5 w-full 2xl:max-w-[1280px] mx-auto">
        <h2 className="text-center">
          <TextTyping>| The World</TextTyping>
        </h2>
        <h1 className="text-center text-[40px] md:text-[64px] font-bold">
          Choose the world you want <br />
          to explore
        </h1>
        <motion.div
          className="min-h-[70vh] flex flex-col justify-stretch gap-5 lg:flex-row "
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="show"
        >
          {exploreWorlds.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              className={cn(
                "relative py-5 rounded-2xl overflow-hidden lg:min-w-[170px] lg:flex-[0.5]",
                indexExpand === index && "flex-1 lg:flex-[3.5]"
              )}
              variants={{
                hidden: { opacity: 0, x: -100 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    ease: "easeOut",
                    type: "spring",
                    duration: 0.75,
                  },
                },
              }}
              onClick={() => setIndexExpand(index)}
            >
              <img
                src={item.imgUrl}
                alt=""
                className="absolute w-full h-full object-cover inset-0"
              />
              {indexExpand !== index && (
                <h3 className="text-center text-white text-[22px] w-full font-bold relative z-10 lg:absolute lg:bottom-5 lg:-rotate-90  lg:left-1/2 lg:text-left origin-left">
                  {item.title}
                </h3>
              )}
              <div
                className={cn(
                  "bg-black/30 p-8 space-y-5 absolute bottom-0 left-0 right-0 opacity-0",
                  indexExpand === index && "opacity-100 delay-300"
                )}
              >
                <div className="size-[60px] rounded-2xl glassmorphism flex justify-center items-center">
                  <Image
                    src="/01-project-metaverse/headset.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <p className="uppercase text-white">Enter Metaverse</p>
                <h3 className="text-white text-[30px] font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
