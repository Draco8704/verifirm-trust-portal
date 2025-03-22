
import { useState, useRef } from "react";
import { 
  Upload, 
  Check, 
  AlertCircle, 
  Download, 
  CheckCircle,
  Rocket,
  SearchCheck,
  File
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const ATSScanner = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [atsScore, setAtsScore] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);
  const [strengths, setStrengths] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
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

  const scanResume = () => {
    if (!resumeFile) {
      toast({
        title: "Missing file",
        description: "Please upload a resume to scan",
        variant: "destructive"
      });
      return;
    }

    // Simulate scanning process
    setIsScanning(true);
    setProgress(0);
    setScanComplete(false);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          
          // Mock results - would be actual analysis in production
          const score = Math.floor(Math.random() * 31) + 65; // 65-95 range
          setAtsScore(score);
          
          // Set mock issues based on score
          const mockIssues = [];
          if (score < 85) mockIssues.push("Some key skills are missing or not properly highlighted");
          if (score < 80) mockIssues.push("Resume format may not be optimally ATS-friendly");
          if (score < 75) mockIssues.push("Job title inconsistencies detected");
          if (score < 70) mockIssues.push("Lack of quantifiable achievements");
          setIssues(mockIssues);
          
          // Set mock strengths
          const mockStrengths = [
            "Good keyword density for industry standards",
            "Clear section headings that ATS can recognize",
            "Contact information is properly formatted",
            "Education section is well-structured"
          ];
          setStrengths(mockStrengths);
          
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const getScoreCategory = () => {
    if (atsScore >= 90) return "Excellent";
    if (atsScore >= 80) return "Good";
    if (atsScore >= 70) return "Fair";
    return "Needs Improvement";
  };

  const getScoreColor = () => {
    if (atsScore >= 90) return "text-green-600";
    if (atsScore >= 80) return "text-emerald-600";
    if (atsScore >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">ATS Resume Scanner</CardTitle>
            <CardDescription>Check if your resume will pass Applicant Tracking Systems</CardDescription>
          </div>
          <Badge variant="outline" className="gap-1 px-2 py-1">
            <SearchCheck className="h-3.5 w-3.5" />
            <span>Free Tool</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {!scanComplete ? (
          <div className="space-y-6">
            <div 
              className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={triggerFileInput}
            >
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
                <Check className="h-5 w-5 text-green-500" />
              </div>
            )}

            <div className="flex flex-col items-center justify-center gap-3">
              <Button 
                onClick={scanResume} 
                disabled={!resumeFile || isScanning} 
                className="gap-2"
                size="lg"
              >
                {isScanning ? (
                  <>Scanning Resume <span className="animate-pulse">...</span></>
                ) : (
                  <>
                    <SearchCheck className="h-5 w-5" />
                    Scan Resume
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground">
                Our ATS scanner will analyze your resume for compatibility with major ATS systems
              </p>
            </div>

            {isScanning && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Analyzing format...</span>
                  <span>{progress}%</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/10">
                <h3 className="text-lg font-medium mb-3">ATS Compatibility Score</h3>
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
                      className={`stroke-current ${atsScore >= 90 ? 'text-green-500' : 
                                                   atsScore >= 80 ? 'text-emerald-500' : 
                                                   atsScore >= 70 ? 'text-yellow-500' : 
                                                   'text-red-500'}`}
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
                    <span className={`text-3xl font-bold ${getScoreColor()}`}>{atsScore}</span>
                  </div>
                </div>
                <p className={`font-medium mt-2 ${getScoreColor()}`}>
                  {getScoreCategory()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {atsScore >= 80 
                    ? "Your resume is well-optimized for ATS" 
                    : "Your resume needs optimization for ATS"}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Resume Strengths</h3>
                  <ul className="space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {issues.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      Areas for Improvement
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        {issues.length} issues found
                      </Badge>
                    </h3>
                    <ul className="space-y-2">
                      {issues.map((issue, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-verifirm-blue/5">
              <h3 className="text-lg font-medium mb-4">Next Steps for ATS Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-verifirm-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium text-verifirm-blue">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Optimize Your Resume</h4>
                      <p className="text-sm text-muted-foreground">
                        Use our AI-powered Resume Optimizer tool to improve your ATS compatibility score.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-verifirm-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium text-verifirm-blue">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Tailor to Job Descriptions</h4>
                      <p className="text-sm text-muted-foreground">
                        Customize your resume for specific job applications to improve keyword matching.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-verifirm-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium text-verifirm-blue">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Use Quick Apply</h4>
                      <p className="text-sm text-muted-foreground">
                        Apply to multiple companies with our optimized resume using one-click applications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-verifirm-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium text-verifirm-blue">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Create Custom Messages</h4>
                      <p className="text-sm text-muted-foreground">
                        Generate personalized application messages that highlight your key qualifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" className="gap-2 w-full sm:w-auto" onClick={() => {
                setResumeFile(null);
                setScanComplete(false);
              }}>
                <Upload className="h-4 w-4" />
                Scan Another Resume
              </Button>
              <Button className="gap-2 w-full sm:w-auto">
                <Rocket className="h-4 w-4" />
                Optimize This Resume
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col space-y-4">
        <div className="w-full h-px bg-border"></div>
        <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
          <p>
            75% of resumes are rejected by ATS before a human ever sees them
          </p>
          <Badge variant="outline" className="gap-1">
            <Check className="h-3 w-3" /> 
            <span className="text-xs">Free Tool</span>
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ATSScanner;
