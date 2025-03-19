
import { CheckCircle, Shield, Search, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import RecentReviews from "@/components/RecentReviews";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  // Featured companies data
  const featuredCompanies = [
    {
      id: "company-1",
      name: "Standard Bank",
      logo: "https://logo.clearbit.com/standardbank.co.za",
      location: "Johannesburg",
      industry: "Banking",
      category: "Finance", // Added the missing category property
      size: "10,000+ employees",
      rating: 4.2,
      reviewCount: 324,
      trending: true,
    },
    {
      id: "company-2",
      name: "Discovery Limited",
      logo: "https://logo.clearbit.com/discovery.co.za",
      location: "Sandton",
      industry: "Insurance",
      category: "Finance", // Added the missing category property
      size: "5,000-10,000 employees",
      rating: 4.0,
      reviewCount: 213,
      new: true,
    },
    {
      id: "company-3",
      name: "Woolworths Holdings",
      logo: "https://logo.clearbit.com/woolworths.co.za",
      location: "Cape Town",
      industry: "Retail",
      category: "Retail", // Added the missing category property
      size: "5,000-10,000 employees",
      rating: 3.8,
      reviewCount: 186,
    },
  ];

  // Recent reviews data
  const recentReviews = [
    {
      id: "review-1",
      title: "Great place to build a career",
      rating: 4,
      date: "2023-05-12",
      position: "Software Engineer",
      location: "Johannesburg",
      employmentStatus: "Current Employee",
      pros: "Great work-life balance, competitive salary, and excellent benefits. Management respects employee input and there are plenty of growth opportunities.",
      cons: "Project deadlines can be tight sometimes. The company is large, so bureaucracy can slow down some processes.",
      advice: "Continue to focus on employee growth and development programs.",
      helpful: 15,
      verified: true,
    },
    {
      id: "review-2",
      title: "Challenging but rewarding experience",
      rating: 3,
      date: "2023-06-18",
      position: "Marketing Specialist",
      location: "Cape Town",
      employmentStatus: "Former Employee",
      pros: "Excellent exposure to different projects and skills. Good company culture with team-building activities.",
      cons: "Work-life balance could be better. The workload can be overwhelming during peak seasons.",
      advice: "Consider adjusting workloads during busy periods and hiring more team members.",
      helpful: 8,
      verified: false,
    },
  ];

  // Features section content
  const features = [
    {
      icon: Shield,
      title: "Verified Reviews",
      description: "All reviews are from verified employees who have real experience within the company."
    },
    {
      icon: Search,
      title: "Detailed Insights",
      description: "Get comprehensive information about company culture, management, and benefits."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Join a community of professionals sharing authentic workplace experiences."
    },
    {
      icon: CheckCircle,
      title: "Trusted Platform",
      description: "We prioritize accuracy and authenticity to help you make informed career decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <FeaturedCompanies companies={featuredCompanies} />
        <RecentReviews reviews={recentReviews} />
        <FeatureSection features={features} />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
