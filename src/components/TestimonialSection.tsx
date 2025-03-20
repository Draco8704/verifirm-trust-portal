
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  // Render stars based on rating
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
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-muted-foreground">
            Real stories from professionals about their experiences with Verifirm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="verifirm-card p-6 animate-fadeIn"
            >
              <Quote className="h-8 w-8 text-verifirm-blue/20 mb-4" />
              
              <p className="italic text-muted-foreground mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-border">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
