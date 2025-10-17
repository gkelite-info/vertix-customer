"use client"

import ThreeOptionToggle from "../../../../../utils/threeOptionToggle"
import ToggleSwitch from "../../../../../utils/toggleSwitch"

export default function Dependents() {
  return (
    <div className="bg-white p-6 sm:p-8 w-[100%] max-w-3xl mx-auto">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#1D2B48] mb-2">DEPENDENTS</h2>
      <p className="text-sm text-[#3E3E3E] mb-6">
        Provide the details of dependents to claim benefits on your tax return.
        Along with all the other Dependents tests, it is mandatory that he/she
        stays in US for atleast 183 days in US in 2024
      </p>

      {/* Dependent Section */}
      <h3 className="text-lg font-semibold text-[#1D2B48] mb-4">DEPENDENT 1</h3>

      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            Middle Name
          </label>
          <input
            type="text"
            placeholder="Enter Middle Name"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            Date of Birth
          </label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            Months Stayed in US in 2024
          </label>
          {/* <select className="w-1/2 mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1D2B48] focus:outline-none">
            <option>12 Months</option>
            <option>11 Months</option>
            <option>10 Months</option>
            <option>Less than 6 Months</option>
          </select> */}
          <input
            placeholder="11 Months"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            Relationship to Taxpayer
          </label>
          <select className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0">
            <option>Son</option>
            <option>Daughter</option>
            <option>Spouse</option>
            <option>Parent</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Toggles */}
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="text-sm text-[#1D2B48] font-medium">
            US Citizen / Green Card Holder
          </label>
          <div className="flex gap-2 w-1/2">
            {/* <span className="text-sm text-[#1D2B48] font-medium">No</span>
            <button
              onClick={() => setIsCitizen(!isCitizen)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                isCitizen ? "bg-[#1D2B48]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  isCitizen ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-sm text-[#1D2B48] font-medium">Yes</span> */}
            <ToggleSwitch initial={false} labelLeft="No" labelRight="Yes" />
          </div>
        </div>

        {/* SSN/ITIN Options */}
        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            Does your dependent have
          </label>
          {/* <div className="flex gap-2 mt-2 w-1/2">
            {["SSN", "ITIN", "NEED TO APPLY"].map((type) => (
              <button
                key={type}
                onClick={() => setDependentType(type)}
                className={`px-3 py-1 text-sm font-medium rounded-md border ${
                  dependentType === type
                    ? "bg-[#1D2B48] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div> */}
          <div className="flex gap-2 mt-2 w-1/2">
            <ThreeOptionToggle
              options={["SSN", "ITIN", "NEED TO APPLY"]}
              style="w-full"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            SSN / ITIN Number
          </label>
          <input
            type="text"
            placeholder="XXX-XXX-XXXX"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-[#1D2B48] font-medium">
            Childcare Expenses
          </label>
          <div className="flex items-center gap-2 w-1/2">
            {/* <span className="text-sm text-[#1D2B48] font-medium">No</span>
            <button
              onClick={() => setChildcare(!childcare)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                childcare ? "bg-[#1D2B48]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  childcare ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-sm text-[#1D2B48] font-medium">Yes</span> */}
            <ToggleSwitch initial={false} labelLeft="No" labelRight="Yes" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <label className="text-sm text-[#1D2B48] font-medium w-1/2">
            First Date of Entry in US
          </label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>

        {/* Add Dependent Button */}
        <button className="bg-[#2F3F5F] cursor-pointer w-[30%] text-white px-5 py-2 rounded-md text-sm font-medium mt-4 hover:bg-opacity-90">
          Add Dependent
        </button>

        {/* Notes */}
        <div className="mt-4">
          <label className="text-sm text-[#1D2B48] font-medium">Notes</label>
          <textarea
            rows={4}
            className="w-full text-[#616161] mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
          />
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button className="px-4 py-2 cursor-pointer bg-[#2F3F5F] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
          Previous
        </button>
        <button className="px-4 py-2 cursor-pointer bg-[#2F3F5F] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
          Save
        </button>
        <button className="px-4 py-2 cursor-pointer bg-[#2F3F5F] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
          Next
        </button>
      </div>
    </div>
  )
}
