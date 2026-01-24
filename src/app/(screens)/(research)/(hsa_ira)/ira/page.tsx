"use client"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        
        {/* Title */}
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Individual Retirement Account (IRA)
          </h1>
        </div>

        {/* Main Content */}
        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-0 lg:mt-0">
              An Individual Retirement Account (IRA) is the cornerstone of
              long-term tax-efficient wealth building for U.S. taxpayers.
              Designed to encourage retirement savings, IRAs allow individuals
              to contribute pre-tax or after-tax income depending on whether
              the account is structured as a Traditional IRA or a Roth IRA.
            </p>

            <p className="text-[#1C2A46] text-sm mt-1 lg:mt-3">
              A Traditional IRA provides an immediate tax deduction — contributions
              reduce taxable income in the year made, and taxes are paid upon
              withdrawal during retirement. In contrast, a Roth IRA offers
              tax-free growth and tax-free withdrawals, provided eligibility and
              holding period requirements are met — a powerful tool for
              high-income earners expecting higher future tax rates.
            </p>

            <p className="text-[#1C2A46] text-sm mt-1 lg:mt-3">
              Investment choices within IRAs include stocks, bonds, ETFs, and
              mutual funds, giving taxpayers the flexibility to align portfolios
              with long-term financial goals. For expats and globally mobile
              professionals, IRA contributions and distributions may interact
              with foreign tax treaties, making strategic planning essential.
            </p>

            <p className="text-[#1C2A46] text-sm mt-3 lg:mt-4">
              An IRA isn’t just a retirement account — it’s a tax-optimized
              financial foundation supporting wealth preservation, estate
              planning, and intergenerational transfer of assets. When structured
              properly, it integrates seamlessly with HSAs, 401(k) plans, and
              cross-border investment strategies, offering peace of mind for
              life after work.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full mt-6 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/ira.jpg"
              alt="Individual Retirement Account planning and tax-efficient retirement strategy"
              className="
                h-fit w-[90%] rounded-lg object-contain
                md:w-[65%]
                lg:w-[80%]
              "
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Page
