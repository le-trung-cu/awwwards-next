import Image from "next/image";

const images = [
  { src: "/01-project-dark-saas/acme.png", alt: "Acme Logo" },
  { src: "/01-project-dark-saas/quantum.png", alt: "Quantum Logo" },
  { src: "/01-project-dark-saas/echo.png", alt: "Echo Logo" },
  { src: "/01-project-dark-saas/celestial.png", alt: "Celestial Logo" },
  { src: "/01-project-dark-saas/pulse.png", alt: "Pulse Logo" },
  { src: "/01-project-dark-saas/apex.png", alt: "Apex Logo" },
];

export default function LogoTicker() {
  return (
    <div className="py-20 px-5 md:py-24 text-white">
      <section className="max-w-[1040px] mx-auto flex items-center gap-5">
        <h3 className="flex-1 md:flex-none text-base">
          Trusted by top innovative teams
        </h3>
        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_25%,#000_75%,transparent)]">
          <div className="animate-logo-ticker pr-14  flex flex-none  gap-14 w-max">
            {[...images, ...images].map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="h-6 w-auto flex-none"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
