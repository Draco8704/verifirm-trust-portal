
import { useState } from "react";
import { Star, Info, Lock, CheckCircle2, Building, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const categories = [
  { id: "management", label: "Management" },
  { id: "culture", label: "Culture" },
  { id: "workLife", label: "Work-Life Balance" },
  { id: "growth", label: "Growth Opportunities" },
  { id: "compensation", label: "Compensation & Benefits" }
];

const positions = [
  "Accounting", "Administration", "Customer Service", "Design", 
  "Engineering", "Finance", "Human Resources", "Information Technology", 
  "Legal", "Marketing", "Operations", "Product Management", "Sales", "Other"
];

const CompanyReviewForm = () => {
  const [activeTab, setActiveTab] = useState("company");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employmentDuration, setEmploymentDuration] = useState("");
  const [ratings, setRatings] = useState<Record<string, number>>({
    management: 3,
    culture: 3,
    workLife: 3,
    growth: 3,
    compensation: 3
  });
  const [overallRating, setOverallRating] = useState(3);
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [advice, setAdvice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleRatingChange = (category: string, value: number[]) => {
    setRatings(prev => ({
      ...prev,
      [category]: value[0]
    }));
    
    // Calculate average for overall rating
    const ratingValues = Object.values({...ratings, [category]: value[0]});
    const average = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;
    setOverallRating(Math.round(average));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
      </div>
    );
  };

  const validateCompanyTab = () => {
    if (!companyName.trim()) {
      toast({
        title: "Company name required",
        description: "Please enter the company name",
        variant: "destructive"
      });
      return false;
    }
    
    if (!position.trim()) {
      toast({
        title: "Position required",
        description: "Please enter your job position",
        variant: "destructive"
      });
      return false;
    }
    
    if (!employmentStatus) {
      toast({
        title: "Employment status required",
        description: "Please indicate if you're a current or former employee",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const validateRatingsTab = () => {
    // All ratings are pre-filled, so this tab is always valid
    return true;
  };

  const validateReviewTab = () => {
    if (pros.trim().length < 50) {
      toast({
        title: "More detail needed",
        description: "Please provide at least 50 characters about the positives",
        variant: "destructive"
      });
      return false;
    }
    
    if (cons.trim().length < 50) {
      toast({
        title: "More detail needed",
        description: "Please provide at least 50 characters about the negatives",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleNextTab = () => {
    if (activeTab === "company" && validateCompanyTab()) {
      setActiveTab("ratings");
    } else if (activeTab === "ratings" && validateRatingsTab()) {
      setActiveTab("review");
    }
  };

  const handlePrevTab = () => {
    if (activeTab === "ratings") {
      setActiveTab("company");
    } else if (activeTab === "review") {
      setActiveTab("ratings");
    }
  };

  const handleSubmit = () => {
    if (!validateReviewTab()) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Review submitted successfully",
        description: "Thank you for sharing your experience!",
      });
      
      setIsSubmitting(false);
      // Reset form or redirect
    }, 1500);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Submit Company Review</CardTitle>
            <CardDescription>
              Share your workplace experience to help others make informed decisions
            </CardDescription>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="gap-1 px-2 py-1">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Anonymous</span>
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm max-w-xs">
                  Your review will be posted anonymously. We verify your employment without revealing your identity.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="ratings" disabled={!companyName || !position || !employmentStatus}>
              Ratings
            </TabsTrigger>
            <TabsTrigger value="review" disabled={!validateRatingsTab() || !validateCompanyTab()}>
              Your Review
            </TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input 
                  id="company-name"
                  placeholder="Enter company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="position">Your Position</Label>
                <Select value={position} onValueChange={setPosition}>
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select your job function" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map(pos => (
                      <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="employment-status">Employment Status</Label>
                <RadioGroup 
                  value={employmentStatus} 
                  onValueChange={setEmploymentStatus}
                  className="flex flex-col space-y-1 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="current" id="current-employee" />
                    <Label htmlFor="current-employee" className="cursor-pointer">
                      Current Employee
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="former" id="former-employee" />
                    <Label htmlFor="former-employee" className="cursor-pointer">
                      Former Employee
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="employment-duration">Employment Duration</Label>
                <Select value={employmentDuration} onValueChange={setEmploymentDuration}>
                  <SelectTrigger id="employment-duration">
                    <SelectValue placeholder="How long have/did you work there?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="more-than-10">More than 10 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-4 bg-muted/10 rounded-lg p-4 border">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-verifirm-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Why Your Review Matters</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your honest feedback helps jobseekers make informed decisions and encourages companies to improve their workplace culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleNextTab}>
                Continue to Ratings
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="ratings" className="space-y-6">
            <div className="bg-muted/10 p-4 rounded-lg border mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-5 w-5 text-verifirm-blue" />
                <h3 className="font-medium">{companyName}</h3>
                <Badge variant="outline" className="ml-auto">
                  {employmentStatus === "current" ? "Current Employee" : "Former Employee"}
                </Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-verifirm-blue">
                    {overallRating}
                  </div>
                  <div className="text-xs text-muted-foreground">Overall</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    {renderStars(overallRating)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {categories.map(category => (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">{category.label}</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{ratings[category.id]}</span>
                      {renderStars(ratings[category.id])}
                    </div>
                  </div>
                  <Slider
                    value={[ratings[category.id]]}
                    min={1}
                    max={5}
                    step={1}
                    onValueChange={(value) => handleRatingChange(category.id, value)}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground px-2">
                    <span>Poor</span>
                    <span>Average</span>
                    <span>Excellent</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevTab}>
                Back
              </Button>
              <Button onClick={handleNextTab}>
                Continue to Review
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="review" className="space-y-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="pros">What are the positives of working at {companyName}?</Label>
                  <span className="text-xs text-muted-foreground">
                    Min. 50 characters
                  </span>
                </div>
                <Textarea 
                  id="pros"
                  placeholder="Share specific examples of what you like about working here"
                  value={pros}
                  onChange={(e) => setPros(e.target.value)}
                  className="min-h-[120px]"
                />
                <div className="flex justify-end mt-1">
                  <span className={`text-xs ${pros.length >= 50 ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {pros.length} / 50 characters
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="cons">What are the challenges of working at {companyName}?</Label>
                  <span className="text-xs text-muted-foreground">
                    Min. 50 characters
                  </span>
                </div>
                <Textarea 
                  id="cons"
                  placeholder="Share specific examples of challenges or areas for improvement"
                  value={cons}
                  onChange={(e) => setCons(e.target.value)}
                  className="min-h-[120px]"
                />
                <div className="flex justify-end mt-1">
                  <span className={`text-xs ${cons.length >= 50 ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {cons.length} / 50 characters
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="advice">What advice would you give to management?</Label>
                  <span className="text-xs text-muted-foreground">
                    Optional
                  </span>
                </div>
                <Textarea 
                  id="advice"
                  placeholder="Provide constructive advice for company leadership"
                  value={advice}
                  onChange={(e) => setAdvice(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="bg-verifirm-blue/5 p-4 rounded-lg border border-verifirm-blue/20">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-verifirm-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Anonymous Review Policy</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your review will be posted anonymously. We verify employment without revealing your identity. Please ensure your review is honest, respectful, and doesn't contain confidential information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevTab}>
                Back
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <>Submitting <span className="animate-pulse">...</span></>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Review
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex-col space-y-4">
        <div className="w-full h-px bg-border"></div>
        <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
          <p>
            All reviews are moderated to ensure quality and compliance with our guidelines
          </p>
          <Badge variant="outline" className="gap-1">
            <Lock className="h-3 w-3" /> 
            <span className="text-xs">100% Anonymous</span>
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CompanyReviewForm;
