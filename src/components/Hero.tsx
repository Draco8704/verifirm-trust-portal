
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "./SearchBar";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [countUp, setCountUp] = useState(false);

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

    const handleScroll = () => {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !countUp) {
          setCountUp(true);
        }
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [countUp]);

  const statItems = [
    { icon: Building2, value: "5,000+", label: "Companies", initialValue: 0, targetValue: 5000 },
    { icon: Star, value: "50,000+", label: "Reviews", initialValue: 0, targetValue: 50000 },
    { icon: Users, value: "25,000+", label: "Monthly Users", initialValue: 0, targetValue: 25000 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
  
  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const taglineItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const searchBarVariants = {
    hidden: { scaleX: 0.8, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier
      }
    }
  };
  
  const typingVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: "easeInOut"
      }
    }
  };
  
  const statsIconVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };
  
  const buttonGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  };
  
  const leftButtonVariant = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const rightButtonVariant = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const taglineParts = ["Real Insights", "from Real Employees.", "No Surprises."];
  
  // This creates a number counter animation
  const Counter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
    const [count, setCount] = useState(from);
    
    useEffect(() => {
      if (!countUp) return;
      
      let startTime: number;
      let animationFrameId: number;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(from + progress * (to - from)));
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };
      
      animationFrameId = requestAnimationFrame(updateCount);
      
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [from, to, duration, countUp]);
    
    return <>{count.toLocaleString()}+</>;
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

          <div className="mb-6 relative overflow-hidden">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold tracking-tight"
              style={{ position: "relative" }}
            >
              Discover the <span className="text-verifirm-blue">real culture</span> before you sign
            </motion.h1>
            <motion.div 
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-0 left-0 h-full w-full bg-background"
              style={{ 
                originX: 0,
                zIndex: 10,
                right: 0,
                mixBlendMode: "difference"
              }}
            />
          </div>

          <motion.div 
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-2 text-lg text-muted-foreground mb-8"
          >
            {taglineParts.map((part, index) => (
              <motion.span key={index} variants={taglineItemVariants}>
                {part}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            variants={searchBarVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <SearchBar className="mx-auto" />
          </motion.div>

          <motion.div 
            variants={buttonGroupVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-4 mb-16"
          >
            <motion.div variants={leftButtonVariant}>
              <Link to="/signup">
                <Button size="lg" className="font-medium group">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={rightButtonVariant}>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="font-medium">
                  View pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 lg:gap-16 stats-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {statItems.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-verifirm-light-blue mb-3"
                  variants={statsIconVariants}
                >
                  <stat.icon className="h-6 w-6 text-verifirm-blue" />
                </motion.div>
                <h3 className="text-2xl font-bold">
                  {countUp ? (
                    <Counter 
                      from={stat.initialValue} 
                      to={stat.targetValue} 
                    />
                  ) : (
                    stat.value
                  )}
                </h3>
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
