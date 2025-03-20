
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import CompanyCard from "@/components/CompanyCard";

interface FeaturedCompaniesProps {
  companies: {
    id: string;
    name: string;
    logo: string;
    location: string;
    industry: string;
    category: string;
    size: string;
    rating: number;
    reviewCount: number;
    trending?: boolean;
    new?: boolean;
  }[];
}

const FeaturedCompanies = ({ companies }: FeaturedCompaniesProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.featured-companies-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleUnderlineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 + (i * 0.1),
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      className="py-20 px-6 featured-companies-section"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <motion.div className="relative inline-block" variants={titleVariants}>
              <h2 className="text-3xl font-bold mb-2">Featured Companies</h2>
              <motion.div 
                className="absolute -bottom-1 left-0 h-1 bg-verifirm-blue/30 rounded-full"
                variants={titleUnderlineVariants}
              />
            </motion.div>
            <motion.p 
              className="text-muted-foreground"
              variants={titleVariants}
              transition={{ delay: 0.1 }}
            >
              Explore top-rated companies in South Africa
            </motion.p>
          </div>
          <motion.div
            variants={titleVariants}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link to="/companies">
              <Button variant="outline" className="group">
                View all companies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 }
              }}
            >
              <CompanyCard company={company} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCompanies;
