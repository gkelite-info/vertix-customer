"use client";

import { useAuth } from "@/components/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../../../utils/supabase/client";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(
      emailRegex.test(value) ? "" : "Please enter a valid email address"
    );
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setPassword(value);

    setPasswordError(
      value.length >= 6
        ? ""
        : "Password must be at least 6 characters long"
    );
  };

  const { login } = useAuth();

  const handleLogin = async () => {
    setLoading(true);

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
        email,
        password,
      });

      if (error) {
        if (
          error.status === 400 &&
          error.message.includes("Invalid login credentials")
        ) {
          toast.error("Invalid email or password.");
        } else {
          toast.error(error.message || "Login failed.");
        }
        return
      }

      if (data.session && data.user) {
        login(data.session.access_token);

        const { data: customerData, error: profileError } =
          await supabase
            .from("vertixcustomers")
            .select("is_consent_filled")
            .eq("email", email)
            .single();

        if (profileError) {
          toast.error("Login successful, but profile failed to load.");
          router.push("/");
          return;
        }

        const isConsentFilled = customerData?.is_consent_filled;
        toast.success("Login successful");

        if (!isConsentFilled) {
          router.push("/consent");
          return;
        }
        router.push("/taxfiling?tab=filingyear");
        setLoading(false);
      } else {
        toast.error("Login failed. No user or session found.");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      toast.error("Unexpected error. Try again.");
    }
    finally {
      setLoading(false);
    }
  };

  const handlesignUp = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className="bg-white min-h-screen lg:h-[100vh] flex justify-center items-center p-4 sm:p-6 md:p-0 lg:p-0">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl lg:max-w-7xl lg:h-[100%] shadow-2xl overflow-hidden">
          <div className="hidden lg:flex lg:w-1/2 w-[100%] bg-[url('/login.png')] bg-cover bg-center justify-center items-center p-0 text-white">
            <h1 className="text-[#1D2B48] text-2xl font-medium text-center p-4 bg-opacity-30 rounded-lg absolute top-25">
              Signin to Manage Your Taxes Safely.
            </h1>
          </div>
          <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-white lg:rounded-l-none">
            <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8">
              Signin
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
                        handleLogin();
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
                {/* <div className="flex space-x-2 sm:space-x-3 items-center">
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
                </div> */}
                {/* <p
                  className="font-medium text-xs sm:text-sm underline text-[#3A4969] cursor-pointer"
                  onClick={() => router.push("/forgot_password")}
                >
                  Forgot Password ?
                </p> */}
              </div>
              <div className="flex flex-col gap-4 items-center">
                <button
                  className="cursor-pointer flex items-center justify-center text-white h-12 w-full text-base sm:text-lg font-medium rounded-full bg-[#1D2B48] hover:bg-opacity-90 transition duration-150"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Signin"
                  )}
                </button>
                <div className="flex gap-1 items-center justify-center h-8 w-full">
                  <h5 className="font-medium text-[#979797] text-sm">
                    Don&apos;t have an account?{" "}
                  </h5>
                  <p
                    className="font-medium text-sm text-black underline cursor-pointer hover:text-[#1D2B48] hover:border-[#1D2B48] transition duration-150"
                    onClick={handlesignUp}
                  >
                    Register Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
