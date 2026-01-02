"use client";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Foreign Earned Income Exclusion
          </h1>
        </div>

        {/* This container holds both the top sections and now the Expert Assistance section */}
        <div className="w-full mt-4 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10 lg:flex-wrap">
          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              The Foreign Earned Income Exclusion (FEIE) allows qualifying U.S.
              citizens and resident aliens living abroad to exclude a portion of
              their foreign-earned income from U.S. federal taxation. For tax
              year <span className="font-bold">2025</span>, the maximum
              exclusion increases to <span className="font-bold">$130,000</span>{" "}
              per qualifying individual.{" "}
              <a
                href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                IRS Tax Inflation Adjustments for 2025
              </a>
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              To claim this exclusion, an expat must maintain a tax home in a
              foreign country and satisfy{" "}
              <span className="font-bold">either</span> the bona fide residence
              test (a full tax year of residence abroad) or the physical
              presence test (330 full days of presence in a foreign country
              within any 12-month period).
              <a
                href="https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {" "}
                IRS+1
              </a>
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              The FEIE primarily benefits individuals who earn income
              abroad—such as professionals employed overseas or self-employed
              consultants operating outside the U.S.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Additionally, those residing in high-cost international cities may
              also qualify for the{" "}
              <span className="font-bold">
                foreign housing exclusion or deduction
              </span>
              , providing further tax relief for qualified living expenses.
            </p>

            {/* Expert Assistance is now inside the 60% column so it doesn't wait for the image */}
            <div className="w-full mt-4 lg:mt-8">
              <h1 className="text-[#1C2A46] font-semibold mt-0">
                Expert Assistance
              </h1>

              <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
                Navigating the complexities of international taxation requires
                professional guidance to ensure compliance and maximize your
                available exclusions. Vertix Tax Solutions specializes in
                assisting U.S. taxpayers living abroad with their filing
                obligations.
              </p>

              <p className="text-[#1C2A46] text-sm lg:mt-3">
                Please let us know if you need our help determining your
                eligibility for the FEIE or the foreign housing exclusion.
              </p>
            </div>
          </div>

          <div className="w-full mt-4 flex justify-center lg:mt-0 lg:w-[40%] lg:pl-10">
            <img
              src="/outside_accounts.jpg"
              alt="outside_accounts.jpg"
              className="h-auto w-[90%] rounded-lg object-cover lg:w-[80%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
