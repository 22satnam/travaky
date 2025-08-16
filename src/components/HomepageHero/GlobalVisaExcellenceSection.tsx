'use client'
import React from "react";
import { cn } from "@/lib/utils";

const FLAGS = [
  { code: "US", flag: "🇺🇸", name: "United States" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "FR", flag: "🇫🇷", name: "France" },
  { code: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "DK", flag: "🇩🇰", name: "Denmark" },
  { code: "FI", flag: "🇫🇮", name: "Finland" },
  { code: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "AE", flag: "🇦🇪", name: "UAE" },
] as const;

export function GlobalVisaExcellenceSection() {
  const [highlight, setHighlight] = React.useState<number[]>([]);
  React.useEffect(() => {
    const int = setInterval(() => {
      const indexes: number[] = [];
      while (indexes.length < 5) {
        const r = Math.floor(Math.random() * FLAGS.length);
        if (!indexes.includes(r)) indexes.push(r);
      }
      setHighlight(indexes);
    }, 1800);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-secondary/5 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary p-1 rounded-2xl shadow-glow">
              <div className="bg-background rounded-xl px-8 py-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">Global Visa Excellence</h3>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-brand-primary">
                  <span className="animate-pulse">🌍</span><span>150+ Countries</span><span className="animate-pulse">✈️</span><span>Premium Service</span><span className="animate-pulse">⭐</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experience seamless visa processing with our <span className="text-brand-accent font-semibold">premium global network</span></p>
        </div>

        <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {FLAGS.map((c, i) => (
            <div key={c.code} className={cn("transition-transform duration-700", highlight.includes(i) ? "scale-125 z-10" : "hover:scale-110")}> 
              <div className={cn("relative bg-card/50 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-500", highlight.includes(i) ? "border-brand-accent shadow-glow bg-gradient-to-br from-brand-accent/10 to-brand-primary/10" : "border-border/30 hover:border-brand-accent/50 hover:shadow-medium")}> 
                <div className={cn("text-4xl mb-3 text-center", highlight.includes(i) ? "animate-bounce" : "")}>{c.flag}</div>
                <p className={cn("text-xs font-medium text-center", highlight.includes(i) ? "text-brand-accent" : "text-muted-foreground")}>{c.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
