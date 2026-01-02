"use client"

import Link from "next/link";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            FBAR & FATCA
          </h1>
        </div>
        <div className="w-full mt-4 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] font-semibold text-sm lg:mt-3">
              Understanding U.S. Tax Rules for Foreign Income and Reporting
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              U.S. Taxpayers with Foreign Income: Stay Compliant, Stress-Free
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              If you are a U.S. citizen, permanent resident, or resident for tax purposes, the IRS requires
              you to report all income from foreign sources on your U.S. tax return. It doesn’t matter
              where you live or if you also file taxes in another country — the IRS considers worldwide
              income when calculating your tax liability.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              Fortunately, there are treaty benefits and tax strategies that can help reduce or offset your
              U.S. taxes. At Vertix Tax Solutions, we guide you in maximizing these benefits while staying
              fully compliant.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              Reporting Foreign Financial Accounts: FBAR
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              If the total balance of your foreign financial accounts exceeds the IRS threshold, you must
              file an annual FBAR.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              Due Date: June 30 of the year following the tax year
              Filing Method: Electronically via the FinCEN system (not included with your tax return)
              Our experts have years of experience helping taxpayers prepare and submit FBAR filings
              accurately,avoiding penalties.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              <Link
                href="/foreign_account_reporting"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Learn More About FBAR Filing
              </Link>
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Foreign Asset Reporting: FATCA
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              In addition to FBAR, certain taxpayers must disclose foreign financial assets using Form
              8938 under FATCA regulations. This may include:
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
               Bank accounts<br className="hidden sm:inline" />
               Investments<br className="hidden sm:inline" />
               Partnerships or other foreign entities<br className="hidden sm:inline" />
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              FATCA compliance is increasingly important due to global information-sharing agreements.
              Our team ensures your foreign asset reporting is accurate and fully compliant, even as
              rules evolve.
            </p>
             <p className="text-[#1C2A46] text-sm lg:mt-3">
              <Link
                href="https://www.irs.gov/pub/irs-pdf/i8938.pdf"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Learn More About Form 8938
              </Link>
            </p>

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
  )
}

export default Page
