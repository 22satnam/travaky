import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-white/5 rounded-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of travelers who've made their visa dreams come true with Travaky. 
              Start your application today and travel with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-brand-primary hover:bg-white/90 shadow-large min-w-48"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-brand-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-brand-primary"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat Now
                </Button>
              </div>
            </div>

            <div className="text-sm opacity-75">
              💡 Free consultation available • No hidden charges • 100% money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;