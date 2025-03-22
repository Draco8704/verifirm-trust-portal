
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Upload, 
  FileUp, 
  ZapIcon, 
  Download, 
  Trash,
  AlertCircle,
  Check,
  ChevronDown,
  Info,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AIModelSelector from "./AIModelSelector";

const ResumeOptimizer = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [selectedModel, setSelectedModel] = useState("mistral-small-3.1-24b");
  const [optimizationsLeft, setOptimizationsLeft] = useState(10); 
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [optimizationComplete, setOptimizationComplete] = useState(false);
  const [optimizedContent, setOptimizedContent] = useState("");
  const [atsScore, setAtsScore] = useState<number>(0);
  const [keywordScore, setKeywordScore] = useState<number>(0);
  const [formatScore, setFormatScore] = useState<number>(0);
  const [optimizationFeedback, setOptimizationFeedback] = useState<string[]>([]);

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
      transition: {
        duration: 0.5
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setResumeFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
  };

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const handleOptimize = () => {
    if (!resumeFile || !jobDescription.trim() || optimizationsLeft <= 0) return;

    setIsOptimizing(true);
    setOptimizationProgress(0);
    
    // Reset previous results
    setAtsScore(0);
    setKeywordScore(0);
    setFormatScore(0);
    setOptimizationFeedback([]);

    // Simulate optimization process
    const interval = setInterval(() => {
      setOptimizationProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Simulate completion and results
            setIsOptimizing(false);
            setOptimizationComplete(true);
            setOptimizedContent("Your optimized resume content would appear here after processing by the selected AI model.");
            setOptimizationsLeft(prev => prev - 1);
            
            // Generate random scores for demo purposes
            const ats = Math.floor(Math.random() * 15) + 80; // Between 80-95
            const keyword = Math.floor(Math.random() * 30) + 65; // Between 65-95
            const format = Math.floor(Math.random() * 10) + 90; // Between 90-100
            
            setAtsScore(ats);
            setKeywordScore(keyword);
            setFormatScore(format);
            
            // Generate feedback based on scores
            const feedback = [];
            
            if (ats > 90) {
              feedback.push("Excellent ATS compatibility. Your resume will be seen by hiring managers.");
            } else if (ats > 80) {
              feedback.push("Good ATS compatibility. Some minor improvements could be made.");
            } else {
              feedback.push("Improve formatting to enhance ATS readability.");
            }
            
            if (keyword > 85) {
              feedback.push("Strong keyword matching with job description.");
            } else if (keyword > 70) {
              feedback.push("Consider adding more relevant keywords from the job description.");
            } else {
              feedback.push("Add more job-specific terminology to increase keyword matching.");
            }
            
            if (format > 95) {
              feedback.push("Perfect formatting for ATS systems.");
            } else {
              feedback.push("Simplified formatting to ensure ATS compatibility.");
            }
            
            setOptimizationFeedback(feedback);
            
            // Automatically switch to results tab
            setActiveTab("result");
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const handleDownload = () => {
    const blob = new Blob([optimizedContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized-resume.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-amber-600";
    return "text-red-600";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (score >= 75) return <Info className="h-4 w-4 text-amber-600" />;
    return <AlertTriangle className="h-4 w-4 text-red-600" />;
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
              <CardTitle className="text-2xl">Resume Optimizer</CardTitle>
              <CardDescription>Tailor your resume to the job and optimize for ATS systems</CardDescription>
            </div>
            <Badge variant="outline" className="px-3 py-1 gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span>{optimizationsLeft} optimizations remaining</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Select AI Model</h3>
            <AIModelSelector onSelect={setSelectedModel} selectedModel={selectedModel} />
          </div>

          {optimizationsLeft <= 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No optimizations remaining</AlertTitle>
              <AlertDescription>
                You have used all your free optimizations. Purchase more to continue using this feature.
              </AlertDescription>
              <div className="mt-3">
                <Button size="sm">Purchase Optimizations</Button>
              </div>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="result">Optimized Result</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4">
              <motion.div 
                className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-10 text-center space-y-4"
                variants={itemVariants}
              >
                {resumeFile ? (
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-verifirm-blue/10">
                      <FileText className="h-8 w-8 text-verifirm-blue" />
                    </div>
                    <div>
                      <p className="font-medium">{resumeFile.name}</p>
                      <p className="text-sm text-muted-foreground">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={handleRemoveFile}
                      className="gap-2"
                    >
                      <Trash className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium">Upload your resume</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Drag and drop your resume file (PDF or DOCX) or click to browse
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => document.getElementById('resume-upload')?.click()}
                      className="gap-2"
                    >
                      <FileUp className="h-4 w-4" />
                      Browse Files
                    </Button>
                    <input 
                      type="file" 
                      id="resume-upload" 
                      className="hidden" 
                      accept=".pdf,.docx" 
                      onChange={handleFileUpload}
                    />
                  </>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">Job Description</h3>
                <Textarea 
                  placeholder="Paste the job description here..." 
                  className="min-h-32"
                  value={jobDescription}
                  onChange={handleJobDescriptionChange}
                />
                <p className="text-xs text-muted-foreground">
                  For best results, include the full job description including requirements and responsibilities
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  disabled={!resumeFile || !jobDescription.trim() || isOptimizing || optimizationsLeft <= 0}
                  onClick={handleOptimize}
                >
                  {isOptimizing ? (
                    <>Optimizing your resume...</>
                  ) : (
                    <>
                      <ZapIcon className="h-4 w-4" />
                      Optimize Resume
                    </>
                  )}
                </Button>

                {isOptimizing && (
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Optimizing...</span>
                      <span>{Math.round(optimizationProgress)}%</span>
                    </div>
                    <Progress value={optimizationProgress} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      Analyzing resume structure and content with {selectedModel === "deepseek-r1-zero" ? "DeepSeek R1 Zero" : 
                        selectedModel === "mistral-small-3.1-24b" ? "Mistral Small 3.1 24B" : 
                        selectedModel === "qwen-qwq" ? "Qwen QwQ" : "Google Gemma 3 4B"}
                    </div>
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="result" className="space-y-4">
              {optimizationComplete ? (
                <motion.div variants={itemVariants} className="space-y-6">
                  <Alert className="bg-green-50 border-green-200">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Optimization Complete</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Your resume has been optimized for ATS systems. You can download the result below.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="border rounded-lg p-6 bg-muted/30">
                    <h3 className="font-medium mb-4">Optimization Results</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">ATS Compatibility Score</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">How well your resume will be parsed by Applicant Tracking Systems</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {getScoreIcon(atsScore)}
                          <span className={`font-medium ${getScoreColor(atsScore)}`}>{atsScore}%</span>
                        </div>
                      </div>
                      <Progress value={atsScore} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Keyword Match Score</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">How well your resume matches keywords from the job description</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {getScoreIcon(keywordScore)}
                          <span className={`font-medium ${getScoreColor(keywordScore)}`}>{keywordScore}%</span>
                        </div>
                      </div>
                      <Progress value={keywordScore} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Format Optimization</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">How well the resume is formatted for maximum readability</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {getScoreIcon(formatScore)}
                          <span className={`font-medium ${getScoreColor(formatScore)}`}>{formatScore}%</span>
                        </div>
                      </div>
                      <Progress value={formatScore} className="h-2" />
                    </div>
                    
                    {/* Feedback section */}
                    <div className="mt-6 space-y-2">
                      <h4 className="text-sm font-medium">Optimization Feedback</h4>
                      <ul className="space-y-2">
                        {optimizationFeedback.map((feedback, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>{feedback}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Optimized Resume Preview</h3>
                      <Button 
                        variant="outline" 
                        className="gap-2"
                        onClick={handleDownload}
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                    <div className="prose max-w-none border p-4 rounded bg-white min-h-32">
                      {optimizedContent}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  variants={itemVariants} 
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">No optimized resume yet</h3>
                  <p className="text-muted-foreground max-w-md">
                    Upload your resume and job description, then click "Optimize Resume" to get started
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("upload")}
                  >
                    Go to Upload
                  </Button>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <div className="w-full h-px bg-border"></div>
          <div className="flex justify-between items-center w-full text-sm">
            <p className="text-muted-foreground">
              Optimize your resume for specific job descriptions and ATS systems
            </p>
            <Button variant="outline" size="sm" className="h-8">
              Get more optimizations
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ResumeOptimizer;
