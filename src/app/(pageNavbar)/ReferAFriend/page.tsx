"use client";

import { useState, useEffect } from "react";
import YearSelect from "../../../../utils/yearSelect";
import TimezoneSelect from "../../../../utils/timezone";
import { upsertReferral, getReferrals } from "@/app/api/SupabaseAPI/customer/referAPI";
import toast from "react-hot-toast";
import TableComponent from "../../../../utils/table/page";

export default function ReferAFriend() {
  const [activeSection, setActiveSection] = useState<"registeredReferrals" | "refer">("refer");

  // 🧩 Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+");
  const [phone, setPhone] = useState("");
  const [alternateCode, setAlternateCode] = useState("+");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [timezone, setTimezone] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧩 Table states
  const [referrals, setReferrals] = useState<any[]>([]);
  const [loadingTable, setLoadingTable] = useState(false);

  const handlePhoneCodeChange = (e: { target: { value: any } }) => {
    const val = e.target.value;
    if (/^[+0-9]*$/.test(val)) setPhoneCode(val);
  };

  const handleAlternateCodeChange = (e: { target: { value: any } }) => {
    const val = e.target.value;
    if (/^[+0-9]*$/.test(val)) setAlternateCode(val);
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
    } catch (error) {
      toast.error("Failed to submit referral");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeSection === "registeredReferrals") fetchReferrals();
  }, [activeSection]);

  const fetchReferrals = async () => {
    setLoadingTable(true);
    try {
      const data = await getReferrals();
      setReferrals(data || []);
    } catch (error) {
      toast.error("Failed to fetch referrals");
      console.error(error);
    } finally {
      setLoadingTable(false);
    }
  };

  const columns = [
    "S.No",
    "First Name",
    "Last Name",
    "Email Id",
    "Phone",
    "Amount Eligible",
  ];

  const columnKeys = [
    "serial",
    "firstName",
    "lastName",
    "email",
    "phone",
    "amountEligible",
  ];

  const tableData = referrals.map((referral, index) => ({
    serial: index + 1,
    firstName: referral.firstName || "-",
    lastName: referral.lastName || "-",
    email: referral.email || "-",
    phone: referral.phone || "N/A",
    amountEligible: referral.amountEligible || "-",
  }));

  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />

        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 overflow-y-auto">
          {/* Tab Buttons */}
          <div className="flex w-[90%] h-[10%] justify-center gap-5">
            <button
              onClick={() => setActiveSection("refer")}
              className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold 
                ${activeSection === "refer" ? "bg-[#1D2B48] text-white" : "bg-gray-300 text-black"}
              `}
            >
              Refer
            </button>
            <button
              onClick={() => setActiveSection("registeredReferrals")}
              className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold 
                ${activeSection === "registeredReferrals" ? "bg-[#1D2B48] text-white" : "bg-gray-300 text-black"}
              `}
            >
              Registered Referrals
            </button>
          </div>

          {/* Refer Form */}
          {activeSection === "refer" && (
            <div className="bg-gray-00 w-[95%] flex flex-col items-center p-3 mt-5">
              <h2 className="text-[#1D2B48] font-semibold text-xl">Refer a Friend</h2>
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg mt-3 bg-blue-00 shadow-md flex flex-col items-center rounded-lg p-5"
              >
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
                <p className="text-gray-500">No referrals found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
