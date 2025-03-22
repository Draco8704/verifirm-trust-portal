
import { useState } from "react";
import { Sparkles, Copy, CheckCheck, Send, MessageSquare, User, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

// Template categories
const TEMPLATE_CATEGORIES = [
  { id: "general", name: "General" },
  { id: "tech", name: "Technology" },
  { id: "finance", name: "Finance" },
  { id: "creative", name: "Creative" },
  { id: "healthcare", name: "Healthcare" },
];

// Mock templates (in production these would be from the backend)
const TEMPLATES = [
  { id: "t1", category: "general", name: "Standard Professional" },
  { id: "t2", category: "general", name: "Direct & Concise" },
  { id: "t3", category: "general", name: "Achievement Focused" },
  { id: "t4", category: "tech", name: "Software Developer" },
  { id: "t5", category: "tech", name: "Data Scientist" },
  { id: "t6", category: "finance", name: "Financial Analyst" },
  { id: "t7", category: "creative", name: "Content Creator" },
  { id: "t8", category: "healthcare", name: "Medical Professional" },
];

const MessageGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeContent, setResumeContent] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("input");
  
  const { toast } = useToast();

  const filteredTemplates = TEMPLATES.filter(
    template => template.category === selectedCategory
  );

  const handleGenerate = () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Missing job description",
        description: "Please enter the job description for better results",
        variant: "destructive"
      });
      return;
    }

    if (!resumeContent.trim()) {
      toast({
        title: "Missing resume content",
        description: "Please enter your resume content for personalized messaging",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI message generation
    setTimeout(() => {
      // Example generated message
      const message = `Dear Hiring Manager,

I was excited to discover the ${jobDescription.split(" ").slice(0, 3).join(" ")}... position at your company. With over 5 years of experience in this field and a proven track record of delivering results, I believe I'm an excellent fit for your team.

In my previous role, I increased departmental efficiency by 35% through implementing streamlined workflows and leveraging my expertise in ${resumeContent.split(" ").slice(5, 10).join(" ")}. My approach combines analytical thinking with creative problem-solving to tackle complex challenges.

I'm particularly drawn to your company's commitment to innovation and your recent project involving ${jobDescription.split(" ").slice(10, 15).join(" ")}. I'd welcome the opportunity to discuss how my skills and experience align with your needs.

Looking forward to connecting,
[Your Name]`;

      setGeneratedMessage(message);
      setIsGenerating(false);
      setActiveTab("message");
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The message has been copied to your clipboard",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Application Message Generator</CardTitle>
            <CardDescription>Create personalized messages for hiring managers</CardDescription>
          </div>
          <Badge variant="outline" className="px-3 py-1 gap-1">
            <BadgeCheck className="h-3.5 w-3.5" />
            <span>Claude AI Powered</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="input">Input Information</TabsTrigger>
            <TabsTrigger value="message" disabled={!generatedMessage}>Generated Message</TabsTrigger>
          </TabsList>

          <TabsContent value="input" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="template-category">Template Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="template-category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {TEMPLATE_CATEGORIES.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="template">Message Template</Label>
                  <Select 
                    value={selectedTemplate} 
                    onValueChange={setSelectedTemplate}
                  >
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredTemplates.map(template => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="job-description">Job Description</Label>
                  <Textarea 
                    id="job-description"
                    placeholder="Paste the job description here"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="resume-content">Your Resume/Experience</Label>
                  <Textarea 
                    id="resume-content"
                    placeholder="Enter key points from your resume or experience"
                    value={resumeContent}
                    onChange={(e) => setResumeContent(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>

                <div className="border rounded-lg p-4 bg-verifirm-blue/5">
                  <h3 className="font-medium flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-verifirm-blue" />
                    Message Best Practices
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-xs bg-verifirm-blue/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      Personalize with company research
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-xs bg-verifirm-blue/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      Highlight specific achievements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-xs bg-verifirm-blue/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      Keep it concise (3-4 paragraphs max)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-xs bg-verifirm-blue/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      End with a clear call to action
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="gap-2"
              >
                {isGenerating ? (
                  <>Generating <span className="animate-pulse">...</span></>
                ) : (
                  <>
                    Generate Message <Sparkles className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="message" className="space-y-6">
            {generatedMessage && (
              <div className="space-y-6">
                <div className="border rounded-lg p-6 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-verifirm-blue" />
                      <h3 className="font-medium">Personalized Message</h3>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1"
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <>
                          <CheckCheck className="h-4 w-4 text-green-500" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="whitespace-pre-line text-sm">
                    {generatedMessage}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("input")}>
                    Edit Information
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline" className="gap-1" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4" />
                      Copy to Clipboard
                    </Button>
                    <Button className="gap-1">
                      <Send className="h-4 w-4" />
                      Use on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex-col space-y-4">
        <div className="w-full h-px bg-border"></div>
        <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
          <p>Messages are generated with Claude AI for natural, personalized communication.</p>
          <Badge variant="outline" className="gap-1">
            <Sparkles className="h-3 w-3" /> 
            <span className="text-xs">AI Enhanced</span>
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MessageGenerator;
