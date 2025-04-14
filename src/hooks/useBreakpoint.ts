// src/hooks/useBreakpoint.ts
export function useBreakpoint() {
    // basic example: returns mobile/desktop
    if (typeof window === 'undefined') return 'desktop'
    return window.innerWidth < 768 ? 'mobile' : 'desktop'
  }
  