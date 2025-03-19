
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  cta: string;
  className?: string;
  billingPeriod: "monthly" | "annually";
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  cta,
  className,
  billingPeriod,
}: PricingCardProps) => {
  const currentPrice = billingPeriod === "monthly" ? price.monthly : price.annually;
  const discount = Math.round(((price.monthly * 12) - price.annually) / (price.monthly * 12) * 100);

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        popular && "border-verifirm-blue shadow-md shadow-verifirm-blue/10 scale-105 z-10",
        className
      )}
    >
      {popular && (
        <Badge
          className="absolute top-0 right-0 mt-4 mr-4 bg-verifirm-blue text-white border-none"
        >
          Most Popular
        </Badge>
      )}
      <CardHeader className="pb-0 pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">R{currentPrice}</span>
              <span className="text-muted-foreground">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
            </div>
            {billingPeriod === "annually" && (
              <p className="text-sm mt-1 text-verifirm-green">
                Save {discount}% with annual billing
              </p>
            )}
          </div>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2
                  className={cn(
                    "h-5 w-5 flex-shrink-0 mt-0.5",
                    feature.included
                      ? "text-verifirm-green"
                      : "text-muted-foreground/30"
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    !feature.included && "text-muted-foreground/60 line-through"
                  )}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          className={cn(
            "w-full",
            popular
              ? "bg-verifirm-blue hover:bg-verifirm-dark-blue"
              : "bg-primary/90 hover:bg-primary"
          )}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
