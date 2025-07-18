// // /* ------------------------------------------------------------------
// //  * Animated sidebar used by every /dashboard/* page
// //  * ------------------------------------------------------------------ */
// // "use client"

// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import { AnimatePresence, motion } from "framer-motion"
// // import { createContext, useContext, useState } from "react"
// // import {
// //   LayoutDashboard, CalendarCheck, FileText, LogOut, Menu, X, User,
// // } from "lucide-react"
// // import { cn } from "@/lib/utils"
// // import { useAuth } from "@/context/AuthContext"

// // /* ------------------------------------------------------------------ */
// // /* Context helpers                                                    */
// // /* ------------------------------------------------------------------ */
// // type Ctx = {
// //   open: boolean
// //   setOpen: (o: boolean) => void
// //   animate: boolean
// // }
// // const SidebarContext = createContext<Ctx | null>(null)
// // const useSidebar = () => {
// //   const ctx = useContext(SidebarContext)
// //   if (!ctx) throw new Error("useSidebar must be inside <SidebarProvider>")
// //   return ctx
// // }

// // /* ------------------------------------------------------------------ */
// // /* Provider (auto-opens on ≥ md screens the first time)                */
// // /* ------------------------------------------------------------------ */
// // export function SidebarProvider({ children }: { children: React.ReactNode }) {
// //   const [open, setOpen] = useState(
// //     typeof window !== "undefined" &&
// //       window.matchMedia("(min-width:768px)").matches,
// //   )
// //   return (
// //     <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
// //       {children}
// //     </SidebarContext.Provider>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /* Root wrapper (desktop + mobile variants)                            */
// // /* ------------------------------------------------------------------ */
// // export function Sidebar({ children }: { children?: never }) {
// //   return (
// //     <SidebarProvider>
// //       <DesktopSidebar />
// //       <MobileSidebar />
// //     </SidebarProvider>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /* Shared nav link component                                           */
// // /* ------------------------------------------------------------------ */
// // function SidebarLink({
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
// //   const { open, animate } = useSidebar()
// //   const pathname = usePathname()
// //   const active = pathname === href

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

// // /* ------------------------------------------------------------------ */
// // /* Desktop sidebar (hover to collapse)                                 */
// // /* ------------------------------------------------------------------ */
// // function DesktopSidebar() {
// //   const { open, setOpen } = useSidebar()

// //   return (
// //     <motion.aside
// //       className="hidden md:flex h-full flex-col border-r bg-muted/80
// //                  dark:bg-neutral-900/80 flex-shrink-0"
// //       initial={false}
// //       animate={{ width: open ? 260 : 60 }}
// //       onMouseEnter={() => setOpen(true)}
// //       onMouseLeave={() => setOpen(false)}
// //     >
// //       {/* logo / title */}
// //       <div className="flex items-center gap-3 px-4 py-4">
// //         <motion.div
// //           animate={{ rotate: open ? 360 : 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="size-8 rounded-lg bg-primary"
// //         />
// //         {open && <span className="text-lg font-semibold">Travaky</span>}
// //       </div>

// //       {/* nav links */}
// //       <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
// //         <SidebarLinks />
// //       </nav>

// //       {/* user footer */}
// //       <motion.div
// //         animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
// //         className="px-4 py-3 border-t flex items-center gap-3"
// //       >
// //         <User className="size-6 text-muted-foreground" />
// //         <span className="text-sm truncate">My account</span>
// //       </motion.div>
// //     </motion.aside>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /* Mobile slide-in menu                                                */
// // /* ------------------------------------------------------------------ */
// // function MobileSidebar() {
// //   const { open, setOpen } = useSidebar()

// //   return (
// //     <>
// //       {/* top bar */}
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
// //             <X
// //               className="self-end cursor-pointer"
// //               onClick={() => setOpen(false)}
// //             />
// //             <SidebarLinks onNavigate={() => setOpen(false)} />
// //           </motion.aside>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /* Central place that defines all links                                */
// // /* ------------------------------------------------------------------ */
// // function SidebarLinks({ onNavigate }: { onNavigate?: () => void } = {}) {
// //   const { logout } = useAuth()
// //   return (
// //     <>
// //       <SidebarLink
// //         href="/dashboard"
// //         label="Dashboard"
// //         icon={<LayoutDashboard className="w-4 h-4" />}
// //         onClick={onNavigate}
// //       />
// //       <SidebarLink
// //         href="/dashboard/bookings"
// //         label="Bookings"
// //         icon={<CalendarCheck className="w-4 h-4" />}
// //         onClick={onNavigate}
// //       />
// //       <SidebarLink
// //         href="/dashboard/invoices"
// //         label="Invoices"
// //         icon={<FileText className="w-4 h-4" />}
// //         onClick={onNavigate}
// //       />
// //       <SidebarLink
// //         href="/"
// //         label="Logout"
// //         icon={<LogOut className="w-4 h-4" />}
// //         onClick={async () => {
// //           await logout()
// //           onNavigate?.()
// //         }}
// //       />
// //     </>
// //   )
// // }


// /* ------------------------------------------------------------------
//  * Stable Travaky sidebar (no hover-flicker)
//  * ------------------------------------------------------------------ */
// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   CalendarCheck, FileText, FileStack,
//   ChevronLeft, ChevronRight, LogOut, Menu, User
// } from "lucide-react"
// import { createContext, useContext, useState } from "react"
// import { cn } from "@/lib/utils"
// import { useAuth } from "@/context/AuthContext"

// /* ------------- context ------------- */
// type Ctx = { open: boolean; setOpen: (v: boolean) => void }
// const SidebarContext = createContext<Ctx | null>(null)
// const useSidebar = () => {
//   const ctx = useContext(SidebarContext)
//   if (!ctx) throw new Error("Sidebar must be inside provider")
//   return ctx
// }

// /* ------------- provider ------------- */
// function SidebarProvider({ children }: { children: React.ReactNode }) {
//   // open by default on ≥ md, closed on mobile
//   const [open, setOpen] = useState(
//     typeof window !== "undefined" &&
//       window.matchMedia("(min-width:768px)").matches,
//   )
//   return (
//     <SidebarContext.Provider value={{ open, setOpen }}>
//       {children}
//     </SidebarContext.Provider>
//   )
// }

// /* ------------- root wrapper ------------- */
// export function Sidebar() {
//   return (
//     <SidebarProvider>
//       <DesktopSidebar />
//       <MobileSidebar />
//     </SidebarProvider>
//   )
// }

// /* ------------- desktop variant ------------- */
// function DesktopSidebar() {
//   const { open, setOpen } = useSidebar()
//   const toggle = () => setOpen(!open)

//   return (
//     <aside
//       className={cn(
//         "hidden md:flex h-full flex-col border-r bg-muted/80 dark:bg-neutral-900/80",
//         "transition-width duration-200",               // smooth but subtle
//         open ? "w-64" : "w-16",
//       )}
//     >
//       {/* collapse / expand button */}
//       <button
//         onClick={toggle}
//         className="absolute -right-3 top-4 z-10 rounded-full border bg-background p-1 shadow"
//       >
//         {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
//       </button>

//       {/* logo */}
//       <div className="flex items-center gap-3 px-4 py-4">
//         <div className="size-8 rounded-lg bg-primary" />
//         {open && <span className="text-lg font-semibold">Travaky</span>}
//       </div>

//       {/* nav links */}
//       <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
//         <SidebarLink href="/dashboard/bookings"  label="Bookings"  icon={<CalendarCheck className="h-5 w-5" />} />
//         <SidebarLink href="/dashboard/invoices"  label="Invoices"  icon={<FileText     className="h-5 w-5" />} />
//         <SidebarLink href="/dashboard/documents" label="Documents" icon={<FileStack    className="h-5 w-5" />} />
//       </nav>

//       {/* footer */}
//       <div className={cn("px-4 py-3 border-t flex items-center gap-3", !open && "justify-center")}>
//         <User className="size-6 text-muted-foreground" />
//         {open && <span className="text-sm truncate">My account</span>}
//       </div>
//     </aside>
//   )
// }

// /* ------------- mobile slide-in ------------- */
// function MobileSidebar() {
//   const { open, setOpen } = useSidebar()
//   const { logout } = useAuth()

//   return (
//     <>
//       {/* top bar */}
//       <header className="md:hidden flex items-center justify-between px-4 py-3 border-b">
//         <span className="font-semibold">Travaky</span>
//         <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
//       </header>

//       {/* slide-in panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.aside
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r flex flex-col"
//           >
//             <nav className="flex-1 px-4 pt-6 space-y-1">
//               <SidebarLink href="/dashboard/bookings"  label="Bookings"  icon={<CalendarCheck className="h-4 w-4" />} onClick={() => setOpen(false)} />
//               <SidebarLink href="/dashboard/invoices"  label="Invoices"  icon={<FileText     className="h-4 w-4" />} onClick={() => setOpen(false)} />
//               <SidebarLink href="/dashboard/documents" label="Documents" icon={<FileStack    className="h-4 w-4" />} onClick={() => setOpen(false)} />
//             </nav>

//             <button
//               onClick={async () => { await logout(); setOpen(false) }}
//               className="flex items-center gap-2 p-4 border-t text-sm hover:bg-muted/50"
//             >
//               <LogOut className="h-4 w-4" /> Logout
//             </button>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// /* ------------- reusable link ------------- */
// function SidebarLink({
//   href, label, icon, onClick,
// }: { href:string; label:string; icon:JSX.Element; onClick?:()=>void }) {
//   const pathname = usePathname()
//   const active   = pathname === href
//   const { open } = useSidebar()

//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className={cn(
//         "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
//         active
//           ? "bg-primary/10 text-primary dark:text-primary-foreground"
//           : "text-muted-foreground hover:bg-muted hover:text-foreground",
//       )}
//     >
//       {icon}
//       {open && <span className="truncate">{label}</span>}
//     </Link>
//   )
// }


/* ------------------------------------------------------------------
 * Travaky sidebar – click-to-toggle (desktop) + slide-in (mobile)
 * ------------------------------------------------------------------ */
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  CalendarCheck, FileText, FileStack,
  ChevronLeft, ChevronRight, Menu, LogOut, User,
} from "lucide-react"
import { createContext, useContext, useState } from "react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"

/* context ------------------------------------------------------------------ */
type Ctx = { open: boolean; setOpen: (v: boolean) => void }
const SidebarCtx = createContext<Ctx | null>(null)
const useSidebar = () => {
  const c = useContext(SidebarCtx)
  if (!c) throw new Error("Sidebar must be inside provider")
  return c
}

/* provider – open by default ≥ md ----------------------------------------- */
function Provider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width:768px)").matches,
  )
  return <SidebarCtx.Provider value={{ open, setOpen }}>{children}</SidebarCtx.Provider>
}

/* exported root ------------------------------------------------------------ */
export function Sidebar() {
  return (
    <Provider>
      <Desktop />
      <Mobile />
    </Provider>
  )
}

/* ---------- shared link --------------------------------------------------- */
function Item({ href, label, icon, onClick }:{
  href:string; label:string; icon:JSX.Element; onClick?:()=>void
}) {
  const { open }  = useSidebar()
  const active    = usePathname() === href
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {icon}
      {open && <span className="truncate">{label}</span>}
    </Link>
  )
}

/* ---------- desktop variant ---------------------------------------------- */
function Desktop() {
  const { open, setOpen } = useSidebar()
  const toggle = () => setOpen(!open)

  return (
    <aside
      className={cn(
        "hidden md:flex h-full flex-col border-r bg-muted/80 dark:bg-neutral-900/80",
        "transition-[width] duration-200",          // smooth but subtle
        open ? "w-64" : "w-16",
      )}
    >
      {/* collapse/expand button */}
      <button
        onClick={toggle}
        className="absolute -right-3 top-4 z-10 rounded-full border bg-background p-1 shadow"
      >
        {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>

      {/* logo */}
      <div className="flex items-center gap-3 px-4 py-4">
        <div className="size-8 rounded-lg bg-primary" />
        {open && <span className="text-lg font-semibold">Travaky</span>}
      </div>

      {/* nav */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        <Item href="/dashboard/bookings"  label="Bookings"  icon={<CalendarCheck className="h-5 w-5" />} />
        <Item href="/dashboard/invoices"  label="Invoices"  icon={<FileText     className="h-5 w-5" />} />
        <Item href="/dashboard/documents" label="Documents" icon={<FileStack    className="h-5 w-5" />} />
      </nav>

      {/* footer */}
      <div className={cn("px-4 py-3 border-t flex items-center gap-3", !open && "justify-center")}>
        <User className="size-6 text-muted-foreground" />
        {open && <span className="text-sm truncate">My account</span>}
        <LogOut className="ml-auto h-4 w-4 cursor-pointer" onClick={useAuth().logout} />
      </div>
    </aside>
  )
}

/* ---------- mobile slide-in ---------------------------------------------- */
function Mobile() {
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
            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r flex flex-col"
          >
            <nav className="flex-1 px-4 pt-6 space-y-1">
              <Item href="/dashboard/bookings"  label="Bookings"  icon={<CalendarCheck className="h-4 w-4" />} onClick={() => setOpen(false)} />
              <Item href="/dashboard/invoices"  label="Invoices"  icon={<FileText     className="h-4 w-4" />} onClick={() => setOpen(false)} />
              <Item href="/dashboard/documents" label="Documents" icon={<FileStack    className="h-4 w-4" />} onClick={() => setOpen(false)} />
            </nav>
            <button
              className="p-4 border-t flex items-center gap-2 text-sm hover:bg-muted/50"
              onClick={async () => { await useAuth().logout(); setOpen(false) }}
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
