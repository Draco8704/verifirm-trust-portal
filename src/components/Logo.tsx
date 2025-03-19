
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

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <ShieldCheck 
          size={sizes[size].icon} 
          className="text-verifirm-blue" 
          strokeWidth={2.5} 
        />
        <div className="absolute inset-0 bg-verifirm-blue/20 blur-xl rounded-full -z-10 scale-75 opacity-60"></div>
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight", sizes[size].text)}>
          Veri<span className="text-verifirm-blue">firm</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
