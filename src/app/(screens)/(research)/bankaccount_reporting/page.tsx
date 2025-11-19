export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 gap-6 pb-10 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="h-auto w-full flex flex-col items-center mt-6 lg:h-[20%] lg:w-[45%] lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            BANK ACCOUNT REPORTING
          </h1>
        </div>

        <div className="w-full flex flex-col gap-6 lg:w-[90%] lg:mt-10 lg:flex-row">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-3 lg:mt-3">
              The FBAR now will be known as FinCEN 114 (formerly TD F 90-22.1),
              Report of Foreign Bank and Financial Accounts (FBAR).
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              A U.S. person must file a Report of Foreign Bank and Financial
              Accounts (FBAR) if that person has a financial interest in,
              signature authority or other authority over financial accounts in
              a foreign country and the aggregate value of these account(s)
              exceeds $10,000 at any time during the calendar year. The annual
              filing is required by June 30 each year. This form is not part of
              the U.S. person’s tax return filing, and no extension is available
              for additional time to file the form. FBAR filers should keep a
              copy of what was filed for their records for a period of five
              years from June 30 of the year following the calendar year
              reported.
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              Effective July 1, 2013, FinCEN requires all FBAR forms to be
              electronically filed. Prior to July 1, 2013, a U.S. person could
              choose to file the FBAR electronically or file a signed paper FBAR
              form on or before June 30, after the end of each calendar year.
            </p>
          </div>

          <div className="w-full flex justify-center lg:w-[40%]">
            <img
              src="/bank_reporting.jpg"
              alt="bank_reporting"
              className="h-auto w-[90%] rounded-lg lg:h-[100%] lg:w-[74%]"
            />
          </div>

        </div>
      </div>
    </>
  )
}