
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: 20, text: "text-lg" },
    md: { icon: 28, text: "text-xl" },
    lg: { icon: 36, text: "text-2xl" }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.2 }
      }
    }
  };

  const fillVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delay: 0.5,
        duration: 0.8
      } 
    }
  };

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoIcon = (
    <motion.div className="relative">
      <ShieldCheck 
        size={sizes[size].icon} 
        className="text-verifirm-blue opacity-0" 
        strokeWidth={2.5} 
      />
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
      >
        <svg
          width={sizes[size].icon}
          height={sizes[size].icon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield path */}
          <motion.path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="#3A86FF"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
          
          {/* Check mark */}
          <motion.path
            d="M9 12L11 14L15 10"
            stroke="#3A86FF"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            transition={{
              delay: 0.3,
              pathLength: { type: "spring", duration: 1.5, bounce: 0 },
              opacity: { duration: 0.2 }
            }}
          />
          
          {/* Fill */}
          <motion.path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            fill="#3A86FF"
            fillOpacity={0.2}
            variants={fillVariants}
          />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-verifirm-blue/20 blur-xl rounded-full -z-10 scale-75 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
    </motion.div>
  );

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {logoIcon}
      {showText && (
        <motion.span 
          className={cn("font-bold tracking-tight", sizes[size].text)}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Veri<span className="text-verifirm-blue">firm</span>
        </motion.span>
      )}
    </div>
  );
};

export default Logo;
