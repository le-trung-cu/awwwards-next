import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        gradient:
          "relative rounded-sm text-white inline-block px-3 py-2 bg-linear-to-b from-[#190D2E] to-[#4A208A] shadow-[0_0_12px_#8C45FF]",
      },
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {variant === "gradient" && (
        <>
          <div className="absolute rounded-sm inset-0 text-sm">
            <div className="absolute rounded-sm inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <div className="absolute rounded-sm inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent_100%)]" />
            <div className="absolute rounded-sm inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]" />
          </div>
        </>
      )}
      {props.children}
    </Comp>
  );
}

export { Button };
