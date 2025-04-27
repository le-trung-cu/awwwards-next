import { Menu } from "lucide-react";
import Image from "next/image";

const menus = [
  { href: "", text: "About" },
  { href: "", text: "Features" },
  { href: "", text: "Customers" },
  { href: "", text: "Updates" },
  { href: "", text: "Help" },
];

export default function Navbar() {
  return (
    <div className="bg-accent py-5 md:py-4 lg:pt-5">
      <nav className="flex justify-between px-5 lg:px-10 max-w-[1120px] mx-auto">
        <Image
          src="/01-project-dark-saas/logosaas.png"
          height={40}
          width={40}
          alt=""
        />
        <div className="space-x-[24px] hidden md:flex items-center">
          {menus.map((item, index) => (
            <a key={index} href={item.href} className="text-base text-black/60">
              {item.text}
            </a>
          ))}
          <a
            href=""
            className="bg-black text-white inline-flex justify-center items-center rounded-md px-4 py-2 font-medium tracking-tight"
          >
            Get for free
          </a>
        </div>
        <button className="md:hidden">
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8125 6.5C15.8125 6.7486 15.7137 6.9871 15.5379 7.1629C15.3621 7.3387 15.1236 7.4375 14.875 7.4375H1.125C0.87636 7.4375 0.6379 7.3387 0.46209 7.1629C0.28627 6.9871 0.1875 6.7486 0.1875 6.5C0.1875 6.2514 0.28627 6.0129 0.46209 5.83709C0.6379 5.66127 0.87636 5.5625 1.125 5.5625H14.875C15.1236 5.5625 15.3621 5.66127 15.5379 5.83709C15.7137 6.0129 15.8125 6.2514 15.8125 6.5ZM1.125 2.4375H14.875C15.1236 2.4375 15.3621 2.33873 15.5379 2.16291C15.7137 1.9871 15.8125 1.74864 15.8125 1.5C15.8125 1.25136 15.7137 1.0129 15.5379 0.83709C15.3621 0.66127 15.1236 0.5625 14.875 0.5625H1.125C0.87636 0.5625 0.6379 0.66127 0.46209 0.83709C0.28627 1.0129 0.1875 1.25136 0.1875 1.5C0.1875 1.74864 0.28627 1.9871 0.46209 2.16291C0.6379 2.33873 0.87636 2.4375 1.125 2.4375ZM14.875 10.5625H1.125C0.87636 10.5625 0.6379 10.6613 0.46209 10.8371C0.28627 11.0129 0.1875 11.2514 0.1875 11.5C0.1875 11.7486 0.28627 11.9871 0.46209 12.1629C0.6379 12.3387 0.87636 12.4375 1.125 12.4375H14.875C15.1236 12.4375 15.3621 12.3387 15.5379 12.1629C15.7137 11.9871 15.8125 11.7486 15.8125 11.5C15.8125 11.2514 15.7137 11.0129 15.5379 10.8371C15.3621 10.6613 15.1236 10.5625 14.875 10.5625Z"
              fill="black"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
