// src/components/layout/SiteContainer.tsx
"use client"

import clsx from "clsx"

/**
 * Global page wrapper – centred, responsive gutters.
 * Usage:  <SiteContainer as="section">…</SiteContainer>
 */
export default function SiteContainer({
  as: Tag = "div",
  className,
  children,
}: {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}) {
  return (
    <Tag
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",   // side gutters
        "max-w-7xl",                             // 1280 px cap (override easily)
        className,
      )}
    >
      {children}
    </Tag>
  )
}
