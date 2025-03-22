
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  FileText, 
  Check, 
  X, 
  AlertTriangle, 
  ArrowRight,
  Download,
  RefreshCw,
  ListFilter,
  Zap,
  FileUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ATSScanner = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanScore, setScanScore] = useState(0);
  const [keywordMatch, setKeywordMatch] = useState(0);
  const [formatScore, setFormatScore] = useState(0);
  const [activeTab, setActiveTab] = useState("upload");
  const [scansLeft, setScansLeft] = useState(5);

  // Sample ATS issues
  const atsIssues = [
    {
      type: "format",
      severity: "high",
      issue: "Complex formatting detected",
      description: "Your resume uses tables or columns which can confuse ATS systems",
      fix: "Use a simple, linear format without tables, columns, or text boxes"
    },
    {
      type: "keyword",
      severity: "medium",
      issue: "Missing key skills",
      description: "The job requires React Native experience but it's not mentioned in your resume",
      fix: "Add 'React Native' to your skills section and work experience if applicable"
    },
    {
      type: "format",
      severity: "low",
      issue: "Non-standard section headings",
      description: "Using 'Professional Journey' instead of standard 'Experience' heading",
      fix: "Use standard section headings: Experience, Education, Skills, etc."
    },
    {
      type: "keyword",
      severity: "high",
      issue: "Job title mismatch",
      description: "The job posting is for 'Full Stack Developer' but your resume lists 'Web Developer'",
      fix: "Update your job title to match the posting if your experience is relevant"
    }
  ];

  // Sample keyword matches
  const keywordMatches = [
    { keyword: "React", inJob: true, inResume: true },
    { keyword: "Node.js", inJob: true, inResume: true },
    { keyword: "TypeScript", inJob: true, inResume: false },
    { keyword: "MongoDB", inJob: true, inResume: false },
    { keyword: "CI/CD", inJob: true, inResume: true },
    { keyword: "Agile", inJob: true, inResume: true },
    { keyword: "Docker", inJob: true, inResume: false },
    { keyword: "REST API", inJob: true, inResume: true }
  ];

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

  const handleScan = () => {
    if (!resumeFile || !jobDescription.trim() || scansLeft <= 0) return;

    setIsScanning(true);
    setScanProgress(0);
    setActiveTab("results");

    // Simulate scanning process
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          
          // Generate random scores for demo
          setScanScore(Math.floor(Math.random() * 30) + 65); // 65-95 range
          setKeywordMatch(Math.floor(Math.random() * 40) + 55); // 55-95 range
          setFormatScore(Math.floor(Math.random() * 25) + 75); // 75-100 range
          
          setScansLeft(prev => prev - 1);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case "high": return "text-red-600";
      case "medium": return "text-amber-600";
      case "low": return "text-blue-600";
      default: return "text-muted-foreground";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch(severity) {
      case "high":
        return <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">High</Badge>;
      case "medium":
        return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Medium</Badge>;
      case "low":
        return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
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
              <CardTitle className="text-2xl">ATS Scanner</CardTitle>
              <CardDescription>Analyze your resume's compatibility with ATS systems</CardDescription>
            </div>
            <Badge variant="outline" className="px-3 py-1 gap-1">
              <Search className="h-3.5 w-3.5" />
              <span>{scansLeft} scans remaining</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="results">Scan Results</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-6">
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
                      <X className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                      <FileUp className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium">Upload your resume</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We'll analyze your resume against the job description for ATS compatibility
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => document.getElementById('resume-upload-ats')?.click()}
                      className="gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Browse Files
                    </Button>
                    <input 
                      type="file" 
                      id="resume-upload-ats" 
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
                  For accurate results, include the complete job description with requirements and qualifications
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  disabled={!resumeFile || !jobDescription.trim() || isScanning || scansLeft <= 0}
                  onClick={handleScan}
                >
                  {isScanning ? (
                    <>Scanning your resume...</>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      Start ATS Scan
                    </>
                  )}
                </Button>

                {isScanning && (
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Scanning...</span>
                      <span>{Math.round(scanProgress)}%</span>
                    </div>
                    <Progress value={scanProgress} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {scanProgress < 30 ? "Analyzing document structure..." : 
                       scanProgress < 60 ? "Extracting keywords from job description..." : 
                       scanProgress < 90 ? "Comparing keywords and formatting..." : 
                       "Preparing detailed results..."}
                    </div>
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              {scanComplete ? (
                <motion.div variants={containerVariants} className="space-y-6">
                  <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
                    <Card className="bg-muted/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Overall ATS Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <span className={`text-4xl font-bold ${getScoreColor(scanScore)}`}>{scanScore}%</span>
                          <div className="mt-2">
                            <Progress value={scanScore} className="h-2" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            {scanScore >= 80 ? "Great! Your resume is ATS-friendly" : 
                             scanScore >= 60 ? "Decent, but improvements recommended" : 
                             "Needs significant improvements"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Keyword Match</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <span className={`text-4xl font-bold ${getScoreColor(keywordMatch)}`}>{keywordMatch}%</span>
                          <div className="mt-2">
                            <Progress value={keywordMatch} className="h-2" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            {keywordMatch >= 80 ? "Excellent keyword alignment" : 
                             keywordMatch >= 60 ? "Some important keywords are missing" : 
                             "Many critical keywords are missing"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Format Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <span className={`text-4xl font-bold ${getScoreColor(formatScore)}`}>{formatScore}%</span>
                          <div className="mt-2">
                            <Progress value={formatScore} className="h-2" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            {formatScore >= 80 ? "Your resume format is ATS-friendly" : 
                             formatScore >= 60 ? "Format issues may affect ATS parsing" : 
                             "Significant format issues detected"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">ATS Issues Found</h3>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ListFilter className="h-4 w-4" />
                        Filter
                      </Button>
                    </div>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Issue</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead className="hidden md:table-cell">Description</TableHead>
                          <TableHead>Recommended Fix</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {atsIssues.map((issue, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {issue.type === "format" ? (
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span>{issue.issue}</span>
                              </div>
                            </TableCell>
                            <TableCell>{getSeverityBadge(issue.severity)}</TableCell>
                            <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                              {issue.description}
                            </TableCell>
                            <TableCell>
                              <div className="flex justify-between items-center gap-2 text-sm">
                                <span className="text-verifirm-blue">{issue.fix}</span>
                                <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block" />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-3">
                    <h3 className="text-lg font-medium">Keyword Analysis</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 border-b">
                        <div className="font-medium">Keyword</div>
                        <div className="font-medium">In Job Description</div>
                        <div className="font-medium">In Your Resume</div>
                      </div>
                      <div className="divide-y">
                        {keywordMatches.map((item, index) => (
                          <div key={index} className="grid grid-cols-3 gap-4 p-4">
                            <div>{item.keyword}</div>
                            <div>
                              {item.inJob ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <X className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                            <div>
                              {item.inResume ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <X className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex justify-between pt-2">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => setActiveTab("upload")}
                    >
                      <RefreshCw className="h-4 w-4" />
                      Scan Another Resume
                    </Button>
                    
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => {/* Would generate a report */}}
                      >
                        <Download className="h-4 w-4" />
                        Download Report
                      </Button>
                      <Button
                        className="gap-2"
                        onClick={() => {/* Would redirect to optimizer */}}
                      >
                        <Zap className="h-4 w-4" />
                        Optimize Resume
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  variants={itemVariants} 
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">No scan results yet</h3>
                  <p className="text-muted-foreground max-w-md">
                    Upload your resume and job description, then click "Start ATS Scan" to analyze your resume's ATS compatibility
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
              ATS Scanner helps ensure your resume passes through automated applicant tracking systems
            </p>
            <Button variant="outline" size="sm" className="h-8">
              Get more scans
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ATSScanner;
