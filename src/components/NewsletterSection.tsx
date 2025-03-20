
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-verifirm-gray">
      <div className="container mx-auto max-w-3xl">
        <div className="verifirm-card p-8 md:p-12 text-center">
          <div className="mx-auto w-14 h-14 bg-verifirm-light-blue rounded-full flex items-center justify-center mb-6">
            <Mail className="h-7 w-7 text-verifirm-blue" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Industry Insights
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest workplace trends, company reviews,
            and career advancement tips delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading} className="min-w-[120px]">
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
