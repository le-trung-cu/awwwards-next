import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const options = [
  {
    plan: "Free",
    price: 0,
    priceUnit: "month",
    buttonText: "Get for free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    plan: "Pro",
    price: 9,
    priceUnit: "month",
    label: "Most Popular",
    buttonText: "Sign up now",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    plan: "Business",
    price: 19,
    priceUnit: "month",
    buttonText: "Sign up now",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="">
      <section className="max-w-[1120px] mx-auto py-[96px] px-5 flex flex-col justify-center">
        <div className="max-w-[540px] mx-auto flex flex-col items-center">
          <h1 className="gradient-01 text-center bg-clip-text text-transparent text-3xl md:text-[54px] font-bold md:leading-[60px] tracking-[-0.06em] font-sans">
            Pricing
          </h1>
          <p className="text-primary text-[22px] text-center tracking-tight leading-[30px] mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="max-w-[320px] sm:max-w-[330px] sm:pl-[10px] lg:pl-[0px] mx-auto mt-10 lg:max-w-full">
          <div className=" flex flex-col gap-6 lg:gap-5 lg:flex-row lg:items-end">
            {options.map((item, i) => (
              <Card key={i} {...item} popular={i === 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  plan,
  price,
  priceUnit,
  buttonText,
  features,
  popular,
}: {
  plan: string;
  price: number;
  priceUnit: string;
  buttonText: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-white p-10 rounded-3xl",
        popular && "bg-black text-white",
        !popular && "shadow-01 border-[#F1F1F1] border text-"
      )}
    >
      <div className="flex justify-between items-center">
        <h3
          className={cn(
            "font-bold text-lg tracking-tighter text-black/50",
            popular && "text-white/50"
          )}
        >
          {plan}
        </h3>
        {popular && (
          <span className="gradient-04 animate-bg-1 [background-size:200%] inline-block bg-clip-text font-medium text-sm rounded-lg px-3 py-1 border border-white/20 h-[30px] tracking-tight text-transparent"
            >
            Most Popular
          </span>
        )}
      </div>
      <div className="mt-7">
        <span className={cn("text-4xl font-bold")}>${price}</span>
        <span
          className={cn(
            "font-bold text-base tracking-tighter text-black/50",
            popular && "text-white/50"
          )}
        >
          /month
        </span>
      </div>
      <a
        href=""
        className={cn(
          "text-white bg-black min-w-[240px] h-[40px] rounded-lg flex justify-center items-center text-base font-medium tracking-tight mt-[26px]",
          popular && "text-black bg-white"
        )}
      >
        {buttonText}
      </a>
      <ul className="mt-[33px] space-y-5">
        {features.map((item, index) => (
          <li key={index} className="flex text-sm">
            <CheckIcon className="mr-4" /> <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
