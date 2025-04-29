"use client";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  animate,
  animateValue,
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  {
    icon: "/03-project-ai-startup/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/03-project-ai-startup/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/03-project-ai-startup/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export default function Features() {
  const [selected, setSelected] = useState(-1);

  const maskPosition = useMotionTemplate`${50}% ${0}%`;

  return (
    <div className="px-5 py-20 md:py-24">
      <section className="max-w-[1040px] mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-medium leading-none tracking-tighter text-center">
            Elevate your SEO efforts.
          </h2>
          <p className="text-lg md:mx-5 max-w-[672px] md:text-xl leading-[28px] text-white/70 text-center mt-5 tracking-tight">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((item, index) => (
            <FeatureTab
              key={index}
              {...item}
              selected={index === selected}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
        <div className="border  border-white/20 rounded-md p-2.5 mt-3 ">
          <div className="relative border aspect-[315/170] md:aspect-[708/398] border-white/20 overflow-hidden rounded-md">
            <Image
              width={2200}
              height={1848}
              alt=""
              src="/03-project-ai-startup/product-image.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureTab({
  title,
  icon,
  isNew,
  selected,
  onClick,
}: (typeof tabs)[number] & { selected: boolean; onClick: () => void }) {
  const boxRef = useRef<HTMLDivElement>(null);

  const lottieRef = useRef<DotLottie>(null);
  const percentX = useMotionValue(0);
  const percentY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 70px at ${percentX}% ${percentY}%, black, transparent)`;

  useEffect(() => {
    if (!boxRef.current) return;

    const { width, height } = boxRef.current.getBoundingClientRect();
    const curcumber = (width + height) * 2;

    const times = [
      0,
      width / curcumber,
      (width + height) / curcumber,
      (2 * width + height) / curcumber,
      1,
    ];

    const config: ValueAnimationTransition = {
      times,
      duration: 2,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    }

    animate(percentX, [0, 100, 100, 0, 0], config);
    animate(percentY, [0, 0, 100, 100, 0], config);
  }, [selected]);

  function dotLottieRefCallback(dotLottie: DotLottie) {
    lottieRef.current = dotLottie;
  }

  function handleMouseEnter() {
    if (!lottieRef.current) return;
    lottieRef.current.setFrame(0);
    lottieRef.current.play();
  }

  return (
    <div
      ref={boxRef}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className="relative rounded-xl border border-white/15 p-[9px] flex items-center  gap-[10px] lg:flex-1"
    >
      <span className="size-[48px] rounded-md border border-white/20 flex justify-center items-center">
        <DotLottieReact
          dotLottieRefCallback={dotLottieRefCallback}
          src={icon}
          className={"size-[22px]"}
        />
      </span>
      <span className="font-medium text-base tracking-tighter">{title}</span>
      {isNew && (
        <span className="bg-primary inline-block px-2 py-0.5 rounded-full text-black font-semibold text-xs">
          New
        </span>
      )}
      {selected && (
        <motion.div
          className="absolute -m-px inset-0 border border-[#8C44FF] rounded-xl"
          style={{
            maskImage,
          }}
        />
      )}
    </div>
  );
}
