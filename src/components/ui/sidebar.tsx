// // // // // "use client";

// // // // // import { cn } from "@/lib/utils";
// // // // // import Link from "next/link";
// // // // // import React, { useState, createContext, useContext } from "react";
// // // // // import { AnimatePresence, motion } from "framer-motion";
// // // // // import { Menu, X } from "lucide-react";

// // // // // /* --- types & context ---------------------------------------------------- */
// // // // // interface Links {
// // // // //   label: string;
// // // // //   href: string;
// // // // //   icon: React.ReactNode;
// // // // // }
// // // // // interface SidebarContextProps {
// // // // //   open: boolean;
// // // // //   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// // // // //   animate: boolean;
// // // // // }
// // // // // const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);
// // // // // export const useSidebar = () => {
// // // // //   const ctx = useContext(SidebarContext);
// // // // //   if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
// // // // //   return ctx;
// // // // // };

// // // // // /* --- provider ----------------------------------------------------------- */
// // // // // export const SidebarProvider = ({
// // // // //   children, open: openProp, setOpen: setOpenProp, animate = true,
// // // // // }: { children: React.ReactNode; open?: boolean;
// // // // //      setOpen?: React.Dispatch<React.SetStateAction<boolean>>; animate?: boolean }) => {
// // // // //   const [openState, setOpenState] = useState(false);
// // // // //   const open   = openProp   ?? openState;
// // // // //   const setOpen= setOpenProp?? setOpenState;
// // // // //   return (
// // // // //     <SidebarContext.Provider value={{ open, setOpen, animate }}>
// // // // //       {children}
// // // // //     </SidebarContext.Provider>
// // // // //   );
// // // // // };

// // // // // /* --- root wrappers ------------------------------------------------------ */
// // // // // export const Sidebar = ({
// // // // //   children, open, setOpen, animate,
// // // // // }: { children:React.ReactNode; open?:boolean;
// // // // //      setOpen?:React.Dispatch<React.SetStateAction<boolean>>; animate?:boolean }) =>
// // // // //   <SidebarProvider open={open} setOpen={setOpen} animate={animate}>{children}</SidebarProvider>;

// // // // // export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => (
// // // // //   <>
// // // // //     <DesktopSidebar {...props} />
// // // // //     <MobileSidebar  {...(props as React.ComponentProps<"div">)} />
// // // // //   </>
// // // // // );

// // // // // /* --- desktop ------------------------------------------------------------ */
// // // // // export const DesktopSidebar = ({
// // // // //   className, children, ...props
// // // // // }: React.ComponentProps<typeof motion.div>) => {
// // // // //   const { open, setOpen, animate } = useSidebar();
// // // // //   return (
// // // // //     <motion.div
// // // // //       className={cn(
// // // // //         "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
// // // // //         className
// // // // //       )}
// // // // //       animate={{ width: animate ? (open ? "300px" : "60px") : "300px" }}
// // // // //       onMouseEnter={() => setOpen(true)}
// // // // //       onMouseLeave={() => setOpen(false)}
// // // // //       {...props}
// // // // //     >
// // // // //       {children}
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // /* --- mobile ------------------------------------------------------------- */
// // // // // export const MobileSidebar = ({
// // // // //   className, children, ...props
// // // // // }: React.ComponentProps<"div">) => {
// // // // //   const { open, setOpen } = useSidebar();
// // // // //   return (
// // // // //     <>
// // // // //       <div
// // // // //         className="h-10 px-4 py-4 flex md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
// // // // //         {...props}
// // // // //       >
// // // // //         <div className="flex justify-end z-20 w-full">
// // // // //           <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
// // // // //         </div>
// // // // //         <AnimatePresence>
// // // // //           {open && (
// // // // //             <motion.div
// // // // //               initial={{ x: "-100%", opacity: 0 }}
// // // // //               animate={{ x: 0, opacity: 1 }}
// // // // //               exit={{ x: "-100%", opacity: 0 }}
// // // // //               transition={{ duration: 0.3, ease: "easeInOut" }}
// // // // //               className={cn(
// // // // //                 "fixed inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
// // // // //                 className
// // // // //               )}
// // // // //             >
// // // // //               <X className="absolute right-10 top-10 cursor-pointer" onClick={() => setOpen(false)} />
// // // // //               {children}
// // // // //             </motion.div>
// // // // //           )}
// // // // //         </AnimatePresence>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // /* --- link --------------------------------------------------------------- */
// // // // // export const SidebarLink = ({
// // // // //   link, className, ...props
// // // // // }: { link: Links; className?:string; props?: any }) => {
// // // // //   const { open, animate } = useSidebar();
// // // // //   return (
// // // // //     <Link
// // // // //       href={link.href}
// // // // //       className={cn("flex items-center gap-2 py-2 group/sidebar", className)}
// // // // //       {...props}
// // // // //     >
// // // // //       {link.icon}
// // // // //       <motion.span
// // // // //         animate={{
// // // // //           display: animate ? (open ? "inline-block" : "none") : "inline-block",
// // // // //           opacity: animate ? (open ? 1 : 0) : 1,
// // // // //         }}
// // // // //         className="whitespace-pre transition duration-150"
// // // // //       >
// // // // //         {link.label}
// // // // //       </motion.span>
// // // // //     </Link>
// // // // //   );
// // // // // };


// // // // /* ------------------------------------------------------------------
// // // //  * Animated Travaky sidebar – desktop + mobile
// // // //  * ------------------------------------------------------------------ */
// // // // "use client"

// // // // import Link from "next/link"
// // // // import { usePathname } from "next/navigation"
// // // // import { AnimatePresence, motion } from "framer-motion"
// // // // import { createContext, useContext, useState } from "react"
// // // // import {
// // // //   LayoutDashboard, CalendarCheck, FileText, FileStack,
// // // //   LogOut, Menu, X, User,
// // // // } from "lucide-react"
// // // // import Image from "next/image"
// // // // import { cn } from "@/lib/utils"
// // // // import { useAuth } from "@/context/AuthContext"

// // // // /* ---------------- context ---------------- */
// // // // type Ctx = { open: boolean; setOpen: (v: boolean) => void; animate: boolean }
// // // // const SidebarContext = createContext<Ctx | null>(null)
// // // // const useSidebar = () => {
// // // //   const ctx = useContext(SidebarContext)
// // // //   if (!ctx) throw new Error("sidebar must be inside provider")
// // // //   return ctx
// // // // }

// // // // /* ---------------- provider ---------------- */
// // // // export function SidebarProvider({ children }: { children: React.ReactNode }) {
// // // //   const [open, setOpen] = useState(
// // // //     typeof window !== "undefined" &&
// // // //       window.matchMedia("(min-width:768px)").matches, // open first time on desktop
// // // //   )
// // // //   return (
// // // //     <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
// // // //       {children}
// // // //     </SidebarContext.Provider>
// // // //   )
// // // // }

// // // // /* ---------------- root used by layout ---------------- */
// // // // export function Sidebar() {
// // // //   return (
// // // //     <SidebarProvider>
// // // //       <DesktopSidebar />
// // // //       <MobileSidebar />
// // // //     </SidebarProvider>
// // // //   )
// // // // }

// // // // /* ---------------- single link ---------------- */
// // // // function Item({
// // // //   href,
// // // //   label,
// // // //   icon,
// // // //   onClick,
// // // // }: {
// // // //   href: string
// // // //   label: string
// // // //   icon: JSX.Element
// // // //   onClick?: () => void
// // // // }) {
// // // //   const pathname = usePathname()
// // // //   const active = pathname === href
// // // //   const { open, animate } = useSidebar()
// // // //   return (
// // // //     <Link
// // // //       href={href}
// // // //       onClick={onClick}
// // // //       className={cn(
// // // //         "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
// // // //         active
// // // //           ? "bg-primary/10 text-primary dark:text-primary-foreground"
// // // //           : "text-muted-foreground hover:bg-muted hover:text-foreground",
// // // //       )}
// // // //     >
// // // //       {icon}
// // // //       <motion.span
// // // //         animate={{
// // // //           width: open || !animate ? "auto" : 0,
// // // //           opacity: open || !animate ? 1 : 0,
// // // //         }}
// // // //         className="truncate text-sm"
// // // //       >
// // // //         {label}
// // // //       </motion.span>
// // // //     </Link>
// // // //   )
// // // // }

// // // // /* ---------------- nav list (shared) ---------------- */
// // // // function Items({ closeMobile }: { closeMobile?: () => void } = {}) {
// // // //   const { logout, session } = useAuth()
// // // //   return (
// // // //     <>
// // // //       <Item
// // // //         href="/dashboard"
// // // //         label="Dashboard"
// // // //         icon={<LayoutDashboard className="w-4 h-4" />}
// // // //         onClick={closeMobile}
// // // //       />
// // // //       <Item
// // // //         href="/dashboard/bookings"
// // // //         label="Bookings"
// // // //         icon={<CalendarCheck className="w-4 h-4" />}
// // // //         onClick={closeMobile}
// // // //       />
// // // //       <Item
// // // //         href="/dashboard/invoices"
// // // //         label="Invoices"
// // // //         icon={<FileText className="w-4 h-4" />}
// // // //         onClick={closeMobile}
// // // //       />
// // // //       <Item
// // // //         href="/dashboard/documents"
// // // //         label="My Documents"
// // // //         icon={<FileStack className="w-4 h-4" />}
// // // //         onClick={closeMobile}
// // // //       />
// // // //       <Item
// // // //         href="/"
// // // //         label="Logout"
// // // //         icon={<LogOut className="w-4 h-4" />}
// // // //         onClick={async () => {
// // // //           await logout()
// // // //           closeMobile?.()
// // // //         }}
// // // //       />
// // // //       {/* footer avatar */}
// // // //       <Footer name={session?.email ?? "User"} />
// // // //     </>
// // // //   )
// // // // }

// // // // /* ---------------- footer with avatar ---------------- */
// // // // function Footer({ name }: { name: string }) {
// // // //   const { open, animate } = useSidebar()
// // // //   return (
// // // //     <motion.div
// // // //       animate={{
// // // //         height: open || !animate ? "auto" : 0,
// // // //         opacity: open || !animate ? 1 : 0,
// // // //       }}
// // // //       className="mt-auto px-3 py-4 border-t flex items-center gap-3 overflow-hidden"
// // // //     >
// // // //       <Image
// // // //         src="https://assets.aceternity.com/manu.png"
// // // //         width={28}
// // // //         height={28}
// // // //         className="rounded-full"
// // // //         alt="avatar"
// // // //       />
// // // //       <span className="text-sm truncate">{name}</span>
// // // //     </motion.div>
// // // //   )
// // // // }

// // // // /* ---------------- desktop variant ---------------- */
// // // // function DesktopSidebar() {
// // // //   const


// // // /* ------------------------------------------------------------------
// // //  * Animated Travaky sidebar – desktop + mobile
// // //  * ------------------------------------------------------------------ */
// // // "use client"

// // // import Link from "next/link"
// // // import { usePathname } from "next/navigation"
// // // import { AnimatePresence, motion } from "framer-motion"
// // // import { createContext, useContext, useState } from "react"
// // // import {
// // //   LayoutDashboard, CalendarCheck, FileText, FileStack,
// // //   LogOut, Menu, X, User,
// // // } from "lucide-react"
// // // import Image from "next/image"
// // // import { cn } from "@/lib/utils"
// // // import { useAuth } from "@/context/AuthContext"

// // // /* ---------------- context ---------------- */
// // // type Ctx = { open: boolean; setOpen: (v: boolean) => void; animate: boolean }
// // // const SidebarContext = createContext<Ctx | null>(null)
// // // const useSidebar = () => {
// // //   const ctx = useContext(SidebarContext)
// // //   if (!ctx) throw new Error("sidebar must be inside provider")
// // //   return ctx
// // // }

// // // /* ---------------- provider ---------------- */
// // // export function SidebarProvider({ children }: { children: React.ReactNode }) {
// // //   const [open, setOpen] = useState(
// // //     typeof window !== "undefined" &&
// // //       window.matchMedia("(min-width:768px)").matches,
// // //   )
// // //   return (
// // //     <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
// // //       {children}
// // //     </SidebarContext.Provider>
// // //   )
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /*  MOBILE variant  —  put FIRST so it’s declared before <Sidebar />   */
// // // /* ------------------------------------------------------------------ */
// // // function MobileSidebar() {
// // //   const { open, setOpen } = useSidebar()
// // //   return (
// // //     <>
// // //       <header className="md:hidden flex items-center justify-between px-4 py-3 border-b">
// // //         <span className="font-semibold">Travaky</span>
// // //         <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
// // //       </header>

// // //       <AnimatePresence>
// // //         {open && (
// // //           <motion.aside
// // //             initial={{ x: "-100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "-100%" }}
// // //             transition={{ duration: 0.25 }}
// // //             className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r
// // //                        flex flex-col gap-6 p-6"
// // //           >
// // //             <X className="self-end cursor-pointer" onClick={() => setOpen(false)} />
// // //             <nav className="space-y-1 flex-1">
// // //               <Items closeMobile={() => setOpen(false)} />
// // //             </nav>
// // //           </motion.aside>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   )
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /*  DESKTOP variant                                                   */
// // // /* ------------------------------------------------------------------ */
// // // function DesktopSidebar() {
// // //   const { open, setOpen } = useSidebar()
// // //   return (
// // //     <motion.aside
// // //       className="hidden md:flex h-full flex-col border-r bg-muted/80
// // //                  dark:bg-neutral-900/80 flex-shrink-0"
// // //       animate={{ width: open ? 260 : 60 }}
// // //       onMouseEnter={() => setOpen(true)}
// // //       onMouseLeave={() => setOpen(false)}
// // //     >
// // //       <div className="flex items-center gap-3 px-4 py-4">
// // //         <motion.div
// // //           animate={{ rotate: open ? 360 : 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="size-8 rounded-lg bg-primary"
// // //         />
// // //         {open && <span className="text-lg font-semibold">Travaky</span>}
// // //       </div>

// // //       <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
// // //         <Items />
// // //       </nav>
// // //     </motion.aside>
// // //   )
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /*  Sidebar root                                                       */
// // // /* ------------------------------------------------------------------ */
// // // export function Sidebar() {
// // //   return (
// // //     <SidebarProvider>
// // //       <DesktopSidebar />
// // //       <MobileSidebar />   {/* now MobileSidebar is defined above */}
// // //     </SidebarProvider>
// // //   )
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /*  Nav items                                                          */
// // // /* ------------------------------------------------------------------ */
// // // function Item({
// // //   href,
// // //   label,
// // //   icon,
// // //   onClick,
// // // }: {
// // //   href: string
// // //   label: string
// // //   icon: JSX.Element
// // //   onClick?: () => void
// // // }) {
// // //   const pathname = usePathname()
// // //   const active = pathname === href
// // //   const { open, animate } = useSidebar()
// // //   return (
// // //     <Link
// // //       href={href}
// // //       onClick={onClick}
// // //       className={cn(
// // //         "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
// // //         active
// // //           ? "bg-primary/10 text-primary dark:text-primary-foreground"
// // //           : "text-muted-foreground hover:bg-muted hover:text-foreground",
// // //       )}
// // //     >
// // //       {icon}
// // //       <motion.span
// // //         animate={{
// // //           width: open || !animate ? "auto" : 0,
// // //           opacity: open || !animate ? 1 : 0,
// // //         }}
// // //         className="truncate text-sm"
// // //       >
// // //         {label}
// // //       </motion.span>
// // //     </Link>
// // //   )
// // // }

// // // function Items({ closeMobile }: { closeMobile?: () => void } = {}) {
// // //   const { logout, session } = useAuth()
// // //   return (
// // //     <>
// // //       <Item
// // //         href="/dashboard"
// // //         label="Dashboard"
// // //         icon={<LayoutDashboard className="w-4 h-4" />}
// // //         onClick={closeMobile}
// // //       />
// // //       <Item
// // //         href="/dashboard/bookings"
// // //         label="Bookings"
// // //         icon={<CalendarCheck className="w-4 h-4" />}
// // //         onClick={closeMobile}
// // //       />
// // //       <Item
// // //         href="/dashboard/invoices"
// // //         label="Invoices"
// // //         icon={<FileText className="w-4 h-4" />}
// // //         onClick={closeMobile}
// // //       />
// // //       <Item
// // //         href="/dashboard/documents"
// // //         label="My Documents"
// // //         icon={<FileStack className="w-4 h-4" />}
// // //         onClick={closeMobile}
// // //       />
// // //       <Item
// // //         href="/"
// // //         label="Logout"
// // //         icon={<LogOut className="w-4 h-4" />}
// // //         onClick={async () => {
// // //           await logout()
// // //           closeMobile?.()
// // //         }}
// // //       />

// // //       {/* footer */}
// // //       <Footer name={session?.email ?? "User"} />
// // //     </>
// // //   )
// // // }

// // // function Footer({ name }: { name: string }) {
// // //   const { open, animate } = useSidebar()
// // //   return (
// // //     <motion.div
// // //       animate={{
// // //         height: open || !animate ? "auto" : 0,
// // //         opacity: open || !animate ? 1 : 0,
// // //       }}
// // //       className="mt-auto px-3 py-4 border-t flex items-center gap-3 overflow-hidden"
// // //     >
// // //       <Image
// // //         src="https://assets.aceternity.com/manu.png"
// // //         width={28}
// // //         height={28}
// // //         className="rounded-full"
// // //         alt="avatar"
// // //       />
// // //       <span className="text-sm truncate">{name}</span>
// // //     </motion.div>
// // //   )
// // // }


// // /* ------------------------------------------------------------------
// //  * Travaky Sidebar – debounced hover, footer icon+name, no flicker
// //  * ------------------------------------------------------------------ */
// // "use client"

// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import { AnimatePresence, motion } from "framer-motion"
// // import { createContext, useContext, useRef, useState } from "react"
// // import {
// //   Home,
// //   LayoutDashboard, CalendarCheck, FileText, FileStack,
// //   LogOut, Menu, X, User as UserIcon,
// // } from "lucide-react"
// // import { cn } from "@/lib/utils"
// // import { useAuth } from "@/context/AuthContext"

// // /* ---------------- context ---------------- */
// // type Ctx = { open: boolean; setOpen: (v: boolean) => void }
// // const SidebarContext = createContext<Ctx | null>(null)
// // const useSidebar = () => {
// //   const ctx = useContext(SidebarContext)
// //   if (!ctx) throw new Error("sidebar must be inside provider")
// //   return ctx
// // }

// // /* ---------------- provider ---------------- */
// // function SidebarProvider({ children }: { children: React.ReactNode }) {
// //   const [open, _setOpen] = useState(
// //     typeof window !== "undefined" &&
// //       window.matchMedia("(min-width:768px)").matches,
// //   )

// //   /* debounce close ─────────── */
// //   const timer = useRef<NodeJS.Timeout>()
// //   const setOpen = (v: boolean) => {
// //     clearTimeout(timer.current)
// //     if (v) _setOpen(true)
// //     else timer.current = setTimeout(() => _setOpen(false), 250) // 250 ms grace
// //   }

// //   return (
// //     <SidebarContext.Provider value={{ open, setOpen }}>
// //       {children}
// //     </SidebarContext.Provider>
// //   )
// // }

// // /* ---------------- root ---------------- */
// // export function Sidebar() {
// //   return (
// //     <SidebarProvider>
// //       <DesktopSidebar />
// //       <MobileSidebar />
// //     </SidebarProvider>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /*  Desktop variant                                                   */
// // /* ------------------------------------------------------------------ */
// // function DesktopSidebar() {
// //   const { open, setOpen } = useSidebar()

// //   return (
// //     <motion.aside
// //       className="hidden md:flex h-full flex-col border-r bg-muted/80
// //                  dark:bg-neutral-900/80 flex-shrink-0"
// //       animate={{ width: open ? 260 : 60 }}
      
// //       onMouseEnter={() => setOpen(true)}
// //       onMouseLeave={() => setOpen(false)}
// //     >
// //       {/* logo + company name */}
// //       <div className="flex items-center gap-3 px-4 py-4">
// //         <motion.div
// //           animate={{ rotate: open ? 360 : 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="size-8 rounded-lg bg-primary"
// //         />
// //         {open && <span className="text-lg font-semibold">Travaky</span>}
// //       </div>

// //       {/* nav */}
// //       <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
// //         <Items />
// //       </nav>

// //       {/* footer */}
// //       <Footer />
      
// //     </motion.aside>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /*  Mobile variant                                                    */
// // /* ------------------------------------------------------------------ */
// // function MobileSidebar() {
// //   const { open, setOpen } = useSidebar()

// //   return (
// //     <>
// //       <header className="md:hidden flex items-center justify-between px-4 py-3 border-b">
// //         <span className="font-semibold">Travaky</span>
// //         <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
// //       </header>

// //       <AnimatePresence>
// //         {open && (
// //           <motion.aside
// //             initial={{ x: "-100%" }}
// //             animate={{ x: 0 }}
// //             exit={{ x: "-100%" }}
// //             transition={{ duration: 0.25 }}
// //             className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r
// //                        flex flex-col gap-6 p-6"
// //           >
// //             <X className="self-end cursor-pointer" onClick={() => setOpen(false)} />
// //             <nav className="space-y-1 flex-1">
// //               <Items closeMobile={() => setOpen(false)} />
// //             </nav>
// //             <Footer />
// //           </motion.aside>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /*  Nav items                                                          */
// // /* ------------------------------------------------------------------ */
// // function NavItem(
// //   href: string,
// //   label: string,
// //   icon: JSX.Element,
// //   onClick?: () => void,
// // ) {
// //   const pathname = usePathname()
// //   const active = pathname === href
// //   const { open } = useSidebar()

// //   return (
// //     <Link
// //       href={href}
// //       onClick={onClick}
// //       className={cn(
// //         "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
// //         active
// //           ? "bg-primary/10 text-primary dark:text-primary-foreground"
// //           : "text-muted-foreground hover:bg-muted hover:text-foreground",
// //       )}
// //     >
// //       {icon}
// //       {open && <span className="truncate text-sm">{label}</span>}
// //     </Link>
// //   )
// // }

// // function Items({ closeMobile }: { closeMobile?: () => void } = {}) {
// //   const { logout } = useAuth()
// //   return (
// //     <>{NavItem("/", "Home", <Home className="w-4 h-4" />, closeMobile)}
// //       {NavItem("/dashboard", "Dashboard", <LayoutDashboard className="w-4 h-4" />, closeMobile)}
// //       {NavItem("/dashboard/bookings", "Bookings", <CalendarCheck className="w-4 h-4" />, closeMobile)}
// //       {NavItem("/dashboard/invoices", "Invoices", <FileText className="w-4 h-4" />, closeMobile)}
// //       {NavItem("/dashboard/documents", "My Documents", <FileStack className="w-4 h-4" />, closeMobile)}
// //       {NavItem("/", "Logout", <LogOut className="w-4 h-4" />, async () => {
// //         await logout()
// //         closeMobile?.()
// //       })}
// //     </>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /*  Footer with icon + name                                            */
// // /* ------------------------------------------------------------------ */
// // function Footer() {
// //   const { session } = useAuth()
// //   const { open } = useSidebar()
// //   return (
// //     <div className="mt-auto px-3 py-4 border-t flex items-center gap-3">
// //       <UserIcon className="size-6 text-muted-foreground" />
// //       {open && (
// //         <span className="text-sm truncate">
// //           {session?.email?.split("@")[0] ?? "User"}
// //         </span>
// //       )}
// //     </div>
// //   )
// // }


// 'use client'

// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { VariantProps, cva } from "class-variance-authority"
// import { PanelLeft } from "lucide-react"

// import { useIsMobile } from "@/hooks/use-mobile"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Separator } from "@/components/ui/separator"
// import { Sheet, SheetContent } from "@/components/ui/sheet"
// import { Skeleton } from "@/components/ui/skeleton"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

// const SIDEBAR_COOKIE_NAME = "sidebar:state"
// const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
// const SIDEBAR_WIDTH = "16rem"
// const SIDEBAR_WIDTH_MOBILE = "18rem"
// const SIDEBAR_WIDTH_ICON = "3rem"
// const SIDEBAR_KEYBOARD_SHORTCUT = "b"

// type SidebarContext = {
//   state: "expanded" | "collapsed"
//   open: boolean
//   setOpen: (open: boolean) => void
//   openMobile: boolean
//   setOpenMobile: (open: boolean) => void
//   isMobile: boolean
//   toggleSidebar: () => void
// }

// const SidebarContext = React.createContext<SidebarContext | null>(null)

// function useSidebar() {
//   const context = React.useContext(SidebarContext)
//   if (!context) {
//     throw new Error("useSidebar must be used within a SidebarProvider.")
//   }

//   return context
// }

// const SidebarProvider = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div"> & {
//     defaultOpen?: boolean
//     open?: boolean
//     onOpenChange?: (open: boolean) => void
//   }
// >(
//   (
//     {
//       defaultOpen = true,
//       open: openProp,
//       onOpenChange: setOpenProp,
//       className,
//       style,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const isMobile = useIsMobile()
//     const [openMobile, setOpenMobile] = React.useState(false)

//     // This is the internal state of the sidebar.
//     // We use openProp and setOpenProp for control from outside the component.
//     const [_open, _setOpen] = React.useState(defaultOpen)
//     const open = openProp ?? _open
//     const setOpen = React.useCallback(
//       (value: boolean | ((value: boolean) => boolean)) => {
//         const openState = typeof value === "function" ? value(open) : value
//         if (setOpenProp) {
//           setOpenProp(openState)
//         } else {
//           _setOpen(openState)
//         }

//         // This sets the cookie to keep the sidebar state.
//         document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
//       },
//       [setOpenProp, open]
//     )

//     // Helper to toggle the sidebar.
//     const toggleSidebar = React.useCallback(() => {
//       return isMobile
//         ? setOpenMobile((open) => !open)
//         : setOpen((open) => !open)
//     }, [isMobile, setOpen, setOpenMobile])

//     // Adds a keyboard shortcut to toggle the sidebar.
//     React.useEffect(() => {
//       const handleKeyDown = (event: KeyboardEvent) => {
//         if (
//           event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
//           (event.metaKey || event.ctrlKey)
//         ) {
//           event.preventDefault()
//           toggleSidebar()
//         }
//       }

//       window.addEventListener("keydown", handleKeyDown)
//       return () => window.removeEventListener("keydown", handleKeyDown)
//     }, [toggleSidebar])

//     // We add a state so that we can do data-state="expanded" or "collapsed".
//     // This makes it easier to style the sidebar with Tailwind classes.
//     const state = open ? "expanded" : "collapsed"

//     const contextValue = React.useMemo<SidebarContext>(
//       () => ({
//         state,
//         open,
//         setOpen,
//         isMobile,
//         openMobile,
//         setOpenMobile,
//         toggleSidebar,
//       }),
//       [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
//     )

//     return (
//       <SidebarContext.Provider value={contextValue}>
//         <TooltipProvider delayDuration={0}>
//           <div
//             style={
//               {
//                 "--sidebar-width": SIDEBAR_WIDTH,
//                 "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
//                 ...style,
//               } as React.CSSProperties
//             }
//             className={cn(
//               "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
//               className
//             )}
//             ref={ref}
//             {...props}
//           >
//             {children}
//           </div>
//         </TooltipProvider>
//       </SidebarContext.Provider>
//     )
//   }
// )
// SidebarProvider.displayName = "SidebarProvider"

// const Sidebar = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div"> & {
//     side?: "left" | "right"
//     variant?: "sidebar" | "floating" | "inset"
//     collapsible?: "offcanvas" | "icon" | "none"
//   }
// >(
//   (
//     {
//       side = "left",
//       variant = "sidebar",
//       collapsible = "offcanvas",
//       className,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

//     if (collapsible === "none") {
//       return (
//         <div
//           className={cn(
//             "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
//             className
//           )}
//           ref={ref}
//           {...props}
//         >
//           {children}
//         </div>
//       )
//     }

//     if (isMobile) {
//       return (
//         <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
//           <SheetContent
//             data-sidebar="sidebar"
//             data-mobile="true"
//             className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
//             style={
//               {
//                 "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
//               } as React.CSSProperties
//             }
//             side={side}
//           >
//             <div className="flex h-full w-full flex-col">{children}</div>
//           </SheetContent>
//         </Sheet>
//       )
//     }

//     return (
//       <div
//         ref={ref}
//         className="group peer hidden md:block text-sidebar-foreground"
//         data-state={state}
//         data-collapsible={state === "collapsed" ? collapsible : ""}
//         data-variant={variant}
//         data-side={side}
//       >
//         {/* This is what handles the sidebar gap on desktop */}
//         <div
//           className={cn(
//             "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
//             "group-data-[collapsible=offcanvas]:w-0",
//             "group-data-[side=right]:rotate-180",
//             variant === "floating" || variant === "inset"
//               ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
//               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
//           )}
//         />
//         <div
//           className={cn(
//             "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
//             side === "left"
//               ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
//               : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
//             // Adjust the padding for floating and inset variants.
//             variant === "floating" || variant === "inset"
//               ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
//               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
//             className
//           )}
//           {...props}
//         >
//           <div
//             data-sidebar="sidebar"
//             className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     )
//   }
// )
// Sidebar.displayName = "Sidebar"

// const SidebarTrigger = React.forwardRef<
//   React.ElementRef<typeof Button>,
//   React.ComponentProps<typeof Button>
// >(({ className, onClick, ...props }, ref) => {
//   const { toggleSidebar } = useSidebar()

//   return (
//     <Button
//       ref={ref}
//       data-sidebar="trigger"
//       variant="ghost"
//       size="icon"
//       className={cn("h-7 w-7", className)}
//       onClick={(event) => {
//         onClick?.(event)
//         toggleSidebar()
//       }}
//       {...props}
//     >
//       <PanelLeft />
//       <span className="sr-only">Toggle Sidebar</span>
//     </Button>
//   )
// })
// SidebarTrigger.displayName = "SidebarTrigger"

// const SidebarRail = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<"button">
// >(({ className, ...props }, ref) => {
//   const { toggleSidebar } = useSidebar()

//   return (
//     <button
//       ref={ref}
//       data-sidebar="rail"
//       aria-label="Toggle Sidebar"
//       tabIndex={-1}
//       onClick={toggleSidebar}
//       title="Toggle Sidebar"
//       className={cn(
//         "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
//         "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
//         "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
//         "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
//         "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
//         "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarRail.displayName = "SidebarRail"

// const SidebarInset = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"main">
// >(({ className, ...props }, ref) => {
//   return (
//     <main
//       ref={ref}
//       className={cn(
//         "relative flex min-h-svh flex-1 flex-col bg-background",
//         "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarInset.displayName = "SidebarInset"

// const SidebarInput = React.forwardRef<
//   React.ElementRef<typeof Input>,
//   React.ComponentProps<typeof Input>
// >(({ className, ...props }, ref) => {
//   return (
//     <Input
//       ref={ref}
//       data-sidebar="input"
//       className={cn(
//         "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarInput.displayName = "SidebarInput"

// const SidebarHeader = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div">
// >(({ className, ...props }, ref) => {
//   return (
//     <div
//       ref={ref}
//       data-sidebar="header"
//       className={cn("flex flex-col gap-2 p-2", className)}
//       {...props}
//     />
//   )
// })
// SidebarHeader.displayName = "SidebarHeader"

// const SidebarFooter = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div">
// >(({ className, ...props }, ref) => {
//   return (
//     <div
//       ref={ref}
//       data-sidebar="footer"
//       className={cn("flex flex-col gap-2 p-2", className)}
//       {...props}
//     />
//   )
// })
// SidebarFooter.displayName = "SidebarFooter"

// const SidebarSeparator = React.forwardRef<
//   React.ElementRef<typeof Separator>,
//   React.ComponentProps<typeof Separator>
// >(({ className, ...props }, ref) => {
//   return (
//     <Separator
//       ref={ref}
//       data-sidebar="separator"
//       className={cn("mx-2 w-auto bg-sidebar-border", className)}
//       {...props}
//     />
//   )
// })
// SidebarSeparator.displayName = "SidebarSeparator"

// const SidebarContent = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div">
// >(({ className, ...props }, ref) => {
//   return (
//     <div
//       ref={ref}
//       data-sidebar="content"
//       className={cn(
//         "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarContent.displayName = "SidebarContent"

// const SidebarGroup = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div">
// >(({ className, ...props }, ref) => {
//   return (
//     <div
//       ref={ref}
//       data-sidebar="group"
//       className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
//       {...props}
//     />
//   )
// })
// SidebarGroup.displayName = "SidebarGroup"

// const SidebarGroupLabel = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div"> & { asChild?: boolean }
// >(({ className, asChild = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : "div"

//   return (
//     <Comp
//       ref={ref}
//       data-sidebar="group-label"
//       className={cn(
//         "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
//         "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarGroupLabel.displayName = "SidebarGroupLabel"

// const SidebarGroupAction = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<"button"> & { asChild?: boolean }
// >(({ className, asChild = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : "button"

//   return (
//     <Comp
//       ref={ref}
//       data-sidebar="group-action"
//       className={cn(
//         "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
//         // Increases the hit area of the button on mobile.
//         "after:absolute after:-inset-2 after:md:hidden",
//         "group-data-[collapsible=icon]:hidden",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarGroupAction.displayName = "SidebarGroupAction"

// const SidebarGroupContent = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div">
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     data-sidebar="group-content"
//     className={cn("w-full text-sm", className)}
//     {...props}
//   />
// ))
// SidebarGroupContent.displayName = "SidebarGroupContent"

// const SidebarMenu = React.forwardRef<
//   HTMLUListElement,
//   React.ComponentProps<"ul">
// >(({ className, ...props }, ref) => (
//   <ul
//     ref={ref}
//     data-sidebar="menu"
//     className={cn("flex w-full min-w-0 flex-col gap-1", className)}
//     {...props}
//   />
// ))
// SidebarMenu.displayName = "SidebarMenu"

// const SidebarMenuItem = React.forwardRef<
//   HTMLLIElement,
//   React.ComponentProps<"li">
// >(({ className, ...props }, ref) => (
//   <li
//     ref={ref}
//     data-sidebar="menu-item"
//     className={cn("group/menu-item relative", className)}
//     {...props}
//   />
// ))
// SidebarMenuItem.displayName = "SidebarMenuItem"

// const sidebarMenuButtonVariants = cva(
//   "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
//         outline:
//           "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
//       },
//       size: {
//         default: "h-8 text-sm",
//         sm: "h-7 text-xs",
//         lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// const SidebarMenuButton = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<"button"> & {
//     asChild?: boolean
//     isActive?: boolean
//     tooltip?: string | React.ComponentProps<typeof TooltipContent>
//   } & VariantProps<typeof sidebarMenuButtonVariants>
// >(
//   (
//     {
//       asChild = false,
//       isActive = false,
//       variant = "default",
//       size = "default",
//       tooltip,
//       className,
//       ...props
//     },
//     ref
//   ) => {
//     const Comp = asChild ? Slot : "button"
//     const { isMobile, state } = useSidebar()

//     const button = (
//       <Comp
//         ref={ref}
//         data-sidebar="menu-button"
//         data-size={size}
//         data-active={isActive}
//         className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
//         {...props}
//       />
//     )

//     if (!tooltip) {
//       return button
//     }

//     if (typeof tooltip === "string") {
//       tooltip = {
//         children: tooltip,
//       }
//     }

//     return (
//       <Tooltip>
//         <TooltipTrigger asChild>{button}</TooltipTrigger>
//         <TooltipContent
//           side="right"
//           align="center"
//           hidden={state !== "collapsed" || isMobile}
//           {...tooltip}
//         />
//       </Tooltip>
//     )
//   }
// )
// SidebarMenuButton.displayName = "SidebarMenuButton"

// const SidebarMenuAction = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<"button"> & {
//     asChild?: boolean
//     showOnHover?: boolean
//   }
// >(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : "button"

//   return (
//     <Comp
//       ref={ref}
//       data-sidebar="menu-action"
//       className={cn(
//         "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
//         // Increases the hit area of the button on mobile.
//         "after:absolute after:-inset-2 after:md:hidden",
//         "peer-data-[size=sm]/menu-button:top-1",
//         "peer-data-[size=default]/menu-button:top-1.5",
//         "peer-data-[size=lg]/menu-button:top-2.5",
//         "group-data-[collapsible=icon]:hidden",
//         showOnHover &&
//           "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarMenuAction.displayName = "SidebarMenuAction"

// const SidebarMenuBadge = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div">
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     data-sidebar="menu-badge"
//     className={cn(
//       "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
//       "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
//       "peer-data-[size=sm]/menu-button:top-1",
//       "peer-data-[size=default]/menu-button:top-1.5",
//       "peer-data-[size=lg]/menu-button:top-2.5",
//       "group-data-[collapsible=icon]:hidden",
//       className
//     )}
//     {...props}
//   />
// ))
// SidebarMenuBadge.displayName = "SidebarMenuBadge"

// const SidebarMenuSkeleton = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentProps<"div"> & {
//     showIcon?: boolean
//   }
// >(({ className, showIcon = false, ...props }, ref) => {
//   // Random width between 50 to 90%.
//   const width = React.useMemo(() => {
//     return `${Math.floor(Math.random() * 40) + 50}%`
//   }, [])

//   return (
//     <div
//       ref={ref}
//       data-sidebar="menu-skeleton"
//       className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
//       {...props}
//     >
//       {showIcon && (
//         <Skeleton
//           className="size-4 rounded-md"
//           data-sidebar="menu-skeleton-icon"
//         />
//       )}
//       <Skeleton
//         className="h-4 flex-1 max-w-[--skeleton-width]"
//         data-sidebar="menu-skeleton-text"
//         style={
//           {
//             "--skeleton-width": width,
//           } as React.CSSProperties
//         }
//       />
//     </div>
//   )
// })
// SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

// const SidebarMenuSub = React.forwardRef<
//   HTMLUListElement,
//   React.ComponentProps<"ul">
// >(({ className, ...props }, ref) => (
//   <ul
//     ref={ref}
//     data-sidebar="menu-sub"
//     className={cn(
//       "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
//       "group-data-[collapsible=icon]:hidden",
//       className
//     )}
//     {...props}
//   />
// ))
// SidebarMenuSub.displayName = "SidebarMenuSub"

// const SidebarMenuSubItem = React.forwardRef<
//   HTMLLIElement,
//   React.ComponentProps<"li">
// >(({ ...props }, ref) => <li ref={ref} {...props} />)
// SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

// const SidebarMenuSubButton = React.forwardRef<
//   HTMLAnchorElement,
//   React.ComponentProps<"a"> & {
//     asChild?: boolean
//     size?: "sm" | "md"
//     isActive?: boolean
//   }
// >(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
//   const Comp = asChild ? Slot : "a"

//   return (
//     <Comp
//       ref={ref}
//       data-sidebar="menu-sub-button"
//       data-size={size}
//       data-active={isActive}
//       className={cn(
//         "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
//         "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
//         size === "sm" && "text-xs",
//         size === "md" && "text-sm",
//         "group-data-[collapsible=icon]:hidden",
//         className
//       )}
//       {...props}
//     />
//   )
// })
// SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

// export {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupAction,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarInput,
//   SidebarInset,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuBadge,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSkeleton,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
//   SidebarProvider,
//   SidebarRail,
//   SidebarSeparator,
//   SidebarTrigger,
//   useSidebar,
// }


// src/components/ui/sidebar.tsx
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// ---- Types ----
type SidebarContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  toggle: () => void
}

// ---- Context ----
const SidebarCtx = React.createContext<SidebarContextValue | null>(null)

export function useSidebar() {
  const ctx = React.useContext(SidebarCtx)
  if (!ctx) throw new Error('useSidebar must be used within <SidebarProvider>')
  return ctx
}

// ---- Provider ----
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const value = React.useMemo(
    () => ({ open, setOpen, toggle: () => setOpen((s) => !s) }),
    [open]
  )
  return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>
}

// ---- Trigger (button) ----
export function SidebarTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggle } = useSidebar()
  return (
    <button
      type="button"
      onClick={toggle}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </button>
  )
}

// ---- A generic Sidebar container (optional) ----
// Use this wrapper if you want a sliding panel on small screens.
// On desktop, you can render it as a static aside with width classes.
export function Sidebar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { open } = useSidebar()
  return (
    <aside
      className={cn(
        'transition-transform duration-300 ease-out will-change-transform',
        // Mobile slide-in
        'fixed inset-y-0 left-0 z-40 w-72 bg-background border-r md:static md:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}
