import { CheckCircle, Shield, Search, Users, Building, Star, Globe, FileText, Rocket, ArrowRight, Linkedin } from "lucide-react";
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
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      title: "ATS Optimization",
      description: "Ensure your resume gets past automated screening systems with our AI tools."
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
      title: "Optimize Your Resume",
      description: "Use our AI tools to make your resume ATS-friendly and tailored to specific jobs."
    },
    {
      icon: Users,
      title: "Apply with Confidence",
      description: "Apply to jobs knowing you have accurate company insights and an optimized resume."
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
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
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
      question: "How does the Resume Optimizer work?",
      answer: "Our Resume Optimizer uses AI to analyze your resume against job descriptions, identifying keyword gaps and formatting issues that might prevent ATS systems from properly reading your resume. It then suggests improvements to increase your chances of getting past automated screening."
    },
    {
      question: "How many resume optimizations do I get for free?",
      answer: "New users receive 10 free resume optimizations. After that, you can purchase additional optimizations starting at R10 per optimization, with bundle discounts available."
    },
    {
      question: "Can I remain anonymous when posting a review?",
      answer: "Yes, all reviews are posted anonymously. While we verify your employment status, your identity is never revealed to the company or other users."
    }
  ];

  // New tools data
  const tools = [
    {
      title: "Resume Optimizer",
      description: "AI-powered resume optimization for ATS systems",
      icon: FileText,
      link: "/tools"
    },
    {
      title: "Salary Comparison",
      description: "Compare salaries across industries and roles",
      icon: Star,
      link: "/tools"
    },
    {
      title: "Company Red Flags",
      description: "Identify potential workplace issues before applying",
      icon: Shield,
      link: "/tools"
    },
    {
      title: "LinkedIn Message Generator",
      description: "LinkedIn Message Composer to Hiring Managers",
      icon: Linkedin,
      link: "/tools"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        {/* Career tools banner with new slogan */}
        <div className="py-6 px-4 bg-verifirm-blue/5 border-y border-verifirm-blue/10">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-verifirm-blue/10 p-2 rounded-full">
                  <Rocket className="h-6 w-6 text-verifirm-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Uncover the workplace truth. ATS-proof your future.</h3>
                  <p className="text-muted-foreground">AI-powered resume optimization, salary tools, company red flags detector</p>
                </div>
              </div>
              <Link to="/tools">
                <Button className="gap-2">
                  Explore Tools <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tools Grid Section */}
        <section className="py-12 px-6 bg-gradient-to-b from-white to-verifirm-blue/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Career Advancement Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive suite of tools helps you make informed career decisions and optimize your job search process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-verifirm-blue/10 inline-block mb-4">
                    <tool.icon className="h-6 w-6 text-verifirm-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <Link to={tool.link} className="text-verifirm-blue hover:underline flex items-center gap-1">
                    Try now <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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
