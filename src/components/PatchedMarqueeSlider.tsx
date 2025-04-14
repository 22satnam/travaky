// // components/PatchedMarqueeSlider.tsx
// import React from 'react'
// import MarqueeSlider from 'react-marquee-slider'

// // This wrapper strips out unwanted props (like paused) and ensures any expected callbacks are defined.
// const PatchedMarqueeSlider = (props: any) => {
//   // Remove the "paused" prop and assign a default no-op for "onInit"
//   const { paused, onInit, ...rest } = props
//   const safeOnInit = typeof onInit === 'function' ? onInit : () => {}

//   return <MarqueeSlider {...rest} onInit={safeOnInit} />
// }

// export default PatchedMarqueeSlider
// components/PatchedMarqueeSlider.tsx
// import React from 'react'
// import MarqueeSlider from 'react-marquee-slider'

// // const PatchedMarqueeSlider = (props: any) => {
// //   const { paused, onInit, ...rest } = props
// //   const safeOnInit = typeof onInit === 'function' ? onInit : () => {}

// //   const safeProps = {
// //     ...rest,
// //     onInit: safeOnInit,
// //     ...(paused ? { paused: true } : {}), // ✅ Add paused only if it's true
// //   }

// //   return <MarqueeSlider {...safeProps} />
// // }

// // export default PatchedMarqueeSlider

// const PatchedMarqueeSlider = (props: any) => {
//   const { paused, onInit, position, ...rest } = props // 👈 also remove position
//   const safeOnInit = typeof onInit === 'function' ? onInit : () => {}

//   const safeProps = {
//     ...rest,
//     onInit: safeOnInit,
//     ...(paused ? { paused: true } : {}),
//     ...(position ? { position } : {}), // Optional: if position is needed
//   }

//   return <MarqueeSlider {...safeProps} />
// }

// export default PatchedMarqueeSlider


import React from 'react'
import MarqueeSlider from 'react-marquee-slider'


const PatchedMarqueeSlider = (props: any) => {
  const { $paused, $position, onInit, ...rest } = props
  const safeOnInit = typeof onInit === 'function' ? onInit : () => {}

  return (
    <MarqueeSlider
      onInit={safeOnInit}
      {...rest}
      paused={$paused}
      position={$position}
    />
  )
}
export default PatchedMarqueeSlider