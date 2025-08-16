// 'use client'

// import { ArrowRight, Truck, Cog, Package, FileText } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { cn } from '@/lib/utils'

// const HOW_STEPS = [
//   { icon: FileText, step: "01", title: "Onboard", desc: "Get onboard in just 5 minutes with our streamlined process.", timing: "5 mins", color: "bg-brand-primary" },
//   { icon: Truck, step: "02", title: "Expert Connect", desc: "Immediate connect with visa experts for guidance.", timing: "Immediate", color: "bg-brand-secondary" },
//   { icon: Cog, step: "03", title: "Get Appointment", desc: "Your appointment slot booked within 15 minutes.", timing: "15 mins", color: "bg-brand-accent" },
//   { icon: Package, step: "04", title: "Doorstep Docs", desc: "We collect documents from your doorstep within 24-48 hrs.", timing: "24-48 hrs", color: "bg-success" },
//   { icon: FileText, step: "05", title: "Appointment Day", desc: "Appear for appointment on date 📅 with complete confidence.", timing: "Scheduled", color: "bg-info" },
// ] as const;

// export function HowItWorksSection() {
//   return (
//     <section className="py-16 md:py-24 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             How It <span className="text-brand-accent">Works</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Get your visa in just 4 simple steps. We handle all the complexity while you focus on planning your trip.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {HOW_STEPS.map(({ icon: Icon, step, title, desc, timing, color }, i) => (
//             <div key={step} className="relative">
//               <Card className="text-center h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-brand-primary/30">
//                 <CardContent className="p-6">
//                   <div className="relative mb-6">
//                     <div className={cn(color, "rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-medium")}> 
//                       <Icon className="h-8 w-8 text-white" /> 
//                     </div>
//                     <div className="absolute -top-2 -right-2 bg-brand-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-medium">{step}</div>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                   <div className="bg-brand-accent/10 rounded-lg p-2 mb-3">
//                     <span className="text-brand-accent font-bold text-sm">{timing}</span>
//                   </div>
//                   <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
//                 </CardContent>
//               </Card>
//               {i < HOW_STEPS.length - 1 && (
//                 <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
//                   <ArrowRight className="h-5 w-5 text-brand-accent animate-pulse" />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button size="lg" className="bg-gradient-accent text-white hover:opacity-90 shadow-medium">
//             Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { ArrowRight, Truck, Cog, Package, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const HOW_STEPS = [
  { icon: FileText, step: "01", title: "Onboard", desc: "Get onboard in just 5 minutes with our streamlined process.", timing: "5 mins", color: "bg-blue-500" },
  { icon: Truck, step: "02", title: "Expert Connect", desc: "Immediate connect with visa experts for guidance.", timing: "Immediate", color: "bg-teal-500" },
  { icon: Cog, step: "03", title: "Get Appointment", desc: "Your appointment slot booked within 15 minutes.", timing: "15 mins", color: "bg-indigo-500" },
  { icon: Package, step: "04", title: "Doorstep Docs", desc: "We collect documents from your doorstep within 24-48 hrs.", timing: "24-48 hrs", color: "bg-green-500" },
  { icon: FileText, step: "05", title: "Appointment Day", desc: "Appear for appointment on date 📅 with complete confidence.", timing: "Scheduled", color: "bg-gray-500" },
] as const;

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your visa in just 4 simple steps. We handle all the complexity while you focus on planning your trip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {HOW_STEPS.map(({ icon: Icon, step, title, desc, timing, color }, i) => (
            <div key={step} className="relative">
              <Card className="text-center h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-blue-500/30">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className={cn(color, "rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-medium")}> 
                      <Icon className="h-8 w-8 text-white" /> 
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-medium">{step}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <div className="bg-blue-500/10 rounded-lg p-2 mb-3">
                    <span className="text-blue-500 font-bold text-sm">{timing}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                </CardContent>
              </Card>
              {i < HOW_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:opacity-90 shadow-medium">
            Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
