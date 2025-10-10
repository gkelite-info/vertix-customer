"use client"

import { useState } from "react"
import YearSelect from "../../../../utils/yearSelect"

export default function FeeTaxSummary() {
  const [activeTab, setActiveTab] = useState<"fee" | "tax">("fee")

  return (
    <div className="bg-white lg:h-[100vh]">
      <YearSelect />
      <div className="flex flex-col items-center lg:pt-5">
        <div className="flex w-[90%] h-[10%] justify-center gap-5">
          <button
            onClick={() => setActiveTab("tax")}
            className={`p-3 h-full rounded-lg text-sm font-medium cursor-pointer ${activeTab === "tax"
                ? "bg-[#1D2B48] text-white"
                : "bg-gray-300 text-[#1D2B48]"
              }`}
          >
            TAX Return refund/Due Summary
          </button>
          <button
            onClick={() => setActiveTab("fee")}
            className={`p-3 lg:w-[24%] h-full rounded-lg text-sm font-semibold cursor-pointer ${activeTab === "fee"
                ? "bg-[#1D2B48] text-white"
                : "bg-gray-300 text-[#1D2B48]"
              }`}
          >
            FEE Summary
          </button>
        </div>

        <div
          className={`flex flex-col items-center p-3 
            ${activeTab === "fee" ? "w-[35%]" : "w-[80%]"}
          `}
        >
          <h2 className="text-[#1D2B48] font-semibold text-xl">
            {activeTab === "fee" ? "Fee Summary" : "Tax Return Summary"}
          </h2>

          <table className="w-full border-collapse border border-gray-300 bg-white shadow-md mt-3">
            <thead>
              <tr className="bg-[#4B5873] text-center">
                <th className="border border-gray-300 px-4 py-2 text-sm font-semibold text-start">
                  ADD NEW SERVICE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                  FEE
                </th>
                {activeTab === "tax" && (
                  <>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      REFUND
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      DUE
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === "fee" ? (
                <>
                  <FeeRow name="Federal 1040" fee={30} />
                  <FeeRow name="States" fee={30} />
                  <FeeRow name="SCH B" fee={20} />
                  <FeeRow name="Total" fee={80} />
                  <FeeRow name="Referral" fee={20} />
                  <FeeRow name="Net Fee" fee={60} />
                  <FeeRow name="Fee Paid" fee={60} />
                  <FeeRow name="Due Amount" fee={0} />
                </>
              ) : (
                <>
                  <TaxRow name="Federal Tax" fee={40} refund={10} due={0} />
                  <TaxRow name="State Tax" fee={35} refund={5} due={5} />
                  <TaxRow name="Interest" fee={5} refund={0} due={1} />
                  <TaxRow name="Total" fee={80} refund={15} due={6} />
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function FeeRow({ name, fee }: { name: string; fee: number }) {
  return (
    <tr className="bg-[#E9E9E9] text-black">
      <td className="border border-gray-300 px-4 py-2 text-start text-sm">
        {name}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-center">
        {fee}
      </td>
    </tr>
  )
}

function TaxRow({
  name,
  fee,
  refund,
  due,
}: {
  name: string
  fee: number
  refund: number
  due: number
}) {
  return (
    <tr className="bg-[#E9E9E9] text-black">
      <td className="border border-gray-300 px-4 py-2 text-start text-sm">
        {name}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-center">
        {fee}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-center">
        {refund}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-center">
        {due}
      </td>
    </tr>
  )
}
