// 'use client'

// import { cn } from '@/lib/utils'
// import * as AccordionPrimitive from '@radix-ui/react-accordion'
// import { ChevronDown } from 'lucide-react'

// import * as React from 'react'

// const Accordion = AccordionPrimitive.Root

// const AccordionItem = ({
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => {
//   const itemRef = React.useRef<React.ComponentRef<typeof AccordionPrimitive.Item>>(null)

//   return (
//     <AccordionPrimitive.Item
//       ref={itemRef}
//       className={cn(
//         'border-b',
//         className,
//       )}
//       {...props}
//     />
//   )
// }
// AccordionItem.displayName = 'AccordionItem'

// const AccordionTrigger = ({
//   className,
//   children,
//   ...props
// }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => {
//   const itemRef = React.useRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>>(null)
//   return (
//     <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         ref={itemRef}
//         className={cn(
//           'flex flex-1 items-center justify-between py-7 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
//           'text-[18px] font-bold',
//           className,
//         )}
//         {...props}
//       >
//         {children}
//         <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   )
// }
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

// const AccordionContent = ({
//   className,
//   children,
//   ...props
// }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => {
//   const itemRef = React.useRef<React.ComponentRef<typeof AccordionPrimitive.Content>>(null)

//   return (
//     <AccordionPrimitive.Content
//       ref={itemRef}
//       className={cn(
//         'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
//         'text-[16px]',
//       )}
//       {...props}
//     >
//       <div className={cn('pb-6 pt-0', className)}>{children}</div>
//     </AccordionPrimitive.Content>
//   )
// }

// AccordionContent.displayName = AccordionPrimitive.Content.displayName

// export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
