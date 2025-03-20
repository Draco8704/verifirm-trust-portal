
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  animation?: "scale" | "pulse" | "bounce" | "none";
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, animation = "scale", children, ...props }, ref) => {
    // Create animation classes based on the animation prop
    const getAnimationClass = () => {
      switch (animation) {
        case "scale":
          return "transition-transform duration-200 hover:scale-105 active:scale-95";
        case "pulse":
          return "animate-pulse-subtle hover:animate-pulse-hover active:scale-95";
        case "bounce":
          return "hover:animate-bounce-subtle active:scale-95";
        case "none":
        default:
          return "";
      }
    };

    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          getAnimationClass(),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
