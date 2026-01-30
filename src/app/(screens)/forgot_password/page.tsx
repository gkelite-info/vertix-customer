"use client"

import { checkCustomerEmailExists, sendPasswordResetLink } from "@/app/api/SupabaseAPI/customer/forgotPasswordAPI"
import { useAuth } from "@/components/AuthContext"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Page() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  // const [alertMsg, setAlertMsg] = useState<string | null>(null);

  const handleEmailChange = (e: { target: { value: string } }) => {
    const value = e.target.value
    setEmail(value)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  // const handleForgotPassword = async () => {
  //   if (email.trim() === "") {
  //     toast.error("Email is required")
  //     return
  //   }
  //   try {
  //     localStorage.setItem("emailAddress", email)
  //     router.push("/verification")
  //     setTimeout(() => {
  //       toast.success("OTP send to registered email")
  //     }, 1000)
  //   } catch (error) {
  //     console.log("email verification failed.", error)
  //   }
  // }

  // ✅ CHANGE
  const handleForgotPassword = async () => {
    if (email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    setIsLoading(true);

    try {
      // ✅ STEP 1: Check email exists
      const emailExists = await checkCustomerEmailExists(email);

      if (!emailExists) {
        toast.error("Email not registered. Please check your email.");
        return;
      }

      await sendPasswordResetLink(email);

      toast.success("Password reset link sent to your registered email.");
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const handleLogin = () => {
    router.push("/login")
  }

  return (
    <>
      <div className="bg-white min-h-screen lg:h-[100vh] flex justify-center items-center p-4 sm:p-6 md:p-0 lg:p-0">
        <div className="flex flex-col lg:flex-row w-full  lg:w-full lg:h-[100%] shadow-2xl overflow-hidden">
          <div className="hidden lg:flex lg:w-1/2 w-[100%] bg-[url('/forgot-password.png')] bg-cover bg-center justify-center items-center p-0 text-white"></div>
          <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-white lg:rounded-l-none">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black mb-20">
              Forgot Password
            </h1>
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="mb-4">
                <div className="flex gap-4">
                  <Icon
                    icon="line-md:email-filled"
                    className="text-[#0A0A0A] w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <label className="text-[#0A0A0A] font-medium">
                    Enter your Email Id
                  </label>
                </div>
                <div className=" border-b-2 border-[#D0D0D0] pb-2">
                  <input
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="example@gmail.com"
                    className="w-full font-medium pt-4 border-none focus:outline-none text-black"
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="flex flex-col gap-4 items-center mt-6">
                <button
                  className="cursor-pointer text-white h-12 w-full text-base sm:text-lg font-medium rounded-full bg-[#1D2B48] hover:bg-opacity-90 transition duration-150"
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
                <div className="flex gap-1 items-center justify-center h-8 w-full">
                  <h5 className="font-medium text-[#979797] text-sm">
                    Back to login ?{" "}
                  </h5>
                  <p
                    className="font-medium text-sm text-black border-b border-black cursor-pointer hover:text-[#1D2B48] hover:border-[#1D2B48] transition duration-150"
                    onClick={handleLogin}
                  >
                    Login
                  </p>
                </div>
              </div>
              {/* {error && (
                <p className="text-red-500 text-center mt-4 text-sm">{error}</p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
