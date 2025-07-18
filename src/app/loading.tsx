// src/app/loading.tsx
'use client'

import Loader from '@/components/ui/Loader'

/**
 * Next.js “loading.tsx” in the root app/ folder
 * automatically displays during any route transition
 * (page, dynamic segment, etc.).
 */
export default function Loading() {
  return <Loader show={true} />
}
