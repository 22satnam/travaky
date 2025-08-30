// // // // 'use client'

// // // // import { Button } from '@/components/ui/button'
// // // // import { ArrowRight, Play, Globe } from 'lucide-react'
// // // // import Link from 'next/link'

// // // // export default function HeroSection() {
// // // //   return (
// // // //     <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
// // // //       {/* Professional gradient background (no color change) */}
// // // //       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 dark:from-primary/20 dark:via-background dark:to-primary/10" />

// // // //       {/* Subtle animated blobs */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
// // // //         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:700ms]" />
// // // //       </div>

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // // //         <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs sm:text-sm">
// // // //           <Globe className="h-4 w-4" />
// // // //           Visa at your Doorstep • 150+ Countries • 99% Approval
// // // //         </div>

// // // //         <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
// // // //           Get Your Visa <span className="text-primary">Fast</span> — Doorstep Pickup, Expert Help
// // // //         </h1>

// // // //         <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
// // // //           We handle forms, appointments, and documents. You relax. Doorstep pickup in 20+ cities.
// // // //         </p>

// // // //         <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
// // // //           <Link href="/apply/germany">
// // // //             <Button size="lg" className="h-11 px-6">
// // // //               Apply Now <ArrowRight className="ml-2 h-4 w-4" />
// // // //             </Button>
// // // //           </Link>
// // // //           <Link href="#how-it-works">
// // // //             <Button size="lg" variant="outline" className="h-11 px-6">
// // // //               <Play className="mr-2 h-4 w-4" />
// // // //               How it works
// // // //             </Button>
// // // //           </Link>
// // // //         </div>

// // // //         {/* Stats */}
// // // //         <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
// // // //           {[
// // // //             { k: '150+', v: 'Countries' },
// // // //             { k: '99%', v: 'Approval Rate' },
// // // //             { k: '10K+', v: 'Visas Processed' },
// // // //             { k: '20+', v: 'Pickup Cities' },
// // // //           ].map((s) => (
// // // //             <div key={s.v} className="space-y-1">
// // // //               <div className="text-2xl font-bold text-primary">{s.k}</div>
// // // //               <div className="text-sm text-muted-foreground">{s.v}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }


// // // // 'use client'

// // // // import { Button } from "@/components/ui/button";
// // // // import { ArrowRight, Play, Globe } from "lucide-react";

// // // // const HeroSection = () => {
// // // //   return (
// // // //     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
// // // //       {/* Background Gradient - Professional */}
// // // //       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/50 dark:from-primary-900/30 dark:via-background dark:to-primary-900/20" />
      
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl animate-pulse" />
// // // //         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
// // // //       </div>

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // // //         <div className="animate-fade-in">
// // // //           {/* Global Badge */}
// // // //           <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 dark:bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
// // // //             <Globe className="w-5 h-5 mr-3 text-accent animate-glow" />
// // // //             <span className="text-sm font-semibold text-primary">World's First Visa Doorstep Service</span>
// // // //           </div>

// // // //           {/* Main Headline */}
// // // //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
// // // //             <span className="block text-primary">World's </span>
// // // //             <span className="inline-block animate-wave">🌎</span>
// // // //             <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent .force-clip">
// // // //               First Visa Doorstep
// // // //             </span>
// // // //             <span className="block text-primary">Facilitation Services</span>
// // // //           </h1>

// // // //           {/* Subtext */}
// // // //           <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
// // // //             Fill once. We handle the rest — documents, appointments, and delivery.
// // // //           </p>

// // // //           {/* CTA Buttons */}
// // // //           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
// // // //             <Button 
// // // //               size="lg" 
// // // //               className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 text-lg font-bold rounded-xl shadow-[var(--shadow-xl)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105"
// // // //             >
// // // //               Apply Now
// // // //               <ArrowRight className="ml-3 h-6 w-6" />
// // // //             </Button>
            
// // // //             <Button 
// // // //               variant="outline" 
// // // //               size="lg"
// // // //               className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300"
// // // //             >
// // // //               <Play className="mr-3 h-6 w-6" />
// // // //               Explore Countries
// // // //             </Button>
// // // //           </div>

// // // //           {/* Trust Indicators */}
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-75">
// // // //             <div className="space-y-1">
// // // //               <div className="text-2xl font-bold text-primary">150+</div>
// // // //               <div className="text-sm text-muted-foreground">Countries</div>
// // // //             </div>
// // // //             <div className="space-y-1">
// // // //               <div className="text-2xl font-bold text-primary">99%</div>
// // // //               <div className="text-sm text-muted-foreground">Approval Rate</div>
// // // //             </div>
// // // //             <div className="space-y-1">
// // // //               <div className="text-2xl font-bold text-primary">10K+</div>
// // // //               <div className="text-sm text-muted-foreground">Visas Processed</div>
// // // //             </div>
// // // //             <div className="space-y-1">
// // // //               <div className="text-2xl font-bold text-primary">20+</div>
// // // //               <div className="text-sm text-muted-foreground">Cities</div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Mockup Placeholder */}
// // // //         <div className="mt-16 animate-slide-up">
// // // //           <div className="relative max-w-4xl mx-auto">
// // // //             <div className="bg-card border border-border rounded-2xl shadow-xl p-8 backdrop-blur-sm">
// // // //               <div className="flex items-center justify-between mb-6">
// // // //                 <div className="flex items-center space-x-3">
// // // //                   <div className="w-3 h-3 bg-destructive rounded-full"></div>
// // // //                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
// // // //                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
// // // //                 </div>
// // // //                 <div className="text-sm text-muted-foreground">Travaky Dashboard</div>
// // // //               </div>
              
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //                 <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
// // // //                   <div className="text-primary font-semibold">Application Status</div>
// // // //                   <div className="text-2xl font-bold text-primary mt-2">Approved ✅</div>
// // // //                 </div>
// // // //                 <div className="bg-accent/10 rounded-lg p-4 text-center">
// // // //                   <div className="text-accent-foreground font-semibold">Processing Time</div>
// // // //                   <div className="text-2xl font-bold text-accent-foreground mt-2">3-5 Days</div>
// // // //                 </div>
// // // //                 <div className="bg-secondary rounded-lg p-4 text-center">
// // // //                   <div className="text-secondary-foreground font-semibold">Next Step</div>
// // // //                   <div className="text-2xl font-bold text-secondary-foreground mt-2">Document Pickup</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HeroSection;

// // // 'use client'

// // // import { ArrowRight, Play, Globe } from "lucide-react"

// // // export default function HeroSection() {
// // //   return (
// // //     <section id="home" className="ui-hero relative min-h-screen flex items-center justify-center overflow-hidden not-prose">
// // //       {/* Background Gradient - Professional */}
// // //       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/50 dark:from-primary-900/30 dark:via-background dark:to-primary-900/20" />
      
// // //       {/* Animated Background Elements */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl animate-pulse" />
// // //         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
// // //       </div>

// // //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // //         <div className="animate-fade-in">
// // //           {/* Global Badge */}
// // //           <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 dark:bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
// // //             <Globe className="w-5 h-5 mr-3 text-accent animate-glow" />
// // //             <span className="text-sm font-semibold text-primary">World's First Visa Doorstep Service</span>
// // //           </div>

// // //           {/* Main Headline */}
// // //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
// // //             <span className="block text-primary">World's </span>
// // //             <span className="inline-block animate-wave">🌎</span>
// // //             <span className="gradient-text block">
// // //               First Visa Doorstep
// // //             </span>
// // //             <span className="block text-primary">Facilitation Services</span>
// // //           </h1>

// // //           {/* Subtext */}
// // //           <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
// // //             Fill once. We handle the rest — documents, appointments, and delivery.
// // //           </p>

// // //           {/* CTA Buttons (plain buttons to avoid library overrides) */}
// // //           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
// // //             <button
// // //               type="button"
// // //               className="primary-cta px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
// // //             >
// // //               <span className="inline-flex items-center gap-3">
// // //                 Apply Now
// // //                 <ArrowRight className="h-6 w-6" />
// // //               </span>
// // //             </button>
            
// // //             <button
// // //               type="button"
// // //               className="outline-cta px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-3"
// // //             >
// // //               <Play className="h-6 w-6" />
// // //               Explore Countries
// // //             </button>
// // //           </div>

// // //           {/* Trust Indicators */}
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-75">
// // //             <div className="space-y-1">
// // //               <div className="text-2xl font-bold text-primary">150+</div>
// // //               <div className="text-sm text-muted-foreground">Countries</div>
// // //             </div>
// // //             <div className="space-y-1">
// // //               <div className="text-2xl font-bold text-primary">99%</div>
// // //               <div className="text-sm text-muted-foreground">Approval Rate</div>
// // //             </div>
// // //             <div className="space-y-1">
// // //               <div className="text-2xl font-bold text-primary">10K+</div>
// // //               <div className="text-sm text-muted-foreground">Visas Processed</div>
// // //             </div>
// // //             <div className="space-y-1">
// // //               <div className="text-2xl font-bold text-primary">20+</div>
// // //               <div className="text-sm text-muted-foreground">Cities</div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Mockup Placeholder */}
// // //         <div className="mt-16 animate-slide-up">
// // //           <div className="relative max-w-4xl mx-auto">
// // //             <div className="bg-card border border-border rounded-2xl shadow-xl p-8 backdrop-blur-sm">
// // //               <div className="flex items-center justify-between mb-6">
// // //                 <div className="flex items-center space-x-3">
// // //                   <div className="w-3 h-3 bg-destructive rounded-full"></div>
// // //                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
// // //                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
// // //                 </div>
// // //                 <div className="text-sm text-muted-foreground">Travaky Dashboard</div>
// // //               </div>
              
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                 <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
// // //                   <div className="text-primary font-semibold">Application Status</div>
// // //                   <div className="text-2xl font-bold text-primary mt-2">Approved ✅</div>
// // //                 </div>
// // //                 <div className="bg-accent/10 rounded-lg p-4 text-center">
// // //                   <div className="text-accent-foreground font-semibold">Processing Time</div>
// // //                   <div className="text-2xl font-bold text-accent-foreground mt-2">3-5 Days</div>
// // //                 </div>
// // //                 <div className="bg-secondary rounded-lg p-4 text-center">
// // //                   <div className="text-secondary-foreground font-semibold">Next Step</div>
// // //                   <div className="text-2xl font-bold text-secondary-foreground mt-2">Document Pickup</div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // 'use client'

// // import Image from "next/image"
// // import { ArrowRight, Play, Globe, CheckCircle2 } from "lucide-react"

// // /** Put your media here. If you don't have a video yet, the fallback image still shows. */
// // const VIDEO_SRC = "/video/hero.mp4"          // place a file at public/video/hero.mp4
// // const POSTER_SRC = "/img/hero-poster.jpg"    // optional poster image
// // const FALLBACK_IMG = "/img/hero-mock.png"    // fallback image

// // export default function HeroSection() {
// //   return (
// //     <section id="home" className="ui-hero relative overflow-hidden pt-10 pb-24 not-prose">
// //       {/* Bluish canvas tint (same as ui_hero) */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/60 dark:from-primary-900/30 dark:via-background dark:to-primary-900/20" />
// //       {/* Soft glows behind the big heading */}
// //       <div className="hero-glow" aria-hidden />

// //       <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //           {/* LEFT: copy + CTAs */}
// //           <div>
// //             {/* Badge */}
// //             <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white shadow-[var(--shadow-glow)] border border-white/10 mb-8">
// //               <Globe className="w-5 h-5 opacity-90" />
// //               <span className="text-sm font-semibold tracking-tight">
// //                 World's First Visa Doorstep Service
// //               </span>
// //             </div>

// //             {/* Title */}
// //             <h1 className="text-[42px] leading-tight md:text-6xl lg:text-7xl font-extrabold mb-6">
// //               <span className="block text-primary">Visa on <span className="gradient-text force-clip">Autopilot</span></span>
// //             </h1>

// //             {/* Subtext */}
// //             <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
// //               Fill once. We handle the rest — documents, appointments, and delivery.
// //               Get your visa approved with our expert-managed process.
// //             </p>

// //             {/* Trust bullets */}
// //             <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
// //               <div className="inline-flex items-center gap-2 text-foreground/80">
// //                 <CheckCircle2 className="h-5 w-5 text-green-500" />
// //                 <span className="font-medium">99% Approval Rate</span>
// //               </div>
// //               <div className="inline-flex items-center gap-2 text-foreground/80">
// //                 <CheckCircle2 className="h-5 w-5 text-green-500" />
// //                 <span className="font-medium">10,000+ Visas Processed</span>
// //               </div>
// //               <div className="inline-flex items-center gap-2 text-foreground/80">
// //                 <CheckCircle2 className="h-5 w-5 text-green-500" />
// //                 <span className="font-medium">20+ Cities Pickup</span>
// //               </div>
// //             </div>

// //             {/* CTAs — same look as ui_hero */}
// //             <div className="flex flex-col sm:flex-row gap-6">
// //               <button
// //                 type="button"
// //                 className="primary-cta px-8 py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
// //               >
// //                 Apply Now <ArrowRight className="h-5 w-5" />
// //               </button>

// //               <button
// //                 type="button"
// //                 className="outline-cta px-8 py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-3"
// //               >
// //                 <Play className="h-5 w-5" />
// //                 Explore Countries
// //               </button>
// //             </div>
// //           </div>

// //           {/* RIGHT: media card with KPIs */}
// //           <div className="relative">
// //             <div className="hero-card relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
// //               {/* Media */}
// //               <div className="relative aspect-[16/10] w-full">
// //                 {/* Fallback image (always present) */}
// //                 <Image
// //                   src={FALLBACK_IMG}
// //                   alt="Travaky mock"
// //                   fill
// //                   sizes="(min-width: 1024px) 600px, 100vw"
// //                   className="object-cover"
// //                   priority
// //                 />
// //                 {/* If you place a video at /public/video/hero.mp4, it plays over the image */}
// //                 <video
// //                   className="absolute inset-0 h-full w-full object-cover"
// //                   autoPlay
// //                   muted
// //                   loop
// //                   playsInline
// //                   poster={POSTER_SRC}
// //                 >
// //                   <source src={VIDEO_SRC} type="video/mp4" />
// //                 </video>
// //               </div>

// //               {/* Soft vignette on edges */}
// //               <div className="hero-card-overlay pointer-events-none" />

// //               {/* KPI: Success Rate (top-right) */}
// //               <div className="hero-kpi absolute top-4 right-4">
// //                 <div className="text-3xl font-extrabold leading-none text-emerald-500">98.9%</div>
// //                 <div className="text-sm text-muted-foreground">Success Rate</div>
// //               </div>

// //               {/* KPI: Processing Time (bottom-left) */}
// //               <div className="hero-kpi absolute bottom-4 left-4">
// //                 <div className="text-2xl font-extrabold leading-none text-primary">2–5 Days</div>
// //                 <div className="text-sm text-muted-foreground">Average Processing</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// 'use client'

// import Image from "next/image"
// import { ArrowRight, Play, Globe, CheckCircle2 } from "lucide-react"

// const VIDEO_SRC   = "/video/hero.mp4"        // put a file here
// const POSTER_SRC  = "/img/hero-poster.jpg"   // optional
// const FALLBACK_IMG = "/img/hero-mock.png"    // fallback image

// export default function HeroSection() {
//   return (
//     <section id="home" className="ui-hero relative overflow-hidden pt-10 pb-24 not-prose">
//       {/* bluish canvas */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/60 dark:from-primary-900/30 dark:via-background dark:to-primary-900/20" />
//       <div className="hero-glow" aria-hidden />

//       <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//           {/* LEFT */}
//           <div>
//             {/* Badge – EXACT look */}
//             <div className="hero-badge">
//               <span className="icon-wrap">
//                 <Globe className="h-[18px] w-[18px]" />
//               </span>
//               <span className="label">World's First Visa Doorstep Service</span>
//             </div>

//             {/* Title */}
//             <h1 className="text-[42px] leading-tight md:text-6xl lg:text-7xl font-extrabold mb-6">
//               <span className="block text-primary">Visa on <span className="gradient-text force-clip">Autopilot</span></span>
//             </h1>

//             {/* Subtext */}
//             <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
//               Fill once. We handle the rest — documents, appointments, and delivery.
//               Get your visa approved with our expert-managed process.
//             </p>

//             {/* Trust bullets */}
//             <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
//               <div className="inline-flex items-center gap-2 text-foreground/80">
//                 <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 <span className="font-medium">99% Approval Rate</span>
//               </div>
//               <div className="inline-flex items-center gap-2 text-foreground/80">
//                 <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 <span className="font-medium">10,000+ Visas Processed</span>
//               </div>
//               <div className="inline-flex items-center gap-2 text-foreground/80">
//                 <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 <span className="font-medium">20+ Cities Pickup</span>
//               </div>
//             </div>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row gap-6">
//               <button
//                 type="button"
//                 className="primary-cta px-8 py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
//               >
//                 Apply Now <ArrowRight className="h-5 w-5" />
//               </button>

//               <button
//                 type="button"
//                 className="outline-cta px-8 py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-3"
//               >
//                 <Play className="h-5 w-5" />
//                 Explore Countries
//               </button>
//             </div>
//           </div>

//           {/* RIGHT – larger media card with KPIs */}
//           <div className="relative lg:pl-4">
//             <div className="hero-card relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:shadow-[var(--shadow-xl)] lg:scale-[1.03]">
//               {/* Media (bigger) */}
//               <div className="relative w-full aspect-[16/9] min-h-[340px] lg:min-h-[480px]">
//                 {/* image fallback below video so poster shows first paint */}
//                 <Image
//                   src={FALLBACK_IMG}
//                   alt="Travaky visual"
//                   fill
//                   sizes="(min-width: 1024px) 640px, 100vw"
//                   className="object-cover"
//                   priority
//                 />
//                 <video
//                   className="absolute inset-0 h-full w-full object-cover"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster={POSTER_SRC}
//                 >
//                   <source src={VIDEO_SRC} type="video/mp4" />
//                 </video>
//               </div>

//               {/* Subtle inner glow */}
//               <div className="hero-card-overlay pointer-events-none" />

//               {/* KPI: Success Rate (top right) */}
//               <div className="kpi-bubble kpi-success absolute top-4 right-4">
//                 <div className="kpi-num">98.9%</div>
//                 <div className="kpi-sub">Success Rate</div>
//               </div>

//               {/* KPI: Processing Time (bottom left) */}
//               <div className="kpi-bubble kpi-time absolute bottom-4 left-4">
//                 <div className="kpi-num">2–5 Days</div>
//                 <div className="kpi-sub">Average Processing</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight, Play, Globe, CheckCircle2 } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

const VIDEO_SRC   = "/video/hero.mp4"        // place your video here
const POSTER_SRC  = "/img/hero-poster.jpg"   // optional
const FALLBACK_IMG = "/img/hero-mock.png"    // fallback image

export default function HeroSection() {
  const router = useRouter()
  const { session } = useAuth()

  const goApply = () => {
    const next = encodeURIComponent('/#countries')
    if (!session) router.push(`/?auth=login&next=${next}`)
    else router.push('/#countries')
  }

  return (
    <section id="home" className="ui-hero relative overflow-hidden pt-10 pb-24 not-prose">
      {/* bluish canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/60 dark:from-primary-900/30 dark:via-background dark:to-primary-900/20" />
      <div className="hero-glow" aria-hidden />

      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="hero-badge">
              <span className="icon-wrap"><Globe className="h-[18px] w-[18px]" /></span>
              <span className="label">World's First Visa Doorstep Service</span>
            </div>

            {/* Title */}
            <h1 className="text-[42px] leading-tight md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="block text-primary">Visa on <span className="gradient-text force-clip">Autopilot</span></span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
              Fill once. We handle the rest — documents, appointments, and delivery.
              Get your visa approved with our expert-managed process.
            </p>

            {/* Trust bullets (4 items incl. money-back) */}
            <div className="hero-trust mb-8">
              <div className="trust-item">
                <CheckCircle2 className="h-5 w-5 text-green-500" /><span>99% Approval Rate</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="h-5 w-5 text-green-500" /><span>10,000+ Visas Processed</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="h-5 w-5 text-green-500" /><span>20+ Cities Pickup</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="h-5 w-5 text-green-500" /><span>Money-back Guarantee<span className="asterisk">*</span></span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-6">* On eligible cases. Insurance-backed.</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                type="button"
                onClick={goApply}
                className="primary-cta px-8 py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                Apply Now <ArrowRight className="h-5 w-5" />
              </button>

              {/* E-Visa (coming soon) */}
              <button type="button" className="outline-cta px-6 py-4 text-base md:text-lg font-bold rounded-xl inline-flex items-center gap-3">
                <Play className="h-5 w-5" />
                E-Visa
                <span className="soon-badge">Coming&nbsp;Soon</span>
              </button>
            </div>
          </div>

          {/* RIGHT – feathered media card with KPIs */}
          <div className="relative lg:pl-4">
            <div className="hero-card feather-blend relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:shadow-[var(--shadow-xl)] lg:scale-[1.03]">
              <div className="hero-media-wrap relative w-full aspect-[16/9] min-h-[340px] lg:min-h-[500px]">
                {/* image fallback */}
                <Image
                  src={FALLBACK_IMG}
                  alt="Travaky visual"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover feather-edges"
                  priority
                />
                {/* video */}
                <video
                  className="absolute inset-0 h-full w-full object-cover feather-edges"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={POSTER_SRC}
                >
                  <source src={VIDEO_SRC} type="video/mp4" />
                </video>
              </div>

              {/* inner overlay */}
              <div className="hero-card-overlay pointer-events-none" />

              {/* KPI bubbles */}
              <div className="kpi-bubble kpi-success absolute top-4 right-4">
                <div className="kpi-num">98.9%</div>
                <div className="kpi-sub">Success Rate</div>
              </div>

              <div className="kpi-bubble kpi-time absolute bottom-4 left-4">
                <div className="kpi-num">2–5 Days</div>
                <div className="kpi-sub">Average Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
