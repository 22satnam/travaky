import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Truck, Cog, Package, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Apply",
    description: "Fill our smart form once with your details. Our AI guides you through every field.",
    color: "bg-blue-500"
  },
  {
    icon: Truck,
    step: "02", 
    title: "Pickup",
    description: "We collect your documents from your doorstep at a convenient time for you.",
    color: "bg-purple-500"
  },
  {
    icon: Cog,
    step: "03",
    title: "Processing",
    description: "Our experts review everything, book appointments, and submit your application.",
    color: "bg-green-500"
  },
  {
    icon: Package,
    step: "04",
    title: "Delivery",
    description: "Receive your approved visa delivered safely back to your location.",
    color: "bg-orange-500"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-brand-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your visa in just 4 simple steps. We handle all the complexity while you focus on planning your trip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center h-full hover:shadow-medium transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className={`${step.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-brand-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-brand-accent" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-accent text-white hover:opacity-90 shadow-medium"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;