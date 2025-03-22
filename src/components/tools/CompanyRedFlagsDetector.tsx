
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Building, 
  Search, 
  AlertTriangle, 
  Info, 
  Check, 
  X, 
  TrendingDown, 
  Clock,
  Users,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface RedFlag {
  category: string;
  severity: "high" | "medium" | "low";
  description: string;
  frequency: number;
  icon: React.ElementType;
}

const CompanyRedFlagsDetector = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [company, setCompany] = useState({
    name: "",
    logo: "",
    industry: "",
    location: ""
  });
  const [redFlags, setRedFlags] = useState<RedFlag[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [searchProgress, setSearchProgress] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const exampleCompanies = [
    "Standard Bank",
    "Discovery Limited",
    "Woolworths Holdings",
    "MTN Group",
    "Sasol Limited",
    "FNB",
    "Vodacom",
    "MultiChoice",
    "Pick n Pay",
    "Nedbank Group"
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchProgress(0);
    setShowResults(false);
    
    // Simulate search progress
    const interval = setInterval(() => {
      setSearchProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Generate fake company data
          const selectedCompany = {
            name: searchQuery,
            logo: "https://ui-avatars.com/api/?name=" + encodeURIComponent(searchQuery) + "&background=0D8ABC&color=fff",
            industry: ["Finance", "Retail", "Technology", "Healthcare", "Manufacturing"][Math.floor(Math.random() * 5)],
            location: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"][Math.floor(Math.random() * 5)]
          };
          
          // Generate random red flags
          const possibleFlags: RedFlag[] = [
            {
              category: "Work-Life Balance",
              severity: "high",
              description: "Multiple reviews mention consistently working 60+ hours per week with no compensation",
              frequency: Math.floor(Math.random() * 30) + 70,
              icon: Clock
            },
            {
              category: "Management",
              severity: "medium",
              description: "Reported micromanagement and lack of autonomy for employees",
              frequency: Math.floor(Math.random() * 40) + 30,
              icon: Users
            },
            {
              category: "Salary",
              severity: "low",
              description: "Below market average compensation for similar roles in the industry",
              frequency: Math.floor(Math.random() * 30) + 20,
              icon: DollarSign
            },
            {
              category: "Career Growth",
              severity: "medium",
              description: "Limited promotion opportunities reported by long-term employees",
              frequency: Math.floor(Math.random() * 50) + 30,
              icon: TrendingDown
            },
            {
              category: "Company Culture",
              severity: "high",
              description: "Reports of toxic workplace culture and favoritism",
              frequency: Math.floor(Math.random() * 40) + 60,
              icon: AlertTriangle
            }
          ];
          
          // Randomly select 2-4 red flags
          const numFlags = Math.floor(Math.random() * 3) + 2;
          const shuffledFlags = [...possibleFlags].sort(() => 0.5 - Math.random());
          const selectedFlags = shuffledFlags.slice(0, numFlags);
          
          // Calculate overall score (higher is better, lower means more red flags)
          const severityWeights = { high: 3, medium: 2, low: 1 };
          const totalSeverity = selectedFlags.reduce(
            (sum, flag) => sum + severityWeights[flag.severity] * (flag.frequency / 100), 
            0
          );
          const maxPossibleSeverity = numFlags * 3; // if all flags were high severity and 100% frequency
          const normalizedScore = Math.max(0, Math.min(100, 100 - (totalSeverity / maxPossibleSeverity * 100)));
          
          setCompany(selectedCompany);
          setRedFlags(selectedFlags);
          setOverallScore(Math.round(normalizedScore));
          setShowResults(true);
          setIsSearching(false);
          
          return 100;
        }
        return newProgress;
      });
    }, 100);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-600 bg-red-50";
      case "medium": return "text-amber-600 bg-amber-50";
      case "low": return "text-yellow-600 bg-yellow-50";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="shadow-lg border-verifirm-blue/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Company Red Flags Detector</CardTitle>
              <CardDescription>Identify potential workplace issues before accepting a job offer</CardDescription>
            </div>
            <div className="p-2 rounded-full bg-red-100">
              <ShieldAlert className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for a company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12"
              />
              <Button 
                className="absolute right-1 top-1 h-8"
                size="sm"
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="text-muted-foreground">Examples:</span>
              {exampleCompanies.slice(0, 5).map((company) => (
                <button
                  key={company}
                  className="text-verifirm-blue hover:underline"
                  onClick={() => setSearchQuery(company)}
                >
                  {company}
                </button>
              ))}
            </div>
          </motion.div>

          {isSearching && (
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Searching for red flags...</span>
                <span>{Math.round(searchProgress)}%</span>
              </div>
              <Progress value={searchProgress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Analyzing company reviews, employee feedback, and industry reports
              </p>
            </motion.div>
          )}

          {showResults && (
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
                <div className="flex-shrink-0">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{company.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Building className="h-3.5 w-3.5" />
                      {company.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {company.location}
                    </span>
                  </div>
                </div>
                <div className="ml-auto text-center">
                  <div className="text-sm text-muted-foreground mb-1">Red Flag Score</div>
                  <div className={`text-2xl font-bold ${getScoreColor(overallScore)}`}>
                    {overallScore}/100
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">
                  Detected Red Flags
                </h3>
                <div className="space-y-3">
                  {redFlags.length > 0 ? (
                    redFlags.map((flag, index) => (
                      <div 
                        key={index} 
                        className="border rounded-lg p-4 flex gap-4"
                      >
                        <div className={`p-2 rounded-full ${getSeverityColor(flag.severity).split(' ')[1]}`}>
                          <flag.icon className={`h-5 w-5 ${getSeverityColor(flag.severity).split(' ')[0]}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{flag.category}</h4>
                            <div className={`text-xs px-2 py-0.5 rounded-full ${getSeverityColor(flag.severity)}`}>
                              {flag.severity.charAt(0).toUpperCase() + flag.severity.slice(1)} Severity
                            </div>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            {flag.description}
                          </p>
                          <div className="mt-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Mentioned in reviews</span>
                              <span>{flag.frequency}%</span>
                            </div>
                            <Progress value={flag.frequency} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 border rounded-lg">
                      <Check className="h-12 w-12 text-green-500 mx-auto mb-2" />
                      <h4 className="text-lg font-medium">No Red Flags Detected</h4>
                      <p className="text-muted-foreground">
                        Based on our analysis, this company has no significant red flags
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4" />
                  What to Consider
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Research thoroughly and look beyond these automated findings</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ask specific questions during interviews about these potential issues</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Consider department-specific differences - issues may vary across teams</span>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Don't make decisions based solely on these findings</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <div className="w-full h-px bg-border"></div>
          <div className="flex justify-between items-center w-full text-sm">
            <p className="text-muted-foreground">
              Data based on anonymous employee reviews and industry analysis
            </p>
            <Button variant="outline" size="sm" className="h-8">
              View all company insights
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CompanyRedFlagsDetector;
