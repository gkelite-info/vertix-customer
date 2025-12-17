'use client'

import { useState } from "react";
import ThreeOptionToggle from "../../../../../utils/threeOptionToggle";
import ToggleSwitch from "../../../../../utils/toggleSwitch";
import { upsertDependents } from "@/app/api/SupabaseAPI/customer/dependents";
import toast from "react-hot-toast";
import { useYear } from "@/app/api/context/yearContext";

type Tab =
  | "About You"
  | "Dependents"
  | "Residency Details"


type DependentsProps = {
  setActiveTab: (tab: Tab) => void;
};

interface Dependent {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  months: string;
  depOneSSN: string;
  date: string;
  isUSCitizen: boolean;
  idType: "SSN" | "ITIN" | "NEED TO APPLY";
  hasChildcare: boolean;
}

type Buttontype = "Save" | "Next"

export default function Dependents({ setActiveTab }: DependentsProps) {

  const [loading, setLoading] = useState(false);

  const [dependents, setDependents] = useState<Dependent[]>([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      months: "",
      depOneSSN: "",
      date: "",
      isUSCitizen: false,
      idType: "SSN",
      hasChildcare: false,
    },
  ]);

  const { selectedYear } = useYear();

  const handleDateChangeForDependent =
    (index: number, field: "dob" | "date") =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, "");

        if (input.length > 8) input = input.slice(0, 8);

        let mm = input.slice(0, 2);
        let dd = input.slice(2, 4);
        let yyyy = input.slice(4, 8);

        if (mm.length === 2) {
          let m = parseInt(mm, 10);
          if (m < 1) m = 1;
          if (m > 12) m = 12;
          mm = m.toString().padStart(2, "0");
        }

        if (dd.length === 2) {
          let d = parseInt(dd, 10);
          if (d < 1) d = 1;
          if (d > 31) d = 31;
          dd = d.toString().padStart(2, "0");
        }

        let formatted = "";

        if (mm) {
          formatted = mm.length === 2 ? mm + "/" : mm;
        }

        if (dd) {
          formatted += dd.length === 2 ? dd + "/" : dd;
        }

        if (yyyy) {
          formatted += yyyy;
        }

        setDependents((prev) =>
          prev.map((dep, i) =>
            i === index ? { ...dep, [field]: formatted } : dep
          )
        );
      };



  const handleNameChange = (value: string, index: number, field: keyof Dependent) => {
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setDependents((prevDependents) =>
      prevDependents.map((dep, i) =>
        i === index ? { ...dep, [field]: filteredValue } : dep
      )
    );
  };

  const handleInputChange = (
    value: string,
    index: number,
    field: keyof Dependent,
    regex: RegExp,
    limit?: number
  ) => {
    let filteredValue = value.replace(regex, "");
    if (limit) filteredValue = filteredValue.slice(0, limit);

    setDependents((prevDependents) =>
      prevDependents.map((dep, i) =>
        i === index ? { ...dep, [field]: filteredValue } : dep
      )
    );
  };

  const handleToggleChange = (value: boolean, index: number, field: keyof Dependent) => {
    setDependents((prevDependents) =>
      prevDependents.map((dep, i) =>
        i === index ? { ...dep, [field]: value } : dep
      )
    );
  };

  const handleIdTypeChange = (
    value: "SSN" | "ITIN" | "NEED TO APPLY",
    index: number
  ) => {
    setDependents((prevDependents) =>
      prevDependents.map((dependent, i) =>
        i === index ? { ...dependent, idType: value } : dependent
      )
    );
  };

  const removeDependent = (indexToRemove: number) => {
    setDependents((prevDependents) =>
      prevDependents.filter((_, i) => i !== indexToRemove)
    );
  };

  const addDependent = () => {
    setDependents([
      ...dependents,
      {
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        months: "",
        depOneSSN: "",
        date: "",
        isUSCitizen: false,
        idType: "SSN",
        hasChildcare: false,
      },
    ]);
  };

  const handleSave = async (button: Buttontype) => {
    const errors = dependents
      .map((dep, index) => {
        const label = `Dependent ${index + 1}`;

        if (!dep.firstName.trim())
          return `${label}: First Name is required`;

        if (!dep.lastName.trim())
          return `${label}: Last Name is required`;

        if (!dep.dob.trim())
          return `${label}: Date of Birth is required`;

        if (!dep.months.trim())
          return `${label}: Months stayed in US is required`;

        if (isNaN(Number(dep.months)))
          return `${label}: Months must be a number`;

        if (dep.idType !== "NEED TO APPLY" && !dep.depOneSSN.trim())
          return `${label}: SSN / ITIN number is required`;

        if (!dep.date.trim())
          return `${label}: First date of entry in US is required`;

        return null;
      })
      .find(Boolean);

    if (errors) {
      toast.error(errors);
      return;
    }

    try {
      setLoading(true);
      await upsertDependents(dependents);
      toast.success("Dependents saved successfully!");
      if (button === "Next") {
        setActiveTab("Residency Details");
      }
    } catch (error) {
      console.error("Failed to save dependents:", error);
      toast.error("Failed to save dependents. Please try again.");
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-white p-6 sm:p-8 w-[100%] max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold text-[#1D2B48] mb-2">DEPENDENTS</h2>
      <p className="text-sm text-[#3E3E3E] mb-6">
        Provide the details of dependents to claim benefits on your tax return.
        Along with all the other Dependents tests, it is mandatory that he/she
        stays in US for at least 183 days in {selectedYear}
      </p>

      {dependents.map((dep, index) => (
        <div key={index} className="mb-6 relative">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-[#1D2B48]">
              DEPENDENT {index + 1}
            </span>

            {index !== 0 && (
              <div className="h-6 w-6 flex items-center justify-center bg-red-500 rounded-full cursor-pointer" onClick={() => removeDependent(index)}>
                <button
                  type="button"
                  onClick={() => removeDependent(index)}
                  aria-label={`Remove dependent ${index + 1}`}
                  className="text-white font-bold text-xl leading-none cursor-pointer"
                >
                  &minus;
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.firstName}
                onChange={(e) => handleNameChange(e.target.value, index, "firstName")}
              />
            </div>
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">Middle Name</label>
              <input
                type="text"
                placeholder="Enter Middle Name"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.middleName}
                onChange={(e) => handleNameChange(e.target.value, index, "middleName")}
              />
            </div>
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.lastName}
                onChange={(e) => handleNameChange(e.target.value, index, "lastName")}
              />
            </div>
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.dob}
                onChange={handleDateChangeForDependent(index, "dob")}
              />
            </div>
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">Months Stayed in US in {selectedYear} <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Enter months"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.months}
                onChange={(e) => handleInputChange(e.target.value, index, "months", /[^0-9]/g)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#1D2B48] font-medium">Childcare Expenses</label>
              <div className="flex gap-2 w-1/2">
                <ToggleSwitch
                  value={dep.hasChildcare}
                  labelLeft="No"
                  labelRight="Yes"
                  onToggle={(val) => handleToggleChange(val, index, "hasChildcare")}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">
                Does your dependent have <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2 mt-2 w-1/2">
                <ThreeOptionToggle
                  options={["SSN", "ITIN", "NEED TO APPLY"] as ("SSN" | "ITIN" | "NEED TO APPLY")[]}
                  value={dep.idType}
                  onChange={(val) => handleIdTypeChange(val as "SSN" | "ITIN" | "NEED TO APPLY", index)}
                  style="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">SSN / ITIN Number</label>
              <input
                type="text"
                placeholder="XXX-XXX-XXXX"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.depOneSSN}
                onChange={(e) => handleInputChange(e.target.value, index, "depOneSSN", /[^0-9-]/g, 11)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm text-[#1D2B48] font-medium">US Citizen / Green Card Holder</label>
              <div className="flex gap-2 w-1/2">
                <ToggleSwitch
                  value={dep.isUSCitizen}
                  labelLeft="No"
                  labelRight="Yes"
                  onToggle={(val) => handleToggleChange(val, index, "isUSCitizen")}
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <label className="text-sm text-[#1D2B48] font-medium w-1/2">First Date of Entry in US <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                className="w-1/2 mt-1 border text-[#616161] border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
                value={dep.date}
                onChange={handleDateChangeForDependent(index, "date")}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addDependent}
        className="bg-[#1D2A46] cursor-pointer w-[30%] text-white px-5 py-2 rounded-md text-sm font-medium mt-4 hover:bg-opacity-90"
      >
        Add Dependent
      </button>
      <div className="mt-4">
        <label className="text-sm text-[#1D2B48] font-medium">Notes</label>
        <textarea
          rows={4}
          className="w-full text-[#616161] mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-0"
        />
      </div>
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => setActiveTab("About You")}
          className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
          Previous
        </button>
        <button
          onClick={() => handleSave("Save")}
          className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          onClick={() =>
            handleSave("Next")
          }
          className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
          disabled={loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}
