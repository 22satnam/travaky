'use client'

import { useEffect } from 'react'

/**
 * Forces UI_Hero's light theme.
 * - Removes any persisted "dark" class on <html>
 * - Clears common theme keys localStorage/sessionStorage used by theme libs
 * - Prevents future toggles from re-adding dark unintentionally
 */
export default function ThemeLock() {
  useEffect(() => {
    const root = document.documentElement
    // remove dark class if present
    root.classList.remove('dark')

    // clear common theme persistence keys, if any
    try {
      localStorage.removeItem('theme')
      localStorage.removeItem('ui-theme')
      sessionStorage.removeItem('theme')
      sessionStorage.removeItem('ui-theme')
    } catch {}

    // guard against runtime code re-adding it
    const observer = new MutationObserver(() => {
      if (root.classList.contains('dark')) root.classList.remove('dark')
    })
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return null
}
