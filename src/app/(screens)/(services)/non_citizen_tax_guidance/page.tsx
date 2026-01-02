"use client";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Non-Citizen Tax Guidance
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <h1 className="text-[#1C2A46] font-semibold lg:mt-0">
              Are You a Resident or Nonresident for U.S. Taxes?
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              How Residency is Determined
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Your tax residency status depends on several factors:
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              1. Substantial Presence Test: The number of days you were physically present in the U.S. over
              the last three years.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              2. Previous Travel History: Whether you left the U.S. in prior years and returned.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              3. Visa Type: Commonly affects students (F-1), teachers/professors (J), and other work visas.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              4. Tax Treaty Elections: If you waived benefits available for your visa type.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              5. Marital Status: Married at any time during the year and still married on December 31.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              6. Leaving the U.S.: Filing a final tax return or planning to return the following year.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              7. Citizenship & Prior Residency: Tax treaties may depend on your country of prior residence.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              8. Other Factors: Each situation is unique — additional considerations may apply.
            </p>

            <p className="text-[#1C2A46] font-semibold lg:mt-3">
              Substantial Presence Test (SPT)
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Residency outcomes:
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • 183+ days: Generally considered a part-year (dual status) resident, if present in the last 31
              days of the year.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • Less than 183 days: Default to nonresident.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Special elections may apply if married on December 31 — even if married on the last day of the
              year, your filing status could still be “married” for the entire year.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Why Residency Matters
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Your residency status determines:
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • Which tax forms to use
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • What income and deductions to report
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • Eligibility for tax benefits for spouses or dependents
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • Protect yourself from audits and high interest charges
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • Avoid excessive IRS penalties
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              • Special elections and opportunities to optimize your tax situation
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              At Vertix Tax Solutions, we ensure that your residency status is accurately determined, and your
              return is filed correctly — giving you peace of mind and compliance with U.S. tax laws.
              </p>

            {/* <p className="text-[#1C2A46] text-sm lg:mt-3"> */}
            {/* 7. Your country of citizenship or resident status. Sometimes you may */}
            {/* be a citizen of one country, but come to the U.S. from a different */}
            {/* country where you have been living for a period of time. The tax */}
            {/* treaty of the country of your most recent residency may apply */}
            {/* instead of the tax treaty of your country of */}
            {/* </p> */}

          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/non_resident.jpg"
              alt="non_resident.jpg"
              className="
                h-auto w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
