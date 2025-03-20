
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Link as LinkIcon, 
  Building2, 
  Users, 
  Clock, 
  BriefcaseBusiness,
  Globe,
  CheckCircle2,
  XCircle,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState<any>(null);
  const [sortedReviews, setSortedReviews] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, we would fetch data from API
    // This is a mock implementation
    const fetchCompany = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockCompany = {
          id: id,
          name: "Standard Bank",
          logo: "https://logo.clearbit.com/standardbank.co.za",
          coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          description: "Standard Bank Group is the largest African bank by assets, operating in 20 countries across Africa and other key markets around the world.",
          website: "https://www.standardbank.co.za",
          industry: "Banking",
          founded: "1862",
          headquarters: "Johannesburg, South Africa",
          size: "10,000+ employees",
          type: "Public Company",
          specialties: ["Retail Banking", "Corporate & Investment Banking", "Wealth Management", "Insurance"],
          rating: {
            overall: 4.2,
            workLife: 4.0,
            salary: 3.8,
            management: 3.9,
            culture: 4.3,
          },
          ratingBreakdown: [
            { rating: 5, percentage: 45 },
            { rating: 4, percentage: 30 },
            { rating: 3, percentage: 15 },
            { rating: 2, percentage: 7 },
            { rating: 1, percentage: 3 },
          ],
          reviewCount: 324,
          pros: [
            "Competitive salary and benefits",
            "Good work-life balance",
            "Opportunities for growth",
            "Excellent training programs"
          ],
          cons: [
            "Bureaucratic processes",
            "High-pressure environment",
            "Difficult to achieve work-life balance in some departments"
          ],
          reviews: [
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
            {
              id: "review-3",
              title: "Solid banking institution with good benefits",
              rating: 4,
              date: "2023-07-23",
              position: "Financial Analyst",
              location: "Pretoria",
              employmentStatus: "Current Employee",
              pros: "Competitive salary with excellent benefits package including medical aid and retirement fund. Strong corporate structure and brand recognition.",
              cons: "Career progression can be slow unless you have strong connections. Some departments have outdated processes that need modernization.",
              advice: "Focus more on digital transformation and empowering younger employees with fresh ideas.",
              helpful: 12,
              verified: true,
            }
          ]
        };
        
        // Adding a more negative review for demonstration
        mockCompany.reviews.push({
          id: "review-4",
          title: "Stressful environment with management issues",
          rating: 2,
          date: "2023-08-05",
          position: "Customer Service Representative",
          location: "Johannesburg",
          employmentStatus: "Former Employee",
          pros: "Good salary and benefits package. Some nice colleagues.",
          cons: "Extremely stressful work environment. Lack of support from management. Unrealistic targets and constant pressure.",
          advice: "Improve management training and be more realistic with performance expectations.",
          helpful: 22,
          verified: true,
        });
        
        setCompany(mockCompany);
        
        // Sort reviews - negative ratings (1-3) first, then positive ratings (4-5)
        const negativeSortedReviews = [...mockCompany.reviews].sort((a, b) => {
          // First separate negative from positive
          const aIsNegative = a.rating <= 3;
          const bIsNegative = b.rating <= 3;
          
          if (aIsNegative && !bIsNegative) return -1;
          if (!aIsNegative && bIsNegative) return 1;
          
          // If both are in the same category (negative or positive),
          // sort by rating in ascending order
          return a.rating - b.rating;
        });
        
        setSortedReviews(negativeSortedReviews);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsLoading(false);
      }
    };

    fetchCompany();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Loading company profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Company Not Found</h2>
            <p className="text-muted-foreground">The company you're looking for doesn't exist or has been removed.</p>
            <Button className="mt-6" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating)
              ? "text-verifirm-yellow fill-verifirm-yellow"
              : "text-muted stroke-muted"
          }`}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
          <img 
            src={company.coverImage}
            alt={`${company.name} cover`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Company Header */}
        <div className="relative -mt-20 z-10 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h1 className="text-3xl font-bold">{company.name}</h1>
                        <div className="flex items-center gap-1 mt-2">
                          {renderStars(company.rating.overall)}
                          <span className="ml-2 font-medium">{company.rating.overall.toFixed(1)}</span>
                          <span className="text-muted-foreground ml-1">({company.reviewCount} reviews)</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline">
                          Write a Review
                        </Button>
                        <Button>
                          Follow
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center text-sm gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{company.headquarters}</span>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-verifirm-blue hover:underline">
                          {company.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span>{company.industry}</span>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{company.size}</span>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Founded {company.founded}</span>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
                        <span>{company.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-medium mb-2">About</h3>
                  <p className="text-muted-foreground">{company.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.specialties.map((specialty: string, index: number) => (
                        <Badge key={index} variant="secondary">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Content */}
        <div className="px-6 py-8">
          <div className="container mx-auto max-w-7xl">
            <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="salaries">Salaries</TabsTrigger>
              </TabsList>
              
              <TabsContent value="reviews" className="space-y-8">
                {/* Reviews Summary Section */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Reviews Summary</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Rating Distribution */}
                      <div className="col-span-1">
                        <h3 className="font-medium mb-4">Rating Distribution</h3>
                        <div className="space-y-3">
                          {company.ratingBreakdown.map((item: any, index: number) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="flex items-center gap-1 w-16">
                                <span className="font-medium">{item.rating}</span>
                                <Star className="h-4 w-4 text-verifirm-yellow fill-verifirm-yellow" />
                              </div>
                              <Progress value={item.percentage} className="h-2 flex-1" />
                              <span className="text-sm text-muted-foreground w-8">{item.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Category Ratings */}
                      <div className="col-span-1">
                        <h3 className="font-medium mb-4">Category Ratings</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Work-Life Balance</span>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{company.rating.workLife.toFixed(1)}</span>
                              {renderStars(company.rating.workLife)}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Salary & Benefits</span>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{company.rating.salary.toFixed(1)}</span>
                              {renderStars(company.rating.salary)}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Management</span>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{company.rating.management.toFixed(1)}</span>
                              {renderStars(company.rating.management)}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Culture</span>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{company.rating.culture.toFixed(1)}</span>
                              {renderStars(company.rating.culture)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pros & Cons */}
                      <div className="col-span-1">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium mb-2 flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4 text-verifirm-green" />
                              <span>Pros</span>
                            </h3>
                            <ul className="space-y-2">
                              {company.pros.map((pro: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-verifirm-green mt-0.5" />
                                  <span className="text-sm">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-medium mb-2 flex items-center gap-1">
                              <ThumbsDown className="h-4 w-4 text-destructive" />
                              <span>Cons</span>
                            </h3>
                            <ul className="space-y-2">
                              {company.cons.map((con: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <XCircle className="h-4 w-4 text-destructive mt-0.5" />
                                  <span className="text-sm">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Reviews List */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">
                        Employee Reviews
                        <span className="ml-2 text-lg font-normal text-muted-foreground">
                          ({company.reviewCount})
                        </span>
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Showing negative reviews first, followed by positive reviews
                      </p>
                    </div>
                    <Button variant="outline">
                      Write a Review
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {sortedReviews.map((review: any, index: number) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <ReviewCard review={review} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="overview">
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden p-8">
                  <h2 className="text-2xl font-bold mb-6">Company Overview</h2>
                  <p className="text-muted-foreground mb-6">
                    {company.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Key Information</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Website:</span>
                          <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-verifirm-blue hover:underline">
                            {company.website.replace(/^https?:\/\//, '')}
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Headquarters:</span>
                          <span>{company.headquarters}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Industry:</span>
                          <span>{company.industry}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Founded:</span>
                          <span>{company.founded}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Company Size:</span>
                          <span>{company.size}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Type:</span>
                          <span>{company.type}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.specialties.map((specialty: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="salaries">
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden p-8">
                  <h2 className="text-2xl font-bold mb-6">Salary Information</h2>
                  <p className="text-muted-foreground">
                    Salary information is available to premium subscribers. Upgrade your account to view salary data for this company.
                  </p>
                  
                  <Button className="mt-6">
                    Upgrade to Premium
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyProfile;
