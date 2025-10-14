"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import toast from "react-hot-toast"

export default function NewPasswordPage() {
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailAddress, setEmailAddress] = useState<string | null>(null)

  useEffect(() => {
    const storedEmail = localStorage.getItem("emailAddress")
    const verifyotp = localStorage.getItem("verifyotp")
    if (!storedEmail) {
      router.replace("/forgot_password")
      setTimeout(() => {
        toast.error("Unauthorized access! Please enter your email again")
      }, 500)
    } else if (storedEmail && verifyotp !== "true") {
      router.replace("/verification")
      setTimeout(() => {
        toast.error("Please verify your otp before proceeding")
      }, 500)
    } else {
      setEmailAddress(storedEmail)
    }
  }, [router])

  if (!emailAddress) return null

  const handleSend = () => {
    if (!password) {
      setError("Please fill out both fields")
      toast.error("Password is required")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      toast.error("Password must be at least 8 characters")
      return
    }

    if (!confirmPassword) {
      setError("Please fill out both fields")
      toast.error("Confirm Password is required")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      toast.error("Passwords do not match")
      return
    }

    try {
      console.log("Password updated successfully!")
      localStorage.removeItem("emailAddress")
      localStorage.removeItem("verifyotp")
      router.push("/login")
      setTimeout(() => {
        toast.success("Password updated successfully!")
      }, 1000)
    } catch (error) {
      console.log("Failed to set your password", error)
    }
  }

  return (
    <div className="bg-white min-h-screen lg:h-[100vh] flex justify-center items-center p-4 sm:p-6 md:p-0 lg:p-0">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl lg:max-w-7xl lg:h-[100%] shadow-2xl overflow-hidden">
        {/* Left Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-[url('/password.png')] bg-cover bg-center justify-center items-center p-0 text-white"></div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-white lg:rounded-l-none">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-black mb-8">
            New Password
          </h1>

          <div className="w-full max-w-sm sm:max-w-md">
            {/* New Password */}
            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="text-[#0A0A0A] font-medium mb-2"
              >
                Enter New Password
              </label>
              <div className="flex items-center border-b-2 border-[#D0D0D0] focus-within:border-[#1D2B48]">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 digits"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (error) setError("")
                  }}
                  className="w-full h-12 text-black border-none outline-none placeholder:text-gray-400"
                />
                <Icon
                  icon={showPassword ? "ri:eye-line" : "ri:eye-close-line"}
                  className="text-[#979797] w-6 h-6 cursor-pointer mr-2"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col mb-8">
              <label
                htmlFor="confirmPassword"
                className="text-[#0A0A0A] font-medium mb-2"
              >
                Confirm Password
              </label>
              <div className="flex items-center border-b-2 border-[#D0D0D0] focus-within:border-[#1D2B48]">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (error) setError("")
                  }}
                  className="w-full h-12 text-black border-none outline-none placeholder:text-gray-400"
                />
                <Icon
                  icon={
                    showConfirmPassword ? "ri:eye-line" : "ri:eye-close-line"
                  }
                  className="text-[#979797] w-6 h-6 cursor-pointer mr-2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>
            </div>

            {/* Send Button */}
            <button
              className="cursor-pointer text-white h-12 w-full text-base sm:text-lg font-medium rounded-full bg-[#1D2B48] hover:bg-opacity-90 transition duration-150"
              onClick={handleSend}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
