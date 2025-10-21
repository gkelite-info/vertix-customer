
function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2 lg:pb-10">
        <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[51%]">
            BANK ACCOUNT REPORTING
          </h1>
        </div>
        <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
          <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              The FBAR now will be known as FinCEN 114 (formerly TD F 90-22.1),
              Report of Foreign Bank and Financial Accounts (FBAR).
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
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
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Effective July 1, 2013, FinCEN requires all FBAR forms to be
              electronically filed. Prior to July 1, 2013, a U.S. person could
              choose to file the FBAR electronically or file a signed paper FBAR
              form on or before June 30, after the end of each calendar year.
            </p>
          </div>
          <div className="lg:w-[40%] bg-red-00 flex justify-center">
            <img src="/bank_reporting.jpg"
              alt="bank_reporting.jpg"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
