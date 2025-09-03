// 'use client'
// import { Receipt, MessageCircleQuestion } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const DashboardHeader = () => {
//   return (
//     <header className="bg-gradient-hero text-white">
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mb-2">Visa Application Dashboard</h1>
//             <p className="text-blue-100 text-lg">Track your applications with complete transparency</p>
//           </div>
          
//           <div className="flex items-center gap-3">
//             <Button variant="outline" className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
//               <MessageCircleQuestion className="h-4 w-4 mr-2" />
//               Support
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

'use client'

import { cn } from '@/lib/utils'

export function DashboardHeader({
  title,
  subtitle,
  rightSlot,
  className,
}: {
  title?: string
  subtitle?: string
  rightSlot?: React.ReactNode
  className?: string
}) {
  // defaults to the "Application Tracking" tone you showed
  const heading = title ?? 'Application Tracking'
  const sub = subtitle ?? 'Track your applications with complete transparency'

  return (
    <header className={cn('ui-hero relative', className)}>
      {/* background surface (same bluish canvas) */}
      <div
        className="w-full"
        style={{
          background:
            'radial-gradient(1200px 600px at 100% -20%, hsl(var(--primary-200) / .18) 0%, transparent 60%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--background)))',
        }}
      >
        <div className="hero-glow"></div>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
          {/* top row: left = title/sub, right = actions */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                <span className="gradient-text">{heading}</span>
              </h1>
              {sub ? (
                <p className="mt-2 text-sm text-muted-foreground">{sub}</p>
              ) : null}
            </div>

            {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
          </div>
        </div>
      </div>
    </header>
  )
}
