import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="gradient-03">
      <section className="max-w-[1120px] mx-auto py-[96px] px-5 flex flex-col justify-center">
        <div className="max-w-[540px] mx-auto flex flex-col items-center">
          <h1 className="gradient-01 text-center bg-clip-text text-transparent text-3xl md:text-[54px] font-bold md:leading-[60px] tracking-[-0.06em] font-sans">
            Sign up for free today
          </h1>
          <p className="text-primary text-[22px] text-center tracking-tight leading-[30px] mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
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
      </section>
    </div>
  );
}
