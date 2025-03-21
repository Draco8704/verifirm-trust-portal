
import { DollarSign, BadgeDollarSign, Coins, Users, BarChart4, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MonetizationSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Monetization Strategy</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our multi-pronged approach to revenue generation ensures sustainable growth while delivering value to all users.
        </p>
      </div>

      <Tabs defaultValue="freemium" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
          <TabsTrigger value="freemium">Freemium Model</TabsTrigger>
          <TabsTrigger value="employer">Employer Dashboard</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="data">Data & Insights</TabsTrigger>
          <TabsTrigger value="sponsored">Sponsored Content</TabsTrigger>
        </TabsList>
        
        <TabsContent value="freemium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <Badge className="w-fit mb-2">Free</Badge>
                <CardTitle>Basic Access</CardTitle>
                <CardDescription>Essential company insights for job seekers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>View company profiles and ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Read a limited number of reviews per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Basic search functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included={false} />
                    <span className="text-muted-foreground">Advanced filtering of reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included={false} />
                    <span className="text-muted-foreground">Salary insights and comparisons</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-verifirm-blue border shadow-sm">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-verifirm-blue text-white hover:bg-verifirm-blue/90">Premium</Badge>
                <CardTitle>Full Access</CardTitle>
                <CardDescription>Comprehensive insights for serious job seekers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Unlimited review access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Advanced filtering and search capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Detailed salary data and benefits information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Company comparison tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Email alerts for new reviews of followed companies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="employer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <BadgeDollarSign className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Verified Employer Profiles</CardTitle>
                <CardDescription>Establish your brand presence</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Verified employer badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Customizable company profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Media gallery for workplace photos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>Measure your employer brand</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Profile view analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Review sentiment tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Competitor benchmarking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Response System</CardTitle>
                <CardDescription>Engage with employee feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Respond to employee reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Flag inappropriate content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckItem included />
                    <span>Request review verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="recruitment">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Job Posting</CardTitle>
                <CardDescription>Connect with quality candidates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create branded job listings directly integrated with your company profile to attract candidates who align with your culture.
                </p>
                <Badge variant="outline" className="mt-2">Tiered Pricing Available</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>"Apply with Verifirm"</CardTitle>
                <CardDescription>Streamlined application process</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Embed our application button on your careers site to provide candidates with verified company information during their application process.
                </p>
                <Badge variant="outline" className="mt-2">Usage-Based Pricing</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-verifirm-blue/10 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-verifirm-blue" />
                </div>
                <CardTitle>Application Tracking</CardTitle>
                <CardDescription>Manage your candidate pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track applications, schedule interviews, and manage candidates through our integrated ATS functionality with verified candidate profiles.
                </p>
                <Badge variant="outline" className="mt-2">Per-Seat Pricing</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle>Data & Insights Monetization</CardTitle>
              <CardDescription>
                Anonymized workforce data providing valuable market insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">For Employers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Industry benchmarking reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Salary and benefits analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Workforce sentiment trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Talent pool insights</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">For Research & Partners</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>API access to anonymized datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Custom research reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Industry trend analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckItem included />
                      <span>Academic research partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sponsored">
          <Card>
            <CardHeader>
              <CardTitle>Sponsored Content Options</CardTitle>
              <CardDescription>
                Promotional opportunities that maintain transparency and user trust
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="h-36 bg-muted rounded-md flex items-center justify-center">
                    <Badge className="bg-verifirm-blue/20 text-verifirm-blue hover:bg-verifirm-blue/30 border-none">Sponsored</Badge>
                  </div>
                  <h3 className="text-lg font-medium">Featured Placements</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium positioning in search results and category pages with transparent sponsorship labeling.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-36 bg-muted rounded-md flex items-center justify-center">
                    <Badge className="bg-verifirm-blue/20 text-verifirm-blue hover:bg-verifirm-blue/30 border-none">Native Content</Badge>
                  </div>
                  <h3 className="text-lg font-medium">Sponsored Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Branded content showcasing company culture, benefits, and workplace environment with clear sponsorship disclosure.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-36 bg-muted rounded-md flex items-center justify-center">
                    <Badge className="bg-verifirm-blue/20 text-verifirm-blue hover:bg-verifirm-blue/30 border-none">Targeted</Badge>
                  </div>
                  <h3 className="text-lg font-medium">Talent Campaigns</h3>
                  <p className="text-sm text-muted-foreground">
                    Targeted recruitment messaging to specific talent segments based on anonymized user profiles and interests.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const CheckItem = ({ included }: { included: boolean }) => {
  return (
    included ? (
      <div className="h-5 w-5 rounded-full bg-verifirm-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="h-3.5 w-3.5 text-verifirm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : (
      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="h-3.5 w-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    )
  );
};

export default MonetizationSection;
