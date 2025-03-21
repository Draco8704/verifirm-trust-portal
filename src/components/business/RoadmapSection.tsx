
import { Rocket, MapPin, Flag, GitBranch, Target, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar } from "recharts";

const RoadmapSection = () => {
  // Sample data for charts
  const growthData = [
    { month: 'Jan', users: 5000, companies: 200 },
    { month: 'Feb', users: 8000, companies: 300 },
    { month: 'Mar', users: 12000, companies: 450 },
    { month: 'Apr', users: 18000, companies: 600 },
    { month: 'May', users: 25000, companies: 800 },
    { month: 'Jun', users: 35000, companies: 1100 },
    { month: 'Jul', users: 50000, companies: 1500 },
    { month: 'Aug', users: 70000, companies: 2000 },
    { month: 'Sep', users: 100000, companies: 2800 },
    { month: 'Oct', users: 150000, companies: 3500 },
    { month: 'Nov', users: 220000, companies: 4500 },
    { month: 'Dec', users: 300000, companies: 6000 },
  ];

  const marketShareData = [
    { region: 'Gauteng', share: 45 },
    { region: 'Western Cape', share: 25 },
    { region: 'KZN', share: 15 },
    { region: 'Eastern Cape', share: 8 },
    { region: 'Free State', share: 4 },
    { region: 'Other', share: 3 },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Launch & Expansion Roadmap</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our strategic plan for product growth and market expansion across South Africa and beyond.
        </p>
      </div>

      <Tabs defaultValue="product" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full mb-8">
          <TabsTrigger value="product">Product Roadmap</TabsTrigger>
          <TabsTrigger value="rollout">Feature Rollout</TabsTrigger>
          <TabsTrigger value="analytics">Growth Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="product">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-6">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-verifirm-blue" />
                  </div>
                  <CardTitle>Launch Phases</CardTitle>
                  <CardDescription>Strategic rollout timeline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative pl-9 pb-6 border-l-2 border-verifirm-green">
                      <div className="absolute w-6 h-6 bg-verifirm-green text-white rounded-full -left-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium flex items-center justify-between">
                          <span>Phase 1: MVP Launch</span>
                          <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">
                            Completed
                          </Badge>
                        </h3>
                        <div className="text-xs text-muted-foreground">
                          Initial platform with core review and company profile functionality
                        </div>
                        <div className="text-xs text-muted-foreground">Q1 2023</div>
                      </div>
                    </div>
                    
                    <div className="relative pl-9 pb-6 border-l-2 border-verifirm-blue">
                      <div className="absolute w-6 h-6 bg-verifirm-blue text-white rounded-full -left-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 8v8"></path>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium flex items-center justify-between">
                          <span>Phase 2: Monetization</span>
                          <Badge variant="outline" className="bg-verifirm-blue/10 text-verifirm-blue border-verifirm-blue/20">
                            In Progress
                          </Badge>
                        </h3>
                        <div className="text-xs text-muted-foreground">
                          Premium features, employer profiles, and subscription model
                        </div>
                        <div className="text-xs text-muted-foreground">Q3 2023 - Q1 2024</div>
                      </div>
                    </div>
                    
                    <div className="relative pl-9 pb-6 border-l-2 border-muted">
                      <div className="absolute w-6 h-6 bg-muted text-muted-foreground rounded-full -left-3 flex items-center justify-center">
                        <span className="text-xs">3</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium flex items-center justify-between">
                          <span>Phase 3: Expansion</span>
                          <Badge variant="outline">
                            Planned
                          </Badge>
                        </h3>
                        <div className="text-xs text-muted-foreground">
                          Geographic expansion beyond major cities to all provinces
                        </div>
                        <div className="text-xs text-muted-foreground">Q2 - Q4 2024</div>
                      </div>
                    </div>
                    
                    <div className="relative pl-9 pb-0 border-l-2 border-muted">
                      <div className="absolute w-6 h-6 bg-muted text-muted-foreground rounded-full -left-3 flex items-center justify-center">
                        <span className="text-xs">4</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium flex items-center justify-between">
                          <span>Phase 4: International</span>
                          <Badge variant="outline">
                            Planned
                          </Badge>
                        </h3>
                        <div className="text-xs text-muted-foreground">
                          Expansion to neighboring African markets
                        </div>
                        <div className="text-xs text-muted-foreground">2025</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Feature Milestones Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-1 bg-muted rounded-full top-10"></div>
                    
                    <div className="relative grid grid-cols-6 pt-6 gap-4">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-verifirm-green text-white flex items-center justify-center mx-auto relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <div className="absolute w-1 h-6 bg-verifirm-green top-full"></div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-xs font-medium">Core Platform</div>
                          <div className="text-xs text-muted-foreground">Q1 2023</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-verifirm-green text-white flex items-center justify-center mx-auto relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <div className="absolute w-1 h-6 bg-verifirm-green top-full"></div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-xs font-medium">Mobile App</div>
                          <div className="text-xs text-muted-foreground">Q2 2023</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue text-white flex items-center justify-center mx-auto relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 8v8"></path>
                          </svg>
                          <div className="absolute w-1 h-6 bg-verifirm-blue top-full"></div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-xs font-medium">Premium Tier</div>
                          <div className="text-xs text-muted-foreground">Q3 2023</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue text-white flex items-center justify-center mx-auto relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 8v8"></path>
                          </svg>
                          <div className="absolute w-1 h-6 bg-verifirm-blue top-full"></div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-xs font-medium">Employer Tools</div>
                          <div className="text-xs text-muted-foreground">Q4 2023</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center mx-auto relative">
                          <span className="text-xs">Q1</span>
                          <div className="absolute w-1 h-6 bg-muted top-full"></div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-xs font-medium">Job Integration</div>
                          <div className="text-xs text-muted-foreground">Q1 2024</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center mx-auto relative">
                          <span className="text-xs">Q2</span>
                          <div className="absolute w-1 h-6 bg-muted top-full"></div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-xs font-medium">API Platform</div>
                          <div className="text-xs text-muted-foreground">Q2 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-md border border-border/50 p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <Target className="h-3 w-3 text-verifirm-blue" />
                        </div>
                        <div className="text-xs font-medium">Q1 2024 Major Features</div>
                      </div>
                      <ul className="pl-8 space-y-1 text-xs text-muted-foreground list-disc">
                        <li>Integrated job board</li>
                        <li>Application tracking system</li>
                        <li>Company comparison tools</li>
                        <li>Enhanced analytics for employers</li>
                      </ul>
                    </div>
                    
                    <div className="rounded-md border border-border/50 p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <GitBranch className="h-3 w-3 text-verifirm-blue" />
                        </div>
                        <div className="text-xs font-medium">Q2 2024 Major Features</div>
                      </div>
                      <ul className="pl-8 space-y-1 text-xs text-muted-foreground list-disc">
                        <li>Developer API platform</li>
                        <li>Integration partnerships</li>
                        <li>Advanced data visualization</li>
                        <li>Mobile app enhancements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Geographic Expansion Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-border/50 overflow-hidden bg-white p-3">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-xl">
                          {/* Simplified South Africa map visualization */}
                          <div className="relative p-4">
                            <div className="h-64 w-full rounded-md bg-muted/20 relative">
                              {/* Phase 1 - Major cities */}
                              <div className="absolute top-[30%] left-[70%] w-3 h-3 bg-verifirm-green rounded-full animate-ping opacity-75"></div>
                              <div className="absolute top-[30%] left-[70%] w-4 h-4 bg-verifirm-green/30 rounded-full"></div>
                              <div className="absolute top-[30%] left-[70%] text-xs -mt-5 ml-1 font-medium">Johannesburg</div>
                              
                              <div className="absolute top-[80%] left-[55%] w-3 h-3 bg-verifirm-green rounded-full animate-ping opacity-75"></div>
                              <div className="absolute top-[80%] left-[55%] w-4 h-4 bg-verifirm-green/30 rounded-full"></div>
                              <div className="absolute top-[80%] left-[55%] text-xs -mt-5 ml-1 font-medium">Cape Town</div>
                              
                              <div className="absolute top-[60%] left-[85%] w-3 h-3 bg-verifirm-green rounded-full animate-ping opacity-75"></div>
                              <div className="absolute top-[60%] left-[85%] w-4 h-4 bg-verifirm-green/30 rounded-full"></div>
                              <div className="absolute top-[60%] left-[85%] text-xs -mt-5 ml-1 font-medium">Durban</div>
                              
                              {/* Phase 2 - Secondary cities */}
                              <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-verifirm-blue rounded-full"></div>
                              <div className="absolute top-[35%] left-[45%] w-4 h-4 bg-verifirm-blue/30 rounded-full"></div>
                              <div className="absolute top-[35%] left-[45%] text-xs -mt-5 ml-1 font-medium text-verifirm-blue">Bloemfontein</div>
                              
                              <div className="absolute top-[15%] left-[65%] w-3 h-3 bg-verifirm-blue rounded-full"></div>
                              <div className="absolute top-[15%] left-[65%] w-4 h-4 bg-verifirm-blue/30 rounded-full"></div>
                              <div className="absolute top-[15%] left-[65%] text-xs -mt-5 ml-1 font-medium text-verifirm-blue">Pretoria</div>
                              
                              <div className="absolute top-[65%] left-[30%] w-3 h-3 bg-verifirm-blue rounded-full"></div>
                              <div className="absolute top-[65%] left-[30%] w-4 h-4 bg-verifirm-blue/30 rounded-full"></div>
                              <div className="absolute top-[65%] left-[30%] text-xs -mt-5 ml-1 font-medium text-verifirm-blue">Port Elizabeth</div>
                              
                              {/* Phase 3 - Future expansion */}
                              <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-muted rounded-full"></div>
                              <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-muted/30 rounded-full"></div>
                              <div className="absolute top-[20%] left-[20%] text-xs -mt-5 ml-1 font-medium text-muted-foreground">Future expansion</div>
                              
                              <div className="absolute top-[50%] left-[15%] w-2 h-2 bg-muted rounded-full"></div>
                              <div className="absolute top-[50%] left-[15%] w-3 h-3 bg-muted/30 rounded-full"></div>
                              
                              <div className="absolute top-[40%] left-[90%] w-2 h-2 bg-muted rounded-full"></div>
                              <div className="absolute top-[40%] left-[90%] w-3 h-3 bg-muted/30 rounded-full"></div>
                            </div>
                            
                            <div className="mt-4 flex items-center justify-center gap-6">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-verifirm-green"></div>
                                <span className="text-xs">Phase 1: Active</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-verifirm-blue"></div>
                                <span className="text-xs">Phase 2: Q3-Q4 2023</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-muted"></div>
                                <span className="text-xs">Phase 3: 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="rollout">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Flag className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Feature Rollout Strategy</CardTitle>
                <CardDescription>Systematic feature deployment approach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-[17px] top-0 h-full w-px bg-border"></div>
                    <ul className="space-y-6 relative">
                      <li className="flex gap-4">
                        <div className="mt-1.5 h-8 w-8 flex-none rounded-full bg-verifirm-green flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium">Alpha Testing</h3>
                          <p className="text-xs text-muted-foreground">Internal team validation and feedback</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-verifirm-green text-verifirm-green">
                              Quality Assurance
                            </Badge>
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-verifirm-green text-verifirm-green">
                              Bug Fixing
                            </Badge>
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="mt-1.5 h-8 w-8 flex-none rounded-full bg-verifirm-green flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium">Beta Program</h3>
                          <p className="text-xs text-muted-foreground">Limited user testing with key partners</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-verifirm-green text-verifirm-green">
                              User Feedback
                            </Badge>
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-verifirm-green text-verifirm-green">
                              Usability Testing
                            </Badge>
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="mt-1.5 h-8 w-8 flex-none rounded-full bg-verifirm-blue flex items-center justify-center">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium">Limited Rollout</h3>
                          <p className="text-xs text-muted-foreground">Gradual release to percentage of users</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-verifirm-blue text-verifirm-blue">
                              A/B Testing
                            </Badge>
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-verifirm-blue text-verifirm-blue">
                              Performance Monitoring
                            </Badge>
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="mt-1.5 h-8 w-8 flex-none rounded-full bg-muted flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 0 0-9-9C3.984 3 3.984 12 3.984 12h17.032Z"></path>
                            <path d="M3.984 12c0 4.097 3.335 9 8.016 9s9-4.903 9-9H3.984Z"></path>
                          </svg>
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium">Full Release</h3>
                          <p className="text-xs text-muted-foreground">General availability to all users</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5">
                              Marketing Campaign
                            </Badge>
                            <Badge variant="outline" className="text-[10px] h-4 px-1.5">
                              Support Documentation
                            </Badge>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Feature Announcement System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-border/50 overflow-hidden">
                    <div className="border-b border-border/50 bg-muted/30 p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-verifirm-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                            <path d="m9 12 2 2 4-4"></path>
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">New Feature: Salary Insights</div>
                          <div className="text-xs text-muted-foreground">Compare your compensation with industry standards</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <div className="aspect-video bg-muted/30 rounded-md flex items-center justify-center mb-3">
                        <div className="text-xs text-muted-foreground">Feature preview image</div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-3">
                        Our new Salary Insights tool lets you compare your compensation against industry benchmarks. See how your salary stacks up against others in similar roles and locations.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          <button className="px-3 py-1.5 text-xs bg-verifirm-blue text-white rounded hover:bg-verifirm-blue/90">
                            Try it now
                          </button>
                          <button className="px-3 py-1.5 text-xs border border-border rounded hover:bg-muted/50">
                            Learn more
                          </button>
                        </div>
                        <button className="text-xs text-muted-foreground hover:text-foreground">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Feature Discovery & Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="aspect-video bg-muted/30 rounded-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-2">
                          <div className="text-xs text-white font-medium">Step 1: Company Search</div>
                          <div className="text-[10px] text-white/80">Find the right workplace</div>
                        </div>
                      </div>
                      
                      <div className="aspect-video bg-muted/30 rounded-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-2">
                          <div className="text-xs text-white font-medium">Step 2: Review Reading</div>
                          <div className="text-[10px] text-white/80">Get authentic insights</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="aspect-video bg-muted/30 rounded-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-2">
                          <div className="text-xs text-white font-medium">Step 3: Share Experience</div>
                          <div className="text-[10px] text-white/80">Submit your own review</div>
                        </div>
                      </div>
                      
                      <div className="aspect-video bg-muted/30 rounded-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-2">
                          <div className="text-xs text-white font-medium">Step 4: Get Notifications</div>
                          <div className="text-[10px] text-white/80">Stay updated on changes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <button className="px-4 py-1.5 text-xs bg-verifirm-blue text-white rounded-full hover:bg-verifirm-blue/90">
                      Take the full tour
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>User Growth Projections</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ChartContainer config={{
                    users: { color: "#9b87f5" },
                    companies: { color: "#7E69AB" }
                  }}>
                    <AreaChart
                      data={growthData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="users" stroke="#9b87f5" fill="#9b87f5" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="companies" stroke="#7E69AB" fill="#7E69AB" fillOpacity={0.2} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Market Penetration</CardTitle>
                    <CardDescription>Regional distribution of users</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[230px]">
                    <ChartContainer config={{
                      share: { color: "#9b87f5" }
                    }}>
                      <BarChart
                        data={marketShareData}
                        margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="region" angle={-45} textAnchor="end" height={60} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="share" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Conversion Metrics</CardTitle>
                    <CardDescription>Free to premium conversion</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[230px]">
                    <div className="h-full flex flex-col justify-between">
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-medium">Visitor to Signup</div>
                            <div className="text-xs">12%</div>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className="h-full bg-verifirm-blue rounded-full" style={{ width: '12%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-medium">Free to Premium</div>
                            <div className="text-xs">8%</div>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className="h-full bg-verifirm-blue rounded-full" style={{ width: '8%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-medium">Company Claim Rate</div>
                            <div className="text-xs">26%</div>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className="h-full bg-verifirm-blue rounded-full" style={{ width: '26%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-medium">Review Contribution</div>
                            <div className="text-xs">15%</div>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className="h-full bg-verifirm-blue rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-center text-muted-foreground mt-auto">
                        Conversion rates based on Q2 2023 data
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <Card className="border border-border/50 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-verifirm-blue">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12"></path>
                      <path d="M7 12a5 5 0 0 1 5-5"></path>
                    </svg>
                  </div>
                  <CardTitle>Growth Milestones</CardTitle>
                  <CardDescription>Key metrics and targets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-medium">User Acquisition Targets</h3>
                      <Badge variant="outline" className="bg-verifirm-blue/5">Monthly</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-verifirm-green"></div>
                        <div className="text-xs font-medium">300K Users</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2 bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">
                          Achieved Q4 2023
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-verifirm-blue"></div>
                        <div className="text-xs font-medium">500K Users</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2 bg-verifirm-blue/10 text-verifirm-blue border-verifirm-blue/20">
                          Target Q2 2024
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="text-xs font-medium">1M Users</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2">
                          Target Q4 2024
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-medium">Company Profiles</h3>
                      <Badge variant="outline" className="bg-verifirm-blue/5">Total</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-verifirm-green"></div>
                        <div className="text-xs font-medium">6,000 Companies</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2 bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">
                          Achieved Q4 2023
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-verifirm-blue"></div>
                        <div className="text-xs font-medium">10,000 Companies</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2 bg-verifirm-blue/10 text-verifirm-blue border-verifirm-blue/20">
                          Target Q2 2024
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="text-xs font-medium">20,000 Companies</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2">
                          Target Q4 2024
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-medium">Revenue Growth</h3>
                      <Badge variant="outline" className="bg-verifirm-blue/5">YoY</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-verifirm-green"></div>
                        <div className="text-xs font-medium">R5M Annual Revenue</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2 bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">
                          Achieved 2023
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-verifirm-blue"></div>
                        <div className="text-xs font-medium">R12M Annual Revenue</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2 bg-verifirm-blue/10 text-verifirm-blue border-verifirm-blue/20">
                          Target 2024
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="text-xs font-medium">R25M Annual Revenue</div>
                        <Badge variant="outline" className="ml-auto text-[10px] h-5 px-2">
                          Target 2025
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RoadmapSection;
