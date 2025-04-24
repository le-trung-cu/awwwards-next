import { useMemo } from "react";
import { motion } from "framer-motion";

export const TextTyping = ({ children }: { children: string }) => {
  return (
    <motion.span
      variants={{
        hidden: {
          opacity: 0,
        },
        show: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
        }),
      }}
    >
      {children.split("").map((letter, i) => {
        return (
          <motion.span
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeIn",
                },
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
