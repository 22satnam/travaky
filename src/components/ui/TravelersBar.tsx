// src/components/ui/TravelersBar.tsx
'use client'

import Box from '@mui/material/Box'

interface TravelersBarProps {
  count: number
}

export default function TravelersBar({ count }: TravelersBarProps) {
  return (
    <Box
      sx={{
        mb: 2,
        px: 2,
        py: 1,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        borderRadius: 1,
        fontWeight: 500,
        display: 'inline-block',
        fontSize: 18,
      }}
    >
      Number of Travelers: {count}
    </Box>
  )
}
