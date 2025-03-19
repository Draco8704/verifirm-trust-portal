
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features: FeatureItem[];
}

const FeatureSection = ({ features }: FeatureSectionProps) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Verifirm</h2>
          <p className="text-muted-foreground">
            We're committed to providing you with the most accurate and helpful information
            about potential employers to help you make the best career decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="verifirm-card p-6 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-verifirm-light-blue mb-4">
                <feature.icon className="h-6 w-6 text-verifirm-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
