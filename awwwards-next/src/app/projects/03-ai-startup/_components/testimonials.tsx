import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "/avatar/avatar-1.png",
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: "/avatar/avatar-2.png",
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: "/avatar/avatar-3.png",
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: "/avatar/avatar-4.png",
  },
];

export default function Testimonials() {
  return (
    <div className="px-5 py-20 md:py-24">
      <section className="max-w-[1040px] mx-auto">
        <h2 className="text-5xl md:text-6xl font-medium leading-none tracking-tighter text-center">
          Beyond Expectations.
        </h2>
        <p className="text-lg md:text-xl leading-[28px] text-white/70 text-center mt-5 tracking-tight">
          Our revolutionary AI SEO tools have
          <br />
          transformed our clients' strategies.
        </p>
        <div className="overflow-hidden mt-10 pl-5 md:pl-[30px] [mask-image:linear-gradient(to_right,transparent,#000_20%,#000_80%,transparent)]">
          <div className="animate-testimonials w-max flex flex-none gap-12 pr-12">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="max-w-xs lg:max-w-md flex-none">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  text,
  name,
  title,
  avatarImg,
}: {
  text: string;
  name: string;
  title: string;
  avatarImg: string;
}) {
  return (
    <div className="gradient-04 border border-white/15 p-6 md:p-10 rounded-lg h-full">
      <p className="text-lg md:text-2xl tracking-tight">{text}</p>
      <div className="flex gap-3 items-center mt-5">
        <div className="flex  items-center  size-[44px] box-border rounded-sm overflow-clip relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,255)] after:mix-blend-soft-light">
          <Image
            alt=""
            src={avatarImg}
            fill
            className="object-cover grayscale"
          />
        </div>
        <div>
          <div className="tracking-tight text-base leading-[24px]">{name}</div>
          <div className="tracking-tight text-sm text-white/50 leading-[20px]">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
