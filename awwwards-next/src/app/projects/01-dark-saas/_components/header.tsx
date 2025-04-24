import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="text-white flex justify-between px-4 items-center h-[80px]">
      <div className="inline-block relative">
        <div className="gradient-02 w-[48px] h-[40px] bottom-0" />
        <Image
          src="/01-project-dark-saas/logosaas.png"
          height={48}
          width={48}
          alt=""
          className="relative z-10"
        />
      </div>
      <div className="sm:flex items-center hidden">
        <div className="text-white/60 text-base space-x-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Updates</a>
          <a href="">Help</a>
          <a href="">Customers</a>
          <a href="" className="inline-flex bg-white text-black rounded-xl h-10 justify-center items-center px-[18px]">Get for free</a>
        </div>
      </div>
      <button className="sm:hidden size-10 rounded-[8px] flex justify-center items-center border border-[#FFFFFF]/30">
        <Menu />
      </button>
    </div>
  );
}
