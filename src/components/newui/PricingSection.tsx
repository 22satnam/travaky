import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Docs on Call",
    price: "₹2,999",
    description: "Perfect for DIY travelers who need expert guidance",
    features: [
      "Form filling assistance",
      "Document checklist",
      "Phone & chat support",
      "Application review",
      "Embassy appointment booking"
    ],
    popular: false
  },
  {
    name: "Docs on Door",
    price: "₹4,999", 
    description: "Complete service with document pickup and delivery",
    features: [
      "Everything in Docs on Call",
      "Free document pickup",
      "Document verification",
      "Priority support",
      "Application submission",
      "Status updates via WhatsApp"
    ],
    popular: true
  },
  {
    name: "Visa at Door",
    price: "₹7,999",
    description: "Premium end-to-end visa processing service",
    features: [
      "Everything in Docs on Door",
      "Visa delivery to doorstep",
      "Express processing",
      "Dedicated visa expert",
      "Interview preparation (if required)",
      "100% money-back guarantee"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-brand-accent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our guarantee of expert service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full ${
                plan.popular 
                  ? 'border-brand-accent shadow-large scale-105' 
                  : 'border-border/50 hover:shadow-medium'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-brand-primary my-4">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground">/application</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-accent text-white hover:opacity-90' 
                      : 'bg-background border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your business?
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;