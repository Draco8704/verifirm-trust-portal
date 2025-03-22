
import { useState, useRef } from "react";
import { 
  Upload, 
  File, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  Sparkles,
  FileText,
  Link
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

// AI Model options
const AI_MODELS = [
  { id: "deepseek", name: "DeepSeek R1 Zero", description: "Best for technical roles" },
  { id: "mistral", name: "Mistral Small 3.1 24B", description: "Great for all-around optimization" },
  { id: "qwen", name: "Qwen QwQ", description: "Specialized for creative positions" },
  { id: "gemma", name: "Google Gemma 3 4B", description: "Entry-level position focus" }
];

const ResumeOptimizer = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [selectedModel, setSelectedModel] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [optimizedResumeUrl, setOptimizedResumeUrl] = useState<string | null>(null);
  const [usageCount, setUsageCount] = useState(10); // Starting with 10 free optimizations
  const [jobDescriptionSource, setJobDescriptionSource] = useState<"text" | "url">("text");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check if file is PDF or DOCX
      if (file.type === "application/pdf" || 
          file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setResumeFile(file);
      } else {
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF or DOCX file",
          variant: "destructive"
        });
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const simulateOptimization = () => {
    if (!resumeFile) {
      toast({
        title: "Missing resume",
        description: "Please upload your resume first",
        variant: "destructive"
      });
      return;
    }

    if (!selectedModel) {
      toast({
        title: "Missing AI model",
        description: "Please select an AI model for optimization",
        variant: "destructive"
      });
      return;
    }

    if (!jobDescription && jobDescriptionSource === "text") {
      toast({
        title: "Missing job description",
        description: "Please provide a job description for better optimization",
        variant: "destructive"
      });
      return;
    }

    if (!jobUrl && jobDescriptionSource === "url") {
      toast({
        title: "Missing job URL",
        description: "Please provide a job posting URL",
        variant: "destructive"
      });
      return;
    }

    if (usageCount <= 0) {
      toast({
        title: "No optimizations remaining",
        description: "Please purchase additional optimizations",
        variant: "destructive"
      });
      return;
    }

    // Simulate optimization process
    setIsProcessing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >=
         100) {
          clearInterval(interval);
          setIsProcessing(false);
          // Generate a random ATS score between 78-98
          const score = Math.floor(Math.random() * 21) + 78;
          setAtsScore(score);
          setOptimizedResumeUrl("#"); // Would be a real URL in production
          setUsageCount(prev => prev - 1);
          setActiveTab("results");
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Resume Optimizer</CardTitle>
            <CardDescription>Optimize your resume for ATS systems</CardDescription>
          </div>
          <Badge variant="outline" className="px-3 py-1">
            <span className="font-semibold">{usageCount}</span> optimizations remaining
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="optimize" disabled={!resumeFile}>Optimize</TabsTrigger>
            <TabsTrigger value="results" disabled={!optimizedResumeUrl}>Results</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <div className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                 onClick={triggerFileInput}>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept=".pdf,.docx" 
                onChange={handleFileUpload}
              />
              <div className="flex flex-col items-center gap-3">
                <Upload className="h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">Upload your resume</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Drag and drop or click to upload your resume (PDF or DOCX format)
                </p>
              </div>
            </div>

            {resumeFile && (
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <File className="h-8 w-8 text-verifirm-blue" />
                <div className="flex-1">
                  <p className="font-medium truncate">{resumeFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            )}

            <div className="flex justify-end">
              <Button 
                onClick={() => setActiveTab("optimize")} 
                disabled={!resumeFile}
                className="gap-2"
              >
                Continue <CheckCircle className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="optimize" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ai-model">Select AI Model</Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger id="ai-model">
                      <SelectValue placeholder="Choose an AI model" />
                    </SelectTrigger>
                    <SelectContent>
                      {AI_MODELS.map(model => (
                        <SelectItem key={model.id} value={model.id}>
                          <div className="flex flex-col">
                            <span>{model.name}</span>
                            <span className="text-xs text-muted-foreground">{model.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label>Job Description</Label>
                    <div className="flex ml-auto">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={jobDescriptionSource === "text" ? "bg-muted" : ""}
                        onClick={() => setJobDescriptionSource("text")}
                      >
                        <FileText className="h-4 w-4 mr-1" /> Text
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={jobDescriptionSource === "url" ? "bg-muted" : ""}
                        onClick={() => setJobDescriptionSource("url")}
                      >
                        <Link className="h-4 w-4 mr-1" /> URL
                      </Button>
                    </div>
                  </div>

                  {jobDescriptionSource === "text" ? (
                    <Textarea 
                      placeholder="Paste the job description here for better optimization results"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="min-h-[150px]"
                    />
                  ) : (
                    <Input
                      placeholder="Enter the URL of the job posting"
                      value={jobUrl}
                      onChange={(e) => setJobUrl(e.target.value)}
                    />
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-medium mb-2">Optimization Focus</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Keyword optimization for ATS systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Format improvement for readability
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Content enhancement based on job requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Skills and experience highlighting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      South African market-specific optimization
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4 bg-verifirm-blue/5">
                  <h3 className="font-medium mb-2">Why optimize with Verifirm?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our AI-powered optimization system ensures your resume gets past Applicant Tracking Systems and stands out to hiring managers.
                  </p>
                  <div className="flex items-center text-sm text-verifirm-blue">
                    <Sparkles className="h-4 w-4 mr-1" />
                    <span>9.7x higher interview chance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("upload")}>
                Back
              </Button>
              <Button onClick={simulateOptimization} disabled={isProcessing}>
                {isProcessing ? "Optimizing..." : "Optimize Resume"}
              </Button>
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-center text-muted-foreground">
                  Analyzing and optimizing your resume...
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            {atsScore !== null && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center p-6 border rounded-lg bg-muted/20">
                    <h3 className="text-lg font-medium mb-2">ATS Compatibility Score</h3>
                    <div className="relative inline-flex">
                      <svg className="w-36 h-36" viewBox="0 0 100 100">
                        <circle 
                          className="text-muted stroke-current" 
                          strokeWidth="10" 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="transparent"
                        ></circle>
                        <circle 
                          className="text-verifirm-blue stroke-current" 
                          strokeWidth="10" 
                          strokeLinecap="round" 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="transparent"
                          strokeDasharray={`${atsScore * 2.51} 251.2`}
                          strokeDashoffset="0"
                          transform="rotate(-90 50 50)"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold">{atsScore}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {atsScore >= 90 ? "Excellent" : atsScore >= 80 ? "Good" : "Needs improvement"}
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-3">Key Improvements</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Enhanced keyword matching with job requirements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Improved formatting for better ATS readability</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Strengthened accomplishments with quantifiable results</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Optimized section headings for standard ATS recognition</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Optimized Resume</CardTitle>
                      <CardDescription>
                        Ready to download and use in your applications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg">
                        <File className="h-12 w-12 text-verifirm-blue mb-3" />
                        <p className="font-medium">optimized_resume.pdf</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          ATS-optimized with key improvements
                        </p>
                        <Button className="gap-2" onClick={() => window.open(optimizedResumeUrl || "#")}>
                          <Download className="h-4 w-4" /> Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="text-center">
                            <Button variant="outline" className="gap-2" onClick={() => {
                              setActiveTab("upload");
                              setResumeFile(null);
                              setJobDescription("");
                              setJobUrl("");
                              setSelectedModel("");
                              setAtsScore(null);
                              setOptimizedResumeUrl(null);
                            }}>
                              <Sparkles className="h-4 w-4" />
                              Optimize another resume
                            </Button>
                            <p className="text-xs text-muted-foreground mt-1">
                              {usageCount} optimizations remaining
                            </p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Each optimization uses 1 credit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex-col space-y-4">
        <div className="w-full h-px bg-border"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Sparkles className="h-3 w-3" /> 
              <span className="text-xs">ATS Optimized</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
              <CheckCircle className="h-3 w-3" /> 
              <span className="text-xs">AI Powered</span>
            </Badge>
          </div>
          <div>
            <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
              Need more optimizations? <span className="font-bold">Buy credits</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResumeOptimizer;
