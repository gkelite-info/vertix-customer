"use client"

import YearSelect from "../../../../utils/yearSelect"

function VertixTaxPage() {
  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <div className="bg-green-00 w-[60%] flex flex-col items-start">
            <h2 className="text-[#1D2B48] font-semibold">
              Files for review documents
            </h2>
            <div className="w-[100%] h-15 mt-2">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
                <thead>
                  <tr className="bg-[#4B5873] text-center">
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      S.No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Action
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Downloaded Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#E9E9E9] text-black">
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      1
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Your Description
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      Download (password will be last four Digits of your SSN
                      Number)
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      2025-02-23 08:30:38
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-00 w-[60%] flex flex-col items-start mt-15">
            <h2 className="text-[#1D2B48] font-semibold">
              Files for documents for your records
            </h2>
            <div className="w-[100%] h-15 mt-2">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
                <thead>
                  <tr className="bg-[#4B5873] text-center">
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      S.No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#E9E9E9] text-black">
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      1
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Your Description
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      Download (password will be last four Digits of your SSN
                      Number)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default VertixTaxPage
