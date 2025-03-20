
import * as React from "react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

// This is a separate component that uses motion.button directly
// Instead of trying to extend the Button component
export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  animation?: "scale" | "pulse" | "bounce" | "none";
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, animation = "scale", children, ...props }, ref) => {
    // Define animations
    const animations = {
      scale: {
        whileHover: { scale: 1.02, transition: { duration: this } },
        whileTap: { scale: 0.98 },
      },
      pulse: {
        whileHover: { 
          scale: [1, 1.02, 1.01],
          transition: { 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8
          } 
        },
        whileTap: { scale: 0.98 },
      },
      bounce: {
        whileHover: { y: [0, -3, 0], transition: { repeat: Infinity, duration: 0.6 } },
        whileTap: { scale: 0.98 },
      },
      none: {}
    }

    const currentAnimation = animations[animation]
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...currentAnimation}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
