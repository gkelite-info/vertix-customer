"use client";

import { useState, useEffect } from "react";
import TimezoneSelect from "../../../../utils/timezone";
import toast from "react-hot-toast";
import { createReferral } from "@/app/api/SupabaseAPI/customer/referAPI";

export default function ReferAFriend() {
  const [activeSection, setActiveSection] = useState<"refer" | "registeredReferrals">("refer");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [customerId, setCustomerID] = useState("")
  const [phoneCode, setPhoneCode] = useState("+");
  const [phone, setPhone] = useState("");
  const [alternateCode, setAlternateCode] = useState("+");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [timezone, setTimezone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !customerId) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!customerId) {
      toast.error("Customer ID is required");
      return;
    }

    setLoading(true);
    try {
      const referralData = {
        customerId: Number(customerId),
        firstName,
        lastName,
        email,
        phone: phoneCode + phone,
        alternatePhone: alternatePhone ? alternateCode + alternatePhone : null,
        timezone,
      };
      await createReferral(referralData);
      toast.success("Referral submitted successfully!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneCode("+");
      setPhone("");
      setAlternateCode("+");
      setAlternatePhone("");
      setTimezone("");
      setCustomerID("")

      setActiveSection("registeredReferrals");
    } catch (error: any) {
      toast.error(error.message || "Failed to submit referral");
    } finally {
      setLoading(false);
    }
  };

  const handleTextOnly = (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const filtered = value.replace(/[^a-zA-Z\s]/g, "");
      const capitalized = filtered.replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );
      setter(capitalized);
    };

  const handlePhoneInput =
    (setter: (v: string) => void, maxLength = 10) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.startsWith("0")) return;

        if (value.length > maxLength) {
          value = value.slice(0, maxLength);
        }

        setter(value);
      };

  const handlePhoneCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let val = e.target.value;
    val = val.replace(/[^+0-9]/g, "");
    if (val.startsWith("0")) return;
    if (!val.startsWith("+") && /^[1-9]/.test(val)) {
      val = "+" + val;
    }

    setPhoneCode(val);
  };

  const handleAlternateCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let val = e.target.value;
    val = val.replace(/[^+0-9]/g, "");
    if (val.startsWith("0")) return;
    if (!val.startsWith("+") && /^[1-9]/.test(val)) {
      val = "+" + val;
    }

    setAlternateCode(val);
  };


  return (
    <div className="bg-white lg:h-[100vh]">

      <div className="flex flex-col justify-start items-center lg:h-[90%] lg:pt-5 overflow-y-auto">
        <div className="w-[95%] flex flex-col items-center p-3 mt-5">
          <h2 className="text-[#1D2B48] font-semibold text-xl">Refer a Friend</h2>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mt-3 shadow-md flex flex-col items-center rounded-lg p-5"
          >
            <div className="mb-4 flex items-center gap-3 w-[90%]">
              <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                FIRSTNAME :
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter firstname"
                value={firstName}
                onChange={handleTextOnly(setFirstName)}
                required
              />
            </div>

            <div className="mb-4 flex items-center gap-3 w-[90%]">
              <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                LASTNAME :
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter lastname"
                value={lastName}
                onChange={handleTextOnly(setLastName)}
                required
              />
            </div>

            <div className="mb-4 flex items-center gap-3 w-[90%]">
              <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                EMAIL :
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 flex items-center gap-3 w-[90%]">
              <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                CLIENT ID :
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter Client ID"
                value={customerId}
                onChange={(e) => setCustomerID(e.target.value.replace(/\D/g, ""))}
                required
                inputMode="numeric"
                maxLength={9}
              />
            </div>

            <div className="mb-4 flex items-center gap-3 w-[90%]">
              <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                PHONE :
              </label>
              <input
                type="text"
                placeholder="+1"
                value={phoneCode}
                onChange={handlePhoneCodeChange}
                className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 w-[20%] focus:outline-none focus:border-blue-500"
                maxLength={4}
                required
              />
              <input
                type="number"
                className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter phone"
                value={phone}
                maxLength={10}
                onChange={handlePhoneInput(setPhone)}
                required
              />
            </div>

            <div className="mb-4 flex items-center gap-3 w-[90%]">
              <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                ALTERNATE NUMBER :
              </label>
              <input
                type="text"
                placeholder="+1"
                value={alternateCode}
                onChange={handleAlternateCodeChange}
                className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 w-[20%] focus:outline-none focus:border-blue-500"
                maxLength={4}
              />
              <input
                type="number"
                className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Alternate number"
                value={alternatePhone}
                maxLength={10}
                onChange={handlePhoneInput(setAlternatePhone)}
              />
            </div>

            <TimezoneSelect
              width="w-[90%] mb-5"
              value={timezone}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTimezone(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#1D2B48] text-white font-medium px-4 py-2 rounded-lg cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit Referral"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
