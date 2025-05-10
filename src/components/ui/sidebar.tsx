// // // "use client";

// // // import { cn } from "@/lib/utils";
// // // import Link from "next/link";
// // // import React, { useState, createContext, useContext } from "react";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { Menu, X } from "lucide-react";

// // // /* --- types & context ---------------------------------------------------- */
// // // interface Links {
// // //   label: string;
// // //   href: string;
// // //   icon: React.ReactNode;
// // // }
// // // interface SidebarContextProps {
// // //   open: boolean;
// // //   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// // //   animate: boolean;
// // // }
// // // const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);
// // // export const useSidebar = () => {
// // //   const ctx = useContext(SidebarContext);
// // //   if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
// // //   return ctx;
// // // };

// // // /* --- provider ----------------------------------------------------------- */
// // // export const SidebarProvider = ({
// // //   children, open: openProp, setOpen: setOpenProp, animate = true,
// // // }: { children: React.ReactNode; open?: boolean;
// // //      setOpen?: React.Dispatch<React.SetStateAction<boolean>>; animate?: boolean }) => {
// // //   const [openState, setOpenState] = useState(false);
// // //   const open   = openProp   ?? openState;
// // //   const setOpen= setOpenProp?? setOpenState;
// // //   return (
// // //     <SidebarContext.Provider value={{ open, setOpen, animate }}>
// // //       {children}
// // //     </SidebarContext.Provider>
// // //   );
// // // };

// // // /* --- root wrappers ------------------------------------------------------ */
// // // export const Sidebar = ({
// // //   children, open, setOpen, animate,
// // // }: { children:React.ReactNode; open?:boolean;
// // //      setOpen?:React.Dispatch<React.SetStateAction<boolean>>; animate?:boolean }) =>
// // //   <SidebarProvider open={open} setOpen={setOpen} animate={animate}>{children}</SidebarProvider>;

// // // export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => (
// // //   <>
// // //     <DesktopSidebar {...props} />
// // //     <MobileSidebar  {...(props as React.ComponentProps<"div">)} />
// // //   </>
// // // );

// // // /* --- desktop ------------------------------------------------------------ */
// // // export const DesktopSidebar = ({
// // //   className, children, ...props
// // // }: React.ComponentProps<typeof motion.div>) => {
// // //   const { open, setOpen, animate } = useSidebar();
// // //   return (
// // //     <motion.div
// // //       className={cn(
// // //         "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
// // //         className
// // //       )}
// // //       animate={{ width: animate ? (open ? "300px" : "60px") : "300px" }}
// // //       onMouseEnter={() => setOpen(true)}
// // //       onMouseLeave={() => setOpen(false)}
// // //       {...props}
// // //     >
// // //       {children}
// // //     </motion.div>
// // //   );
// // // };

// // // /* --- mobile ------------------------------------------------------------- */
// // // export const MobileSidebar = ({
// // //   className, children, ...props
// // // }: React.ComponentProps<"div">) => {
// // //   const { open, setOpen } = useSidebar();
// // //   return (
// // //     <>
// // //       <div
// // //         className="h-10 px-4 py-4 flex md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
// // //         {...props}
// // //       >
// // //         <div className="flex justify-end z-20 w-full">
// // //           <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
// // //         </div>
// // //         <AnimatePresence>
// // //           {open && (
// // //             <motion.div
// // //               initial={{ x: "-100%", opacity: 0 }}
// // //               animate={{ x: 0, opacity: 1 }}
// // //               exit={{ x: "-100%", opacity: 0 }}
// // //               transition={{ duration: 0.3, ease: "easeInOut" }}
// // //               className={cn(
// // //                 "fixed inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
// // //                 className
// // //               )}
// // //             >
// // //               <X className="absolute right-10 top-10 cursor-pointer" onClick={() => setOpen(false)} />
// // //               {children}
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // /* --- link --------------------------------------------------------------- */
// // // export const SidebarLink = ({
// // //   link, className, ...props
// // // }: { link: Links; className?:string; props?: any }) => {
// // //   const { open, animate } = useSidebar();
// // //   return (
// // //     <Link
// // //       href={link.href}
// // //       className={cn("flex items-center gap-2 py-2 group/sidebar", className)}
// // //       {...props}
// // //     >
// // //       {link.icon}
// // //       <motion.span
// // //         animate={{
// // //           display: animate ? (open ? "inline-block" : "none") : "inline-block",
// // //           opacity: animate ? (open ? 1 : 0) : 1,
// // //         }}
// // //         className="whitespace-pre transition duration-150"
// // //       >
// // //         {link.label}
// // //       </motion.span>
// // //     </Link>
// // //   );
// // // };


// // /* ------------------------------------------------------------------
// //  * Animated Travaky sidebar – desktop + mobile
// //  * ------------------------------------------------------------------ */
// // "use client"

// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import { AnimatePresence, motion } from "framer-motion"
// // import { createContext, useContext, useState } from "react"
// // import {
// //   LayoutDashboard, CalendarCheck, FileText, FileStack,
// //   LogOut, Menu, X, User,
// // } from "lucide-react"
// // import Image from "next/image"
// // import { cn } from "@/lib/utils"
// // import { useAuth } from "@/context/AuthContext"

// // /* ---------------- context ---------------- */
// // type Ctx = { open: boolean; setOpen: (v: boolean) => void; animate: boolean }
// // const SidebarContext = createContext<Ctx | null>(null)
// // const useSidebar = () => {
// //   const ctx = useContext(SidebarContext)
// //   if (!ctx) throw new Error("sidebar must be inside provider")
// //   return ctx
// // }

// // /* ---------------- provider ---------------- */
// // export function SidebarProvider({ children }: { children: React.ReactNode }) {
// //   const [open, setOpen] = useState(
// //     typeof window !== "undefined" &&
// //       window.matchMedia("(min-width:768px)").matches, // open first time on desktop
// //   )
// //   return (
// //     <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
// //       {children}
// //     </SidebarContext.Provider>
// //   )
// // }

// // /* ---------------- root used by layout ---------------- */
// // export function Sidebar() {
// //   return (
// //     <SidebarProvider>
// //       <DesktopSidebar />
// //       <MobileSidebar />
// //     </SidebarProvider>
// //   )
// // }

// // /* ---------------- single link ---------------- */
// // function Item({
// //   href,
// //   label,
// //   icon,
// //   onClick,
// // }: {
// //   href: string
// //   label: string
// //   icon: JSX.Element
// //   onClick?: () => void
// // }) {
// //   const pathname = usePathname()
// //   const active = pathname === href
// //   const { open, animate } = useSidebar()
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
// //       <motion.span
// //         animate={{
// //           width: open || !animate ? "auto" : 0,
// //           opacity: open || !animate ? 1 : 0,
// //         }}
// //         className="truncate text-sm"
// //       >
// //         {label}
// //       </motion.span>
// //     </Link>
// //   )
// // }

// // /* ---------------- nav list (shared) ---------------- */
// // function Items({ closeMobile }: { closeMobile?: () => void } = {}) {
// //   const { logout, session } = useAuth()
// //   return (
// //     <>
// //       <Item
// //         href="/dashboard"
// //         label="Dashboard"
// //         icon={<LayoutDashboard className="w-4 h-4" />}
// //         onClick={closeMobile}
// //       />
// //       <Item
// //         href="/dashboard/bookings"
// //         label="Bookings"
// //         icon={<CalendarCheck className="w-4 h-4" />}
// //         onClick={closeMobile}
// //       />
// //       <Item
// //         href="/dashboard/invoices"
// //         label="Invoices"
// //         icon={<FileText className="w-4 h-4" />}
// //         onClick={closeMobile}
// //       />
// //       <Item
// //         href="/dashboard/documents"
// //         label="My Documents"
// //         icon={<FileStack className="w-4 h-4" />}
// //         onClick={closeMobile}
// //       />
// //       <Item
// //         href="/"
// //         label="Logout"
// //         icon={<LogOut className="w-4 h-4" />}
// //         onClick={async () => {
// //           await logout()
// //           closeMobile?.()
// //         }}
// //       />
// //       {/* footer avatar */}
// //       <Footer name={session?.email ?? "User"} />
// //     </>
// //   )
// // }

// // /* ---------------- footer with avatar ---------------- */
// // function Footer({ name }: { name: string }) {
// //   const { open, animate } = useSidebar()
// //   return (
// //     <motion.div
// //       animate={{
// //         height: open || !animate ? "auto" : 0,
// //         opacity: open || !animate ? 1 : 0,
// //       }}
// //       className="mt-auto px-3 py-4 border-t flex items-center gap-3 overflow-hidden"
// //     >
// //       <Image
// //         src="https://assets.aceternity.com/manu.png"
// //         width={28}
// //         height={28}
// //         className="rounded-full"
// //         alt="avatar"
// //       />
// //       <span className="text-sm truncate">{name}</span>
// //     </motion.div>
// //   )
// // }

// // /* ---------------- desktop variant ---------------- */
// // function DesktopSidebar() {
// //   const


// /* ------------------------------------------------------------------
//  * Animated Travaky sidebar – desktop + mobile
//  * ------------------------------------------------------------------ */
// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { AnimatePresence, motion } from "framer-motion"
// import { createContext, useContext, useState } from "react"
// import {
//   LayoutDashboard, CalendarCheck, FileText, FileStack,
//   LogOut, Menu, X, User,
// } from "lucide-react"
// import Image from "next/image"
// import { cn } from "@/lib/utils"
// import { useAuth } from "@/context/AuthContext"

// /* ---------------- context ---------------- */
// type Ctx = { open: boolean; setOpen: (v: boolean) => void; animate: boolean }
// const SidebarContext = createContext<Ctx | null>(null)
// const useSidebar = () => {
//   const ctx = useContext(SidebarContext)
//   if (!ctx) throw new Error("sidebar must be inside provider")
//   return ctx
// }

// /* ---------------- provider ---------------- */
// export function SidebarProvider({ children }: { children: React.ReactNode }) {
//   const [open, setOpen] = useState(
//     typeof window !== "undefined" &&
//       window.matchMedia("(min-width:768px)").matches,
//   )
//   return (
//     <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
//       {children}
//     </SidebarContext.Provider>
//   )
// }

// /* ------------------------------------------------------------------ */
// /*  MOBILE variant  —  put FIRST so it’s declared before <Sidebar />   */
// /* ------------------------------------------------------------------ */
// function MobileSidebar() {
//   const { open, setOpen } = useSidebar()
//   return (
//     <>
//       <header className="md:hidden flex items-center justify-between px-4 py-3 border-b">
//         <span className="font-semibold">Travaky</span>
//         <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
//       </header>

//       <AnimatePresence>
//         {open && (
//           <motion.aside
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r
//                        flex flex-col gap-6 p-6"
//           >
//             <X className="self-end cursor-pointer" onClick={() => setOpen(false)} />
//             <nav className="space-y-1 flex-1">
//               <Items closeMobile={() => setOpen(false)} />
//             </nav>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// /* ------------------------------------------------------------------ */
// /*  DESKTOP variant                                                   */
// /* ------------------------------------------------------------------ */
// function DesktopSidebar() {
//   const { open, setOpen } = useSidebar()
//   return (
//     <motion.aside
//       className="hidden md:flex h-full flex-col border-r bg-muted/80
//                  dark:bg-neutral-900/80 flex-shrink-0"
//       animate={{ width: open ? 260 : 60 }}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <div className="flex items-center gap-3 px-4 py-4">
//         <motion.div
//           animate={{ rotate: open ? 360 : 0 }}
//           transition={{ duration: 0.6 }}
//           className="size-8 rounded-lg bg-primary"
//         />
//         {open && <span className="text-lg font-semibold">Travaky</span>}
//       </div>

//       <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
//         <Items />
//       </nav>
//     </motion.aside>
//   )
// }

// /* ------------------------------------------------------------------ */
// /*  Sidebar root                                                       */
// /* ------------------------------------------------------------------ */
// export function Sidebar() {
//   return (
//     <SidebarProvider>
//       <DesktopSidebar />
//       <MobileSidebar />   {/* now MobileSidebar is defined above */}
//     </SidebarProvider>
//   )
// }

// /* ------------------------------------------------------------------ */
// /*  Nav items                                                          */
// /* ------------------------------------------------------------------ */
// function Item({
//   href,
//   label,
//   icon,
//   onClick,
// }: {
//   href: string
//   label: string
//   icon: JSX.Element
//   onClick?: () => void
// }) {
//   const pathname = usePathname()
//   const active = pathname === href
//   const { open, animate } = useSidebar()
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className={cn(
//         "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
//         active
//           ? "bg-primary/10 text-primary dark:text-primary-foreground"
//           : "text-muted-foreground hover:bg-muted hover:text-foreground",
//       )}
//     >
//       {icon}
//       <motion.span
//         animate={{
//           width: open || !animate ? "auto" : 0,
//           opacity: open || !animate ? 1 : 0,
//         }}
//         className="truncate text-sm"
//       >
//         {label}
//       </motion.span>
//     </Link>
//   )
// }

// function Items({ closeMobile }: { closeMobile?: () => void } = {}) {
//   const { logout, session } = useAuth()
//   return (
//     <>
//       <Item
//         href="/dashboard"
//         label="Dashboard"
//         icon={<LayoutDashboard className="w-4 h-4" />}
//         onClick={closeMobile}
//       />
//       <Item
//         href="/dashboard/bookings"
//         label="Bookings"
//         icon={<CalendarCheck className="w-4 h-4" />}
//         onClick={closeMobile}
//       />
//       <Item
//         href="/dashboard/invoices"
//         label="Invoices"
//         icon={<FileText className="w-4 h-4" />}
//         onClick={closeMobile}
//       />
//       <Item
//         href="/dashboard/documents"
//         label="My Documents"
//         icon={<FileStack className="w-4 h-4" />}
//         onClick={closeMobile}
//       />
//       <Item
//         href="/"
//         label="Logout"
//         icon={<LogOut className="w-4 h-4" />}
//         onClick={async () => {
//           await logout()
//           closeMobile?.()
//         }}
//       />

//       {/* footer */}
//       <Footer name={session?.email ?? "User"} />
//     </>
//   )
// }

// function Footer({ name }: { name: string }) {
//   const { open, animate } = useSidebar()
//   return (
//     <motion.div
//       animate={{
//         height: open || !animate ? "auto" : 0,
//         opacity: open || !animate ? 1 : 0,
//       }}
//       className="mt-auto px-3 py-4 border-t flex items-center gap-3 overflow-hidden"
//     >
//       <Image
//         src="https://assets.aceternity.com/manu.png"
//         width={28}
//         height={28}
//         className="rounded-full"
//         alt="avatar"
//       />
//       <span className="text-sm truncate">{name}</span>
//     </motion.div>
//   )
// }


/* ------------------------------------------------------------------
 * Travaky Sidebar – debounced hover, footer icon+name, no flicker
 * ------------------------------------------------------------------ */
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { createContext, useContext, useRef, useState } from "react"
import {
  Home,
  LayoutDashboard, CalendarCheck, FileText, FileStack,
  LogOut, Menu, X, User as UserIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"

/* ---------------- context ---------------- */
type Ctx = { open: boolean; setOpen: (v: boolean) => void }
const SidebarContext = createContext<Ctx | null>(null)
const useSidebar = () => {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error("sidebar must be inside provider")
  return ctx
}

/* ---------------- provider ---------------- */
function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, _setOpen] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width:768px)").matches,
  )

  /* debounce close ─────────── */
  const timer = useRef<NodeJS.Timeout>()
  const setOpen = (v: boolean) => {
    clearTimeout(timer.current)
    if (v) _setOpen(true)
    else timer.current = setTimeout(() => _setOpen(false), 250) // 250 ms grace
  }

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

/* ---------------- root ---------------- */
export function Sidebar() {
  return (
    <SidebarProvider>
      <DesktopSidebar />
      <MobileSidebar />
    </SidebarProvider>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop variant                                                   */
/* ------------------------------------------------------------------ */
function DesktopSidebar() {
  const { open, setOpen } = useSidebar()

  return (
    <motion.aside
      className="hidden md:flex h-full flex-col border-r bg-muted/80
                 dark:bg-neutral-900/80 flex-shrink-0"
      animate={{ width: open ? 260 : 60 }}
      
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* logo + company name */}
      <div className="flex items-center gap-3 px-4 py-4">
        <motion.div
          animate={{ rotate: open ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="size-8 rounded-lg bg-primary"
        />
        {open && <span className="text-lg font-semibold">Travaky</span>}
      </div>

      {/* nav */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        <Items />
      </nav>

      {/* footer */}
      <Footer />
      
    </motion.aside>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile variant                                                    */
/* ------------------------------------------------------------------ */
function MobileSidebar() {
  const { open, setOpen } = useSidebar()

  return (
    <>
      <header className="md:hidden flex items-center justify-between px-4 py-3 border-b">
        <span className="font-semibold">Travaky</span>
        <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r
                       flex flex-col gap-6 p-6"
          >
            <X className="self-end cursor-pointer" onClick={() => setOpen(false)} />
            <nav className="space-y-1 flex-1">
              <Items closeMobile={() => setOpen(false)} />
            </nav>
            <Footer />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Nav items                                                          */
/* ------------------------------------------------------------------ */
function NavItem(
  href: string,
  label: string,
  icon: JSX.Element,
  onClick?: () => void,
) {
  const pathname = usePathname()
  const active = pathname === href
  const { open } = useSidebar()

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
        active
          ? "bg-primary/10 text-primary dark:text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {icon}
      {open && <span className="truncate text-sm">{label}</span>}
    </Link>
  )
}

function Items({ closeMobile }: { closeMobile?: () => void } = {}) {
  const { logout } = useAuth()
  return (
    <>{NavItem("/", "Home", <Home className="w-4 h-4" />, closeMobile)}
      {NavItem("/dashboard", "Dashboard", <LayoutDashboard className="w-4 h-4" />, closeMobile)}
      {NavItem("/dashboard/bookings", "Bookings", <CalendarCheck className="w-4 h-4" />, closeMobile)}
      {NavItem("/dashboard/invoices", "Invoices", <FileText className="w-4 h-4" />, closeMobile)}
      {NavItem("/dashboard/documents", "My Documents", <FileStack className="w-4 h-4" />, closeMobile)}
      {NavItem("/", "Logout", <LogOut className="w-4 h-4" />, async () => {
        await logout()
        closeMobile?.()
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer with icon + name                                            */
/* ------------------------------------------------------------------ */
function Footer() {
  const { session } = useAuth()
  const { open } = useSidebar()
  return (
    <div className="mt-auto px-3 py-4 border-t flex items-center gap-3">
      <UserIcon className="size-6 text-muted-foreground" />
      {open && (
        <span className="text-sm truncate">
          {session?.email?.split("@")[0] ?? "User"}
        </span>
      )}
    </div>
  )
}
