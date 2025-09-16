// // "use client";

// // import { cn } from "@/lib/utils";
// // import Link, { LinkProps } from "next/link";
// // import React, { useState, createContext, useContext } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Menu, X } from "lucide-react";

// // interface Links {
// //   label: string;
// //   href: string;
// //   icon: React.JSX.Element | React.ReactNode;
// // }

// // interface SidebarContextProps {
// //   open: boolean;
// //   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// //   animate: boolean;
// // }

// // const SidebarContext = createContext<SidebarContextProps | undefined>(
// //   undefined
// // );

// // export const useSidebar = () => {
// //   const context = useContext(SidebarContext);
// //   if (!context) {
// //     throw new Error("useSidebar must be used within a SidebarProvider");
// //   }
// //   return context;
// // };

// // export const SidebarProvider = ({
// //   children,
// //   open: openProp,
// //   setOpen: setOpenProp,
// //   animate = true,
// // }: {
// //   children: React.ReactNode;
// //   open?: boolean;
// //   setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
// //   animate?: boolean;
// // }) => {
// //   const [openState, setOpenState] = useState(false);
  
// //   const open = openProp !== undefined ? openProp : openState;
// //   const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

// //   return (
// //     <SidebarContext.Provider value={{ open, setOpen, animate }}>
// //       {children}
// //     </SidebarContext.Provider>
// //   );
// // };

// // export const Sidebar = ({
// //   children,
// //   open,
// //   setOpen,
// //   animate,
// // }: {
// //   children: React.ReactNode;
// //   open?: boolean;
// //   setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
// //   animate?: boolean;
// // }) => {
// //   return (
// //     <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
// //       {children}
// //     </SidebarProvider>
// //   );
// // };

// // export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
// //   return (
// //     <>
// //       <DesktopSidebar {...props} />
// //       <MobileSidebar {...(props as React.ComponentProps<"div">)} />
// //     </>
// //   );
// // };

// // export const DesktopSidebar = ({
// //   className,
// //   children,
// //   ...props
// // }: React.ComponentProps<typeof motion.div>) => {
// //   const { open, setOpen, animate } = useSidebar();
// //   return (
// //     <motion.div
// //       className={cn(
// //         "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
// //         className
// //       )}
// //       animate={{
// //         width: animate ? (open ? "300px" : "60px") : "300px",
// //       }}
// //       onMouseEnter={() => setOpen(true)}
// //       onMouseLeave={() => setOpen(false)}
// //       {...props}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // export const MobileSidebar = ({
// //   className,
// //   children,
// //   ...props
// // }: React.ComponentProps<"div">) => {
// //   const { open, setOpen } = useSidebar();
// //   return (
// //     <>
// //       <div
// //         className={cn(
// //           "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
// //         )}
// //         {...props}
// //       >
// //         <div className="flex justify-end z-20 w-full">
// //           <Menu
// //             className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
// //             onClick={() => setOpen(!open)}
// //           />
// //         </div>
// //         <AnimatePresence>
// //           {open && (
// //             <motion.div
// //               initial={{ x: "-100%", opacity: 0 }}
// //               animate={{ x: 0, opacity: 1 }}
// //               exit={{ x: "-100%", opacity: 0 }}
// //               transition={{
// //                 duration: 0.3,
// //                 ease: "easeInOut",
// //               }}
// //               className={cn(
// //                 "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
// //                 className
// //               )}
// //             >
// //               <div
// //                 className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
// //                 onClick={() => setOpen(!open)}
// //               >
// //                 <X />
// //               </div>
// //               {children}
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </>
// //   );
// // };

// // export const SidebarLink = ({
// //   link,
// //   className,
// //   ...props
// // }: {
// //   link: Links;
// //   className?: string;
// //   props?: LinkProps;
// // }) => {
// //   const { open, animate } = useSidebar();
// //   return (
// //     <Link
// //       href={link.href}
// //       className={cn(
// //         "flex items-center justify-start gap-2 group/sidebar py-2",
// //         className
// //       )}
// //       {...props}
// //     >
// //       {link.icon}
// //       <motion.span
// //         animate={{
// //           display: animate ? (open ? "inline-block" : "none") : "inline-block",
// //           opacity: animate ? (open ? 1 : 0) : 1,
// //         }}
// //         className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
// //       >
// //         {link.label}
// //       </motion.span>
// //     </Link>
// //   );
// // };
// 'use client'
// import { useState } from "react";
// import { FileText, Receipt, MessageCircle, MapPin } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   useSidebar,
// } from "@/components/ui/sidebar";

// const menuItems = [
//   { 
//     title: "Application Tracking", 
//     id: "tracking", 
//     icon: MapPin,
//     description: "Track your visa applications"
//   },
//   { 
//     title: "My Documents", 
//     id: "documents", 
//     icon: FileText,
//     description: "Store and access documents"
//   },
//   { 
//     title: "Payment Invoices", 
//     id: "invoices", 
//     icon: Receipt,
//     description: "View payment history"
//   },
//   { 
//     title: "Support", 
//     id: "support", 
//     icon: MessageCircle,
//     description: "Get help and assistance"
//   },
// ];

// interface AppSidebarProps {
//   activeSection: string;
//   onSectionChange: (section: string) => void;
// }

// export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
//   const { state } = useSidebar();
//   const collapsed = state === "collapsed";

//   return (
//     <Sidebar
//       className={`transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"} bg-gradient-primary/10 backdrop-blur-xl border-r border-primary/20 shadow-elegant`}
//       collapsible="icon"
//     >
//       <SidebarContent className="p-4 bg-gradient-subtle/50">
//         <SidebarGroup>
//           <SidebarGroupLabel className={`text-primary font-bold mb-6 text-center ${collapsed ? "hidden" : "block"} bg-gradient-primary bg-clip-text text-transparent`}>
//             Dashboard Menu
//           </SidebarGroupLabel>
          
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {menuItems.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = activeSection === item.id;
                
//                 return (
//                   <SidebarMenuItem key={item.id}>
//                      <SidebarMenuButton
//                       onClick={() => onSectionChange(item.id)}
//                       className={`
//                         w-full mb-2 p-3 rounded-xl transition-all duration-300 ease-out hover-lift group relative overflow-hidden
//                         ${isActive 
//                           ? "bg-gradient-primary text-primary-foreground shadow-elegant scale-105" 
//                           : "hover:bg-primary/5 hover:shadow-glow text-foreground hover:scale-105"
//                         }
//                         before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 before:transition-opacity before:duration-300
//                         ${!isActive ? "hover:before:opacity-10" : ""}
//                       `}
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
//                         {!collapsed && (
//                           <div className="flex flex-col items-start">
//                             <span className="font-medium text-sm">{item.title}</span>
//                             <span className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
//                               {item.description}
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

'use client'

import { Sidebar, useSidebar, SidebarProvider } from '@/components/ui/sidebar'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function AppSidebar({
  activeSection,
  onSectionChange,
}: {
  activeSection: 'tracking' | 'documents' | 'invoices' | 'support'
  onSectionChange: (v: 'tracking' | 'documents' | 'invoices' | 'support') => void
}) {
  return (
    <SidebarProvider>
      <InnerSidebar activeSection={activeSection} onSectionChange={onSectionChange} />
    </SidebarProvider>
  )
}

function InnerSidebar({
  activeSection,
  onSectionChange,
}: {
  activeSection: 'tracking' | 'documents' | 'invoices' | 'support'
  onSectionChange: (v: 'tracking' | 'documents' | 'invoices' | 'support') => void
}) {
  const { open, setOpen } = useSidebar()
  const NavItem = ({
    id,
    label,
  }: { id: 'tracking' | 'documents' | 'invoices' | 'support'; label: string }) => (
    <button
      onClick={() => {
        onSectionChange(id)
        setOpen(false)
      }}
      className={cn(
        'w-full text-left px-4 py-2 rounded-lg transition-colors',
        activeSection === id
          ? 'bg-primary text-primary-foreground shadow-md ring-1 ring-primary/40'
          : 'hover:bg-primary/5 hover:text-primary'
      )}
    >
      {label}
    </button>
  )

  return (
    <Sidebar className="pt-2 pb-4 px-3">
      <div className="space-y-2">
        <NavItem id="tracking" label="Application Tracking" />
        <NavItem id="documents" label="My Documents" />
        <NavItem id="invoices" label="Payment Invoices" />
        <NavItem id="support" label="Support & Help" />
        {/* Example link */}
        <Link href="/" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
          Back to Home
        </Link>
      </div>
    </Sidebar>
  )
}
