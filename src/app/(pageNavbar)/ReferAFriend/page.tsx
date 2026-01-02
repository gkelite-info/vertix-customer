"use client";

import { useState, useEffect } from "react";
import YearSelect from "../../../../utils/yearSelect";
import TimezoneSelect from "../../../../utils/timezone";
import toast from "react-hot-toast";
import TableComponent from "../../../../utils/table/page";
import { getReferrals, upsertReferral } from "@/app/api/SupabaseAPI/customer/referAPI";
import { useYear } from "@/app/api/context/yearContext";

export default function ReferAFriend() {
  const [activeSection, setActiveSection] = useState<"refer" | "registeredReferrals">("refer");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+");
  const [phone, setPhone] = useState("");
  const [alternateCode, setAlternateCode] = useState("+");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [timezone, setTimezone] = useState("");
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState<any[]>([]);
  const [loadingTable, setLoadingTable] = useState(false);

  const { filingYearId } = useYear();

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!filingYearId) {
      toast.error("Please select a filing year before submitting.");
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
        filingYearId,
      };

      await upsertReferral(referralData);
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
      fetchReferrals();
    } catch (error: any) {
      toast.error(error.message || "Failed to submit referral");
    } finally {
      setLoading(false);
    }
  };

  const fetchReferrals = async () => {
    if (!filingYearId) return;
    setLoadingTable(true);
    try {
      const data = await getReferrals(filingYearId);
      setReferrals(data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch referrals");
    } finally {
      setLoadingTable(false);
    }
  };

  useEffect(() => {
    if (activeSection === "registeredReferrals" && filingYearId) {
      fetchReferrals();
    }
  }, [activeSection, filingYearId]);

  const columns = [
    "S.No",
    "First Name",
    "Last Name",
    "Email Id",
    "Phone",
    "Amount Eligible"
  ];

  const columnKeys = [
    "serial",
    "firstName",
    "lastName",
    "email",
    "phone",
    "amountEligible"
  ];

  const tableData = referrals.map((referral, index) => ({
    serial: index + 1,
    firstName: referral.firstName || "-",
    lastName: referral.lastName || "-",
    email: referral.email || "-",
    phone: referral.phone || "-",
    amountEligible: referral.amountEligible || "-",
  }));

  return (
    <div className="bg-white lg:h-[100vh]">
      <YearSelect />
      <div className="flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 overflow-y-auto">
        <div className="flex w-[90%] h-[10%] justify-center gap-5">
          <button
            onClick={() => setActiveSection("refer")}
            className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold transition-all 
              ${activeSection === "refer" ? "bg-[#1D2B48] text-white" : "bg-gray-300 text-black"}
            `}
          >
            Refer
          </button>
          <button
            onClick={() => setActiveSection("registeredReferrals")}
            className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold transition-all 
              ${activeSection === "registeredReferrals" ? "bg-[#1D2B48] text-white" : "bg-gray-300 text-black"}
            `}
          >
            Registered Referrals
          </button>
        </div>

        {activeSection === "refer" && (
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
                  className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none"
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
                  className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none"
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
                  className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none"
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
                  className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 w-[20%] focus:outline-none"
                  maxLength={4}
                  required
                />
                <input
                  type="number"
                  className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={handlePhoneInput(setPhone)}
                  required
                  maxLength={10}
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
                  className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 w-[20%] focus:outline-none"
                  maxLength={4}
                />
                <input
                  type="number"
                  className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 focus:outline-none"
                  placeholder="Alternate number"
                  value={alternatePhone}
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
        )}

        {activeSection === "registeredReferrals" && (
          <div className="w-[90%] flex flex-col items-center p-3 mt-5">
            <h2 className="text-[#1D2B48] font-semibold text-xl mb-3">Your Referrals</h2>

            {loadingTable ? (
              <p className="text-gray-500">Loading referrals...</p>
            ) : referrals.length > 0 ? (
              <TableComponent
                data={tableData}
                columns={columns}
                columnKeys={columnKeys}
                style="w-[100%]"
                onUpdateClick={fetchReferrals}
              />
            ) : (
              <p className="text-gray-500">No referrals yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
