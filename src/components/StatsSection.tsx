
import { Users, Building, Star, Globe } from "lucide-react";

interface Stat {
  icon: typeof Users;
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="py-20 px-6 bg-verifirm-blue/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-verifirm-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verifirm-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Verifirm by the Numbers</h2>
          <p className="text-muted-foreground">
            Join thousands of professionals making better career decisions with authentic insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="verifirm-card p-6 flex flex-col items-center text-center animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-verifirm-light-blue mb-4">
                <stat.icon className="h-6 w-6 text-verifirm-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="font-medium text-lg mb-1">{stat.label}</p>
              {stat.description && (
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
