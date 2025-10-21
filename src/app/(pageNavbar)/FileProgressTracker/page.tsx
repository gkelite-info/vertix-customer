"use client"

import {
  Confetti,
  CurrencyCircleDollar,
  Eye,
  File,
  Wrench,
} from "phosphor-react"
import YearSelect from "../../../../utils/yearSelect"

export default function FileProgressTracker() {
  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-start lg:h-[80%] lg:pt-5 p-5">
          <div className="bg-red-00 flex flex-col justify-start items-center text-center lg:h-[100%] lg:w-[40%] rounded-lg shadow-lg p-0">
            <div className="h-[100%] w-[100%] lg:gap-3 bg-green-00 flex justify-start items-center rounded-t-lg px-4">
              <div className="bg-[#DDDEE3] p-3 rounded-full flex items-center justify-center">
                <File size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-xs text-[#1D2B48]">DOCUMENT</h3>
            </div>
            <div className="h-[100%] w-[100%] lg:gap-3 bg-indigo-00 flex justify-start items-center px-4">
              <div className="bg-[#DDDEE3] p-3 rounded-full flex items-center justify-center">
                <Wrench size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-xs text-[#1D2B48]">
                PREPARATION
              </h3>
            </div>
            <div className="h-[100%] w-[100%] lg:gap-3 flex bg-yellow-00 justify-start items-center px-4">
              <div className="bg-[#DDDEE3] p-3 rounded-full flex items-center justify-center">
                <Eye size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-xs text-[#1D2B48]">REVIEW</h3>
            </div>
            <div className="h-[100%] w-[100%] lg:gap-3 bg-blue-00 flex justify-start items-center px-4">
              <div className="bg-[#DDDEE3] p-3 rounded-full flex items-center justify-center">
                <CurrencyCircleDollar
                  size={27}
                  weight="fill"
                  className="text-[#1D2A46]"
                />
              </div>
              <h3 className="font-semibold text-xs text-[#1D2B48]">PAYMENT</h3>
            </div>
            <div className="h-[100%] w-[100%] lg:gap-3 bg-pink-00 flex justify-start items-center rounded-b-lg px-4">
              <div className="bg-[#DDDEE3] p-3 rounded-full flex items-center justify-center">
                <Confetti size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-xs text-[#1D2B48]">
                POST PAYMENT
              </h3>
            </div>
          </div>
          {/* <div className="bg-pink-400 w-[75%] mt-15 gap-1 flex flex-col">
            <h2 className="text-[#1D2B48] font-semibold">POST-PAYMENT</h2>
            <p className="text-[#585E68] font-medium text-sm">
              We have received your payment now your file is in post - Payment
            </p>
            <h2 className="text-[#1D2B48] font-semibold mt-5">
              PROCESS COMPLETED
            </h2>
            <p className="text-[#585E68] font-medium text-sm">
              Thank you giving the opportunity to provide you tax services.
              Please share your feedack
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}
