
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/ReviewCard";

interface RecentReviewsProps {
  reviews: {
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
  }[];
}

const RecentReviews = ({ reviews }: RecentReviewsProps) => {
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
      className="py-20 px-6 bg-verifirm-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recent Reviews</h2>
            <p className="text-muted-foreground">
              Read the latest company insights from our community
            </p>
          </div>
          <Link to="/reviews" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              See all reviews
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RecentReviews;
