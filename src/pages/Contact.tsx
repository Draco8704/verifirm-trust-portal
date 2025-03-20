
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

const Contact = () => {
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
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
