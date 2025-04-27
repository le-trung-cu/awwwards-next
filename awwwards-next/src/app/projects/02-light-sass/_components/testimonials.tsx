import Image from "next/image";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/avatar/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/avatar/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/avatar/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/avatar/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/avatar/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/avatar/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/avatar/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/avatar/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/avatar/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <div className="">
      <section className="max-w-[1120px] mx-auto py-[96px] px-5 flex flex-col justify-center">
        <div className="max-w-[540px] mx-auto flex flex-col items-center">
          <a className="mx-auto inline-block font-medium text-sm rounded-md px-3 py-1 border border-secondary/10 h-[30px] tracking-tight">
            Version 2.0 is here
          </a>
          <h1 className="gradient-01 text-center bg-clip-text text-transparent text-3xl md:text-[54px] font-bold md:leading-[60px] tracking-[-0.06em] font-sans">
            What our users say
          </h1>
          <p className="text-primary text-[22px] text-center tracking-tight leading-[30px] mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="mt-10 flex justify-center max-h-[617px] overflow-y-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)] gap-5">
          <div className="animate-testimonials-1 space-y-6 pb-6 h-full">
            {firstColumn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
            {firstColumn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
          <div className="animate-testimonials-2 hidden md:block  space-y-6 pb-6 h-full">
            {secondColumn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
            {secondColumn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
          <div className="animate-testimonials-3 hidden lg:block  space-y-6 pb-6 h-full">
            {thirdColumn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
            {thirdColumn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  text,
  imageSrc,
  name,
  username,
}: {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}) {
  return (
    <div className="w-[325px] rounded-3xl p-10 border border-secondary/10 shadow-01">
      <p className="text-base leading-[24px]">{text}</p>
      <div className="flex items-center mt-4">
        <Image src={imageSrc} height={40} width={40} alt="" />
        <div className="text-base tracking-tight leading-[20px] ml-1.5">
          <div className="font-medium">{name}</div>
          <div>{username}</div>
        </div>
      </div>
    </div>
  );
}
