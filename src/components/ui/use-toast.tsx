import * as React from "react"
import { ToastProvider, useToast as useShadToast } from "@/components/ui/toast"

export const useToast = () => {
  const { toast } = useShadToast()
  return { toast }
}