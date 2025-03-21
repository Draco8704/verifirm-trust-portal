
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const Contact = () => {
  // FAQ data for the Contact page
  const contactFaqs = [
    {
      question: "How do I request verification for my company?",
      answer: "Company verification can be requested through your employer dashboard. Our team will review your submission and reach out with the verification process details within 2 business days."
    },
    {
      question: "How long does it take to receive a response?",
      answer: "We aim to respond to all inquiries within 24-48 hours during business days. Premium members receive priority support with faster response times."
    },
    {
      question: "Can I dispute a review about my company?",
      answer: "Yes, verified employers can flag reviews for moderation through their dashboard. Our team will review the content against our community guidelines and determine appropriate action."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "You can report inappropriate content by clicking the 'Flag' button on any review or comment. Our moderation team will review the content within 24 hours."
    },
    {
      question: "Do you offer support for job seekers?",
      answer: "Yes, we provide support for both job seekers and employers. Job seekers can reach out with questions about using Verifirm to research companies or how to submit verified reviews."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="bg-verifirm-blue/5 py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with your questions, feedback, or inquiries.
            </p>
          </div>
        </div>
        
        <ContactSection />
        
        <div className="py-16 bg-verifirm-gray">
          <FAQSection faqs={contactFaqs} />
        </div>
        
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
