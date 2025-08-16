import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Clock, MapPin } from "lucide-react";

const popularCountries = [
  {
    name: "Germany",
    flag: "🇩🇪",
    processingTime: "10-15 days",
    entryType: "Schengen",
    price: "₹8,500"
  },
  {
    name: "France",
    flag: "🇫🇷", 
    processingTime: "12-18 days",
    entryType: "Schengen",
    price: "₹9,000"
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    processingTime: "8-12 days", 
    entryType: "Schengen",
    price: "₹8,200"
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    processingTime: "15-20 days",
    entryType: "Schengen", 
    price: "₹8,800"
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    processingTime: "10-14 days",
    entryType: "Schengen",
    price: "₹8,600"
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    processingTime: "12-16 days",
    entryType: "Schengen",
    price: "₹9,500"
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    processingTime: "15-25 days",
    entryType: "UK Visa",
    price: "₹12,000"
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    processingTime: "20-30 days",
    entryType: "Visitor Visa",
    price: "₹15,000"
  }
];

const CountrySection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = popularCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-brand-accent">Destination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Select from our most popular visa destinations or search for your specific country.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-center"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="text-lg font-semibold mb-3">{country.name}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{country.processingTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{country.entryType}</span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-brand-primary mb-4">
                    {country.price}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-colors"
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
            View All Countries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CountrySection;