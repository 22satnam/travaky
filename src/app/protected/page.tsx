// // app/protected/page.tsx
// import { getServerSession } from "next-auth"
// import { authOptions } from "../api/auth/[...nextauth]/route"
// import { redirect } from "next/navigation"

// export default async function ProtectedPage() {
//   const session = await getServerSession(authOptions)

//   if (!session) {
//     redirect("/login")
//   }

//   return (
//     <div className="max-w-3xl mx-auto py-12">
//       <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
//       <p className="text-muted-foreground">
//         Welcome {session.user?.email}, you are authenticated.
//       </p>
//     </div>
//   )
// }
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function ProtectedPage() {
  const { session } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!session) {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [session])

  if (loading) return <p className="text-center py-20">Checking authentication...</p>

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
      <p className="text-muted-foreground">
        Welcome {session?.email}, you are authenticated.
      </p>
    </div>
  )
}
