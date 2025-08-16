import { FileText, Truck, Shield, Calendar, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "Easy Form Filling",
    description: "Smart forms that auto-populate and guide you through each step with expert recommendations."
  },
  {
    icon: Truck,
    title: "Doorstep Pickup",
    description: "Free document pickup from your location. No need to visit embassies or service centers."
  },
  {
    icon: Shield,
    title: "Expert Review",
    description: "Every application reviewed by visa experts to ensure maximum approval chances."
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "We secure the earliest available slots and handle all embassy communications."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Track your application in real-time with priority processing and regular updates."
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Dedicated customer success team available round the clock for any queries."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-brand-accent">Travaky</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the most comprehensive visa service that handles everything from application to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="bg-brand-accent-light rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-brand-accent transition-colors">
                  <feature.icon className="h-6 w-6 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Visas Processed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">99%</div>
              <div className="text-muted-foreground">Approval Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">20+</div>
              <div className="text-muted-foreground">Cities Coverage</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;