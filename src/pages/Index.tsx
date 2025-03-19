
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CompanyCard from "@/components/CompanyCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Search, Users } from "lucide-react";

const Index = () => {
  // Featured companies data
  const featuredCompanies = [
    {
      id: "company-1",
      name: "Standard Bank",
      logo: "https://logo.clearbit.com/standardbank.co.za",
      location: "Johannesburg",
      industry: "Banking",
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />

        {/* Featured Companies Section */}
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
              {featuredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Recent Reviews Section */}
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
              {recentReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Verifirm</h2>
              <p className="text-muted-foreground">
                We're committed to providing you with the most accurate and helpful information
                about potential employers to help you make the best career decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="verifirm-card p-6 flex flex-col items-center text-center"
                >
                  <div className="p-3 rounded-full bg-verifirm-light-blue mb-4">
                    <feature.icon className="h-6 w-6 text-verifirm-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-24 px-6 bg-verifirm-blue/5 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-verifirm-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-verifirm-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto max-w-7xl relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to discover your ideal workplace?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who use Verifirm to make informed career decisions.
                Sign up today and gain access to authentic company reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get started for free
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View pricing plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
