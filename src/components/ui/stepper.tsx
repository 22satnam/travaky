/* ──────────────────────────────────────────────────────────
   src/components/ui/stepper.tsx
   Fully-typed vertical / horizontal step-wizard component
   Dependencies already present in Travaky: 
     • class-variance-authority (used in /ui/button.tsx)
     • lucide-react                      (icons used elsewhere)
   New: @radix-ui/react-icons  →  pnpm add @radix-ui/react-icons
   ────────────────────────────────────────────────────────── */

   "use client"

   import * as React from "react"
   import { createContext, useContext } from "react"
   import { cn } from "@/lib/utils"
   import { CheckIcon } from "@radix-ui/react-icons"
   import { LoaderCircle } from "lucide-react"
   
   /* ───────── Types ───────── */
   type Orientation = "horizontal" | "vertical"
   type StepState    = "active" | "completed" | "inactive" | "loading"
   
   interface StepperCtx {
     activeStep : number
     setActive  : (n:number) => void
     orientation: Orientation
   }
   
   interface StepItemCtx {
     step      : number
     state     : StepState
     loading   : boolean
     disabled  : boolean
   }
   
   /* ───────── Contexts ───────── */
   const StepperContext   = createContext<StepperCtx  | undefined>(undefined)
   const StepItemContext  = createContext<StepItemCtx | undefined>(undefined)
   
   export const useStepper  = () => {
     const ctx = useContext(StepperContext)
     if (!ctx) throw new Error("useStepper must be used inside <Stepper>")
     return ctx
   }
   const useStepItem = () => {
     const ctx = useContext(StepItemContext)
     if (!ctx) throw new Error("useStepItem must be used inside <StepperItem>")
     return ctx
   }
   
   /* ══════════════════════════════════════════════════════════
      Stepper (provider)
      ══════════════════════════════════════════════════════════ */
   interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
     /** uncontrolled default step (0-based) */
     defaultValue?: number
     /** controlled mode  */
     value?      : number
     onValueChange?: (n:number)=>void
     orientation?: Orientation
   }
   
   export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
     ({ defaultValue=0, value, onValueChange, orientation="horizontal",
        className, ...props }, ref) =>
   {
     const [internal, setInternal] = React.useState(defaultValue)
     const current = value ?? internal
   
     const setActive = React.useCallback((n:number)=>{
       if (value===undefined) setInternal(n)
       onValueChange?.(n)
     },[value,onValueChange])
   
     return (
       <StepperContext.Provider value={{activeStep:current,setActive,orientation}}>
         <div
           ref={ref}
           data-orientation={orientation}
           className={cn(
             "group/stepper inline-flex",
             orientation==="horizontal" ? "flex-row w-full" : "flex-col",
             className)}
           {...props}/>
       </StepperContext.Provider>
     )
   })
   Stepper.displayName="Stepper"
   
   /* ══════════════════════════════════════════════════════════
      StepperItem
      ══════════════════════════════════════════════════════════ */
   interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement>{
     step      : number
     completed?: boolean
     disabled? : boolean
     loading?  : boolean
   }
   
   export const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
     ({step,completed=false,disabled=false,loading=false,
       className,children,...props},ref)=>
   {
     const {activeStep} = useStepper()
     const state:StepState =
       completed || step < activeStep ? "completed"
       : step === activeStep           ? "active"
       : "inactive"
   
     const isLoading = loading && step===activeStep
   
     return (
       <StepItemContext.Provider value={{
         step, state, loading:isLoading, disabled
       }}>
         <div
           ref={ref}
           data-state={state}
           className={cn(
             "group/step flex items-center",
             "data-[orientation=horizontal]:group-[[data-orientation=horizontal]]/stepper:flex-row",
             "data-[orientation=vertical]:group-[[data-orientation=vertical]]/stepper:flex-col",
             className)}
           {...(isLoading ? {"data-loading":true}: {})}
           {...props}
         >
           {children}
         </div>
       </StepItemContext.Provider>
     )
   })
   StepperItem.displayName="StepperItem"
   
   /* ══════════════════════════════════════════════════════════
      Trigger  (clickable wrapper)
      ══════════════════════════════════════════════════════════ */
   interface TriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
     asChild?: boolean
   }
   
   export const StepperTrigger = React.forwardRef<HTMLButtonElement,TriggerProps>(
     ({asChild=false,className,children,...props},ref)=>{
     const {setActive}=useStepper()
     const {step,disabled}=useStepItem()
   
     if (asChild) return <div className={className}>{children}</div>
   
     return(
       <button
         ref={ref}
         disabled={disabled}
         onClick={()=>setActive(step)}
         className={cn(
           "inline-flex items-center gap-3 disabled:opacity-50",
           className)}
         {...props}>
         {children}
       </button>
     )
   })
   StepperTrigger.displayName="StepperTrigger"
   
   /* ═════════ Indicator (circle with number / check / spinner) ═════════ */
   export const StepperIndicator = React.forwardRef<
     HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
   >(({className,...props},ref)=>{
     const {state,step,loading}=useStepItem()
     return(
       <div
         ref={ref}
         data-state={state}
         className={cn(
           "relative flex size-6 shrink-0 items-center justify-center",
           "rounded-full bg-muted text-xs font-medium text-muted-foreground",
           "data-[state=active]:bg-primary data-[state=completed]:bg-primary",
           "data-[state=active]:text-primary-foreground data-[state=completed]:text-primary-foreground",
           className)}
         {...props}>
         {/* number */}
         <span className={cn(
           "transition-all",
           (state==="completed"||loading) && "scale-0 opacity-0")}>
           {step}
         </span>
         {/* check icon */}
         <CheckIcon className={cn(
           "absolute scale-0 opacity-0 transition-all",
           state==="completed" && "scale-100 opacity-100")}
           width={16} height={16}/>
         {/* spinner */}
         {loading && (
           <LoaderCircle className="absolute animate-spin"
             width={14} height={14}/>
         )}
       </div>)
   })
   StepperIndicator.displayName="StepperIndicator"
   
   /* ═════════ Titles & description ═════════ */
   export const StepperTitle = React.forwardRef<
     HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>
   >((p,ref)=><h3 ref={ref} className={cn("text-sm font-medium",p.className)} {...p}/>)
   StepperTitle.displayName="StepperTitle"
   
   export const StepperDescription = React.forwardRef<
     HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>
   >((p,ref)=><p ref={ref} className={cn("text-sm text-muted-foreground",p.className)} {...p}/>)
   StepperDescription.displayName="StepperDescription"
   
   /* ═════════ Separator (line between items) ═════════ */
   export const StepperSeparator = React.forwardRef<
     HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
   >(({className,...props},ref)=>{
     const {orientation}=useStepper()
     return(
       <div ref={ref}
         className={cn(
           "bg-muted m-0.5 transition-colors",
           orientation==="horizontal"
             ? "h-0.5 w-full flex-1"
             : "w-0.5 h-12",
           "group-data-[state=completed]/step:bg-primary",
           className)}
         {...props}/>
     )
   })
   StepperSeparator.displayName="StepperSeparator"
   