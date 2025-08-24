'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Spain", "Italy",
    "Japan", "China", "India", "Brazil", "Mexico", "South Africa", "Egypt", "Nigeria",
    "Argentina", "Chile", "Colombia", "Peru", "Russia", "Ukraine", "Poland", "Sweden",
    "Norway", "Finland", "Denmark", "Ireland", "Netherlands", "Belgium", "Switzerland", "Austria",
    "Greece", "Portugal", "Turkey", "Saudi Arabia", "United Arab Emirates", "Israel", "Iran",
    "Pakistan", "Bangladesh", "Indonesia", "Malaysia", "Thailand", "Vietnam", "Philippines",
    "South Korea", "Singapore", "New Zealand"
];

function Page() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        country: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handlelogin = () => {
        router.push('/login');
    }

    const handleEmailChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        setEmail(value);
        setFormData(prev => ({ ...prev, email: value }));

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePhoneChange = (e: { target: { value: string; }; }) => {
        let value = e.target.value.replace(/[^0-9-()+ ]/g, '');
        if (value.length > 13 || value.length < 13) {
            value = value.substring(0, 13);
        }
        setPhone(value);
        setFormData(prev => ({ ...prev, phone: value }));
    };

    const handleCountryChange = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;
        // setFormData(prevData => ({ ...prevData, [id]: value }));
        setFormData(prev => ({ ...prev, country: e.target.value }));
    };

    const handleSignup = async () => {
        if (!formData.firstname) {
            alert("First name is required!");
            return;
        }
        if (!formData.lastname) {
            alert("Last name is required!");
            return;
        }
        if (!formData.email) {
            alert("Email is required!");
            return;
        }
        if (!formData.phone) {
            alert("Phone number is required!");
            return;
        }
        if (!formData.password) {
            alert("Password is required!");
            return;
        }
        if (!formData.confirmPassword) {
            alert("Confirm Password is required!");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!formData.country) {
            alert("Please select a country!");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/v1/vertix/customer/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Signup failed");
            }

            alert("Registration successful!");
            router.push("/login");
        } catch (err: any) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="bg-white lg:h-[100vh] flex justify-center items-center">
                <div className="flex lg:h-[100%] lg:w-[100%] lg:p-3">
                    <div className="bg-[url('/login.png')] bg-cover bg-center lg:w-[50%] flex justify-center items-center lg:h-[100%] lg:rounded-4xl">
                        <h1 className="text-black lg:mb-90 font-medium">Join Vertix for Hassle-Free Tax Filing.</h1>
                    </div>
                    <div className="bg-red-00 lg:w-[50%] lg:h-[100%] lg:p-4 lg:gap-3 flex flex-col items-center justify-center">
                        <h1 className="lg:text-2xl font-semibold text-black">Create an account</h1>
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
                                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:gap-2">
                                    <Icon icon="line-md:email-filled" className="text-[#979797] w-6 h-6" />
                                    <input
                                        id="email"
                                        value={formData.email}
                                        onChange={handleEmailChange}
                                        placeholder="Enter your Email Id"
                                        className="lg:h-[100%] text-black lg:w-[100%] font-medium lg:p-2 lg:ml-2 border-none focus:outline-none focus:ring-0"
                                    />
                                </div>
                                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:gap-2">
                                    <Icon icon="line-md:phone-filled" className="text-[#979797] w-6 h-6" />
                                    <input
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        placeholder="Enter your Mobile number"
                                        className="lg:h-[100%] lg:w-[100%] text-black font-medium lg:p-2 lg:ml-2 border-none focus:outline-none focus:ring-0"
                                    />
                                </div>
                                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:pr-2 lg:gap-2">
                                    <Icon icon="weui:lock-filled" className="text-[#979797] w-6 h-6" />
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
                                    <Icon icon="weui:lock-filled" className="text-[#979797] w-6 h-6" />
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        className="lg:h-[100%] lg:w-[100%] text-black font-medium lg:p-2 lg:ml-2 border-none focus:outline-none focus:ring-0"
                                    />
                                    <Icon
                                        icon={showConfirmPassword ? "ri:eye-line" : "ri:eye-close-line"}
                                        className="text-[#979797] w-6 h-6"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                </div>
                                <div className="lg:w-[100%] lg:h-[10%] flex items-center border border-b-2 border-l-0 border-t-0 border-r-0 border-[#D0D0D0] lg:gap-4">
                                    <Icon icon="tdesign:location-filled" className="text-[#979797] w-5 h-5" />
                                    <select
                                        id="country"
                                        value={formData.country}
                                        onChange={handleCountryChange}
                                        className="lg:w-[100%] lg:mr-2.5 p-2 text-[#979797] font-medium border-none outline-none focus:ring-0"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
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
                                        className="lg:h-[65%] lg:w-[100%] text-lg font-medium lg:rounded-full bg-[#1D2B48] cursor-pointer" onClick={handleSignup}>
                                        Create Account !
                                    </button>

                                    <div className="flex lg:gap-2 items-end bg-red-00 lg:h-[35%] ">
                                        <h5 className="font-medium text-[#979797] text-sm lg:w-[100%]">Already have an account ? </h5>
                                        <p className="font-medium text-sm text-black border border-b-1 border-l-0 border-r-0 border-t-0 cursor-pointer" onClick={handlelogin}>Login</p>
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
export default Page