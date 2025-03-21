
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MonetizationSection from "@/components/business/MonetizationSection";
import TechnicalArchitectureSection from "@/components/business/TechnicalArchitectureSection";
import LegalFrameworkSection from "@/components/business/LegalFrameworkSection";
import RoadmapSection from "@/components/business/RoadmapSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Business = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="bg-verifirm-blue/5 py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-center">Verifirm Business Overview</h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real Insights from Real Employees. No Surprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-background">
                  <span className="text-verifirm-green font-medium">10,000+</span> Verified Reviews
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-background">
                  <span className="text-verifirm-blue font-medium">500K+</span> Monthly Visitors
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 py-8">
          <Tabs defaultValue="monetization" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              <TabsTrigger value="monetization">Monetization</TabsTrigger>
              <TabsTrigger value="technical">Technical Infrastructure</TabsTrigger>
              <TabsTrigger value="legal">Legal Framework</TabsTrigger>
              <TabsTrigger value="roadmap">Launch & Expansion</TabsTrigger>
            </TabsList>
            
            <TabsContent value="monetization">
              <MonetizationSection />
            </TabsContent>
            
            <TabsContent value="technical">
              <TechnicalArchitectureSection />
            </TabsContent>
            
            <TabsContent value="legal">
              <LegalFrameworkSection />
            </TabsContent>
            
            <TabsContent value="roadmap">
              <RoadmapSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Business;
