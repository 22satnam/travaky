// components/PatchedMarqueeSlider.tsx
import React from 'react'
import MarqueeSlider from 'react-marquee-slider'

// This wrapper strips out unwanted props (like paused) and ensures any expected callbacks are defined.
const PatchedMarqueeSlider = (props: any) => {
  // Remove the "paused" prop and assign a default no-op for "onInit"
  const { paused, onInit, ...rest } = props
  const safeOnInit = typeof onInit === 'function' ? onInit : () => {}

  return <MarqueeSlider {...rest} onInit={safeOnInit} />
}

export default PatchedMarqueeSlider
