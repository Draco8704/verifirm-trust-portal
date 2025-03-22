
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  CircleDollarSign, 
  Building, 
  Map, 
  Briefcase, 
  Laptop, 
  Info,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

// Fake industry data for demo
const industries = [
  "Information Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail",
  "Marketing",
  "Legal",
  "Engineering",
  "Human Resources"
];

// Fake role data for demo
const roles = {
  "Information Technology": [
    "Software Developer",
    "DevOps Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "Product Manager",
    "QA Engineer",
    "IT Support Specialist"
  ],
  "Finance": [
    "Financial Analyst",
    "Accountant",
    "Investment Banker",
    "Financial Advisor",
    "Auditor",
    "Risk Analyst",
    "Credit Analyst"
  ],
  // Just two industries for the demo
  "default": ["Select an industry first"]
};

// Fake regions
const regions = [
  "Gauteng",
  "Western Cape",
  "KwaZulu-Natal",
  "Eastern Cape",
  "Free State",
  "North West",
  "Mpumalanga",
  "Limpopo",
  "Northern Cape"
];

// Fake experience levels
const experienceLevels = [
  "Entry Level (0-2 years)",
  "Junior (2-4 years)",
  "Intermediate (4-6 years)",
  "Senior (6-10 years)",
  "Expert (10+ years)"
];

const SalaryComparison = () => {
  const [industry, setIndustry] = useState("");
  const [role, setRole] = useState("");
  const [region, setRegion] = useState("Gauteng");
  const [experience, setExperience] = useState("Intermediate (4-6 years)");
  const [showResults, setShowResults] = useState(false);
  
  // Simulated salary data
  const [salaryData, setSalaryData] = useState({
    average: 0,
    low: 0,
    high: 0,
    median: 0,
    percentile75: 0,
    percentile25: 0,
    userCompare: 0
  });

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

  const handleIndustryChange = (value: string) => {
    setIndustry(value);
    setRole("");
  };

  const handleSearch = () => {
    if (!industry || !role) return;
    
    // Simulate salary data generation
    const baseSalary = Math.floor(Math.random() * 30000) + 20000;
    const industryMultiplier = industries.indexOf(industry) / 5 + 0.8;
    const experienceMultiplier = experienceLevels.indexOf(experience) / 2 + 0.7;
    const regionMultiplier = regions.indexOf(region) % 3 === 0 ? 1.2 : 1;
    
    const average = Math.round(baseSalary * industryMultiplier * experienceMultiplier * regionMultiplier / 1000) * 1000;
    const low = Math.round(average * 0.7 / 1000) * 1000;
    const high = Math.round(average * 1.3 / 1000) * 1000;
    const median = Math.round(average * 0.95 / 1000) * 1000;
    const percentile25 = Math.round(average * 0.8 / 1000) * 1000;
    const percentile75 = Math.round(average * 1.1 / 1000) * 1000;
    const userCompare = 0;
    
    setSalaryData({
      average,
      low,
      high,
      median,
      percentile25,
      percentile75,
      userCompare
    });
    
    setShowResults(true);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0
    }).format(amount);
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
              <CardTitle className="text-2xl">Salary Comparison Tool</CardTitle>
              <CardDescription>Compare salaries across industries, roles, and regions in South Africa</CardDescription>
            </div>
            <div className="p-2 rounded-full bg-verifirm-blue/10">
              <CircleDollarSign className="h-6 w-6 text-verifirm-blue" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={industry} onValueChange={handleIndustryChange}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => (
                    <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole} disabled={!industry}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  {(industry ? roles[industry as keyof typeof roles] || roles.default : roles.default).map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select a region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((reg) => (
                    <SelectItem key={reg} value={reg}>{reg}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((exp) => (
                    <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <Button 
              onClick={handleSearch} 
              className="w-full md:w-auto" 
              disabled={!industry || !role}
              size="lg"
            >
              Compare Salaries
            </Button>
          </motion.div>

          {showResults && (
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 space-y-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-between bg-muted/40 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className="p-2 rounded-full bg-verifirm-blue/10">
                    <Briefcase className="h-5 w-5 text-verifirm-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">{role}</h3>
                    <p className="text-sm text-muted-foreground">{industry} • {region}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Average Annual Salary</div>
                  <div className="text-2xl font-bold text-verifirm-blue">{formatCurrency(salaryData.average)}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground">Low Range</div>
                  <div className="text-xl font-medium">{formatCurrency(salaryData.low)}</div>
                  <div className="text-xs text-muted-foreground">25th Percentile</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground">Median</div>
                  <div className="text-xl font-medium">{formatCurrency(salaryData.median)}</div>
                  <div className="text-xs text-muted-foreground">50th Percentile</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground">High Range</div>
                  <div className="text-xl font-medium">{formatCurrency(salaryData.high)}</div>
                  <div className="text-xs text-muted-foreground">75th Percentile</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Salary Range</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{formatCurrency(salaryData.low)}</span>
                    <span>to</span>
                    <span className="text-sm text-muted-foreground">{formatCurrency(salaryData.high)}</span>
                  </div>
                </div>
                <div className="relative pt-6">
                  <div className="absolute left-0 right-0 h-2 bg-muted rounded-full">
                    <div 
                      className="absolute left-0 h-2 bg-gradient-to-r from-blue-400 to-verifirm-blue rounded-full" 
                      style={{ width: '100%' }}
                    ></div>
                    <div 
                      className="absolute h-4 w-4 bg-white border-2 border-verifirm-blue rounded-full -top-1 -ml-2"
                      style={{ left: '25%' }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="block w-full h-full"></span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>25th Percentile: {formatCurrency(salaryData.percentile25)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div 
                      className="absolute h-4 w-4 bg-white border-2 border-verifirm-blue rounded-full -top-1 -ml-2"
                      style={{ left: '50%' }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="block w-full h-full"></span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Median: {formatCurrency(salaryData.median)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div 
                      className="absolute h-4 w-4 bg-white border-2 border-verifirm-blue rounded-full -top-1 -ml-2"
                      style={{ left: '75%' }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="block w-full h-full"></span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>75th Percentile: {formatCurrency(salaryData.percentile75)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 bg-verifirm-blue/5 p-4 rounded-lg border border-verifirm-blue/10">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  About this data
                </h3>
                <p className="text-sm text-muted-foreground">
                  Salary data is based on anonymously submitted salary information from employees in South Africa.
                  The data is updated regularly and reflects current market conditions.
                </p>
                <div className="flex flex-col xs:flex-row gap-2">
                  <Badge variant="outline" className="flex items-center gap-1 w-fit">
                    <Building className="h-3 w-3" />
                    <span>247 companies</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 w-fit">
                    <Laptop className="h-3 w-3" />
                    <span>1,853 salary reports</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 w-fit">
                    <Map className="h-3 w-3" />
                    <span>Last updated June 2023</span>
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Compare Your Salary</h3>
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    placeholder="Enter your current salary" 
                    className="max-w-xs"
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setSalaryData({...salaryData, userCompare: value});
                    }}
                  />
                  <Button variant="outline">Compare</Button>
                </div>
                {salaryData.userCompare > 0 && (
                  <div className="mt-4">
                    <p className="text-sm">
                      Your salary of {formatCurrency(salaryData.userCompare)} is 
                      <span className={`font-medium ${salaryData.userCompare > salaryData.average ? 'text-green-600' : 'text-amber-600'} mx-1`}>
                        {salaryData.userCompare > salaryData.average ? 'above' : 'below'} average
                      </span> 
                      for this role and experience level.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <div className="w-full h-px bg-border"></div>
          <div className="flex justify-between items-center w-full text-sm">
            <p className="text-muted-foreground">
              Make informed salary negotiations with accurate, up-to-date data
            </p>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              View detailed reports <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SalaryComparison;
