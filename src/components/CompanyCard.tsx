
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Users, TrendingUp, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CompanyCardProps {
  company: {
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
  };
  className?: string;
}

const CompanyCard = ({ company, className }: CompanyCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Animation for star ratings
  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
        ease: "backOut"
      }
    })
  };

  // Animation for badge pulse
  const pulseBadge = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Logo pulse animation
  const logoPulse = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    pulse: {
      scale: [1, 1.03, 1],
      boxShadow: [
        "0 0 0 0 rgba(58, 134, 255, 0)",
        "0 0 0 4px rgba(58, 134, 255, 0.3)",
        "0 0 0 0 rgba(58, 134, 255, 0)"
      ],
      transition: {
        duration: 2,
        repeat: 1,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <Link to={`/company/${company.id}`}>
      <motion.div 
        className={cn("verifirm-card h-full", className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
          transition: { duration: 0.2 }
        }}
      >
        <div className="p-6">
          <div className="flex items-start gap-4">
            <motion.div 
              className="relative h-16 w-16 rounded-md overflow-hidden border border-border flex-shrink-0"
              variants={logoPulse}
              initial="initial"
              animate="animate"
              whileInView="pulse"
              viewport={{ once: true }}
            >
              {isLoading && (
                <motion.div 
                  className="absolute inset-0 bg-muted"
                  animate={{ 
                    background: ["hsl(var(--muted))", "hsl(var(--muted-foreground))", "hsl(var(--muted))"] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
              )}
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={cn(
                  "h-full w-full object-cover transition-opacity duration-300",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={handleImageLoad}
              />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold truncate pr-4">
                  {company.name}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={starVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Star 
                        className={cn(
                          "h-4 w-4", 
                          i < Math.floor(company.rating) 
                            ? "text-verifirm-yellow fill-verifirm-yellow" 
                            : i < company.rating 
                              ? "text-verifirm-yellow fill-verifirm-yellow/50" 
                              : "text-gray-300"
                        )} 
                      />
                    </motion.div>
                  ))}
                  <span className="font-medium ml-1">{company.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{company.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="secondary" className="font-normal">
                  {company.industry}
                </Badge>
                <Badge variant="outline" className="font-normal text-verifirm-blue border-verifirm-blue/30 bg-verifirm-light-blue/10">
                  <Tag className="h-3 w-3 mr-1" />
                  {company.category}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground gap-1">
                  <Users className="h-3 w-3" />
                  <span>{company.size}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground gap-1">
                  <Star className="h-3 w-3" />
                  <span>{company.reviewCount} reviews</span>
                </div>
              </div>
            </div>
          </div>

          {(company.trending || company.new) && (
            <div className="flex gap-2 mt-4">
              {company.trending && (
                <motion.div 
                  className="flex items-center gap-1 text-xs"
                  variants={pulseBadge}
                  animate="pulse"
                >
                  <Badge variant="outline" className="text-verifirm-blue border-verifirm-blue/30 bg-verifirm-light-blue/30">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                </motion.div>
              )}
              {company.new && (
                <motion.div 
                  className="flex items-center gap-1 text-xs"
                  variants={pulseBadge}
                  animate="pulse"
                >
                  <Badge variant="outline" className="text-verifirm-green border-verifirm-green/30 bg-green-50">
                    <Clock className="h-3 w-3 mr-1" />
                    New
                  </Badge>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default CompanyCard;
