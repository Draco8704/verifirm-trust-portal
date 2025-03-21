
import { Server, Database, Code, Network, Layers, Smartphone, Search, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnicalArchitectureSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Built with scalability, security, and performance at its core to deliver a seamless user experience.
        </p>
      </div>

      <Tabs defaultValue="app" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
          <TabsTrigger value="app">App Structure</TabsTrigger>
          <TabsTrigger value="search">Search Experience</TabsTrigger>
          <TabsTrigger value="security">Data Security</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="app">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Progressive Web App</CardTitle>
                <CardDescription>Cross-platform compatibility</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex flex-col">
                    <span className="font-medium">Installable Experience</span>
                    <span className="text-muted-foreground">Home screen access on any device</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Offline Capability</span>
                    <span className="text-muted-foreground">Access core content without internet</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Push Notifications</span>
                    <span className="text-muted-foreground">Stay updated with relevant alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Data Architecture</CardTitle>
                <CardDescription>Scalable and resilient data storage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex flex-col">
                    <span className="font-medium">Cloud Database</span>
                    <span className="text-muted-foreground">Distributed storage for reliability</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Caching Layer</span>
                    <span className="text-muted-foreground">Fast access to frequent data</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Data Synchronization</span>
                    <span className="text-muted-foreground">Real-time updates across devices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>API Architecture</CardTitle>
                <CardDescription>Flexible integration capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex flex-col">
                    <span className="font-medium">RESTful Endpoints</span>
                    <span className="text-muted-foreground">Standard access patterns</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">GraphQL Support</span>
                    <span className="text-muted-foreground">Client-specified data requests</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Webhook System</span>
                    <span className="text-muted-foreground">Event-driven integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 border border-border/50 p-6 rounded-lg bg-muted/30">
            <h3 className="text-xl font-medium mb-4">System Architecture Diagram</h3>
            <div className="aspect-video bg-white rounded-md overflow-hidden p-4">
              <div className="h-full w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-center">Client Layer</div>
                  <div className="flex justify-center gap-4">
                    <div className="h-12 bg-verifirm-blue/10 rounded flex items-center justify-center px-4">
                      <Smartphone className="h-4 w-4 mr-2" />
                      <span className="text-xs">Mobile App</span>
                    </div>
                    <div className="h-12 bg-verifirm-blue/10 rounded flex items-center justify-center px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span className="text-xs">Web Client</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-center">API Layer</div>
                  <div className="h-12 bg-verifirm-blue/20 rounded flex items-center justify-center">
                    <Code className="h-4 w-4 mr-2" />
                    <span className="text-xs">REST / GraphQL API Gateway</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-center">Service Layer</div>
                  <div className="flex justify-center gap-2">
                    <div className="h-10 bg-verifirm-blue/10 rounded flex items-center justify-center px-3 text-xs">
                      Auth
                    </div>
                    <div className="h-10 bg-verifirm-blue/10 rounded flex items-center justify-center px-3 text-xs">
                      Reviews
                    </div>
                    <div className="h-10 bg-verifirm-blue/10 rounded flex items-center justify-center px-3 text-xs">
                      Companies
                    </div>
                    <div className="h-10 bg-verifirm-blue/10 rounded flex items-center justify-center px-3 text-xs">
                      Search
                    </div>
                    <div className="h-10 bg-verifirm-blue/10 rounded flex items-center justify-center px-3 text-xs">
                      Analytics
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-center">Data Layer</div>
                  <div className="flex justify-center gap-4">
                    <div className="h-10 bg-verifirm-blue/15 rounded flex items-center justify-center px-3">
                      <Database className="h-3 w-3 mr-1" />
                      <span className="text-xs">Main DB</span>
                    </div>
                    <div className="h-10 bg-verifirm-blue/15 rounded flex items-center justify-center px-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                        <path d="M1 6V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7"></path>
                        <path d="M4.5 11.5V18c0 1.1.9 2 2 2H15"></path>
                        <path d="M4.5 14.5H11"></path>
                        <path d="M4.5 11.5H13"></path>
                        <path d="M4.5 8.5H13"></path>
                      </svg>
                      <span className="text-xs">Cache</span>
                    </div>
                    <div className="h-10 bg-verifirm-blue/15 rounded flex items-center justify-center px-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                      </svg>
                      <span className="text-xs">Search</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="search">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="border border-border/50 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-verifirm-blue" />
                  </div>
                  <CardTitle>Advanced Search Capabilities</CardTitle>
                  <CardDescription>Powerful search experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex flex-col">
                      <span className="font-medium">Intelligent Autocomplete</span>
                      <span className="text-muted-foreground">Predictive suggestion of companies and keywords</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">Faceted Filtering</span>
                      <span className="text-muted-foreground">Multiple filter dimensions for refined results</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">Natural Language Processing</span>
                      <span className="text-muted-foreground">Understand user intent beyond keywords</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">Personalized Results</span>
                      <span className="text-muted-foreground">Tailored to user preferences and history</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <div className="bg-background p-4 border-b border-border/50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search for companies, positions, or keywords..."
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-verifirm-blue/40 focus:border-verifirm-blue focus:outline-none"
                      defaultValue="software developer cape town"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    <div className="flex items-center bg-muted px-2 py-1 rounded text-xs font-medium">
                      <span>Position: Software Developer</span>
                      <button className="ml-1 text-muted-foreground hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center bg-muted px-2 py-1 rounded text-xs font-medium">
                      <span>Location: Cape Town</span>
                      <button className="ml-1 text-muted-foreground hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Company Size</div>
                      <div className="flex flex-wrap gap-2">
                        <div className="border border-border/50 rounded px-2 py-1 text-xs cursor-pointer hover:bg-muted/50">1-50</div>
                        <div className="border border-verifirm-blue rounded bg-verifirm-blue/10 px-2 py-1 text-xs cursor-pointer">51-200</div>
                        <div className="border border-border/50 rounded px-2 py-1 text-xs cursor-pointer hover:bg-muted/50">201-500</div>
                        <div className="border border-border/50 rounded px-2 py-1 text-xs cursor-pointer hover:bg-muted/50">501+</div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Rating</div>
                      <div className="flex flex-wrap gap-2">
                        <div className="border border-border/50 rounded px-2 py-1 text-xs cursor-pointer hover:bg-muted/50">Any</div>
                        <div className="border border-border/50 rounded px-2 py-1 text-xs cursor-pointer hover:bg-muted/50">3+</div>
                        <div className="border border-verifirm-blue rounded bg-verifirm-blue/10 px-2 py-1 text-xs cursor-pointer">4+</div>
                        <div className="border border-border/50 rounded px-2 py-1 text-xs cursor-pointer hover:bg-muted/50">4.5+</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Industry</div>
                      <select className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm">
                        <option>Technology</option>
                        <option>Financial Services</option>
                        <option>Healthcare</option>
                        <option>Retail</option>
                        <option>Manufacturing</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Sort By</div>
                      <select className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm">
                        <option>Most Relevant</option>
                        <option>Highest Rated</option>
                        <option>Most Reviews</option>
                        <option>Recently Added</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Data Security Framework</CardTitle>
                <CardDescription>Protecting user privacy and company information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">User Data Protection</h3>
                  <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Anonymized review submissions</li>
                    <li>Granular privacy controls for users</li>
                    <li>POPI Act and GDPR compliance measures</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Authentication System</h3>
                  <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                    <li>Multi-factor authentication</li>
                    <li>Single sign-on integration options</li>
                    <li>Biometric authentication support</li>
                    <li>Session security and inactivity timeouts</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Infrastructure Security</h3>
                  <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                    <li>Regular security audits and penetration testing</li>
                    <li>DDoS protection and prevention</li>
                    <li>Secure cloud infrastructure with redundancy</li>
                    <li>Real-time threat monitoring and detection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Privacy Controls Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="font-medium text-sm">Profile Visibility</div>
                        <div className="text-xs text-muted-foreground">Control who can see your profile details</div>
                      </div>
                      <div className="w-24">
                        <select className="w-full py-1 px-2 text-xs rounded border border-border bg-background">
                          <option>Private</option>
                          <option>Contacts</option>
                          <option>Public</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="font-medium text-sm">Review Attribution</div>
                        <div className="text-xs text-muted-foreground">How your reviews appear to others</div>
                      </div>
                      <div className="w-24">
                        <select className="w-full py-1 px-2 text-xs rounded border border-border bg-background">
                          <option>Anonymous</option>
                          <option>Job Title Only</option>
                          <option>Full Profile</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="font-medium text-sm">Data Usage</div>
                        <div className="text-xs text-muted-foreground">How your data can be used in research</div>
                      </div>
                      <div className="w-24">
                        <select className="w-full py-1 px-2 text-xs rounded border border-border bg-background">
                          <option>Opt Out</option>
                          <option>Anonymized</option>
                          <option>Full Access</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Data Access Request Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Request Submission</h4>
                      <p className="text-xs text-muted-foreground">User submits formal data access request</p>
                    </div>
                  </div>
                  
                  <div className="h-6 border-l border-dashed border-border/50 ml-4"></div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Identity Verification</h4>
                      <p className="text-xs text-muted-foreground">Multi-factor verification process</p>
                    </div>
                  </div>
                  
                  <div className="h-6 border-l border-dashed border-border/50 ml-4"></div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Data Compilation</h4>
                      <p className="text-xs text-muted-foreground">All user data collected and organized</p>
                    </div>
                  </div>
                  
                  <div className="h-6 border-l border-dashed border-border/50 ml-4"></div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Secure Delivery</h4>
                      <p className="text-xs text-muted-foreground">Encrypted transfer via secure channels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>Fast loading and responsive experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Code Optimization</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Modern JS framework with tree-shaking</li>
                    <li>Code splitting for faster initial loads</li>
                    <li>Optimized asset loading strategies</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Network Optimization</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>CDN for global content delivery</li>
                    <li>Compression for faster data transfer</li>
                    <li>Predictive prefetching</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Infrastructure</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Global server distribution</li>
                    <li>Auto-scaling based on load</li>
                    <li>Edge computing for reduced latency</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-3">
                <CardTitle>Loading States Design</CardTitle>
                <CardDescription>Optimized for perceived performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="h-6 bg-muted/70 animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-muted/50 animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-muted/50 animate-pulse rounded w-4/5"></div>
                  <div className="h-4 bg-muted/50 animate-pulse rounded w-5/6"></div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted/70 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted/70 animate-pulse rounded w-1/3"></div>
                    <div className="h-3 bg-muted/50 animate-pulse rounded w-1/2"></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted/70 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted/70 animate-pulse rounded w-2/5"></div>
                    <div className="h-3 bg-muted/50 animate-pulse rounded w-3/5"></div>
                  </div>
                </div>
                
                <div className="space-y-1 pt-2">
                  <div className="text-xs text-muted-foreground">Skeleton loading creates a sense of progress</div>
                  <div className="text-xs text-muted-foreground">Staggered animations reduce perceived wait time</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-3">
                <CardTitle>Offline Mode Experience</CardTitle>
                <CardDescription>Resilient in poor connectivity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border border-border/50 overflow-hidden">
                  <div className="bg-muted/30 py-2 px-3 border-b border-border/50 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-verifirm-green mr-2"></div>
                    <span className="text-xs">Cached content is fully available</span>
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <div className="text-xs">Saved reviews and company profiles</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <div className="text-xs">Recently viewed company pages</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <div className="text-xs">Drafted reviews and comments</div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border border-border/50 overflow-hidden">
                  <div className="bg-muted/30 py-2 px-3 border-b border-border/50 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <span className="text-xs">Queued for sync when online</span>
                  </div>
                  <div className="p-3 text-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                      </svg>
                      <div>New reviews and responses</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                      </svg>
                      <div>Profile edits and updates</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex p-3 bg-muted/30 rounded-md">
                  <div className="w-5 h-5 flex-shrink-0 rounded-full bg-verifirm-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <div className="text-xs">
                    Data will automatically sync when your connection is restored. You can continue using the app normally.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TechnicalArchitectureSection;
