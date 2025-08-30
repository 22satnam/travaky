'use client'
import { useEffect } from 'react'

export default function ThemeLightLock() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark')
    const obs = new MutationObserver(() => root.classList.remove('dark'))
    obs.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])
  return null
}
