import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export default function Navbar() {
  return (
    <div className="md:py-4 sticky top-0 z-40 ">
      <nav className="backdrop-blur-xl text-white flex items-center justify-between px-5 py-4 md:py-2.5 md:px-2  md:border overflow-clip border-white/15 max-w-[672px] mx-auto md:rounded-xl md:h-[60px]">
        <Image
          src="/03-project-ai-startup/logo.svg"
          alt=""
          height={40}
          width={40}
          className="mr-auto border border-white/20 rounded-md"
        />
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm  text-white/70" href="">
            Features
          </a>
          <a className="text-sm  text-white/70" href="">
            Developers
          </a>
          <a className="text-sm  text-white/70" href="">
            Pricing
          </a>
          <a className="text-sm  text-white/70" href="">
            Changelog
          </a>
        </div>
        <Button variant="gradient" className="ml-auto">
          <span>Join waitlist</span>
        </Button>
        <button className="md:hidden ml-4 size-8 flex justify-center items-center">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6364 9C23.6364 9.2652 23.5342 9.5196 23.3523 9.7071C23.1705 9.8946 22.9238 10 22.6667 10H1.33333C1.07615 10 0.829504 9.8946 0.647647 9.7071C0.4658 9.5196 0.363632 9.2652 0.363632 9C0.363632 8.7348 0.4658 8.4804 0.647647 8.2929C0.829504 8.1054 1.07615 8 1.33333 8H22.6667C22.9238 8 23.1705 8.1054 23.3523 8.2929C23.5342 8.4804 23.6364 8.7348 23.6364 9ZM1.33333 2H22.6667C22.9238 2 23.1705 1.89464 23.3523 1.70711C23.5342 1.51957 23.6364 1.26522 23.6364 1C23.6364 0.73478 23.5342 0.48043 23.3523 0.29289C23.1705 0.10536 22.9238 0 22.6667 0H1.33333C1.07615 0 0.829504 0.10536 0.647647 0.29289C0.4658 0.48043 0.363632 0.73478 0.363632 1C0.363632 1.26522 0.4658 1.51957 0.647647 1.70711C0.829504 1.89464 1.07615 2 1.33333 2ZM22.6667 16H1.33333C1.07615 16 0.829504 16.1054 0.647647 16.2929C0.4658 16.4804 0.363632 16.7348 0.363632 17C0.363632 17.2652 0.4658 17.5196 0.647647 17.7071C0.829504 17.8946 1.07615 18 1.33333 18H22.6667C22.9238 18 23.1705 17.8946 23.3523 17.7071C23.5342 17.5196 23.6364 17.2652 23.6364 17C23.6364 16.7348 23.5342 16.4804 23.3523 16.2929C23.1705 16.1054 22.9238 16 22.6667 16Z"
              fill="white"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
