"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function VerificationPage() {
  const router = useRouter()

  const [otp, setOtp] = useState(Array(4).fill(""))
  const [otpError, setOtpError] = useState("")
  const [emailAddress, setEmailAddress] = useState<string | null>(null)

  useEffect(() => {
    const storedEmail = localStorage.getItem("emailAddress")
    if (!storedEmail) {
      router.replace("/forgot_password")
      setTimeout(() => {
        toast.error("Unauthorized access! Please enter your email again")
      }, 500)
    } else {
      setEmailAddress(storedEmail)
    }
  }, [router])

  if (!emailAddress) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value
    if (!/^[0-9]?$/.test(value)) return // only digits

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }

    if (otpError) setOtpError("")
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleResend = () => {
    try {
      toast.success("Resend OTP success")
      console.log("Resend code triggered")
    } catch (error) {
      console.log("Resend otp failed:", error)
      toast.error("Resend OTP failed")
    }
  }

  const handleSend = () => {
    const code = otp.join("")
    if (code.length < 4) {
      setOtpError("Please enter all 4 digits")
      toast.error("Please enter all 4 digits OTP")
      return
    }
    try {
      router.push("/new_password")
      setTimeout(() => {
        toast.success("OTP verified successfully")
      }, 1000)
      console.log("Code sent:", code)
    } catch (error) {
      console.log("verification failed.", error)
    }
  }

  return (
    <>
      <div className="bg-white min-h-screen lg:h-[100vh] flex justify-center items-center p-4 sm:p-6 md:p-0 lg:p-0">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl lg:max-w-7xl lg:h-[100%] shadow-2xl overflow-hidden">
          {/* Left Image */}
          <div className="hidden lg:flex lg:w-1/2 w-[100%] bg-[url('/verification.png')] bg-cover bg-center justify-center items-center p-0 text-white"></div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-white lg:rounded-l-none">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-black mb-8">
              Verification
            </h1>

            <div className="w-full max-w-sm sm:max-w-md">
              <div className="mb-4">
                <div className="text-center mb-6">
                  <label className="text-[#0A0A0A] font-medium mt-0">
                    Enter Verification Code
                  </label>
                </div>

                {/* OTP Inputs */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 sm:w-16 sm:h-16 text-center font-semibold text-lg border-2 border-[#D0D0D0] rounded-md focus:outline-none focus:border-[#1D2B48] text-black"
                    />
                  ))}
                </div>

                {/* {otpError && (
                  <p className="text-red-500 text-xs mt-2">{otpError}</p>
                )} */}
              </div>

              <div className="flex flex-col gap-4 items-center mt-6">
                <div className="flex gap-1 items-center justify-center h-8 w-full">
                  <h5 className="font-medium text-[#979797] text-sm">
                    If you didn’t receive a code?{" "}
                  </h5>
                  <p
                    className="font-medium text-sm text-black border-b border-black cursor-pointer hover:text-[#1D2B48] hover:border-[#1D2B48] transition duration-150"
                    onClick={handleResend}
                  >
                    Resend
                  </p>
                </div>

                <button
                  className="cursor-pointer text-white h-12 w-[75%] text-base sm:text-lg font-medium rounded-full bg-[#1D2B48] hover:bg-opacity-90 transition duration-150 mt-8"
                  onClick={handleSend}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
