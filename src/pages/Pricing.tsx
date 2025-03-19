
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly");
  };

  // Pricing plans data
  const pricingPlans = [
    {
      title: "Basic",
      price: {
        monthly: 99,
        annually: 990,
      },
      description: "Essential features for job seekers",
      features: [
        { text: "Access to company reviews", included: true },
        { text: "Basic company insights", included: true },
        { text: "Verified employer information", included: true },
        { text: "Email notifications", included: true },
        { text: "Salary information", included: false },
        { text: "Company culture deep dives", included: false },
        { text: "Interview tips and insights", included: false },
        { text: "Priority customer support", included: false },
      ],
      cta: "Get Started",
    },
    {
      title: "Professional",
      price: {
        monthly: 249,
        annually: 2490,
      },
      description: "Advanced insights for serious job hunters",
      features: [
        { text: "Access to company reviews", included: true },
        { text: "Basic company insights", included: true },
        { text: "Verified employer information", included: true },
        { text: "Email notifications", included: true },
        { text: "Salary information", included: true },
        { text: "Company culture deep dives", included: true },
        { text: "Interview tips and insights", included: false },
        { text: "Priority customer support", included: false },
      ],
      popular: true,
      cta: "Get Professional",
    },
    {
      title: "Premium",
      price: {
        monthly: 499,
        annually: 4990,
      },
      description: "Complete toolkit for career advancement",
      features: [
        { text: "Access to company reviews", included: true },
        { text: "Basic company insights", included: true },
        { text: "Verified employer information", included: true },
        { text: "Email notifications", included: true },
        { text: "Salary information", included: true },
        { text: "Company culture deep dives", included: true },
        { text: "Interview tips and insights", included: true },
        { text: "Priority customer support", included: true },
      ],
      cta: "Get Premium",
    },
  ];

  // Credit card brand icons
  const paymentMethods = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg", alt: "Visa" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg", alt: "Mastercard" },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container px-6 mx-auto max-w-7xl">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 px-3 py-1">
                <span className="text-xs font-medium">Simple, transparent pricing</span>
              </Badge>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Choose the right plan for your needs
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-10">
              Get access to verified company reviews and insights to make informed career decisions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
              <span className={billingPeriod === "monthly" ? "font-medium" : "text-muted-foreground"}>
                Monthly
              </span>
              <Switch
                checked={billingPeriod === "annually"}
                onCheckedChange={toggleBillingPeriod}
              />
              <span className={billingPeriod === "annually" ? "font-medium" : "text-muted-foreground"}>
                Annually
              </span>
              <Badge variant="outline" className="bg-verifirm-green/10 text-verifirm-green border-verifirm-green/20">
                Save up to 15%
              </Badge>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PricingCard
                  {...plan}
                  billingPeriod={billingPeriod}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-sm border border-border p-8 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Enterprise Solutions</h2>
              <p className="text-muted-foreground">
                Custom solutions for large organizations and recruitment teams.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-verifirm-green flex-shrink-0 mt-0.5" />
                <span>Dedicated account manager</span>
              </div>
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-verifirm-green flex-shrink-0 mt-0.5" />
                <span>Customized reporting</span>
              </div>
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-verifirm-green flex-shrink-0 mt-0.5" />
                <span>API access</span>
              </div>
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-verifirm-green flex-shrink-0 mt-0.5" />
                <span>Volume discounts</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <Button size="lg">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
              Accepted Payment Methods
            </motion.h2>
            
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-8">
              {paymentMethods.map((method, index) => (
                <div key={index} className="h-16 flex items-center">
                  <img
                    src={method.src}
                    alt={method.alt}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </motion.div>
            
            <motion.p variants={itemVariants} className="mt-8 text-sm text-muted-foreground max-w-lg mx-auto">
              All payments are processed securely through our payment gateway with 
              industry-standard encryption. We never store your full credit card information.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-24 bg-verifirm-light-blue/50 rounded-2xl p-8 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-verifirm-blue/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
            
            <motion.div variants={itemVariants} className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Can I change my plan later?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be applied immediately.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How do I cancel my subscription?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer a 7-day free trial for new users on all plans. No credit card required until you decide to continue.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Are there discounts for students?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer special discounts for students with a valid .edu email address. Contact our support team for details.
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="mt-8">
                View all FAQs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
