"use client"
import { useState, useEffect } from "react"

import { useAuth } from "@/components/AuthContext"
import YearSelect from "../../../../utils/yearSelect"
import TableComponent from "../../../../utils/table/page"
import toast from "react-hot-toast"
import { getBankInformation, postBankInformation } from "@/app/api/SupabaseAPI/customer/bank"

export default function BankingInformationPage() {
  const [formValues, setFormValues] = useState({
    belongsTo: "",
    holderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    accountType: "",
  })

  const [bankRecords, setBankRecords] = useState<Record<string, any>[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [bankDataExists, setBankDataExists] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    if (!user) return

    const fetchBankData = async () => {
      try {
        const res = await getBankInformation();

        if (res) {
          setFormValues({
            belongsTo: res.belongsTo || "",
            holderName: res.holderName || "",
            bankName: res.bankName || "",
            accountNumber: res.accountNumber || "",
            routingNumber: res.routingNumber || "",
            accountType: res.accountType || "",
          });
          setBankRecords([res]);
          setBankDataExists(true);
        }
      } catch (error) {
        setBankDataExists(false);
      } finally {
        setFetching(false);
      }
    };


    fetchBankData()
  }, [user])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    if (name === "accountNumber") {
      const numericValue = value.replace(/\D/g, "")
      setFormValues((prev) => ({ ...prev, [name]: numericValue }))
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await postBankInformation(formValues)
      toast.success(
        typeof res.message === "string"
          ? res.message
          : "Bank information updated successfully"
      )
      setBankRecords(res ? [res] : []);
      setBankDataExists(true)

    } catch (error: any) {
      toast.error(
        error.response?.data?.message
          ? String(error.response.data.message)
          : "Failed to update bank information"
      )

    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="flex justify-center items-center text-[#1D2B48] h-[100vh]">
        Loading bank data...
      </div>
    )
  }

  return (
    <div className="bg-white h-[100vh]">
      <YearSelect />
      {!bankDataExists ? (
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <h2 className="font-semibold text-[#1D2B48] text-xl">
            {formValues.accountNumber
              ? "Update Your Bank Details"
              : "Enter Your Bank Details"}
          </h2>

          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[44%] mt-5">
            <div className="w-[39%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Belongs To :
              </h5>
            </div>
            <select
              name="belongsTo"
              value={formValues.belongsTo}
              onChange={handleChange}
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-pointer shadow-sm"
            >
              <option value="">SELECT ONE</option>
              <option value="taxPayer">Tax Payer</option>
            </select>
          </div>

          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[44%] mt-2">
            <div className="w-[39%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Holder Name :
              </h5>
            </div>
            <input
              type="text"
              name="holderName"
              value={formValues.holderName || ""}
              onChange={handleChange}
              placeholder="Enter Holder Name"
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
            />
          </div>

          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[44%] mt-2">
            <div className="w-[39%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Bank Name :
              </h5>
            </div>
            <input
              type="text"
              name="bankName"
              value={formValues.bankName || ""}
              onChange={handleChange}
              placeholder="Enter Bank Name"
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
            />
          </div>

          <div className="bg-red-00 flex items-center justify-between gap-2 h-[10%] w-[44%] mt-2">
            <div className="w-[39%] bg-red-00">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Account Number :
              </h5>
            </div>
            <input
              type="number"
              name="accountNumber"
              value={formValues.accountNumber || ""}
              onChange={handleChange}
              placeholder="Enter Account Number"
              pattern="\d*"
              inputMode="numeric"
              className="border border-gray-300 text-[#616161] font-medium lg:w-[63.5%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
            />
          </div>

          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[44%] mt-2">
            <div className="w-[39%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Type of Account :
              </h5>
            </div>
            <select
              name="accountType"
              value={formValues.accountType || ""}
              onChange={handleChange}
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-pointer shadow-sm"
            >
              <option value="">SELECT ONE</option>
              <option value="checking">Checking Account</option>
              <option value="savings">Savings</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="mt-4 flex h-[10%] w-[45%] gap-3 rounded-lg">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="font-medium w-[60%] h-[100%] text-sm bg-[#1D2B48] text-white px-5 py-2 hover:bg-[#2c3e65] rounded-lg flex gap-2 justify-center items-center cursor-pointer"
            >
              {loading ? "Updating..." : "UPDATE BANK DETAILS"}
            </button>
            <button
              onClick={() =>
                setFormValues({
                  belongsTo: "",
                  holderName: "",
                  bankName: "",
                  accountNumber: "",
                  routingNumber: "",
                  accountType: "",
                })
              }
              className="font-medium w-[60%] h-[100%] text-sm bg-gray-400 text-white px-5 py-2 hover:bg-gray-500 rounded-lg flex gap-2 justify-center items-center cursor-pointer"
            >
              RESET
            </button>
          </div>
        </div>
      ) : (
        <TableComponent
          data={bankRecords}
          onUpdateClick={() => setBankDataExists(false)}
        />
      )}
    </div>
  )
}
