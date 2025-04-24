"use client";
import { TextTyping } from "../text-typing";
import { motion } from "framer-motion";

export const staggerContainer = () => ({
  hidden: {},
  show: {
    transition: {
      // staggerChildren,
      // delayChildren,
    },
  },
});

export default function About() {
  return (
    <section className="pt-5 mt-40 px-5 2xl:px-0">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full 2xl:max-w-[1280px] mx-auto relative"
      >
        <div className="absolute right-0 h-[150%] top-[-50%] w-[50vw] bg-red-200 z-0 gradient-02" />
        <div className="absolute left-[50%] h-[150%] bottom-[-50%] w-[50vw] bg-red-200 z-0 gradient-03" />
        <h2 className="text-center relative ">
          <TextTyping>|About Metaversus</TextTyping>
        </h2>
        <motion.p
          className="text-3xl text-center mt-16 leading-[1.8]"
          variants={{
            hidden: {
              opacity: 0,
              y: '50%'
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: "tween",
                ease: "easeOut",
                delay: 0.2,
                duration: 1,
              },
            },
          }}
        >
          Metaverse is a new thing in the future, where you can enjoy the
          virtual world by feeling like it's really real, you can feel what you
          feel in this metaverse world, because this is really the madness of
          the metaverse of today, using only VR devices you can easily explore
          the metaverse world you want, turn your dreams into reality. Let's
          explore the madness of the metaverse by scrolling down
        </motion.p>
      </motion.div>
    </section>
  );
}
