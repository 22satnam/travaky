// import { cn } from "@/lib/utils"
// import { Avatar, AvatarImage } from "@/components/ui/avatar"

// export interface TestimonialAuthor {
//   name: string
//   handle: string
//   avatar: string
// }

// export interface TestimonialCardProps {
//   author: TestimonialAuthor
//   text: string
//   href?: string
//   className?: string
// }

// export function TestimonialCard({ 
//   author,
//   text,
//   href,
//   className
// }: TestimonialCardProps) {
//   const Card = href ? 'a' : 'div'
  
//   return (
//     <Card
//       {...(href ? { href } : {})}
//       className={cn(
//         "flex flex-col rounded-lg border-t",
//         "bg-gradient-to-b from-muted/50 to-muted/10",
//         "p-4 text-start sm:p-6",
//         "hover:from-muted/60 hover:to-muted/20",
//         "w-[280px] sm:w-[320px] flex-shrink-0",
//         "transition-colors duration-300",
//         className
//       )}
//     >
//       <div className="flex items-center gap-3">
//         <Avatar className="h-12 w-12">
//           <AvatarImage src={author.avatar} alt={author.name} />
//         </Avatar>
//         <div className="flex flex-col items-start">
//           <h3 className="text-md font-semibold leading-none">
//             {author.name}
//           </h3>
//           <p className="text-sm text-muted-foreground">
//             {author.handle}
//           </p>
//         </div>
//       </div>
//       <p className="sm:text-md mt-4 text-sm text-muted-foreground">
//         {text}
//       </p>
//     </Card>
//   )
// }

import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  rating?: number
  destination?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className,
  rating = 5,
  destination
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "w-[280px] sm:w-[320px] flex-shrink-0",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>

      {destination && (
        <p className="mt-2 text-sm text-muted-foreground font-medium">
          ✈️ {destination}
        </p>
      )}

      {rating > 0 && (
        <div className="mt-2 flex items-center gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      )}

      <p className="sm:text-md mt-4 text-sm text-muted-foreground">
        {text}
      </p>
    </Card>
  )
}
