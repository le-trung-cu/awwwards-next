import { cn } from "@/lib/utils";
import { About, Explore, Hero, Navbar, World } from "./_components/sections";
import "./styles.css";
import { eudoxus } from "./fonts/fonts";

export const metadata = {
  title: 'Metaverse Landing',
  description: 'A cool project about the metaverse',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    // Đây là cách thêm custom thẻ link (hoặc meta) không có key sẵn trong metadata API
    'link:stylesheet': 'https://stijndv.com/fonts/Eudoxus-Sans.css',
  },
}

export default function Page() {
  return (
    <>
      <div
        className={cn("bg-b overflow-hidden bg-primary text-secondary", eudoxus.className)}
        data-theme="project-metatverse"
      >
        <Navbar />
        <Hero />
        <About/>
        <Explore/>
      </div>
      <div className="h-[200vh]"></div>
    </>
  );
}
