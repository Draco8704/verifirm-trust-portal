
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
  Share,
  Linkedin
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
    id: "connection",
    name: "Connection Request",
    description: "Request to connect with a professional on LinkedIn",
    content: "Hi [Name], I noticed your profile while browsing [Context/Group/Company]. I'm impressed by your experience in [Industry/Role] and would love to connect to learn more about your work in [Specific Area]. Thanks for considering my request."
  },
  {
    id: "job-inquiry",
    name: "Job Opportunity Inquiry",
    description: "Reaching out about a specific job opening",
    content: "Hello [Name], I hope this message finds you well. I recently came across the [Position] opening at [Company] and I'm very interested in this opportunity. With my background in [Relevant Experience], I believe I could bring valuable insights to your team. I'd appreciate the chance to discuss how my skills align with what you're looking for. Thank you for your consideration."
  },
  {
    id: "networking",
    name: "Networking Introduction",
    description: "Building professional relationships with peers",
    content: "Hi [Name], I've been following your contributions in [Industry/Field] and really admire your insights on [Specific Topic]. As someone also working in [Related Field], I'd love to connect and potentially exchange ideas. I recently [Relevant Personal Achievement/Project] and would value your perspective. Would you be open to a brief conversation sometime?"
  },
  {
    id: "informational-interview",
    name: "Informational Interview",
    description: "Request to learn more about someone's role or company",
    content: "Hello [Name], I hope you're doing well. I've been following your career journey at [Company] with great interest. I'm currently exploring opportunities in [Industry] and would value your insights, given your experience. Would you be willing to spare 15-20 minutes for a virtual coffee chat to discuss your experience at [Company] and any advice you might have for someone looking to enter this field? I promise to be respectful of your time. Thank you for considering my request."
  },
  {
    id: "recommendation",
    name: "Recommendation Request",
    description: "Asking for a LinkedIn recommendation",
    content: "Hi [Name], I hope this message finds you well. We worked together on [Project/Team] at [Company], and I really valued your leadership and insights during that time. As I'm updating my profile, I'm wondering if you would be willing to write a brief recommendation highlighting our work together. I'd be happy to reciprocate as well. Thank you for considering my request."
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
          const sampleMessage = `Hi Sarah Johnson,

I noticed your profile while browsing the Product Management group on LinkedIn. I'm impressed by your experience leading digital product teams at TechSolutions, and would love to connect to learn more about your work in agile product development methodologies.

I've recently completed a successful product launch that increased user engagement by 45% using the framework you discussed in your recent article about customer-centric design. I believe we share similar approaches to product development.

Would love to exchange ideas sometime if you're open to it.

Thanks for considering my connection request,
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
          const altMessage = `Hello Sarah Johnson,

I came across your profile while researching product management leaders in the tech industry. Your work at TechSolutions, particularly your leadership in launching the mobile-first strategy, really stands out to me.

As someone with a keen interest in product development methodologies, I've been implementing some of the user-centered design principles you've advocated for in your articles. Recently, I led a product redesign that resulted in a 38% increase in user retention using similar approaches.

I'm looking to expand my professional network with innovative product leaders like yourself, and would be grateful for the connection.

Looking forward to potentially exchanging ideas,
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
              <CardTitle className="text-2xl flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-[#0a66c2]" />
                LinkedIn Message Generator
              </CardTitle>
              <CardDescription>Create personalized LinkedIn messages that get responses</CardDescription>
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
                  Choose a template that matches your LinkedIn outreach goal
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
                      The AI will customize this template using the profile details and your connection goals
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">LinkedIn Profile / Job Description</h3>
                <Textarea 
                  placeholder="Paste the LinkedIn profile content or job description here..." 
                  className="min-h-24"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Copy relevant details from the person's profile or job posting
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-sm font-medium">Your Background & Connection Goal</h3>
                <Textarea 
                  placeholder="Describe your background and why you want to connect..." 
                  className="min-h-32"
                  value={resumeContent}
                  onChange={(e) => setResumeContent(e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs gap-1"
                    onClick={() => {/* Would connect to resume import */}}
                  >
                    <FileText className="h-3.5 w-3.5" />
                    Use Resume Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs gap-1"
                    onClick={() => {/* Would open file picker */}}
                  >
                    <Clipboard className="h-3.5 w-3.5" />
                    Import From File
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
                    <>Generating your LinkedIn message...</>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate LinkedIn Message
                    </>
                  )}
                </Button>
              </motion.div>
            </TabsContent>

            <TabsContent value="result" className="space-y-4">
              {isGenerating ? (
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Generating personalized LinkedIn message...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {progress < 30 ? "Analyzing profile and connection goals..." : 
                     progress < 60 ? "Identifying common interests and opportunities..." : 
                     progress < 90 ? "Crafting personalized LinkedIn message..." : 
                     "Polishing your message for maximum impact..."}
                  </p>
                </motion.div>
              ) : generatedMessage ? (
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Your LinkedIn Message</h3>
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
                    <Linkedin className="h-8 w-8 text-[#0a66c2]" />
                  </div>
                  <h3 className="text-lg font-medium">No message generated yet</h3>
                  <p className="text-muted-foreground max-w-md">
                    Enter a LinkedIn profile or job description and your connection goals, then click "Generate LinkedIn Message"
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
              Generate personalized LinkedIn messages that increase your connection acceptance rate
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
