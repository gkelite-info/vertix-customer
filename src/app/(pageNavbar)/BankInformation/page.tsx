"use client";

import { useState } from "react";
import YearSelector from "../YearSelector/YearSelector";
import { postBankInformation } from "@/api-requests/customers/bank"; // make sure the path is correct

export default function BankInformation() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    customerId: "12345",
    belongsTo: "",
    holderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    accountType: "",
    updatedBy: "User",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await postBankInformation(formData);
      setMessage(res.message || "Bank information updated successfully");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Failed to update bank information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white lg:h-[100vh]">
      <div className="bg-red-00 lg:h-[20%] lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
        <div className="bg-red-00 h-[100%] lg:w-[68%] flex items-center justify-end w-[65%]">
          <YearSelector
            years={[2020, 2021, 2022, 2023, 2024, 2025]}
            onYearSelect={(year) => setSelectedYear(year)}
          />
        </div>
        <div className="bg-indigo-00 h-[100%] w-[27%] flex items-center justify-end">
          <div className="bg-red-00 lg:h-[70%] lg:px-3 lg:gap-2 flex flex-col items-center justify-center rounded-lg shadow-lg">
            <h3 className="text-[#1D2B48] font-semibold">
              Tax Management Dashboard
            </h3>
            <div className="flex justify-between lg:gap-5 bg-green-00 lg:w-[100%]">
              <h5 className="text-[#585E68] font-medium">Name: User</h5>
              <h5 className="text-[#585E68] font-medium">Client Id: 12345</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
        <h2 className="font-semibold text-[#1D2B48] text-xl">
          Update Your Bank Details
        </h2>

        <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-5">
          <div className="w-[35%]">
            <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
              Belongs To :
            </h5>
          </div>
          <select
            name="belongsTo"
            value={formData.belongsTo}
            onChange={handleChange}
            className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-pointer shadow-sm"
          >
            <option value="">SELECT ONE</option>
            <option value="taxPayer">Tax Payer</option>
          </select>
        </div>

        {/* Holder Name */}
        <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-2">
          <div className="w-[35%]">
            <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
              Holder Name :
            </h5>
          </div>
          <input
            type="text"
            name="holderName"
            value={formData.holderName}
            onChange={handleChange}
            placeholder="Enter Holder Name"
            className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
          />
        </div>

        {/* Bank Name */}
        <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-2">
          <div className="w-[35%]">
            <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
              Bank Name :
            </h5>
          </div>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter Bank Name"
            className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
          />
        </div>

        {/* Account Number */}
        <div className="bg-red-00 flex items-center justify-between gap-2 h-[10%] w-[35%] mt-2">
          <div className="w-[35%] bg-red-00">
            <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
              Account Number :
            </h5>
          </div>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Enter Account Number"
            className="border border-gray-300 text-[#616161] font-medium lg:w-[63.5%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
          />
        </div>

        {/* Account Type */}
        <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-2">
          <div className="w-[35%]">
            <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
              Type of Account :
            </h5>
          </div>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-pointer shadow-sm"
          >
            <option value="">SELECT ONE</option>
            <option value="checking">Checking Account</option>
            <option value="savings">Savings</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Message */}
        {message && <p className="text-red-600 mt-3">{message}</p>}

        {/* Buttons */}
        <div className="mt-4 flex h-[10%] w-[40%] gap-3 rounded-lg">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="font-medium w-[60%] h-[100%] text-sm bg-[#1D2B48] text-white px-5 py-2 hover:bg-[#2c3e65] rounded-lg flex gap-2 justify-center items-center cursor-pointer"
          >
            {loading ? "Updating..." : "UPDATE BANK DETAILS"}
          </button>
          <button
            onClick={() => setFormData({
              customerId: "12345",
              belongsTo: "",
              holderName: "",
              bankName: "",
              accountNumber: "",
              routingNumber: "",
              accountType: "",
              updatedBy: "2",
            })}
            className="font-medium w-[60%] h-[100%] text-sm bg-gray-400 text-white px-5 py-2 hover:bg-gray-500 rounded-lg flex gap-2 justify-center items-center cursor-pointer"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
