
import { CheckCircle, Search, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Step {
  icon: typeof CheckCircle;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

const HowItWorksSection = ({ steps }: HowItWorksSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How Verifirm Works</h2>
          <p className="text-muted-foreground">
            Get authentic insights about your potential workplace in just a few simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute hidden md:block left-1/2 top-8 bottom-8 w-0.5 bg-verifirm-blue/20 -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row items-center gap-6 animate-slideInRight"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:w-1/2 order-2 md:order-none text-center md:text-right p-6">
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </>
                  ) : (
                    <div className="flex justify-center md:justify-start">
                      <div className="verifirm-card p-6 max-w-sm">
                        <step.icon className="h-10 w-10 text-verifirm-blue mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Step number indicator */}
                <div className="z-10 flex items-center justify-center rounded-full bg-verifirm-blue text-white w-12 h-12 shadow-lg font-bold order-1 md:order-none">
                  {index + 1}
                </div>
                
                <div className="md:w-1/2 order-3 text-center md:text-left p-6">
                  {index % 2 === 1 ? (
                    <>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </>
                  ) : (
                    <div className="flex justify-center md:justify-end">
                      <div className="verifirm-card p-6 max-w-sm">
                        <step.icon className="h-10 w-10 text-verifirm-blue mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/signup">
            <Button size="lg" className="group">
              Get started for free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
