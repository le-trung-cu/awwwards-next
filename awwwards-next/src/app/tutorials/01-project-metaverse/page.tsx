import { cn } from "@/lib/utils";
import { About, Explore, Hero, Navbar, World } from "./_components/sections";
import "./styles.css";
import { eudoxus } from "@/fonts";


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
