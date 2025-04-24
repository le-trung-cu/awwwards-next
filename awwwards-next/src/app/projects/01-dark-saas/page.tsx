import Banner from "./_components/banner";
import Header from "./_components/header";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

import "./style.css";
import { cn } from "@/lib/utils";
import Hero from "./_components/hero";
import LogoTicker from "./_components/logo-ticker";
import Features from "./_components/features";
import ProductShowCase from "./_components/product-show-case";
import FAQs from "./_components/faqs";
import CallToAction from "./_components/call-to-action";
import Footer from "./_components/footer";

export default function Page() {
  return (
    <div data-theme="project-01" className={cn("bg-black", font.className)}>
      <Banner />
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
      <FAQs />
      <CallToAction />
      <Footer />
    </div>
  );
}
