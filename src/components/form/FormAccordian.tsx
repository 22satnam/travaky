"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, User } from "lucide-react"

export default function FormAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl space-y-2">
      <AccordionItem value="personal">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <User className="size-4 text-muted-foreground" />
            <span>Personal Information</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="contact">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-muted-foreground" />
            <span>Contact Information</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+91 1234567890" required />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="address">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-muted-foreground" />
            <span>Address</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="street">Street</Label>
              <Input id="street" placeholder="123 Main St" required />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Mumbai" required />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="Maharashtra" required />
            </div>
            <div>
              <Label htmlFor="zip">Pincode</Label>
              <Input id="zip" placeholder="400001" required />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
