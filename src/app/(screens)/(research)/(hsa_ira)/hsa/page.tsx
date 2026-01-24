"use client"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        
        {/* Title */}
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Health Savings Account (HSA)
          </h1>
        </div>

        {/* Main Content */}
        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-0 lg:mt-0">
              A Health Savings Account (HSA) is more than just a medical savings
              tool — it’s a powerful, triple tax-advantaged investment vehicle
              designed for individuals with High Deductible Health Plans
              (HDHPs). Contributions are made with pre-tax dollars, grow
              tax-free, and withdrawals for qualified medical expenses remain
              completely tax-exempt.
            </p>

            <p className="text-[#1C2A46] text-sm mt-1 lg:mt-3">
              For professionals, business owners, and expats managing global
              healthcare, HSAs provide unmatched flexibility — funds roll over
              year after year and never expire, making it a long-term savings
              and retirement supplement strategy. Unlike flexible spending
              accounts (FSAs), unused balances are not forfeited, allowing for
              lifetime compounding potential.
            </p>

            <p className="text-[#1C2A46] text-sm mt-1 lg:mt-3">
              Investment options within an HSA can be diversified across mutual
              funds or ETFs, helping individuals grow their medical reserve
              while simultaneously building wealth. After age 65, funds can
              even be withdrawn for non-medical purposes with no penalty
              (taxed as ordinary income, similar to an IRA).
            </p>

            <p className="text-[#1C2A46] text-sm mt-3 lg:mt-4">
              HSAs are an ideal fit for high-income earners seeking strategic tax
              deductions, retirement diversification, and financial protection
              against medical inflation — all while staying compliant with
              U.S. tax law across borders.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full mt-6 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/hsa.jpg"
              alt="Health Savings Account for healthcare, tax savings, and long-term financial planning"
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
