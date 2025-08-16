// // "use client"

// // import * as React from "react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Switch } from "@/components/ui/switch"
// // import { Textarea } from "@/components/ui/textarea"
// // import {
// //   Tooltip,
// //   TooltipContent,
// //   TooltipProvider,
// //   TooltipTrigger,
// // } from "@/components/ui/tooltip"
// // import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

// // function Footerdemo() {
// //   const [isDarkMode, setIsDarkMode] = React.useState(true)
// //   const [isChatOpen, setIsChatOpen] = React.useState(false)

// //   React.useEffect(() => {
// //     if (isDarkMode) {
// //       document.documentElement.classList.add("dark")
// //     } else {
// //       document.documentElement.classList.remove("dark")
// //     }
// //   }, [isDarkMode])

// //   return (
// //     <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
// //       <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
// //         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
// //           <div className="relative">
// //             <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
// //             <p className="mb-6 text-muted-foreground">
// //               Join our newsletter for the latest updates and exclusive offers.
// //             </p>
// //             <form className="relative">
// //               <Input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="pr-12 backdrop-blur-sm"
// //               />
// //               <Button
// //                 type="submit"
// //                 size="icon"
// //                 className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
// //               >
// //                 <Send className="h-4 w-4" />
// //                 <span className="sr-only">Subscribe</span>
// //               </Button>
// //             </form>
// //             <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
// //           </div>
// //           <div>
// //             <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
// //             <nav className="space-y-2 text-sm">
// //               <a href="#" className="block transition-colors hover:text-primary">
// //                 Home
// //               </a>
// //               <a href="#" className="block transition-colors hover:text-primary">
// //                 About Us
// //               </a>
// //               <a href="#" className="block transition-colors hover:text-primary">
// //                 Services
// //               </a>
// //               <a href="#" className="block transition-colors hover:text-primary">
// //                 Products
// //               </a>
// //               <a href="#" className="block transition-colors hover:text-primary">
// //                 Contact
// //               </a>
// //             </nav>
// //           </div>
// //           <div>
// //             <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
// //             <address className="space-y-2 text-sm not-italic">
// //               <p>123 Innovation Street</p>
// //               <p>Tech City, TC 12345</p>
// //               <p>Phone: (123) 456-7890</p>
// //               <p>Email: hello@example.com</p>
// //             </address>
// //           </div>
// //           <div className="relative">
// //             <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
// //             <div className="mb-6 flex space-x-4">
// //               <TooltipProvider>
// //                 <Tooltip>
// //                   <TooltipTrigger asChild>
// //                     <Button variant="outline" size="icon" className="rounded-full">
// //                       <Facebook className="h-4 w-4" />
// //                       <span className="sr-only">Facebook</span>
// //                     </Button>
// //                   </TooltipTrigger>
// //                   <TooltipContent>
// //                     <p>Follow us on Facebook</p>
// //                   </TooltipContent>
// //                 </Tooltip>
// //               </TooltipProvider>
// //               <TooltipProvider>
// //                 <Tooltip>
// //                   <TooltipTrigger asChild>
// //                     <Button variant="outline" size="icon" className="rounded-full">
// //                       <Twitter className="h-4 w-4" />
// //                       <span className="sr-only">Twitter</span>
// //                     </Button>
// //                   </TooltipTrigger>
// //                   <TooltipContent>
// //                     <p>Follow us on Twitter</p>
// //                   </TooltipContent>
// //                 </Tooltip>
// //               </TooltipProvider>
// //               <TooltipProvider>
// //                 <Tooltip>
// //                   <TooltipTrigger asChild>
// //                     <Button variant="outline" size="icon" className="rounded-full">
// //                       <Instagram className="h-4 w-4" />
// //                       <span className="sr-only">Instagram</span>
// //                     </Button>
// //                   </TooltipTrigger>
// //                   <TooltipContent>
// //                     <p>Follow us on Instagram</p>
// //                   </TooltipContent>
// //                 </Tooltip>
// //               </TooltipProvider>
// //               <TooltipProvider>
// //                 <Tooltip>
// //                   <TooltipTrigger asChild>
// //                     <Button variant="outline" size="icon" className="rounded-full">
// //                       <Linkedin className="h-4 w-4" />
// //                       <span className="sr-only">LinkedIn</span>
// //                     </Button>
// //                   </TooltipTrigger>
// //                   <TooltipContent>
// //                     <p>Connect with us on LinkedIn</p>
// //                   </TooltipContent>
// //                 </Tooltip>
// //               </TooltipProvider>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <Sun className="h-4 w-4" />
// //               <Switch
// //                 id="dark-mode"
// //                 checked={isDarkMode}
// //                 onCheckedChange={setIsDarkMode}
// //               />
// //               <Moon className="h-4 w-4" />
// //               <Label htmlFor="dark-mode" className="sr-only">
// //                 Toggle dark mode
// //               </Label>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
// //           <p className="text-sm text-muted-foreground">
// //             © 2024 Your Company. All rights reserved.
// //           </p>
// //           <nav className="flex gap-4 text-sm">
// //             <a href="#" className="transition-colors hover:text-primary">
// //               Privacy Policy
// //             </a>
// //             <a href="#" className="transition-colors hover:text-primary">
// //               Terms of Service
// //             </a>
// //             <a href="#" className="transition-colors hover:text-primary">
// //               Cookie Settings
// //             </a>
// //           </nav>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// // export { Footerdemo }

// "use client"
// import { Button } from "@/components/ui/button"
// import * as React from "react"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

// export function Footer() {
//   const [isDarkMode, setIsDarkMode] = React.useState(true)

//   React.useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }, [isDarkMode])

//   return (
//     <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
//       <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           <div className="relative">
//             <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
//             <p className="mb-6 text-muted-foreground">
//               Join our newsletter for the latest updates and exclusive offers.
//             </p>
//             <form className="relative">
//               <Input type="email" placeholder="Enter your email" className="pr-12 backdrop-blur-sm" />
//               <Button
//                 type="submit"
//                 size="icon"
//                 className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
//               >
//                 <Send className="h-4 w-4" />
//                 <span className="sr-only">Subscribe</span>
//               </Button>
//             </form>
//             <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
//             <nav className="space-y-2 text-sm">
//               <a href="#" className="block transition-colors hover:text-primary">
//                 Home
//               </a>
//               <a href="/about" className="block transition-colors hover:text-primary">
//                 About Us
//               </a>
//               <a href="#" className="block transition-colors hover:text-primary">
//                 Services
//               </a>
//               <a href="#" className="block transition-colors hover:text-primary">
//                 Products
//               </a>
//               <a href="/contact" className="block transition-colors hover:text-primary">
//                 Contact
//               </a>
//             </nav>
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
//             <address className="space-y-2 text-sm not-italic">
//               <p>123 Innovation Street</p>
//               <p>Tech City, TC 12345</p>
//               <p>Phone: (123) 456-7890</p>
//               <p>Email: support@travaky.com</p>
//             </address>
//           </div>
//           <div className="relative">
//             <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
//             <div className="mb-6 flex space-x-4">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" className="rounded-full">
//                       <Facebook className="h-4 w-4" />
//                       <span className="sr-only">Facebook</span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Follow us on Facebook</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" className="rounded-full">
//                       <Twitter className="h-4 w-4" />
//                       <span className="sr-only">Twitter</span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Follow us on Twitter</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" className="rounded-full">
//                       <Instagram className="h-4 w-4" />
//                       <span className="sr-only">Instagram</span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Follow us on Instagram</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" className="rounded-full">
//                       <Linkedin className="h-4 w-4" />
//                       <span className="sr-only">LinkedIn</span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Connect with us on LinkedIn</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Sun className="h-4 w-4" />
//               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
//               <Moon className="h-4 w-4" />
//               <Label htmlFor="dark-mode" className="sr-only">
//                 Toggle dark mode
//               </Label>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
//           <p className="text-sm text-muted-foreground">© 2025 Travaky. All rights reserved.</p>
//           <nav className="flex gap-4 text-sm">
//             <a href="/privacy" className="transition-colors hover:text-primary">
//               Privacy Policy
//             </a>
//             <a href="term" className="transition-colors hover:text-primary">
//               Terms of Service
//             </a>
//             <a href="#" className="transition-colors hover:text-primary">
//               Cookie Settings
//             </a>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   )
// }


'use client'

import Link from 'next/link'
import {
  Phone, Mail, MapPin,
  Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react'


// "use client"
import { Button } from "@/components/ui/button"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export function Footer() {
  const wrap: React.CSSProperties = {
    background: 'linear-gradient(180deg, #0ab1ff 0%, #0b89ba 100%)', // UI-Hero blue
    color: '#fff'
  }

  const muted: React.CSSProperties = { color: 'rgba(255,255,255,0.8)' }
  const heading: React.CSSProperties = { fontSize: 28, fontWeight: 700, letterSpacing: 0.2 }
  const sub: React.CSSProperties = { fontSize: 18, marginTop: 6, color: 'rgba(255,255,255,0.85)' }
  const link: React.CSSProperties = { color: 'rgba(255,255,255,0.95)' }
  const linkHover: React.CSSProperties = { color: '#e6f7ff' }

  return (
    <footer style={wrap} className ="py-14 mt-16 md:mt-24" >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left */}
          <div className="md:col-span-5">
            <div style={heading}>Travaky</div>
            <div style={sub}>Visa on Autopilot</div>

            <p className="mt-6 leading-8" style={muted}>
              Making visa applications simple, fast, and stress-free. We
              handle everything from form filling to doorstep delivery, so
              you can focus on planning your trip.
            </p>

            <div className="flex items-center gap-5 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={link}
                  onMouseEnter={e => Object.assign((e.currentTarget as HTMLAnchorElement).style, linkHover)}
                  onMouseLeave={e => Object.assign((e.currentTarget as HTMLAnchorElement).style, link)}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Middle */}
          <div className="md:col-span-3">
            <div style={heading}>Quick Links</div>
            <ul className="mt-6 space-y-4 text-lg">
              {[
                ['About Us', '/about'],
                ['How It Works', '#how-it-works'],
                ['Pricing', '#pricing'],
                ['Countries', '#countries'],
                ['Track Application', '/dashboard']
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} style={link}
                    onMouseEnter={e => Object.assign((e.currentTarget as HTMLAnchorElement).style, linkHover)}
                    onMouseLeave={e => Object.assign((e.currentTarget as HTMLAnchorElement).style, link)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="md:col-span-4">
            <div style={heading}>Contact Information</div>

            <div className="mt-6 space-y-5 text-lg">
              <div className="flex items-start gap-3">
                <Phone size={20} /> <div>
                  <div style={{ fontWeight: 600 }}>+1 (555) 123–4567</div>
                  <div style={muted}>24/7 Support Line</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} /> <div>
                  <a href="mailto:support@travaky.com" style={link}>support@travaky.com</a>
                  <div style={muted}>Quick Response</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} /> <div>
                  <div style={{ fontWeight: 600 }}>Global Offices</div>
                  <div style={muted}>Mumbai, Delhi, Bangalore</div>
                  <div style={muted}>New York, London, Dubai</div>
                </div>
              </div>
            </div>

            {/* Emergency card */}
            <div
              className="mt-6 rounded-2xl px-5 py-4"
              style={{
                background: 'rgba(255,255,255,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(6px)'
              }}
            >
              <div style={{ fontWeight: 700 }}>Emergency Support</div>
              <div style={muted}>+1 (555) 911–VISA</div>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div style={muted}>© 2024 Travaky. All rights reserved.</div>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(x => (
                <a key={x} href="#" style={link}
                   onMouseEnter={e => Object.assign((e.currentTarget as HTMLAnchorElement).style, linkHover)}
                   onMouseLeave={e => Object.assign((e.currentTarget as HTMLAnchorElement).style, link)}
                >
                  {x}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
