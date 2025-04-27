import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="py-3 bg-black flex justify-center items-center space-x-3 leading-none">
      <span className="text-white/60 text-sm hidden md:block">
        Streamline your workflow and boost your productivity.
      </span>
      <span className="font-sans2 text-white flex items-center text-xs tracking-[0]">
        <span>Get started for free</span>
        <svg
          className="ml-1"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3245 8.42447L9.72448 12.0245C9.61176 12.1372 9.45888 12.2006 9.29952 12.2006C9.14008 12.2006 8.9872 12.1372 8.87448 12.0245C8.76176 11.9118 8.69848 11.7589 8.69848 11.5995C8.69848 11.4401 8.76176 11.2872 8.87448 11.1745L11.45 8.59999H4.1C3.94087 8.59999 3.78826 8.53679 3.67574 8.42423C3.56322 8.31175 3.5 8.15911 3.5 7.99998C3.5 7.84086 3.56322 7.68824 3.67574 7.57572C3.78826 7.46319 3.94087 7.39998 4.1 7.39998H11.45L8.87552 4.82398C8.7628 4.71126 8.69944 4.55838 8.69944 4.39898C8.69944 4.23958 8.7628 4.0867 8.87552 3.97398C8.98824 3.86126 9.14112 3.79794 9.30048 3.79794C9.45992 3.79794 9.6128 3.86126 9.72552 3.97398L13.3255 7.57398C13.3814 7.6298 13.4258 7.69612 13.4561 7.76913C13.4863 7.84214 13.5018 7.92041 13.5018 7.99944C13.5016 8.07847 13.4859 8.15671 13.4555 8.22967C13.4251 8.30255 13.3806 8.36879 13.3245 8.42447Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  );
}
