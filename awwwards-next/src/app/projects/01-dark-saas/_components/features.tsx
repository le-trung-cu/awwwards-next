"use client";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
] as const;

const Box = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13.3334V6.66669C17.9997 6.37442 17.9225 6.08736 17.7763 5.83432C17.63 5.58128 17.4198 5.37116 17.1667 5.22502L11.3333 1.89169C11.08 1.74541 10.7926 1.6684 10.5 1.6684C10.2074 1.6684 9.92003 1.74541 9.66667 1.89169L3.83333 5.22502C3.58022 5.37116 3.36998 5.58128 3.22372 5.83432C3.07745 6.08736 3.0003 6.37442 3 6.66669V13.3334C3.0003 13.6256 3.07745 13.9127 3.22372 14.1657C3.36998 14.4188 3.58022 14.6289 3.83333 14.775L9.66667 18.1084C9.92003 18.2546 10.2074 18.3316 10.5 18.3316C10.7926 18.3316 11.08 18.2546 11.3333 18.1084L17.1667 14.775C17.4198 14.6289 17.63 14.4188 17.7763 14.1657C17.9225 13.9127 17.9997 13.6256 18 13.3334Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.22498 5.79999L10.5 10.0083L17.775 5.79999"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 18.4V10"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Features() {
  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="px-5 max-w-[1200px] mx-auto py-[72px]">
      <div className="max-w-[576px] mx-auto ">
        <h2 className="text-white text-[48px] text-center font-bold">
          Everything you need
        </h2>
        <p className="text-white/70 text-center text-[20px]">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>

      <div className="text-white flex flex-col gap-5 md:flex-row mt-[64px]">
        {features.map((item, index) => (
          <CardFeature
            item={item}
            key={index}
            mouseX={mouse.x}
            mouseY={mouse.y}
          />
        ))}
      </div>
    </section>
  );
}

function CardFeature({
  item,
  mouseX,
  mouseY,
}: {
  item: { title: string; description: string };
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const localX = useMotionValue(0);
  const localY = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = mouseX.get() - rect.left;
      const y = mouseY.get() - rect.top;
      localX.set(x);
      localY.set(y);
    };

    update(); // update lần đầu

    const unsubX = mouseX.on("change", update);
    const unsubY = mouseY.on("change", update);

    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY]);

  const maskPosition = useMotionTemplate`${localX}px ${localY}px`;

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center border border-white/30 rounded-lg py-10 px-5"
    >
      <motion.div
        className="absolute border-4 border-[#5D2CA8]/60 rounded-lg top-[-2px] left-[-2px] right-[-2px] bottom-[-2px]"
        style={{
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 60%, transparent 100%)",
          maskSize: "100px 100px",
          WebkitMaskSize: "100px 100px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: maskPosition,
          WebkitMaskPosition: maskPosition,
        }}
      ></motion.div>
      <div className="size-[56px] bg-white flex justify-center items-center rounded-md">
        <Box />
      </div>
      <h3 className="font-bold text-base mt-6">{item.title}</h3>
      <p className="text-center mt-2 text-base text-white/70">
        {item.description}
      </p>
    </div>
  );
}
