"use client";
import { inter } from "@/fonts";
import { cn } from "@/lib/utils";
import "./style.css";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import LogoTicker from "./_components/logo-ticker";
import Features from "./_components/features";
import Testimonials from "./_components/testimonials";
import CallToAction from "./_components/call-to-action";
import Footer from "./_components/footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div data-theme="project-03-ai-startup" className={cn(inter.variable, 'bg-background text-white font-sans')}>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <Features/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </div>
}