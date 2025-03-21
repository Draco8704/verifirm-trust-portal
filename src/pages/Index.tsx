import { CheckCircle, Shield, Search, Users, Building, Star, Globe, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import RecentReviews from "@/components/RecentReviews";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  // Featured companies data
  const featuredCompanies = [
    {
      id: "company-1",
      name: "Standard Bank",
      logo: "https://logo.clearbit.com/standardbank.co.za",
      location: "Johannesburg",
      industry: "Banking",
      category: "Finance",
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
      category: "Finance",
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
      category: "Retail",
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

  // How it works steps
  const steps = [
    {
      icon: Search,
      title: "Find Companies",
      description: "Search for companies you're interested in or browse by industry and location."
    },
    {
      icon: FileText,
      title: "Read Verified Reviews",
      description: "Get insights from real employees about company culture, salary, and work-life balance."
    },
    {
      icon: CheckCircle,
      title: "Make Informed Decisions",
      description: "Use authentic information to choose the right workplace for your career goals."
    },
    {
      icon: Users,
      title: "Share Your Experience",
      description: "Help others by sharing your own workplace experiences through verified reviews."
    }
  ];

  // Stats data
  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "Active Users",
      description: "Professionals using Verifirm monthly"
    },
    {
      icon: Building,
      value: "20K+",
      label: "Companies",
      description: "Companies with verified reviews"
    },
    {
      icon: Star,
      value: "250K+",
      label: "Reviews",
      description: "Authentic employee reviews"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global coverage and insights"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      position: "Senior Product Manager",
      company: "TechSolutions",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: "Verifirm helped me avoid a toxic workplace and find a company that truly values work-life balance. The verified reviews were spot-on!",
      rating: 5
    },
    {
      id: "testimonial-2",
      name: "David Mkhize",
      position: "Financial Analyst",
      company: "Global Finance",
      avatar: "https://randomuser.me/api/portraits/men/53.jpg",
      quote: "The detailed company insights on Verifirm gave me accurate expectations about the company culture before I even interviewed.",
      rating: 4
    },
    {
      id: "testimonial-3",
      name: "Thandi Nkosi",
      position: "Marketing Director",
      company: "CreativeMinds",
      avatar: "https://randomuser.me/api/portraits/women/57.jpg",
      quote: "As someone who changed careers, Verifirm was invaluable in helping me find companies with supportive environments for career switchers.",
      rating: 5
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How does Verifirm verify reviews?",
      answer: "We use a combination of email verification, company domain validation, and manual review to ensure all reviews come from actual employees or former employees of the companies."
    },
    {
      question: "Is Verifirm free to use?",
      answer: "Yes, basic access to company reviews and ratings is free. We also offer premium plans with additional features like salary insights, advanced filtering, and company comparisons."
    },
    {
      question: "Can companies remove negative reviews?",
      answer: "No, companies cannot remove reviews. However, they can respond to reviews and flag content that violates our guidelines for our team to review."
    },
    {
      question: "How often is company information updated?",
      answer: "Company profiles and information are updated regularly based on user submissions and our own research team. Review data is updated in real-time as new reviews are submitted."
    },
    {
      question: "Can I remain anonymous when posting a review?",
      answer: "Yes, all reviews are posted anonymously. While we verify your employment status, your identity is never revealed to the company or other users."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <FeaturedCompanies companies={featuredCompanies} />
        <HowItWorksSection steps={steps} />
        <StatsSection stats={stats} />
        <FeatureSection features={features} />
        <RecentReviews reviews={recentReviews} />
        <TestimonialSection testimonials={testimonials} />
        <FAQSection faqs={faqs} />
        <NewsletterSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
