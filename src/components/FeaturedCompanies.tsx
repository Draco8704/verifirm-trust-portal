
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Companies</h2>
            <p className="text-muted-foreground">
              Explore top-rated companies in South Africa
            </p>
          </div>
          <Link to="/companies" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View all companies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCompanies;
