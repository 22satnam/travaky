import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    country: "Germany",
    rating: 5,
    text: "Travaky made my Germany visa process so smooth! They picked up documents from my home and I got my visa in just 12 days. Excellent service!",
    image: "👩🏻‍💼"
  },
  {
    name: "Rahul Patel",
    location: "Bangalore", 
    country: "France",
    rating: 5,
    text: "I was stressed about the visa paperwork, but Travaky's team handled everything perfectly. The expert review gave me confidence and I got approved!",
    image: "👨🏻‍💻"
  },
  {
    name: "Sneha Gupta",
    location: "Delhi",
    country: "Italy", 
    rating: 5,
    text: "Amazing experience! From form filling to delivery, everything was handled professionally. I'll definitely use Travaky for my next trip.",
    image: "👩🏻‍🎓"
  },
  {
    name: "Amit Kumar",
    location: "Pune",
    country: "Spain",
    rating: 5,
    text: "The 24/7 support was incredible. They answered all my questions and kept me updated throughout the process. Highly recommended!",
    image: "👨🏻‍🔧"
  },
  {
    name: "Kavya Nair",
    location: "Chennai",
    country: "Netherlands",
    rating: 5,
    text: "Professional service with attention to detail. Got my Schengen visa without any hassle. The doorstep pickup saved me so much time!",
    image: "👩🏻‍⚕️"
  },
  {
    name: "Rohan Shah",
    location: "Hyderabad",
    country: "Switzerland",
    rating: 5,
    text: "Travaky's team is simply the best! They made the complex visa process look easy. Great communication and timely delivery.",
    image: "👨🏻‍🏫"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-brand-accent">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trusted us with their visa applications.
          </p>
        </div>

        {/* Scrolling testimonials */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-6 w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={index} 
                className="w-80 flex-shrink-0 hover:shadow-medium transition-shadow border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location} → {testimonial.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 bg-gradient-subtle rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Trusted by Leading Organizations</h3>
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <div className="text-lg font-semibold">TCS</div>
            <div className="text-lg font-semibold">Infosys</div>
            <div className="text-lg font-semibold">Wipro</div>
            <div className="text-lg font-semibold">HCL</div>
            <div className="text-lg font-semibold">Tech Mahindra</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;