
import { useState } from "react";
import { 
  Rocket, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  BarChart, 
  Linkedin, 
  ExternalLink,
  Calendar,
  Mail,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Mock data for applications
const APPLICATIONS = [
  {
    id: "app1",
    company: "Standard Bank",
    position: "Senior Software Engineer",
    logo: "https://logo.clearbit.com/standardbank.co.za",
    platform: "linkedin",
    status: "viewed",
    date: "2023-05-15",
    responseRate: 65,
  },
  {
    id: "app2",
    company: "Discovery Limited",
    position: "Data Analyst",
    logo: "https://logo.clearbit.com/discovery.co.za",
    platform: "careers24",
    status: "applied",
    date: "2023-05-18",
    responseRate: 45,
  },
  {
    id: "app3",
    company: "Woolworths Holdings",
    position: "Marketing Specialist",
    logo: "https://logo.clearbit.com/woolworths.co.za",
    platform: "company",
    status: "interview",
    date: "2023-05-10",
    responseRate: 72,
  },
];

// Recommended jobs
const RECOMMENDED_JOBS = [
  {
    id: "job1",
    company: "MTN Group",
    position: "Product Manager",
    logo: "https://logo.clearbit.com/mtn.com",
    location: "Johannesburg",
    matchScore: 92,
    salary: "R45,000 - R65,000",
    posted: "2 days ago",
  },
  {
    id: "job2",
    company: "Nedbank",
    position: "Business Analyst",
    logo: "https://logo.clearbit.com/nedbank.co.za",
    location: "Cape Town",
    matchScore: 88,
    salary: "R35,000 - R50,000",
    posted: "1 week ago",
  },
  {
    id: "job3",
    company: "Vodacom",
    position: "UX Designer",
    logo: "https://logo.clearbit.com/vodacom.co.za",
    location: "Pretoria",
    matchScore: 85,
    salary: "R30,000 - R45,000",
    posted: "3 days ago",
  },
];

const QuickApply = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [quickApplyCredits, setQuickApplyCredits] = useState(18);

  // Calculate application statistics
  const totalApplications = APPLICATIONS.length;
  const viewedApplications = APPLICATIONS.filter(app => app.status === "viewed").length;
  const interviewApplications = APPLICATIONS.filter(app => app.status === "interview").length;
  const responseRate = Math.round((viewedApplications + interviewApplications) / totalApplications * 100);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "applied":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Applied</Badge>;
      case "viewed":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Viewed</Badge>;
      case "interview":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Interview</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="h-4 w-4 text-[#0077B5]" />;
      case "careers24":
        return <Briefcase className="h-4 w-4 text-orange-500" />;
      case "company":
        return <ExternalLink className="h-4 w-4 text-gray-500" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Quick Apply Dashboard</CardTitle>
            <CardDescription>Track your applications and find new opportunities</CardDescription>
          </div>
          <Badge variant="outline" className="px-3 py-1 gap-1">
            <Rocket className="h-3.5 w-3.5" />
            <span>{quickApplyCredits} quick applies remaining</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Response Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
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
                          strokeDasharray={`${responseRate * 2.51} 251.2`}
                          strokeDashoffset="0"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">{responseRate}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Overall response rate</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Applied</span>
                      </div>
                      <span className="font-medium">{totalApplications - viewedApplications - interviewApplications}</span>
                    </div>
                    <Progress value={(totalApplications - viewedApplications - interviewApplications) / totalApplications * 100} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <span className="text-sm">Viewed</span>
                      </div>
                      <span className="font-medium">{viewedApplications}</span>
                    </div>
                    <Progress value={viewedApplications / totalApplications * 100} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-500" />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Interview</span>
                      </div>
                      <span className="font-medium">{interviewApplications}</span>
                    </div>
                    <Progress value={interviewApplications / totalApplications * 100} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-1 border-b">
                      <div className="flex items-center gap-2">
                        <Rocket className="h-4 w-4 text-verifirm-blue" />
                        <span className="text-sm">Quick Applies</span>
                      </div>
                      <span className="font-medium">{quickApplyCredits}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-1 border-b">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-verifirm-blue" />
                        <span className="text-sm">Last 7 days</span>
                      </div>
                      <span className="font-medium">2</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-1 border-b">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-verifirm-blue" />
                        <span className="text-sm">Messages sent</span>
                      </div>
                      <span className="font-medium">4</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-verifirm-blue" />
                        <span className="text-sm">Match rate</span>
                      </div>
                      <span className="font-medium">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recent Applications</h3>
              <div className="space-y-3">
                {APPLICATIONS.slice(0, 2).map(application => (
                  <div 
                    key={application.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={application.logo} 
                        alt={application.company} 
                        className="h-10 w-10 rounded-full border object-contain p-1"
                      />
                      <div>
                        <h4 className="font-medium">{application.position}</h4>
                        <p className="text-sm text-muted-foreground">{application.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          {getPlatformIcon(application.platform)}
                          <span>
                            {application.platform === "linkedin" ? "LinkedIn" : 
                             application.platform === "careers24" ? "Careers24" : "Company Site"}
                          </span>
                        </div>
                        <div>
                          {getStatusBadge(application.status)}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" onClick={() => setActiveTab("applications")}>
                  View all applications
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Top Matching Jobs</h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab("opportunities")}>
                  View all
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {RECOMMENDED_JOBS.slice(0, 2).map(job => (
                  <div 
                    key={job.id}
                    className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <img 
                      src={job.logo} 
                      alt={job.company} 
                      className="h-10 w-10 rounded-full border object-contain p-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{job.position}</h4>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <Badge className="bg-verifirm-blue text-white border-none">
                          {job.matchScore}% match
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{job.location}</span>
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">All Applications</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <BarChart className="h-4 w-4" />
                  Analytics
                </Button>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {APPLICATIONS.map(application => (
                <AccordionItem key={application.id} value={application.id}>
                  <AccordionTrigger className="hover:bg-muted/20 px-3 rounded-lg">
                    <div className="flex items-center gap-3 w-full">
                      <img 
                        src={application.logo} 
                        alt={application.company} 
                        className="h-10 w-10 rounded-full border object-contain p-1"
                      />
                      <div className="flex-1 text-left">
                        <h4 className="font-medium">{application.position}</h4>
                        <p className="text-sm text-muted-foreground">{application.company}</p>
                      </div>
                      <div className="flex items-center gap-2 mr-4">
                        {getPlatformIcon(application.platform)}
                        {getStatusBadge(application.status)}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 pb-4">
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-muted-foreground">Application Date</h5>
                          <p className="font-medium">
                            {new Date(application.date).toLocaleDateString("en-ZA", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-muted-foreground">Platform</h5>
                          <div className="flex items-center gap-1 font-medium">
                            {getPlatformIcon(application.platform)}
                            <span>
                              {application.platform === "linkedin" ? "LinkedIn" : 
                               application.platform === "careers24" ? "Careers24" : "Company Site"}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-muted-foreground">Response Likelihood</h5>
                          <div className="flex items-center gap-2">
                            <Progress value={application.responseRate} className="h-2 w-40" />
                            <span className="text-sm font-medium">{application.responseRate}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-muted-foreground">Application Timeline</h5>
                          <div className="space-y-3">
                            <div className="flex gap-2">
                              <div className="flex flex-col items-center">
                                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                                  <CheckCircle className="h-3 w-3 text-white" />
                                </div>
                                <div className="w-px h-full bg-border"></div>
                              </div>
                              <div>
                                <p className="font-medium">Applied</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(application.date).toLocaleDateString("en-ZA", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                  })}
                                </p>
                              </div>
                            </div>
                            
                            {application.status === "viewed" || application.status === "interview" ? (
                              <div className="flex gap-2">
                                <div className="flex flex-col items-center">
                                  <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
                                    <CheckCircle className="h-3 w-3 text-white" />
                                  </div>
                                  <div className="w-px h-full bg-border"></div>
                                </div>
                                <div>
                                  <p className="font-medium">Viewed by employer</p>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(new Date(application.date).getTime() + 3*24*60*60*1000)
                                      .toLocaleDateString("en-ZA", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                      })}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                <div className="flex flex-col items-center">
                                  <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-muted-foreground">Waiting for review</p>
                                </div>
                              </div>
                            )}
                            
                            {application.status === "interview" && (
                              <div className="flex gap-2">
                                <div className="flex flex-col items-center">
                                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                                    <CheckCircle className="h-3 w-3 text-white" />
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium">Interview scheduled</p>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(new Date(application.date).getTime() + 7*24*60*60*1000)
                                      .toLocaleDateString("en-ZA", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                      })}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2 border-t">
                      <Button variant="outline" size="sm">View Application</Button>
                      <Button size="sm">Follow Up</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recommended Job Opportunities</h3>
              <p className="text-muted-foreground">
                Based on your profile and previous applications, we've found these potential matches
              </p>
              
              <div className="space-y-4 mt-6">
                {RECOMMENDED_JOBS.map(job => (
                  <div 
                    key={job.id}
                    className="p-4 border rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <img 
                        src={job.logo} 
                        alt={job.company} 
                        className="h-12 w-12 rounded-lg border object-contain p-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-medium">{job.position}</h4>
                            <p className="text-muted-foreground">{job.company} • {job.location}</p>
                          </div>
                          <Badge className="bg-verifirm-blue text-white border-none">
                            {job.matchScore}% match
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline" className="bg-muted/50">
                            {job.salary}
                          </Badge>
                          <Badge variant="outline" className="bg-muted/50">
                            Full-time
                          </Badge>
                          <Badge variant="outline" className="bg-muted/50">
                            {job.posted}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-end mt-4 gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button size="sm" className="gap-1">
                            <Rocket className="h-4 w-4" />
                            Quick Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline">
                  Load more opportunities
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex-col space-y-4">
        <div className="w-full h-px bg-border"></div>
        <div className="flex justify-between items-center w-full text-sm">
          <p className="text-muted-foreground">
            Quick Apply lets you apply to jobs across platforms with one click
          </p>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Rocket className="h-4 w-4" />
            Get more Quick Applies
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuickApply;
