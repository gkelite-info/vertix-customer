export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 gap-6 pb-10 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="h-auto w-full flex flex-col items-center mt-6 lg:h-[20%] lg:w-[45%] lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            HEALTHCARE
          </h1>
        </div>

        <div className="w-full flex flex-col gap-6 lg:w-[90%] lg:mt-0 lg:flex-row">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-0 lg:mt-0">
              The individual shared responsibility provision of the Health Care
              Law requires you and each member of your family to have qualifying
              health insurance (called minimum essential coverage), have an
              exemption, or make a shared responsibility payment when filing a
              federal income tax return. Many people already have minimum
              essential coverage and don’t need to do anything more than
              maintain that coverage.
            </p>

            <h1 className="text-[#1C2A46] font-medium mt-6 lg:mt-8">
              Do I have minimum essential coverage?
            </h1>
            <p className="text-[#1C2A46] text-sm mt-3">
              You have minimum essential coverage if you have employer-sponsored
              coverage, coverage obtained through a Health Insurance
              Marketplace, coverage through most government- sponsored programs,
              as well as certain other plans. You must maintain this coverage
              for each month of the calendar year. For information about
              additional types of coverage that qualify, check our minimum
              essential coverage chart on IRS.gov/aca.
            </p>

            <h1 className="text-[#1C2A46] font-medium mt-6 lg:mt-8">
              Am I eligible for an exemption?
            </h1>
            <p className="text-[#1C2A46] text-sm mt-3">
              You may be exempt from the requirement to maintain minimum
              essential coverage if you’re a member of certain religious sects,
              a federally recognized Indian tribe, or a health care sharing
              ministry. You may also be eligible if you are suffering a
              hardship, meet certain income criteria, or are uninsured for less
              than three consecutive months of the year. For more information,
              check our exemptions chart on IRS.gov/aca.
            </p>
          </div>

          <div className="w-full flex justify-center lg:w-[40%]">
            <img
              src="/healthcare.jpg"
              alt="healthcare"
              className="h-auto w-[90%] rounded-lg lg:h-[100%] lg:w-[74%]"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <h1 className="text-[#1C2A46] font-medium mt-0 lg:mt-0">
            Will I have to make a payment?
          </h1>

          <p className="text-[#1C2A46] text-sm mt-3">
            If you or any of your dependents don’t have minimum essential
            coverage or an exemption, you will need to make an individual shared
            responsibility payment on your tax return. For 2014, the annual
            shared responsibility payment amount is the greater of:
          </p>

          <ol className="list-disc ml-6 mt-3 space-y-2 lg:mt-2 lg:ml-8">
            <li className="text-[#1C2A46] text-sm">
              1 percent of your household income that is above your tax return
              filing threshold, or
            </li>
            <li className="text-[#1C2A46] text-sm">
              Your family’s flat dollar amount, which is $95 per adult and
              $47.50 per child, limited to a family maximum of $285 for 2014.
            </li>
          </ol>

          <p className="text-[#1C2A46] text-sm mt-3">
            The maximum amount you pay cannot be more than the cost of the
            national average premium for a bronze level health plan available
            through the Marketplace in 2014.
          </p>
        </div>
      </div>
    </>
  );
}
