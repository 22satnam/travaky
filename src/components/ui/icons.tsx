// components/ui/icons.tsx
'use client'

import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import { Loader2 } from 'lucide-react'

export const Icons = {
  google: IconBrandGoogle,
  gitHub: IconBrandGithub,
  spinner: Loader2,
}

export type IconType = keyof typeof Icons