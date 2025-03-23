import { motion } from "framer-motion";
import { 
  FileText, 
  DollarSign, 
  ShieldAlert, 
  MessageSquare, 
  Search, 
  Rocket, 
  UserCheck,
  ArrowRight,
  Linkedin
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeOptimizer from "@/components/tools/ResumeOptimizer";
import MessageGenerator from "@/components/tools/MessageGenerator";
import SalaryComparison from "@/components/tools/SalaryComparison";
import CompanyRedFlagsDetector from "@/components/tools/CompanyRedFlagsDetector";
import ATSScanner from "@/components/tools/ATSScanner";
import QuickApply from "@/components/tools/QuickApply";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const JobseekerTools = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tool") || "resume-optimizer";

  useEffect(() => {
    const updateTab = (tab: string) => {
      setSearchParams({ tool: tab });
    };
    
    if (!searchParams.get("tool")) {
      updateTab(initialTab);
    }
  }, [initialTab, searchParams, setSearchParams]);

  const handleTabChange = (value: string) => {
    setSearchParams({ tool: value });
  };
  
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

  const tools = [
    {
      id: "resume-optimizer",
      name: "Resume Optimizer",
      description: "AI-powered resume optimization for ATS systems",
      icon: FileText,
      component: ResumeOptimizer,
      new: false
    },
    {
      id: "message-generator",
      name: "LinkedIn Message Generator",
      description: "LinkedIn Message Composer to Hiring Managers",
      icon: MessageSquare,
      component: MessageGenerator,
      new: false
    },
    {
      id: "salary-comparison",
      name: "Salary Comparison",
      description: "Compare salaries across industries and roles",
      icon: DollarSign,
      component: SalaryComparison,
      new: true
    },
    {
      id: "red-flags-detector",
      name: "Red Flags Detector",
      description: "Identify potential workplace issues before applying",
      icon: ShieldAlert,
      component: CompanyRedFlagsDetector,
      new: true
    },
    {
      id: "ats-scanner",
      name: "ATS Scanner",
      description: "Check if your resume will pass ATS systems",
      icon: Search,
      component: ATSScanner,
      new: false
    },
    {
      id: "quick-apply",
      name: "Quick Apply",
      description: "Apply to multiple jobs with one click",
      icon: Rocket,
      component: QuickApply,
      new: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <motion.main 
        className="flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-gradient-to-b from-verifirm-blue/10 to-transparent pt-12 pb-8 px-4">
          <div className="container max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Jobseeker Tools</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Comprehensive tools to help you uncover workplace truths and ATS-proof your future
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/50 py-1 px-2 flex items-center gap-1">
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>10 free optimizations for new users</span>
                </Badge>
                <Badge variant="outline" className="bg-white/50 py-1 px-2">
                  Updated weekly with new features
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <Tabs 
            defaultValue={initialTab} 
            onValueChange={handleTabChange}
            className="space-y-8"
          >
            <div className="flex justify-between items-start">
              <TabsList className="flex overflow-x-auto pb-2 h-auto flex-wrap gap-2">
                {tools.map(tool => (
                  <TabsTrigger 
                    key={tool.id} 
                    value={tool.id}
                    className="h-auto py-2 px-4 flex items-center gap-2 relative"
                  >
                    <tool.icon className="h-4 w-4" />
                    <span>{tool.name}</span>
                    {tool.new && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
                        New
                      </span>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="hidden md:block">
                <Button size="sm" variant="outline" className="gap-1">
                  <span>Premium Features</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
            
            {tools.map(tool => (
              <TabsContent key={tool.id} value={tool.id} className="min-h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <tool.component />
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 py-16">
          <Card className="bg-verifirm-blue/5 border-verifirm-blue/20">
            <CardHeader>
              <CardTitle>Get more out of Verifirm</CardTitle>
              <CardDescription>
                Upgrade to Premium for unlimited access to all tools and features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-verifirm-blue/20">
                      <FileText className="h-4 w-4 text-verifirm-blue" />
                    </div>
                    <h3 className="font-medium">Unlimited Optimizations</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Optimize your resume for every job application without limits
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-verifirm-blue/20">
                      <DollarSign className="h-4 w-4 text-verifirm-blue" />
                    </div>
                    <h3 className="font-medium">Advanced Salary Insights</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get detailed salary breakdowns by experience, company, and location
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-verifirm-blue/20">
                      <Rocket className="h-4 w-4 text-verifirm-blue" />
                    </div>
                    <h3 className="font-medium">Priority Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get personalized assistance with your job search and applications
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2">
                Upgrade to Premium <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default JobseekerTools;
