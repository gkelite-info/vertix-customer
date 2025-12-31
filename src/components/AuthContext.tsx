"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { supabase } from "../../utils/supabase/client"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi"

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
  forceLogout: (message?: string) => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined)

const decodeToken = (token: string): User | null => {
  try {
    const decoded = jwtDecode(token)
    //console.log("Decoded JWT:", decoded)
    return null
  } catch (error) {
    console.error("Error decoding token:", error)
    return null
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const restoreSession = async () => {
      // const token = localStorage.getItem("token")
      const { data } = await supabase.auth.getSession()
      const session = data.session
      const tempFlag = localStorage.getItem("temporary_access_flag")

      if (session?.access_token) {
        const customerData = await getCustomer()
        if (customerData) {
          setIsAuthenticated(true)
          setUser({
            customerId: String(customerData.customerId),
            name: customerData.firstname
          })
          localStorage.setItem("customerId", String(customerData.customerId))
        } else {
          localStorage.removeItem("token")
          localStorage.removeItem("sb-wieinzdarxemefrzitog-auth-token")
          localStorage.removeItem("customerId")
        }
      }

      if (tempFlag === "true") {
        setIsAuthenticated(true)
        setUser({ customerId: "temp", name: "Temporary User" })
      }
    }

    restoreSession()
  }, [])


  const login = async (token: string) => {
    localStorage.setItem("token", token)

    const customerData = await getCustomer()

    if (!customerData) {
      toast.error("Failed to fetch customer info")
      return
    }

    const userData: User = {
      customerId: String(customerData.customerId),
      name: customerData.firstname,
    }

    localStorage.setItem("customerId", userData.customerId)
    setIsAuthenticated(true)
    setUser(userData)
  }



  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        //console.error("Supabase logout error:", error.message)
        toast.error("Logout failed. Please try again.")
        return
      }

      localStorage.removeItem("token")
      localStorage.removeItem("customerId")
      localStorage.removeItem("temporary_access_flag")
      localStorage.removeItem("temporary_access_expiry")
      localStorage.removeItem("session_expiry")
      localStorage.removeItem("selectedYear")


      setIsAuthenticated(false)
      setUser(null)
      toast.success("Logged out successfully")
    } catch (err) {
      //console.error("Unexpected logout error:", err)
      toast.error("An unexpected error occurred during logout.")
    }
  }

  const forceLogout = async (message?: string) => {
    try {
      await logout();
      if (message) toast.error(message);
      router.push('/');
    } catch (err) {
      console.error("Force logout error:", err);
    }
  };


  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, login, logout, forceLogout }}
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
