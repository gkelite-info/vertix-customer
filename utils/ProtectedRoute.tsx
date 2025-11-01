"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface ProtectedRouteProps {
  children: React.ReactNode
  isSessionReady: boolean
}

export default function ProtectedRoute({ children, isSessionReady }: ProtectedRouteProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSessionReady) return 
    const token = localStorage.getItem("token")

    if (!token) {
      router.replace("/login")
      return
    }

    setLoading(false)
  }, [router])

  if (loading || !isSessionReady) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
