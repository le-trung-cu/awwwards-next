"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export default function FAQs() {
  const [question, setQuestion] = useState(-1);

  return (
    <section className="py-[72px] gradient-07 text-white">
      <div className="max-w-[1200px] px-5 mx-auto ">
        <div className="max-w-[576px] mx-auto ">
          <h2 className="text-white text-[48px] text-center font-bold">
            Frequently asked questions
          </h2>
          <div className="mt-[48px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden border-b border-white/30 py-[24px]"
              >
                <div
                  className="flex justify-between"
                  onClick={() => setQuestion(index)}
                >
                  <h3 className="font-bold text-lg">{item.question}</h3>
                  <PlusIcon />
                </div>
                <AnimatePresence>
                  {question === index && (
                    <motion.div
                      variants={{
                        initial: { opacity: 0, height: 0 },
                        exit: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                      }}
                      initial="initial"
                      exit="exit"
                      animate="animate"
                    >
                      <p className="pt-[24px]">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
