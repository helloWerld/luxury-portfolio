import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
  className?: string;
  vertical?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  children?: React.ReactNode;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      vertical = false,
      repeat = 4,
      pauseOnHover = false,
      reverse = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
        {...props}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;
