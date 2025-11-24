"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import { Icon } from "@iconify/react"
import { supabase } from "../../../../utils/supabase/client"
import { insertCustomer } from "@/app/api/SupabaseAPI/customer/customerApi"
import TimezoneSelect from "../../../../utils/timezone"

export default function Page() {
  const router = useRouter()
  const [timezone, setTimezone] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    timezone: "",
  })
  const [, setEmail] = useState("")
  const [, setEmailError] = useState("")
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^[+0-9]*$/.test(val)) {
      setPhoneCode(val);
      setFormData((prev) => ({ ...prev, phone: val + phone }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handlelogin = () => {
    router.push("/login")
  }

  const handleEmailChange = (e: { target: { value: string } }) => {
    const value = e.target.value
    setEmail(value)
    setFormData((prev) => ({ ...prev, email: value }))

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const handlePhoneChange = (e: { target: { value: string } }) => {
    let value = e.target.value.replace(/[^0-9-()+ ]/g, "")
    if (value.length > 10 || value.length < 10) {
      value = value.substring(0, 10)
    }
    setPhone(value)
    setFormData((prev) => ({ ...prev, phone: value }))
  }

  const handleSignup = async () => {

    if (!formData.firstname) {
      toast.error("First name is required!");
      return;
    }
    if (!formData.lastname) {
      toast.error("Last name is required!");
      return;
    }
    if (!formData.email) {
      toast.error("Email is required!");
      return;
    }
    if (!phoneCode) {
      toast.error("Phone number must include a valid country code.");
      return
    }
    if (!formData.phone) {
      toast.error("Phone number is required!");
      return;
    }
    if (!formData.password) {
      toast.error("Password is required!");
      return;
    }
    if (!formData.confirmPassword) {
      toast.error("Confirm Password is required!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      setFormData((prev) => ({
        ...prev,
        password: "",
        confirmPassword: "",
      }));
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: "https://www.vertixtax.com/verify-email",
        },
      });

      if (error) throw error;

      const userId = data?.user?.id;

      if (userId) {
        await insertCustomer({
          auth_id: userId,
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: phoneCode + formData.phone,
          email: formData.email,
          timezone: formData.timezone,
        });
      }

      toast.success("Registration successful! Please check your email to confirm.");
      router.push("/login");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="bg-white lg:h-[100vh] flex justify-center items-center">
        <div className="flex lg:h-[100%] lg:w-[100%] lg:p-3">
          <div className="bg-[url('/signup.png')] bg-cover bg-center lg:w-[50%] flex justify-center items-center lg:h-[100%] lg:rounded-4xl">
            <h1 className="text-black lg:mb-90 font-medium">
              Join Vertix for Hassle-Free Tax Filing.
            </h1>
          </div>
          <div className="bg-red-00 lg:w-[50%] lg:h-[100%] lg:p-4 lg:gap-3 flex flex-col items-center justify-center">
            <h1 className="lg:text-2xl font-semibold text-black">
              Create an account
            </h1>
            <div className="lg:h-[90%] lg:w-[95%] lg:p-3 flex flex-col items-center">
              <div className="bg-pink-00 lg:h-[100%] lg:w-[80%] lg:gap-4 flex flex-col justify-start">
                <div className="bg-indigo-00 lg:h-[10%] flex justify-between">
                  <input
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="text-black font-medium border border-b-2 border-t-0 border-r-0 border-l-0 border-[#D0D0D0] focus:outline-none focus:ring-0"
                  />
                  <input
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="text-black font-medium border border-b-2 border-t-0 border-r-0 border-l-0 border-[#D0D0D0] focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="lg:w-[100%] bg-green-00 lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:gap-2">
                  <Icon
                    icon="line-md:email-filled"
                    className="text-[#979797] w-6 h-6"
                  />
                  <input
                    id="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Enter your Email Id"
                    className="lg:h-[100%] text-black lg:w-[100%] font-medium lg:p-2 lg:ml-2 border-none focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:gap-3.5">
                  {/* <Icon icon="line-md:phone" className="text-[#979797] w-6 h-6" /> */}
                  <input
                    type="text"
                    placeholder="+1"
                    value={phoneCode}
                    onChange={handlePhoneCodeChange}
                    className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 mt-1 focus:outline-none w-[15%]"
                    maxLength={4}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Enter your Phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-[65%] rounded text-black px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <TimezoneSelect
                  width="w-[100%]"
                  value={formData.timezone}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setFormData((prev) => ({ ...prev, timezone: e.target.value }))
                  }
                />
                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:pr-2 lg:gap-2">
                  <Icon
                    icon="weui:lock-filled"
                    className="text-[#979797] w-6 h-6"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="lg:h-[100%] lg:w-[100%] text-black font-medium lg:p-2 lg:ml-2 border-none focus:outline-none focus:ring-0"
                  />
                  <Icon
                    icon={showPassword ? "ri:eye-line" : "ri:eye-close-line"}
                    className="text-[#979797] w-6 h-6"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:pr-2 lg:gap-2">
                  <Icon
                    icon="weui:lock-filled"
                    className="text-[#979797] w-6 h-6"
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="lg:h-[100%] lg:w-[100%] text-black font-medium lg:p-2 lg:ml-2 border-none focus:outline-none focus:ring-0"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSignup()
                      }
                    }}
                  />
                  <Icon
                    icon={
                      showConfirmPassword ? "ri:eye-line" : "ri:eye-close-line"
                    }
                    className="text-[#979797] w-6 h-6"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 accent-[#1D2B48] cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-sm text-[#3A4969]">
                    Remember Password
                  </label>
                </div>
                <div className="bg-green-00 lg:h-[20%] flex flex-col lg:gap-2 lg:mt-2 items-center">
                  <button
                    type="button"
                    className="text-white lg:h-[50%] lg:w-[100%] text-lg font-medium lg:rounded-full bg-[#1D2B48] cursor-pointer"
                    onClick={handleSignup}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Create Account !"}
                  </button>

                  <div className="flex lg:gap-2 items-end bg-red-00 lg:h-[35%] ">
                    <h5 className="font-medium text-[#979797] text-sm lg:w-[100%]">
                      Already have an account ?{" "}
                    </h5>
                    <p
                      className="font-medium text-sm text-black underline cursor-pointer"
                      onClick={handlelogin}
                    >
                      Login
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
