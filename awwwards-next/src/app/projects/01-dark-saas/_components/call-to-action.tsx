import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="px-5 max-w-[1200px] mx-auto py-[72px] overflow-x-clip">
      <div className="relative max-w-[576px] mx-auto">
        <h2 className="text-white text-[48px] text-center font-bold">
          Get instant access
        </h2>
        <p className="text-white/70 text-center text-[20px]">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="flex flex-col gap-5 items-stretch mt-[40px] md:flex-row">
          <input placeholder="your@email.com" className="bg-[#FFFFFF]/20 h-[48px] rounded-md px-5 text-[#9CA3AF] md:flex-1 placeholder:font-medium placeholder:text-base" />
          <button className="bg-white h-[48px] rounded-md font-medium text-base px-8">Get access</button>
        </form>
        <div>
          <Image className="absolute left-0 top-0 translate-x-[-100%] translate-y-[-50%]" src="/01-project-dark-saas/emojistar.png" height={200} width={200} alt=""/>
          <Image className="absolute right-0 bottom-0 translate-x-[100%]" src="/01-project-dark-saas/helix2.png" height={200} width={200} alt=""/>
        </div>
      </div>
    </section>
  );
}
