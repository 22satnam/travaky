"use client";
import GlobeDemo from "@/components/ui/globe-demo";

export default function GlobalVisaServices() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-primary ring-1 ring-primary/20">
            Global network
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Global Visa Services
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            We help travelers across 150+ countries—doorstep pickup, expert review, and fast scheduling.
          </p>
        </div>

        <div className="rounded-3xl border border-black/5 ring-1 ring-black/5 overflow-hidden bg-gradient-to-b from-primary-50/60 to-transparent">
          <GlobeDemo />
        </div>
      </div>
    </section>
  );
}