// src/components/ui/Loader.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LoaderProps {
  show: boolean
}

/**
 * Full-screen overlay loader:
 * ─ backdrop blur + dim
 * ─ Travaky JPG logo with gentle pulse
 * ─ animated spinner ring around the logo
 *
 * Place your logo at /public/img/logo.jpg (≈120 px square recommended).
 */
export default function Loader({ show }: LoaderProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="travaky-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          {/* Logo wrapper */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Spinner ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/60 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 1.2, repeat: Infinity }}
            />
            {/* Logo */}
            <Image
              src="/img/logo.png"
              alt="Travaky logo"
              width={120}
              height={120}
              priority
              className="relative z-10 rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
