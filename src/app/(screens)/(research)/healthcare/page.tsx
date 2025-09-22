"use client"

import Image from "next/image"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2 lg:pb-10">
        <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[24%]">
            HEALTHCARE
          </h1>
        </div>
        <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
          <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              The individual shared responsibility provision of the Health Care
              Law requires you and each member of your family to have qualifying
              health insurance (called minimum essential coverage), have an
              exemption, or make a shared responsibility payment when filing a
              federal income tax return. Many people already have minimum
              essential coverage and don’t need to do anything more than
              maintain that coverage.
            </p>
            <h1 className="text-[#1C2A46] font-medium lg:mt-8">
              Do I have minimum essential coverage?
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              You have minimum essential coverage if you have employer-sponsored
              coverage, coverage obtained through a Health Insurance
              Marketplace, coverage through most government- sponsored programs,
              as well as certain other plans. You must maintain this coverage
              for each month of the calendar year. For information about
              additional types of coverage that qualify, check our minimum
              essential coverage chart on IRS.gov/aca.
            </p>
            <h1 className="text-[#1C2A46] font-medium lg:mt-8">
              Am I eligible for an exemption?
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              You may be exempt from the requirement to maintain minimum
              essential coverage if you’re a member of certain religious sects,
              a federally recognized Indian tribe, or a health care sharing
              ministry. You may also be eligible if you are suffering a
              hardship, meet certain income criteria, or are uninsured for less
              than three consecutive months of the year. For more information,
              check our exemptions chart on IRS.gov/aca.
            </p>
          </div>
          <div className="lg:w-[40%] bg-red-00 flex justify-center">
            <Image
              src="/aboutpage.png"
              width={1200}
              height={800}
              alt="aboutpage.png"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>
        <div className="bg-green-00 lg:w-[90%]">
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">
            Will I have to make a payment?
          </h1>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            If you or any of your dependents don’t have minimum essential
            coverage or an exemption, you will need to make an individual shared
            responsibility payment on your tax return. For 2014, the annual
            shared responsibility payment amount is the greater of:
          </p>
          <ol className="list-disc lg:mt-2 lg:ml-8">
            <li className="text-[#1C2A46] text-sm">
              1 percent of your household income that is above your tax return
              filing threshold, or
            </li>
            <li className="text-[#1C2A46] text-sm">
              Your family’s flat dollar amount, which is $95 per adult and
              $47.50 per child, limited to a family maximum of $285 for 2014.
            </li>
          </ol>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The maximum amount you pay cannot be more than the cost of the
            national average premium for a bronze level health plan available
            through the Marketplace in 2014.
          </p>
        </div>
      </div>
    </>
  )
}
export default Page
