
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");

  // FAQ data organized by categories
  const faqData = {
    general: [
      {
        question: "What is Verifirm?",
        answer: "Verifirm is a platform that helps job seekers verify company cultures before signing contracts. We provide real insights from real employees, so there are no surprises when you join a new company."
      },
      {
        question: "How does Verifirm verify reviews?",
        answer: "We use a combination of email verification, employment verification, and manual review to ensure that reviews are submitted by actual employees. This helps maintain the integrity and reliability of our platform."
      },
      {
        question: "Is Verifirm available internationally?",
        answer: "Currently, Verifirm is focused on the South African market, but we have plans to expand to other regions in the future. Stay tuned for announcements about our expansion!"
      },
      {
        question: "Can I use Verifirm on mobile devices?",
        answer: "Yes! Verifirm is fully responsive and works on desktop, tablet, and mobile devices. You can access all features on the go."
      },
      {
        question: "How current are the reviews on Verifirm?",
        answer: "Reviews on Verifirm include the date they were submitted, and we encourage regular updates. We also flag reviews older than 2 years to ensure users have access to the most current information."
      }
    ],
    jobseekers: [
      {
        question: "Is Verifirm free for job seekers?",
        answer: "Verifirm offers a freemium model. Basic company information and limited reviews are available for free, while premium features like detailed insights, salary information, and advanced search options require a subscription."
      },
      {
        question: "How do I submit a review?",
        answer: "To submit a review, you need to create an account and verify your email. Then, search for your company and click 'Write a Review.' You'll need to verify your employment before your review is published."
      },
      {
        question: "Can I submit a review anonymously?",
        answer: "Yes, all reviews on Verifirm are displayed anonymously to protect your identity. However, we do require verification of employment to ensure review authenticity."
      },
      {
        question: "What should I include in my review?",
        answer: "The most helpful reviews include balanced feedback about company culture, work-life balance, management, career growth opportunities, and compensation. Be honest and specific while following our community guidelines."
      },
      {
        question: "How do I report a misleading review?",
        answer: "If you find a review that violates our guidelines, click the 'Flag' button on the review. Our moderation team will review it and take appropriate action."
      }
    ],
    employers: [
      {
        question: "How can my company join Verifirm?",
        answer: "Employers can create a free account to claim their company profile. Premium employer features like responding to reviews, customized branding, and analytics require a subscription."
      },
      {
        question: "Can we remove negative reviews?",
        answer: "Reviews cannot be removed simply for being negative. However, if a review violates our community guidelines, you can flag it for our moderation team to review."
      },
      {
        question: "How can we highlight our company culture?",
        answer: "Premium employer accounts can customize their profile with photos, videos, benefits information, and culture highlights. You can also respond to reviews to provide additional context."
      },
      {
        question: "What analytics do employer accounts receive?",
        answer: "Premium employer accounts get access to dashboard analytics including profile views, review trends, sentiment analysis, competitive benchmarking, and candidate engagement metrics."
      },
      {
        question: "How can we integrate Verifirm with our recruitment process?",
        answer: "Verifirm offers integration options for your career page, ATS, and job postings. Contact our sales team for custom integration solutions."
      }
    ],
    subscription: [
      {
        question: "What are the different subscription tiers?",
        answer: "We offer Basic (free), Professional, and Premium tiers for job seekers, and Basic, Growth, and Enterprise tiers for employers. Each tier provides increasing access to features and insights."
      },
      {
        question: "How do I upgrade my subscription?",
        answer: "You can upgrade your subscription at any time from your account settings. Navigate to 'Subscription' and select the plan that fits your needs."
      },
      {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 14-day money-back guarantee for new subscriptions. After that period, we do not provide prorated refunds for cancellations."
      },
      {
        question: "Are there discounts for annual subscriptions?",
        answer: "Yes, annual subscriptions receive a 20% discount compared to monthly billing."
      }
    ],
    legal: [
      {
        question: "How does Verifirm handle my personal data?",
        answer: "Verifirm is fully compliant with POPI Act requirements. We only collect necessary information and never share your personal details with employers or third parties without consent. See our Privacy Policy for details."
      },
      {
        question: "What are your community guidelines?",
        answer: "Our community guidelines prohibit hate speech, harassment, false information, promotional content, and personally identifiable information. All reviews should be honest, balanced, and focus on workplace experience."
      },
      {
        question: "How long do you retain user data?",
        answer: "We retain account data as long as you maintain an active account. Review content remains on the platform unless it violates our guidelines. You can request data deletion at any time through your account settings."
      },
      {
        question: "How can I access or delete my data?",
        answer: "You can download your data or request deletion through your account settings under 'Privacy & Data.' Data deletion requests are processed within 30 days."
      },
      {
        question: "How does the dispute resolution process work?",
        answer: "If a company disputes a review, our moderation team investigates both sides. We may request additional verification from the reviewer while maintaining their anonymity. Our decision is final and based on our guidelines."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="bg-verifirm-blue/5 py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Find answers to common questions about Verifirm and how our platform works.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="jobseekers">Job Seekers</TabsTrigger>
                <TabsTrigger value="employers">Employers</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                <TabsTrigger value="legal">Legal</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="general" className="mt-4">
              <FAQSection faqs={faqData.general} />
            </TabsContent>
            
            <TabsContent value="jobseekers" className="mt-4">
              <FAQSection faqs={faqData.jobseekers} />
            </TabsContent>
            
            <TabsContent value="employers" className="mt-4">
              <FAQSection faqs={faqData.employers} />
            </TabsContent>
            
            <TabsContent value="subscription" className="mt-4">
              <FAQSection faqs={faqData.subscription} />
            </TabsContent>
            
            <TabsContent value="legal" className="mt-4">
              <FAQSection faqs={faqData.legal} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-verifirm-gray py-12 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help with any additional questions you may have about Verifirm.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-verifirm-blue text-white hover:bg-verifirm-blue/90 transition-colors">
                Contact Support
              </a>
              <a href="mailto:support@verifirm.com" className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-verifirm-blue text-verifirm-blue hover:bg-verifirm-blue/10 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
        
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
