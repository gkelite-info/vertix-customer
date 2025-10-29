"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { supabase } from "../../utils/supabase/client"
import toast from "react-hot-toast"

interface User {
  customerId: string
  name: string
}

interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  user: User | null
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const decodeToken = (token: string): User | null => {
  try {
    const decoded = jwtDecode(token) as { customerId: string; name: string }
    return {
      customerId: decoded.customerId,
      name: decoded.name,
    }
  } catch (error) {
    console.error("Error decoding token:", error)
    return null
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      const userData = decodeToken(token)

      if (userData) {
        setIsAuthenticated(true)
        setUser(userData)
        localStorage.setItem("customerId", userData.customerId)
      } else {
        localStorage.removeItem("token")
        localStorage.removeItem("customerId")
      }
    }
  }, [])

  const login = (token: string) => {
    const userData = decodeToken(token)

    if (userData) {
      localStorage.setItem("token", token)
      localStorage.setItem("customerId", userData.customerId)
      setIsAuthenticated(true)
      setUser(userData)
    } else {
      console.error("Invalid token — unable to decode user data")
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error("Supabase logout error:", error.message)
        toast.error("Logout failed. Please try again.")
        return
      }

      localStorage.removeItem("token")
      localStorage.removeItem("customerId")
      localStorage.removeItem("temporary_access_flag")
      localStorage.removeItem("temporary_access_expiry")
      localStorage.removeItem("session_expiry")

      setIsAuthenticated(false)
      setUser(null)
      toast.success("Logged out successfully")
    } catch (err) {
      console.error("Unexpected logout error:", err)
      toast.error("An unexpected error occurred during logout.")
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}
