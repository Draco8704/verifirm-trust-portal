
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  allowSearch?: boolean;
}

const FAQSection = ({ faqs, allowSearch = false }: FAQSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery.trim() === "" 
    ? faqs 
    : faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        {!allowSearch ? (
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about Verifirm
            </p>
          </div>
        ) : (
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        )}

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No matching questions found. Try different keywords.</p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="verifirm-card my-4 px-6 py-1 overflow-hidden border border-border/50 rounded-md bg-card shadow-sm"
              >
                <AccordionTrigger className="text-lg py-4 font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
