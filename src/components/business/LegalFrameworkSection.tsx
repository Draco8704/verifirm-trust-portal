
import React from 'react';
import { Shield, Lock, FileText, Book, Gavel, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const LegalFrameworkSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Legal Framework</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive legal infrastructure that protects all stakeholders while maintaining transparency.
        </p>
      </div>

      <Tabs defaultValue="compliance" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="data-protection">Data Protection</TabsTrigger>
          <TabsTrigger value="moderation">Content Moderation</TabsTrigger>
          <TabsTrigger value="dispute">Dispute Resolution</TabsTrigger>
          <TabsTrigger value="terms">Terms & Policies</TabsTrigger>
        </TabsList>
        
        <TabsContent value="compliance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Regulatory Compliance</CardTitle>
                <CardDescription>Adherence to global and regional privacy laws</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Key Legislation Compliance</h3>
                  
                  <div className="rounded-lg border border-border/50 overflow-hidden">
                    <div className="border-b border-border/50 bg-muted/30 py-2 px-3">
                      <div className="text-xs font-semibold">South African Protection of Personal Information Act (POPIA)</div>
                    </div>
                    <div className="p-3">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Information Officer Designated</div>
                          <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Privacy Policy POPIA Compliant</div>
                          <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Data Subject Rights Procedures</div>
                          <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Data Processing Agreements</div>
                          <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Security Safeguards</div>
                          <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <div className="border-b border-border/50 bg-muted/30 py-2 px-3">
                        <div className="text-xs font-semibold">EU GDPR</div>
                      </div>
                      <div className="p-3">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-xs">Data Processing Register</div>
                            <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-xs">Right to be Forgotten</div>
                            <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-xs">Data Portability</div>
                            <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <div className="border-b border-border/50 bg-muted/30 py-2 px-3">
                        <div className="text-xs font-semibold">Other Compliance</div>
                      </div>
                      <div className="p-3">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-xs">UK Data Protection Act</div>
                            <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-xs">California's CCPA</div>
                            <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-xs">Brazil's LGPD</div>
                            <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">Complete</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>POPIA Compliance Key Components</CardTitle>
                  <CardDescription>How we adhere to South Africa's privacy law</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-md border border-border/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <Lock className="h-4 w-4 text-verifirm-blue" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Information Processing</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            We only collect and process personal information for specific, explicitly defined purposes. All processing is minimized to what is necessary.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-md border border-border/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="h-4 w-4 text-verifirm-blue" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Reviewer Anonymity</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            All employee reviews are anonymous by default. We employ advanced anonymization techniques to ensure reviewers cannot be identified.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-md border border-border/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Data Subject Rights</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            We provide clear mechanisms for users to access, correct, delete or transfer their personal information in compliance with POPIA requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-md border border-border/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Information Security</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            We implement comprehensive security measures to protect all personal information from unauthorized access, disclosure, or damage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Information Officer Contact</CardTitle>
                  <CardDescription>As required by POPIA section 55</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Name:</div>
                      <div className="text-sm font-medium">John Doe</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Email:</div>
                      <div className="text-sm font-medium">privacy@verifirm.com</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Phone:</div>
                      <div className="text-sm font-medium">+27 21 555 0199</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Registration:</div>
                      <div className="text-sm font-medium">Registered with Information Regulator</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <div className="text-xs text-muted-foreground">
                        For any concerns regarding your personal information or to exercise your rights under POPIA, please contact our Information Officer directly.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="data-protection">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Privacy Framework</CardTitle>
                <CardDescription>POPI Act & GDPR compliant approach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">Data Collection</div>
                      <div className="text-xs text-muted-foreground">Minimized</div>
                    </div>
                    <Progress value={30} className="h-2" />
                    <div className="text-xs text-muted-foreground">Only essential information is collected, with clear purpose limitation</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">Data Retention</div>
                      <div className="text-xs text-muted-foreground">Time-limited</div>
                    </div>
                    <Progress value={50} className="h-2" />
                    <div className="text-xs text-muted-foreground">Data is retained only as long as necessary for the specified purpose</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">User Control</div>
                      <div className="text-xs text-muted-foreground">Comprehensive</div>
                    </div>
                    <Progress value={90} className="h-2" />
                    <div className="text-xs text-muted-foreground">Users have full access, deletion and portability rights</div>
                  </div>
                </div>
                
                <div className="bg-muted/40 p-4 rounded-md space-y-2">
                  <h3 className="text-sm font-medium">Key Legal Compliance</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-background">POPI Act</Badge>
                    <Badge variant="outline" className="bg-background">GDPR</Badge>
                    <Badge variant="outline" className="bg-background">CCPA</Badge>
                    <Badge variant="outline" className="bg-background">ISO 27001</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Cookie Consent System</CardTitle>
                    <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">
                      User-Friendly
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-border/50 overflow-hidden">
                    <div className="bg-card p-4 space-y-3">
                      <h3 className="text-sm font-medium">Cookie Preferences</h3>
                      <p className="text-xs text-muted-foreground">
                        Customize how cookies are used across our platform for a personalized experience.
                      </p>
                      
                      <div className="space-y-3 pt-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-xs font-medium">Essential</div>
                            <div className="text-xs text-muted-foreground">Required for basic functionality</div>
                          </div>
                          <div className="w-9 h-5 rounded-full bg-verifirm-green/30 flex items-center px-0.5">
                            <div className="w-4 h-4 rounded-full bg-verifirm-green ml-auto"></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-xs font-medium">Functional</div>
                            <div className="text-xs text-muted-foreground">Enhances usability and features</div>
                          </div>
                          <div className="w-9 h-5 rounded-full bg-verifirm-green/30 flex items-center px-0.5">
                            <div className="w-4 h-4 rounded-full bg-verifirm-green ml-auto"></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-xs font-medium">Analytics</div>
                            <div className="text-xs text-muted-foreground">Helps us improve our service</div>
                          </div>
                          <div className="w-9 h-5 rounded-full bg-muted flex items-center px-0.5">
                            <div className="w-4 h-4 rounded-full bg-foreground"></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-xs font-medium">Marketing</div>
                            <div className="text-xs text-muted-foreground">Personalized advertisements</div>
                          </div>
                          <div className="w-9 h-5 rounded-full bg-muted flex items-center px-0.5">
                            <div className="w-4 h-4 rounded-full bg-foreground"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-3 flex items-center justify-end gap-2">
                        <button className="text-xs px-3 py-1.5 border border-border rounded-md hover:bg-muted/50">
                          Reject All
                        </button>
                        <button className="text-xs px-3 py-1.5 bg-verifirm-blue text-white rounded-md hover:bg-verifirm-blue/90">
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Data Retention Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="relative pl-8 pb-6 border-l border-border/50">
                      <div className="absolute w-6 h-6 bg-verifirm-blue/20 rounded-full -left-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <h3 className="text-sm font-medium">User Account Creation</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Profile information stored for account duration
                      </p>
                    </div>
                    
                    <div className="relative pl-8 pb-6 border-l border-border/50">
                      <div className="absolute w-6 h-6 bg-verifirm-blue/20 rounded-full -left-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <h3 className="text-sm font-medium">Review Submission</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Reviews retained permanently unless deleted by user
                      </p>
                      <div className="text-xs text-verifirm-blue mt-1">
                        Anonymization options available
                      </div>
                    </div>
                    
                    <div className="relative pl-8 pb-0">
                      <div className="absolute w-6 h-6 bg-verifirm-blue/20 rounded-full -left-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <h3 className="text-sm font-medium">Account Deletion</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Personal data deleted within 30 days
                      </p>
                      <div className="text-xs text-verifirm-blue mt-1">
                        Option to delete or anonymize reviews
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="moderation">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Content Moderation System</CardTitle>
                <CardDescription>Fair and transparent moderation policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Review Guidelines</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Factual, first-hand experience only</li>
                    <li>No naming specific individuals</li>
                    <li>No confidential company information</li>
                    <li>No discriminatory or offensive language</li>
                    <li>No promotional content or external links</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Moderation Process</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>AI-powered pre-screening</li>
                    <li>Human review for flagged content</li>
                    <li>User reporting mechanisms</li>
                    <li>Employer flagging system</li>
                    <li>Appeals process for rejected content</li>
                  </ul>
                </div>
                
                <div className="rounded-md bg-muted/30 p-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Balance of Perspectives:</span> Our moderation system is designed to ensure authentic reviews while protecting both employees and employers from unfair or harmful content.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div>
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Moderation Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <div className="border-b border-border/50 bg-muted/30 py-2 px-3">
                        <div className="text-xs font-medium">Review Submission Process</div>
                      </div>
                      <div className="p-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">1</div>
                            <div className="text-xs">Content submitted by verified user</div>
                          </div>
                          <div className="flex items-center gap-2 pl-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">2</div>
                            <div className="text-xs">Automated AI screening checks</div>
                          </div>
                          <div className="flex items-center gap-2 pl-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">3</div>
                            <div className="text-xs">Human review if flagged by AI</div>
                          </div>
                          <div className="flex items-center gap-2 pl-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">4</div>
                            <div className="text-xs">Published with moderation status</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <div className="border-b border-border/50 bg-muted/30 py-2 px-3">
                        <div className="text-xs font-medium">Content Status Indicators</div>
                      </div>
                      <div className="p-3 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-verifirm-green rounded-full"></div>
                          <div className="text-xs font-medium">Approved</div>
                          <div className="text-xs text-muted-foreground ml-auto">Meets all guidelines</div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <div className="text-xs font-medium">Under Review</div>
                          <div className="text-xs text-muted-foreground ml-auto">Pending human moderation</div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="text-xs font-medium">Rejected</div>
                          <div className="text-xs text-muted-foreground ml-auto">Violates guidelines</div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="text-xs font-medium">Edited</div>
                          <div className="text-xs text-muted-foreground ml-auto">Specific content redacted</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="dispute">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Gavel className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Dispute Resolution System</CardTitle>
                <CardDescription>Fair process for handling content disputes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Employer Verification Process</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Official company email domain verification</li>
                    <li>Business registration number validation</li>
                    <li>Legal representative confirmation</li>
                    <li>Verified badge once approved</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Review Challenge Grounds</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Factual inaccuracy with evidence</li>
                    <li>Reviewer never employed at company</li>
                    <li>Confidential information disclosure</li>
                    <li>Discriminatory or defamatory content</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Resolution Process</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Third-party moderation panel</li>
                    <li>Evidence-based evaluation</li>
                    <li>Clear decision communication</li>
                    <li>Appeal process for all parties</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Verification Badge System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border/50 p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-verifirm-blue/20 flex items-center justify-center">
                          <Shield className="h-3 w-3 text-verifirm-blue" />
                        </div>
                        <span className="text-xs font-medium">Verified Employer</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Confirmed legitimate business with official company representative
                      </p>
                    </div>
                    
                    <div className="rounded-lg border border-border/50 p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-verifirm-green/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-green">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs font-medium">Verified Review</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Employment status confirmed through verification process
                      </p>
                    </div>
                    
                    <div className="rounded-lg border border-border/50 p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <span className="text-xs font-medium">Current Employee</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Reviewer confirmed as currently employed at company
                      </p>
                    </div>
                    
                    <div className="rounded-lg border border-border/50 p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </svg>
                        </div>
                        <span className="text-xs font-medium">Former Employee</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Reviewer confirmed as previously employed at company
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Dispute Resolution Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    <div className="relative pb-8 pl-8 border-l border-border/50">
                      <div className="absolute top-0 -left-2.5 w-5 h-5 rounded-full bg-verifirm-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium">Initial Dispute Filed</div>
                        <p className="text-xs text-muted-foreground">
                          Company submits challenge with specific grounds and evidence
                        </p>
                        <div className="text-xs text-verifirm-blue">Day 1</div>
                      </div>
                    </div>
                    
                    <div className="relative pb-8 pl-8 border-l border-border/50">
                      <div className="absolute top-0 -left-2.5 w-5 h-5 rounded-full bg-verifirm-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium">Reviewer Notification</div>
                        <p className="text-xs text-muted-foreground">
                          Review author notified and given opportunity to respond
                        </p>
                        <div className="text-xs text-verifirm-blue">Day 2-3</div>
                      </div>
                    </div>
                    
                    <div className="relative pb-8 pl-8 border-l border-border/50">
                      <div className="absolute top-0 -left-2.5 w-5 h-5 rounded-full bg-verifirm-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium">Evidence Review</div>
                        <p className="text-xs text-muted-foreground">
                          Moderation team evaluates all submitted evidence
                        </p>
                        <div className="text-xs text-verifirm-blue">Day 4-7</div>
                      </div>
                    </div>
                    
                    <div className="relative pb-0 pl-8">
                      <div className="absolute top-0 -left-2.5 w-5 h-5 rounded-full bg-verifirm-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-verifirm-blue rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium">Final Decision</div>
                        <p className="text-xs text-muted-foreground">
                          Determination made with explanation to both parties
                        </p>
                        <div className="text-xs text-verifirm-blue">By Day 10</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="terms">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Terms & Policies Framework</CardTitle>
                <CardDescription>Clear, transparent legal agreements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Key Legal Documents</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Review Guidelines</li>
                    <li>Employer Guidelines</li>
                    <li>Content Moderation Policy</li>
                    <li>Dispute Resolution Policy</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Policy Principles</h3>
                  <ul className="pl-5 space-y-1 text-xs text-muted-foreground list-disc">
                    <li>Plain language, readable format</li>
                    <li>Summarized key points for quick understanding</li>
                    <li>Regular updates with clear version history</li>
                    <li>Proactive notification of significant changes</li>
                    <li>Available in multiple languages</li>
                  </ul>
                </div>
                
                <div className="rounded-md bg-muted/30 p-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Legal Transparency:</span> All our policies are designed to be understandable by non-lawyers while maintaining legal precision and enforceability.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Policy Version Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-border/50 overflow-hidden">
                    <div className="border-b border-border/50 bg-muted/30 py-2 px-3 flex justify-between items-center">
                      <div className="text-xs font-medium">Privacy Policy Version History</div>
                      <Badge variant="outline" className="text-xs h-5">Current: v4.2</Badge>
                    </div>
                    <div className="p-3 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <div className="text-xs font-medium">Version 4.2</div>
                          </div>
                          <div className="text-xs text-muted-foreground">May 15, 2023</div>
                        </div>
                        <div className="pl-6 text-xs text-muted-foreground">
                          Updated data retention periods and added POPI Act compliance details
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <div className="text-xs font-medium">Version 4.1</div>
                          </div>
                          <div className="text-xs text-muted-foreground">January 10, 2023</div>
                        </div>
                        <div className="pl-6 text-xs text-muted-foreground">
                          Enhanced cookie consent mechanisms and user controls
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <div className="text-xs font-medium">Version 4.0</div>
                          </div>
                          <div className="text-xs text-muted-foreground">September 5, 2022</div>
                        </div>
                        <div className="pl-6 text-xs text-muted-foreground">
                          Major revision with expanded user rights and data portability
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle>Simplified Terms Presentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-md border border-border/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <Lock className="h-4 w-4 text-verifirm-blue" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Your Data Privacy</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            We collect only essential information needed to provide our services. Your review data is anonymized by default, and you control what personal information is visible.
                          </p>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="text-xs text-verifirm-blue">View Full Privacy Policy</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                              <path d="M7 7l9.2 9.2M17 7v9h-9"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-md border border-border/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-verifirm-blue/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Content Ownership</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            You retain ownership of all reviews you submit. By posting, you grant us a license to display your content on our platform. You can edit or delete your reviews at any time.
                          </p>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="text-xs text-verifirm-blue">View Terms of Service</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verifirm-blue">
                              <path d="M7 7l9.2 9.2M17 7v9h-9"></path>
                            </svg>
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
      </Tabs>
    </div>
  );
};

export default LegalFrameworkSection;
