import { useMotionTemplate, useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./button";
import { MouseEvent, useEffect, useRef } from "react";

export default function CallToAction() {
  const maskImageRef = useRef<HTMLDivElement>(null);
  const percentX = useMotionValue(50);
  const percentY = useMotionValue(35);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${percentX}% ${percentY}%,#000,transparent)`;

  const {scrollYProgress} = useScroll({
    target: maskImageRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300]);

  function mouseMoveHandle(e: MouseEvent) {
    if (!maskImageRef.current) return;
    const { width, height, x, y } =
      maskImageRef.current.getBoundingClientRect();
    const px = ((e.clientX - x) / width) * 100;
    const py = ((e.clientY - y) / height) * 100;

    percentX.set(px);
    percentY.set(py);
  }

  return (
    <div className="px-5 py-20 md:py-24">
      <section
        ref={maskImageRef}
        onMouseMove={mouseMoveHandle}
        onMouseLeave={() => {
          percentX.set(50);
          percentY.set(35);
        }}
        className="max-w-[1040px] py-24 mx-auto  relative"
      >
        <motion.div
          className="absolute inset-0 bg-[#4A208A] bg-blend-overlay [smask-image:radial-gradient(50%_50%_at_50%_35%,#000,transparent)]"
          style={{
            backgroundImage: "url('/03-project-ai-startup/grid-lines.png')",
            maskImage,
            WebkitMaskImage: maskImage,
          }}
        ></motion.div>
        <div className="absolute inset-0 rounded-md  border border-white/15"></div>
        <motion.div
          className="animate-call-to-action absolute inset-0"
          style={{
            backgroundImage: "url('/03-project-ai-startup/stars.png')",
            backgroundPositionY,
          }}
      
        />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-medium leading-none tracking-tighter text-center">
            AI-driven SEO
            <br />
            for everyone.
          </h2>
          <p className="text-lg leading-[28px] text-white/70 text-center mt-5 tracking-tight">
            Achieve clear, impactful results <br /> without the complexity.
          </p>
          <Button variant="gradient" className="mt-5">
            Join waitlist
          </Button>
        </div>
      </section>
    </div>
  );
}
