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
//             <a href="/term" className="transition-colors hover:text-primary">
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



// "use client"
// import { Button } from "@/components/ui/button"
// import * as React from "react"
// import { Input } from "@/components/ui/input"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

// export function Footer() {
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
//               <a href="/" className="block transition-colors hover:text-primary">Home</a>
//               <a href="/about" className="block transition-colors hover:text-primary">About Us</a>
//               <a href="#" className="block transition-colors hover:text-primary">Services</a>
//               <a href="#" className="block transition-colors hover:text-primary">Products</a>
//               <a href="/contact" className="block transition-colors hover:text-primary">Contact</a>
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

//           <div>
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
//                   <TooltipContent><p>Follow us on Facebook</p></TooltipContent>
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
//                   <TooltipContent><p>Follow us on Twitter</p></TooltipContent>
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
//                   <TooltipContent><p>Follow us on Instagram</p></TooltipContent>
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
//                   <TooltipContent><p>Connect with us on LinkedIn</p></TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
//           <p className="text-sm text-muted-foreground">© 2025 Travaky. All rights reserved.</p>
//           <nav className="flex gap-4 text-sm">
//             <a href="/privacy" className="transition-colors hover:text-primary">Privacy Policy</a>
//             <a href="/term" className="transition-colors hover:text-primary">Terms of Service</a>
//             <a href="#" className="transition-colors hover:text-primary">Cookie Settings</a>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   )
// }
'use client'

import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe2,
  Star,
  ShieldCheck,
} from 'lucide-react'

const cols = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Support', href: '/support' },
    { label: 'Email Support', href: 'mailto:support@travaky.com' },
    { label: 'Track Application', href: '/track' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
    { label: 'Refund Policy', href: '/legal/refund' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a4ea6] to-[#073a78] text-white">
      {/* top row */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          {/* brand / about */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-[28px] md:text-[30px] font-extrabold tracking-tight">
              Travaky
            </h3>
            <p className="mt-4 text-white/85 text-[15px] leading-[1.6] max-w-[36ch]">
              World&apos;s first visa doorstep facilitation services. Making visa
              applications simple, fast, and stress-free for travelers worldwide.
            </p>

            <div className="mt-8">
              <p className="text-[15px] font-semibold tracking-tight">Follow Us</p>
              <div className="mt-4 flex items-center gap-3">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Linkedin, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="h-10 w-10 rounded-full border border-white/20/50 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="social"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* columns: company / services / support / legal */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-9 gap-x-8 gap-y-12">
            <FooterCol title="Company" items={cols.company} className="col-span-6 sm:col-span-3" />
            <FooterCol title="Support"  items={cols.support}  className="col-span-6 sm:col-span-3" />
            <FooterCol title="Legal"    items={cols.legal}    className="col-span-6 sm:col-span-3" />


            {/* contact info
            <div className="col-span-12">
              <h4 className="text-[17px] font-semibold tracking-tight">
                Contact Info
              </h4>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[15px]">
                <div className="flex gap-3">
                  <div className="mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="leading-[1.6]">
                    <div className="font-medium">Head Office</div>
                    <div className="text-white/85">
                      123 Business District <br />
                      New Delhi, India 110001
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="leading-[1.6]">
                    <div className="font-medium">Phone Support</div>
                    <div className="text-white/85">
                      +91 98765 43210 <br />
                      +91 87654 32109
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="leading-[1.6]">
                    <div className="font-medium">Email Support</div>
                    <div className="text-white/85">
                      support@travaky.com <br />
                      info@travaky.com
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-white/10">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="leading-[1.6]">
                    <div className="font-medium">Business Hours</div>
                    <div className="text-white/85">
                      Mon-Fri: 9:00 AM – 7:00 PM <br />
                      Sat-Sun: 10:00 AM – 5:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div> 

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-10 py-5 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[14.5px] text-white/85">
            © 2025 Travaky. All rights reserved.
          </p>
          <ul className="flex items-center gap-6 text-[14.5px] whitespace-nowrap">
            <li className="flex items-center gap-2">
              <Globe2 className="h-4.5 w-4.5" />
              <span>Serving 150+ Countries</span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-4.5 w-4.5" />
              <span>10,000+ Visas Processed</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5" />
              <span>99% Success Rate</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  items,
  className,
}: {
  title: string
  items: { label: string; href: string }[]
  className?: string
}) {
  return (
    <div className={className}>
      <h4 className="text-[17px] font-semibold tracking-tight">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="text-white/85 text-[15px] hover:text-white transition-colors"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
