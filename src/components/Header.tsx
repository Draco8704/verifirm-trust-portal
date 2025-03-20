
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Companies", path: "/companies" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  const headerVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3 + (i * 0.1),
        ease: "easeOut"
      }
    })
  };

  const mobileMenuVariants = {
    closed: { 
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    open: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-8",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      )}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <Logo />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
            >
              <Link
                to={item.path}
                className="text-sm font-medium text-foreground hover:text-verifirm-blue transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-verifirm-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Link to="/login">
              <Button variant="outline" size="sm" className="font-medium">
                Log in
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <Link to="/signup">
              <Button size="sm" className="font-medium">
                Sign up
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMobileMenu}
          className="md:hidden z-50 p-2 text-foreground"
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-white z-40 flex flex-col p-8 pt-24 md:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
        >
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={mobileNavItemVariants}
              >
                <Link
                  to={item.path}
                  className="text-lg font-medium text-foreground hover:text-verifirm-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div className="pt-4 flex flex-col space-y-4" variants={mobileNavItemVariants}>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={mobileNavItemVariants}>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
