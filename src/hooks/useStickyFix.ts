// hooks/useStickyFix.ts
import { useEffect } from "react"

export function useStickyFix(
  ref: React.RefObject<HTMLElement>,
  offset = 96 // px from top
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isLarge = () => window.matchMedia("(min-width: 1024px)").matches
    const parent = el.parentElement as HTMLElement
    let savedWidth = 0

    const onScroll = () => {
      if (!ref.current) return

      if (!isLarge()) {
        // mobile/tablet -> normal flow
        el.style.position = ""
        el.style.top = ""
        el.style.left = ""
        el.style.width = ""
        return
      }

      const pRect = parent.getBoundingClientRect()
      if (!savedWidth) savedWidth = pRect.width

      if (pRect.top <= offset) {
        el.style.position = "fixed"
        el.style.top = `${offset}px`
        el.style.left = `${pRect.left}px`
        el.style.width = `${savedWidth}px`
      } else {
        el.style.position = "static"
        el.style.top = ""
        el.style.left = ""
        el.style.width = ""
      }
    }

    const onResize = () => {
      savedWidth = 0
      onScroll()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [ref, offset])
}
