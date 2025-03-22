
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Rocket, 
  MessageSquare, 
  Search, 
  Star, 
  Building,
  ArrowRight,
  Users,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeOptimizer from "@/components/tools/ResumeOptimizer";
import MessageGenerator from "@/components/tools/MessageGenerator";
import QuickApply from "@/components/tools/QuickApply";
import ATSScanner from "@/components/tools/ATSScanner";
import CompanyReviewForm from "@/components/reviews/CompanyReviewForm";

const JobseekerTools = () => {
  const [activeTab, setActiveTab] = useState("resume-optimizer");

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      
      <main className="py-20 px-6">
        <motion.div 
          className="container mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-3">
              <div className="flex items-center gap-1 text-sm font-medium text-verifirm-blue bg-verifirm-blue/10 rounded-full px-4 py-1">
                <Rocket className="h-4 w-4" />
                <span>Verifirm SA Tools</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Career Advancement Toolkit</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools to optimize your job search, improve your applications, and make informed career decisions
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 w-full">
                <TabsTrigger value="resume-optimizer" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden md:inline">Resume Optimizer</span>
                  <span className="inline md:hidden">Resume</span>
                </TabsTrigger>
                <TabsTrigger value="ats-scanner" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  <span className="hidden md:inline">ATS Scanner</span>
                  <span className="inline md:hidden">ATS</span>
                </TabsTrigger>
                <TabsTrigger value="message-generator" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden md:inline">Message Generator</span>
                  <span className="inline md:hidden">Message</span>
                </TabsTrigger>
                <TabsTrigger value="quick-apply" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span className="hidden md:inline">Quick Apply</span>
                  <span className="inline md:hidden">Apply</span>
                </TabsTrigger>
                <TabsTrigger value="company-review" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="hidden md:inline">Submit Review</span>
                  <span className="inline md:hidden">Review</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="resume-optimizer">
                <ResumeOptimizer />
              </TabsContent>
              
              <TabsContent value="ats-scanner">
                <ATSScanner />
              </TabsContent>
              
              <TabsContent value="message-generator">
                <MessageGenerator />
              </TabsContent>
              
              <TabsContent value="quick-apply">
                <QuickApply />
              </TabsContent>
              
              <TabsContent value="company-review">
                <CompanyReviewForm />
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="py-16 px-8 bg-verifirm-blue/5 rounded-2xl border border-verifirm-blue/10"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-3">Why Use Verifirm SA Tools?</h2>
              <p className="text-muted-foreground">
                We provide comprehensive resources designed specifically for the South African job market to help you advance your career
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col items-center text-center p-6"
              >
                <div className="h-14 w-14 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Star className="h-7 w-7 text-verifirm-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">South African Focus</h3>
                <p className="text-muted-foreground">
                  Tools and data specifically optimized for the South African job market and companies
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col items-center text-center p-6"
              >
                <div className="h-14 w-14 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-verifirm-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">Community Insights</h3>
                <p className="text-muted-foreground">
                  Honest company reviews from real employees to help you make informed decisions
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col items-center text-center p-6"
              >
                <div className="h-14 w-14 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-verifirm-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">Advanced Technology</h3>
                <p className="text-muted-foreground">
                  Powered by DeepSeek, Mistral, Qwen, and Gemma AI for best-in-class results
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default JobseekerTools;
