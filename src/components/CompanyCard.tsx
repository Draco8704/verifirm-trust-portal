
import { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <Link to={`/company/${company.id}`}>
      <div className={cn("verifirm-card h-full", className)}>
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 rounded-md overflow-hidden border border-border flex-shrink-0">
              {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse"></div>
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
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold truncate pr-4">
                  {company.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-verifirm-yellow fill-verifirm-yellow" />
                  <span className="font-medium">{company.rating.toFixed(1)}</span>
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
                <div className="flex items-center gap-1 text-xs">
                  <Badge variant="outline" className="text-verifirm-blue border-verifirm-blue/30 bg-verifirm-light-blue/30">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                </div>
              )}
              {company.new && (
                <div className="flex items-center gap-1 text-xs">
                  <Badge variant="outline" className="text-verifirm-green border-verifirm-green/30 bg-green-50">
                    <Clock className="h-3 w-3 mr-1" />
                    New
                  </Badge>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
