
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "./SearchBar";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty("--mouse-x", `${x}`);
      heroRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const statItems = [
    { icon: Building2, value: "5,000+", label: "Companies" },
    { icon: Star, value: "50,000+", label: "Reviews" },
    { icon: Users, value: "25,000+", label: "Monthly Users" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
      ref={heroRef}
      style={{
        backgroundImage: `radial-gradient(
          circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
          rgba(58, 134, 255, 0.1),
          transparent 40%
        )`
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-verifirm-light-blue rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-verifirm-light-blue rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container px-6 mx-auto max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-6 px-3 py-1">
              <span className="text-xs font-medium">Trusted by South African job seekers</span>
            </Badge>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Discover the <span className="text-verifirm-blue">real culture</span> before you sign
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Verifirm helps you make informed career decisions with authentic company reviews and culture insights from verified employees.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <SearchBar className="mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-16">
            <Link to="/signup">
              <Button size="lg" className="font-medium group">
                Get started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="font-medium">
                View pricing
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 lg:gap-16"
            variants={containerVariants}
          >
            {statItems.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-verifirm-light-blue mb-3">
                  <stat.icon className="h-6 w-6 text-verifirm-blue" />
                </div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
