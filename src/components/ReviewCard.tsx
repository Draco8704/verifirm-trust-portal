
import { useState } from "react";
import { Star, ThumbsUp, Flag, User } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: {
    id: string;
    title: string;
    rating: number;
    date: string;
    position: string;
    location: string;
    employmentStatus: string;
    pros: string;
    cons: string;
    advice: string;
    helpful: number;
    verified: boolean;
  };
  className?: string;
}

const ReviewCard = ({ review, className }: ReviewCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [isHelpful, setIsHelpful] = useState(false);

  const handleHelpful = () => {
    if (!isHelpful) {
      setHelpfulCount(helpfulCount + 1);
      setIsHelpful(true);
    } else {
      setHelpfulCount(helpfulCount - 1);
      setIsHelpful(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "text-verifirm-yellow fill-verifirm-yellow"
              : "text-muted stroke-muted"
          )}
        />
      ));
  };

  return (
    <div className={cn("verifirm-card", className)}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{review.title}</h3>
            <div className="flex items-center gap-1 mt-1">
              {renderStars(review.rating)}
            </div>
          </div>
          {review.verified && (
            <Badge className="bg-verifirm-light-blue text-verifirm-blue">
              Verified
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            <span>{review.position}</span>
          </div>
          <span>•</span>
          <span>{review.location}</span>
          <span>•</span>
          <span>{review.employmentStatus}</span>
          <span>•</span>
          <span>{formatDate(review.date)}</span>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-1">Pros</h4>
            <p className={cn(
              "text-sm text-muted-foreground",
              !expanded && "line-clamp-2"
            )}>
              {review.pros}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-1">Cons</h4>
            <p className={cn(
              "text-sm text-muted-foreground",
              !expanded && "line-clamp-2"
            )}>
              {review.cons}
            </p>
          </div>

          {review.advice && (
            <div>
              <h4 className="font-medium text-sm mb-1">Advice to Management</h4>
              <p className={cn(
                "text-sm text-muted-foreground",
                !expanded && "line-clamp-2"
              )}>
                {review.advice}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 pt-2 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-normal"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "text-xs gap-1",
                isHelpful && "text-verifirm-blue"
              )}
              onClick={handleHelpful}
            >
              <ThumbsUp className="h-3.5 w-3.5" />
              <span>{helpfulCount > 0 ? helpfulCount : ""} Helpful</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-xs gap-1"
            >
              <Flag className="h-3.5 w-3.5" />
              <span>Report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
