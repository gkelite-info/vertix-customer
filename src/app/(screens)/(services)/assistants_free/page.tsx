"use client";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Assistants (FREE)
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <h1 className="text-[#1C2A46] font-semibold lg:mt-0">
              U.S. Tax Forms & International Reporting Requirements
            </h1>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              Understanding the various certificates and reports required by the
              IRS and FinCEN is crucial for international taxpayers:
            </p>

            <div className="space-y-4 lg:mt-4 mt-3">
              <p className="text-[#1C2A46] text-sm">
                <span className="font-bold">
                  1. W-4 Form – Employee’s Withholding Certificate
                </span>
                <br />
                Used by employees to tell employers how much federal income tax
                to withhold from wages.
              </p>

              <p className="text-[#1C2A46] text-sm">
                <span className="font-bold">2. FTC – Foreign Tax Credit</span>
                <br />
                Used to claim credit for income taxes paid to a foreign country
                or U.S. possession.
              </p>

              <p className="text-[#1C2A46] text-sm">
                <span className="font-bold">
                  3. FBAR – Report of Foreign Bank and Financial Accounts
                </span>
                <br />
                Filed electronically through the Financial Crimes Enforcement
                Network (not IRS), for taxpayers with foreign accounts exceeding
                $10,000 in aggregate during the year.
              </p>

              <p className="text-[#1C2A46] text-sm">
                <span className="font-bold">
                  4. FATCA – Foreign Account Tax Compliance Act
                </span>
                <br />
                Filed with IRS as part of annual tax return for specified
                foreign financial assets above reporting thresholds.
              </p>

              <p className="text-[#1C2A46] text-sm">
                <span className="font-bold">
                  5. PFIC – Passive Foreign Investment Company
                </span>
                <br />
                Used to report income, gains, and distributions from PFIC
                investments held by U.S. persons.
              </p>

              <p className="text-[#1C2A46] text-sm">
                <span className="font-bold">6. Estimated Tax / Penalty</span>
                <br />
                Used to calculate and pay quarterly estimated tax to avoid
                penalties for underpayment.
              </p>
            </div>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/non_resident.jpg"
              alt="tax_forms_guidance"
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
