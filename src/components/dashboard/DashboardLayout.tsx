/* ------------------------------------------------------------------
   Shell that puts <Sidebar /> on the left and page content on the right
   ------------------------------------------------------------------ */
   "use client"

   import { Sidebar } from "./Sidebar"
   import { useEffect } from "react"
   
   export default function DashboardLayout({ children }: { children: React.ReactNode }) {
     // stop body from scrolling when mobile sidebar is open
     useEffect(() => {
       document.body.classList.add("overscroll-none")
       return () => document.body.classList.remove("overscroll-none")
     }, [])
   
     return (
       <div className="flex h-screen">
         <Sidebar />
   
         {/* right side – the routed page */}
         <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
           {children}
         </main>
       </div>
     )
   }
   