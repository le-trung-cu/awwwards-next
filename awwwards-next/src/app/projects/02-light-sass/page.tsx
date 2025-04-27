import { dm_sans, inter } from "@/fonts"
import { cn } from "@/lib/utils"
import Banner from "./_components/banner"
import Navbar from "./_components/navbar"
import Hero from "./_components/hero"
import "./style.css";
import LogoTicker from "./_components/logo-ticker"
import ProductShowCase from "./_components/product-show-case"
import Pricing from "./_components/pricing"
import Testimonials from "./_components/testimonials"
import CallToAction from "./_components/call-to-action"
import Footer from "./_components/footer"

export default function Page() {
  return <div data-theme="project-02-light-sass" className={cn(dm_sans.variable, inter.variable, "font-sans")}>
    <Banner/>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <ProductShowCase/>
    <Pricing/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </div>
}

