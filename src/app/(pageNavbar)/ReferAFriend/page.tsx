"use client"

import { useState } from "react"
import YearSelect from "../../../../utils/yearSelect"
import TimezoneSelect from "../../../../utils/timezone"
import { upsertReferral } from "@/app/api/SupabaseAPI/customer/referAPI";
import toast from "react-hot-toast";

export default function ReferAFriend() {

  const [activeSection, setActiveSection] = useState<"registeredReferrals" | "refer">("refer");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+");
  const [phone, setPhone] = useState("");
  const [alternateCode, setAlternateCode] = useState("+");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [timezone, setTimezone] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneCodeChange = (e: { target: { value: any; }; }) => {
    const val = e.target.value;
    if (/^[+0-9]*$/.test(val)) {
      setPhoneCode(val);
    }
  };

  const handleAlternateCodeChange = (e: { target: { value: any; }; }) => {
    const val = e.target.value;
    if (/^[+0-9]*$/.test(val)) {
      setAlternateCode(val);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const referralData = {
        firstName,
        lastName,
        email,
        phone: phoneCode + phone,
        alternatePhone: alternatePhone ? alternateCode + alternatePhone : null,
        timezone,
      };

      const result = await upsertReferral(referralData);
      toast.success("Referral submitted successfully!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneCode("+");
      setPhone("");
      setAlternateCode("+");
      setAlternatePhone("");
      setTimezone("");

      setActiveSection("registeredReferrals");
    } catch (error) {
      toast.error("Failed to submit referral");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 overflow-y-auto">
          <div className="flex w-[90%] h-[10%] justify-center gap-5">
            <button
              onClick={() => setActiveSection("refer")}
              className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold 
                ${activeSection === "refer"
                  ? "bg-[#1D2B48] text-white"
                  : "bg-gray-300 text-black"
                }
              `}
            >
              Refer
            </button>
            <button
              onClick={() => setActiveSection("registeredReferrals")}
              className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold 
                ${activeSection === "registeredReferrals"
                  ? "bg-[#1D2B48] text-white"
                  : "bg-gray-300 text-black"
                }
              `}
            >
              Registered Referrals
            </button>
          </div>

          {activeSection === "refer" && (
            <div className="bg-gray-00 w-[95%] flex flex-col items-center p-3 mt-5">
              <h2 className="text-[#1D2B48] font-semibold text-xl">
                Refer a Friend
              </h2>
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg mt-3 bg-blue-00 shadow-md flex flex-col items-center rounded-lg p-5">
                <div className="mb-4 flex items-center gap-3 w-[90%]">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    FIRSTNAME :
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 flex items-center gap-3 w-[90%]">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    LASTNAME :
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 flex items-center gap-3 w-[90%]">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    EMAIL :
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 mt-1 focus:outline-none focus:border-blue-500 w-[20%]"
                    maxLength={4}
                    required
                  />

                  <input
                    type="number"
                    className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 mt-1 focus:outline-none focus:border-blue-500 w-[20%]"
                    maxLength={4}
                  />
                  <input
                    type="number"
                    className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Alternate number"
                    value={alternatePhone}
                    onChange={(e) => setAlternatePhone(e.target.value)}
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
          )}

          {activeSection === "registeredReferrals" && (
            <div className="bg-gray-00 w-[90%] flex flex-col items-center p-3 mt-5">
              <h2 className="text-[#1D2B48] font-semibold text-xl">
                Your Referrals
              </h2>
              <table className="w-[100%] border-collapse border border-gray-300 bg-white shadow-md mt-3">
                <thead className="text-white">
                  <tr className="bg-[#4B5873] text-center">
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold w-10">
                      S.No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Client Id
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      First Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Email-Id
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Status
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Amount Eligible
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Pay Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#E9E9E9] text-black text-center">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      1
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      123456789
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User@gmail.com
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Process Completed
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      10
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Green in Summary
                    </td>
                  </tr>
                  <tr className="bg-[#E9E9E9] text-black text-center">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      2
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      123456789
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User@outlook.com
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Already Filed
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      10
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Green in Summary
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
