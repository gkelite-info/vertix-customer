"use client"

import {
  Confetti,
  CurrencyCircleDollar,
  Eye,
  File,
  Wrench,
} from "phosphor-react"
import YearSelect from "../../../../utils/yearSelect"

export default function FileStatusPage() {
  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5">
          <div className="bg-white flex justify-center items-start text-center lg:h-[27%] lg:w-[55%] rounded-lg shadow-lg">
            <div className="h-[100%] w-[20%] lg:gap-3 flex flex-col justify-center items-center rounded-l-lg">
              <div className="bg-[#DDDEE3] h-[40%] w-[38%] rounded-full flex items-center justify-center">
                <File size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-sm text-[#1D2B48]">DOCUMENT</h3>
            </div>
            <div className="h-[100%] w-[20%] lg:gap-3 flex flex-col justify-center items-center">
              <div className="bg-[#DDDEE3] h-[40%] w-[38%] rounded-full flex items-center justify-center">
                <Wrench size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-sm text-[#1D2B48]">
                PREPARATION
              </h3>
            </div>
            <div className="h-[100%] w-[20%] lg:gap-3 flex flex-col justify-center items-center">
              <div className="bg-[#DDDEE3] h-[40%] w-[38%] rounded-full flex items-center justify-center">
                <Eye size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-sm text-[#1D2B48]">REVIEW</h3>
            </div>
            <div className="h-[100%] w-[20%] lg:gap-3 flex flex-col justify-center items-center">
              <div className="bg-[#DDDEE3] h-[40%] w-[38%] rounded-full flex items-center justify-center">
                <CurrencyCircleDollar
                  size={27}
                  weight="fill"
                  className="text-[#1D2A46]"
                />
              </div>
              <h3 className="font-semibold text-sm text-[#1D2B48]">PAYMENT</h3>
            </div>
            <div className="h-[100%] w-[20%] lg:gap-3 flex flex-col justify-center items-center rounded-r-lg">
              <div className="bg-[#DDDEE3] h-[40%] w-[38%] rounded-full flex items-center justify-center">
                <Confetti size={27} weight="fill" className="text-[#1D2A46]" />
              </div>
              <h3 className="font-semibold text-sm text-[#1D2B48]">
                POST PAYMENT
              </h3>
            </div>
          </div>
          <div className="bg-white w-[55%] mt-15 gap-1 flex flex-col">
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
          </div>
        </div>
      </div>
    </>
  )
}
