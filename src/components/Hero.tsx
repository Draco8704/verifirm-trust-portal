
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import { BadgeCheck, ChevronRight, Shield } from "lucide-react";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-verifirm-blue/5 to-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-verifirm-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-verifirm-blue/3 rounded-full blur-3xl"></div>
      
      <motion.div 
        className="container mx-auto max-w-7xl relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-verifirm-blue text-white">
              <Shield className="h-3.5 w-3.5" />
              The First Anonymous Company Review Platform in South Africa
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Uncover the workplace truth.
            <span className="text-verifirm-blue"> ATS-proof</span> your future.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Discover the real company culture with verified employee reviews and optimize your resume for ATS systems to land your dream job.
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-full max-w-2xl mb-8">
            <SearchBar placeholder="Search for a company..." variant="default" />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/companies">
              <Button size="lg" className="flex gap-2">
                Explore Companies <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="outline" size="lg" className="flex gap-2">
                Career Tools <BadgeCheck className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-verifirm-blue">20,000+</p>
              <p className="text-muted-foreground">Companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-verifirm-blue">250,000+</p>
              <p className="text-muted-foreground">Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-verifirm-blue">97%</p>
              <p className="text-muted-foreground">Verified Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-verifirm-blue">9.7x</p>
              <p className="text-muted-foreground">Interview Success</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
