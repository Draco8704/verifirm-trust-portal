
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Copy, 
  Rocket, 
  RefreshCw,
  CheckCircle,
  ChevronDown,
  Sparkles,
  FileText,
  Clipboard,
  ThumbsUp,
  ThumbsDown,
  Share
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AIModelSelector from "./AIModelSelector";

// Sample message templates
const MESSAGE_TEMPLATES = [
  {
    id: "general",
    name: "General Application",
    description: "A universal message for most job applications",
    content: "I'm reaching out about the [Position] role at [Company]. With [X] years of experience in [Industry], I've [Key Achievement]. I'm particularly drawn to [Company] because [Company-Specific Reason], and I believe my background in [Relevant Skill] would be valuable to your team. I'd welcome the opportunity to discuss how my experience aligns with your needs."
  },
  {
    id: "technical",
    name: "Technical Role",
    description: "Highlighting technical skills and achievements",
    content: "I'm applying for the [Position] position at [Company]. As a [Current Role] with [X] years of experience using [Technologies], I've successfully [Technical Achievement with Metrics]. I'm passionate about [Technical Area] and admire [Company]'s work on [Company Project/Product]. I'm excited about the opportunity to bring my [Key Technical Skill] expertise to your team."
  },
  {
    id: "creative",
    name: "Creative Role",
    description: "Showcasing creativity and portfolio highlights",
    content: "I'm excited to apply for the [Position] role at [Company]. My portfolio includes work for [Notable Client/Project], where I [Creative Achievement]. What draws me to [Company] is your [Company's Creative Approach], and I'd love to contribute my skills in [Creative Skill] to help you [Company Goal]. I've attached my portfolio and would welcome the chance to discuss how my creative vision aligns with your needs."
  },
  {
    id: "management",
    name: "Management Position",
    description: "Emphasizing leadership and strategic skills",
    content: "I'm interested in the [Position] opportunity at [Company]. As a [Current Role], I've led teams of [Team Size] to [Leadership Achievement with Metrics]. I'm particularly impressed by [Company]'s [Company Initiative/Value], which aligns with my leadership philosophy of [Leadership Approach]. I believe my experience in [Relevant Management Skill] would be valuable in helping your team achieve [Company Objective]."
  },
  {
    id: "entry-level",
    name: "Entry Level Position",
    description: "Perfect for recent graduates or career changers",
    content: "I'm applying for the [Position] role at [Company]. As a recent graduate in [Field] with [Relevant Experience/Internship], I've developed strong skills in [Key Skill] and [Key Skill]. I'm particularly drawn to [Company] because [Company-Specific Reason], and I'm eager to contribute my fresh perspective and enthusiasm to your team while continuing to grow professionally."
  }
];

const MessageGenerator = () => {
  const [selectedModel, setSelectedModel] = useState("mistral-small-3.1-24b");
  const [selectedTemplate, setSelectedTemplate] = useState(MESSAGE_TEMPLATES[0].id);
  const [jobDescription, setJobDescription] = useState("");
  const [resumeContent, setResumeContent] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("input");
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [messagesLeft, setMessagesLeft] = useState(15);

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

  const handleGenerate = () => {
    if (!jobDescription.trim() || !resumeContent.trim()) return;
    
    setIsGenerating(true);
    setProgress(0);
    setActiveTab("result");
    
    // Simulate message generation process
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          
          // Get selected template
          const template = MESSAGE_TEMPLATES.find(t => t.id === selectedTemplate) || MESSAGE_TEMPLATES[0];
          
          // Generate a message based on the template
          const sampleMessage = `Dear Hiring Manager,

I'm excited to apply for the Software Engineer position at Verifirm SA. After reviewing your job description, I believe my experience aligns well with what you're seeking.

With 5 years of experience in full-stack development and a track record of delivering scalable solutions, I've successfully led the development of user-facing applications that increased customer engagement by 45%. Your company's focus on combining transparency with innovative AI tools particularly resonates with me, as I've worked extensively with AI-driven solutions in my previous role at TechSolutions SA.

I'd welcome the opportunity to discuss how my technical expertise and passion for creating impactful applications could contribute to Verifirm's mission of transforming how people make career decisions in South Africa.

Best regards,
[Your Name]`;
          
          setGeneratedMessage(sampleMessage);
          setMessagesLeft(prev => prev - 1);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const handleCopyToClipboard = () => {
    if (!generatedMessage) return;
    
    navigator.clipboard.writeText(generatedMessage)
      .then(() => {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleRefresh = () => {
    if (messagesLeft <= 0) return;
    
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate message regeneration
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          
          // Generate a slightly different message
          const altMessage = `Dear Hiring Manager,

I'm writing to express my interest in the Software Engineer position at Verifirm SA. Your job posting caught my attention, and I'm confident that my background makes me a strong candidate.

During my 5 years in the software development industry, I've specialized in building responsive web applications and implementing efficient backend systems that improved user retention by 38%. I'm particularly drawn to Verifirm's innovative approach to career transparency in the South African market, which aligns perfectly with my belief in using technology to solve real-world problems.

I would be thrilled to discuss how my expertise in React, Node.js, and AI integration could help advance Verifirm's mission of transforming the job search experience.

Thank you for your consideration,
[Your Name]`;
          
          setGeneratedMessage(altMessage);
          setMessagesLeft(prev => prev - 1);
          return 100;
        }
        return newProgress;
      });
    }, 400);
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
              <CardTitle className="text-2xl">Message Generator</CardTitle>
              <CardDescription>Create personalized messages for job applications</CardDescription>
            </div>
            <Badge variant="outline" className="px-3 py-1 gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>{messagesLeft} messages remaining</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="result">Generated Message</TabsTrigger>
            </TabsList>

            <TabsContent value="input" className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">Select AI Model</h3>
                <AIModelSelector onSelect={setSelectedModel} selectedModel={selectedModel} />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">Message Template</h3>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {MESSAGE_TEMPLATES.map(template => (
                      <SelectItem key={template.id} value={template.id}>
                        <div className="flex flex-col">
                          <span>{template.name}</span>
                          <span className="text-xs text-muted-foreground">{template.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Choose a template that best fits the type of position you're applying for
                </p>
              </motion.div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="template-preview">
                  <AccordionTrigger className="text-sm">
                    View template preview
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-3 border rounded-md bg-muted/30 text-sm">
                      {MESSAGE_TEMPLATES.find(t => t.id === selectedTemplate)?.content || ''}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      The AI will customize this template using your resume and the job description
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">Job Description</h3>
                <Textarea 
                  placeholder="Paste the job description here..." 
                  className="min-h-24"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">Your Resume Content</h3>
                <Textarea 
                  placeholder="Paste your resume content here..." 
                  className="min-h-32"
                  value={resumeContent}
                  onChange={(e) => setResumeContent(e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs gap-1"
                    onClick={() => {/* Would connect to resume optimizer */}}
                  >
                    <FileText className="h-3.5 w-3.5" />
                    Use Optimized Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs gap-1"
                    onClick={() => {/* Would open file picker */}}
                  >
                    <Clipboard className="h-3.5 w-3.5" />
                    Import from File
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  disabled={!jobDescription.trim() || !resumeContent.trim() || isGenerating || messagesLeft <= 0}
                  onClick={handleGenerate}
                >
                  {isGenerating ? (
                    <>Generating your message...</>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Message
                    </>
                  )}
                </Button>
              </motion.div>
            </TabsContent>

            <TabsContent value="result" className="space-y-4">
              {isGenerating ? (
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Generating personalized message...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {progress < 30 ? "Analyzing job description and resume..." : 
                     progress < 60 ? "Identifying key skills and experiences..." : 
                     progress < 90 ? "Crafting personalized message..." : 
                     "Finalizing your message..."}
                  </p>
                </motion.div>
              ) : generatedMessage ? (
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Your Personalized Message</h3>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-1"
                        onClick={handleRefresh}
                        disabled={messagesLeft <= 0}
                      >
                        <RefreshCw className="h-4 w-4" />
                        Regenerate
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-1"
                        onClick={handleCopyToClipboard}
                      >
                        {copiedToClipboard ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-white">
                    <pre className="whitespace-pre-wrap font-sans text-sm">
                      {generatedMessage}
                    </pre>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm">Rate this message:</span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Share className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  variants={itemVariants} 
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">No message generated yet</h3>
                  <p className="text-muted-foreground max-w-md">
                    Enter your job description and resume content, then click "Generate Message" to create a personalized application message
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("input")}
                  >
                    Go to Input
                  </Button>
                </motion.div>
              )}

              {messagesLeft <= 0 && !isGenerating && (
                <Alert className="mt-4">
                  <AlertDescription className="flex justify-between items-center">
                    <span>You've used all your message generations. Purchase more to continue.</span>
                    <Button size="sm">Buy Message Credits</Button>
                  </AlertDescription>
                </Alert>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <div className="w-full h-px bg-border"></div>
          <div className="flex justify-between items-center w-full text-sm">
            <p className="text-muted-foreground">
              Generate personalized application messages based on your resume and job descriptions
            </p>
            <Button variant="outline" size="sm" className="h-8">
              Get more messages
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default MessageGenerator;
