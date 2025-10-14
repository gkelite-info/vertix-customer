"use client"
import { useAuth } from "@/components/AuthContext"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import { supabase } from "../../../../utils/supabase/client"

export default function Page() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [error, setError] = useState("")
  const [remember, setRemember] = useState(false)
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
  const handlePasswordChange = (e: { target: { value: string } }) => {
    const value = e.target.value
    setPassword(value)

    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long")
    } else {
      setPasswordError("")
    }
  }

  const { login } = useAuth()

  // const handleLogin = async () => {
  //   try {
  //     if (!email) {
  //       //setError("Email required to login")
  //       toast.error("Email required to login")
  //       return
  //     }

  //     if (!password) {
  //       //setError("Password is required.")
  //       toast.error("Password is required")
  //       return
  //     }

  //     const res = await fetch(
  //       "http://localhost:5000/api/v1/vertix/customer/login",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ email, password }),
  //       }
  //     )

  //     const data = await res.json();

  //     if (!res.ok) {
  //       if (data.error === "User not found") {
  //         toast.error("User not found / Create an account.");
  //       } else if (data.error === "Password is incorrect") {
  //         toast.error("Password is incorrect.");
  //       } else {
  //         toast.error(data.message || "Login failed");
  //       }
  //       return;
  //     }

  //     login(data.token)

  //     if (!data.is_consent_filled) {
  //       router.push("/consent")
  //     } else {
  //       router.push("/construction")
  //       setTimeout(() => {
  //         toast.success("Login successful");
  //       }, 1000);
  //     }
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (err) {
  //     //setError("Invalid credentials or server error")
  //     toast.error("Invalid credentials or server error")
  //   }
  // }

  // const handleLogin = async () => {
  //   try {
  //     let hasError = false;

  //     // Email validation
  //     if (!email) {
  //       toast.error("Email is required.");
  //       hasError = true;
  //     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
  //       toast.error("Please enter a valid email address.");
  //       hasError = true;
  //     }

  //     // Password validation
  //     if (!password) {
  //       toast.error("Password is required.");
  //       hasError = true;
  //     } else if (password.length < 6) {
  //       toast.error("Password must be at least 6 characters.");
  //       hasError = true;
  //     }

  //     if (hasError) return;

  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/vertix/customer/login`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     console.log("Heyy loop", res)

  //     // Parse response safely
  //     let data;
  //     try {
  //       data = await res.json();
  //     } catch {
  //       throw new Error("Invalid response format from server");
  //     }

  //     if (!res.ok) {
  //       // Handle invalid credentials or other client-side errors (4xx)
  //       if (res.status === 401 || res.status === 403) {
  //         toast.error("Invalid email or password.");
  //       }
  //       // Handle server-side errors (5xx)
  //       else if (res.status >= 500) {
  //         toast.error("Server error — please try again later.");
  //       }
  //       // Handle other cases
  //       else if (data?.error === "User not found") {
  //         toast.error("User not found / Create an account.");
  //       } else if (data?.error === "Password is incorrect") {
  //         toast.error("Password is incorrect.");
  //       } else {
  //         toast.error(data?.message || "Login failed. Please try again.");
  //       }
  //       return;
  //     }

  //     // Successful login
  //     login(data.token);

  //     if (!data.is_consent_filled) {
  //       router.push("/consent");
  //     } else {
  //       router.push("/construction");
  //       setTimeout(() => {
  //         toast.success("Login successful");
  //       }, 1000);
  //     }

  //   } catch (err: any) {
  //     console.error("Login error:", err);
  //     if (err.message.includes("NetworkError") || err.message.includes("fetch")) {
  //       toast.error("Unable to connect to the server. Please check your connection.");
  //     } else {
  //       toast.error("An unexpected error occurred. Please try again.");
  //     }
  //   }
  // }; 

  // ... inside Page.tsx component

  const handleLogin = async () => {
    try {
      let hasError = false;

      if (!email) {
        toast.error("Email is required.");
        hasError = true;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        toast.error("Please enter a valid email address.");
        hasError = true;
      }
      if (!password) {
        toast.error("Password is required.");
        hasError = true;
      } else if (password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        hasError = true;
      }

      if (hasError) return;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        if (error.status === 400 && error.message.includes('Invalid login credentials')) {
          toast.error("UnAuthorized.");
        } else {
          console.error("Supabase Auth Error:", error.message);
          toast.error(error.message || "Login failed via Supabase.");
        }
        return;
      }

      if (data.session && data.user) {
       
        login(data.session.access_token);

        const { data: customerData, error: profileError } = await supabase
          .from('vertixcustomers')
          .select('is_consent_filled')
          .eq('email', email) 
          .single();

        if (profileError) {
          console.error("Profile Fetch Error:", profileError.message);
          toast.error("Login successful, but profile data failed to load.");
          router.push("/"); 
          return;
        }

        const isConsentFilled = customerData?.is_consent_filled;

        if (!isConsentFilled) {
          router.push("/consent");
        } else {
          router.push("/construction");
          setTimeout(() => {
            toast.success("Login successful");
          }, 1000);
        }
      } else {
        toast.error("Login failed. No session or user data.");
      }

    } catch (err: any) {
      console.error("Login error:", err);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };



  const handlesignUp = () => {
    router.push("/signup")
  }

  return (
    <>
      <div className="bg-white min-h-screen lg:h-[100vh] flex justify-center items-center p-4 sm:p-6 md:p-0 lg:p-0">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl lg:max-w-7xl lg:h-[100%] shadow-2xl overflow-hidden">
          <div className="hidden lg:flex lg:w-1/2 w-[100%] bg-[url('/login.png')] bg-cover bg-center justify-center items-center p-0 text-white">
            <h1 className="text-[#1D2B48] text-2xl font-medium text-center p-4 bg-opacity-30 rounded-lg absolute top-25">
              Login to Manage Your Taxes Safely.
            </h1>
          </div>
          <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-white lg:rounded-l-none">
            <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8">
              Login
            </h1>
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="mb-4">
                <div className="flex items-center border-b-2 border-[#D0D0D0] pb-2 gap-2">
                  <Icon
                    icon="line-md:email-filled"
                    className="text-[#979797] w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <input
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your Email Id"
                    className="w-full font-medium p-2 ml-2 border-none focus:outline-none text-black"
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="mb-4">
                <div className="flex items-center border-b-2 border-[#D0D0D0] pb-2 pr-2 gap-2 mt-6">
                  <Icon
                    icon="weui:lock-filled"
                    className="text-[#979797] w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    className="w-full font-medium p-2 ml-2 border-none focus:outline-none text-black"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleLogin()
                      }
                    }}
                  />
                  <Icon
                    icon={showPassword ? "ri:eye-line" : "ri:eye-close-line"}
                    className="text-[#979797] w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              <div className="flex justify-between items-center mt-6 mb-8">
                <div className="flex space-x-2 sm:space-x-3 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 sm:h-5 sm:w-5 accent-[#1D2B48] cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs sm:text-sm text-[#3A4969]"
                  >
                    Remember Password
                  </label>
                </div>
                <p className="font-medium text-xs sm:text-sm border-b border-[#3A4969] text-[#3A4969] cursor-pointer">
                  Forgot Password ?
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <button
                  className="cursor-pointer text-white h-12 w-full text-base sm:text-lg font-medium rounded-full bg-[#1D2B48] hover:bg-opacity-90 transition duration-150"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div className="flex gap-1 items-center justify-center h-8 w-full">
                  <h5 className="font-medium text-[#979797] text-sm">
                    Don&apos;t have an account ?{" "}
                  </h5>
                  <p
                    className="font-medium text-sm text-black border-b border-black cursor-pointer hover:text-[#1D2B48] hover:border-[#1D2B48] transition duration-150"
                    onClick={handlesignUp}
                  >
                    Register Now
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
