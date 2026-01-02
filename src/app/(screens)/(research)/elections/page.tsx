export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:mt-10 lg:h-[20%] lg:w-[45%] flex flex-col items-center">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit uppercase">
            Elections
          </h1>
        </div>

        <div className="w-full mt-6 lg:mt-10 flex flex-col lg:flex-row lg:w-[90%]">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <h2 className="text-[#1C2A46] font-bold text-lg mb-2">
              First-Year & Residency Elections: Make the Most of Your U.S. Tax
              Status
            </h2>
            <p className="text-[#1C2A46] text-sm mt-0">
              U.S. tax law allows certain non-residents to elect to be treated
              as residents for part or all of the year. These elections can help
              you optimize tax benefits and ensure compliance with IRS rules.
            </p>

            <h3 className="text-[#1C2A46] font-semibold mt-6">
              First-Year Election
            </h3>
            <p className="text-[#1C2A46] text-sm mt-2">
              If you do not meet the Green Card Test or Substantial Presence
              Test for the current year, you may still elect to be treated as a
              U.S. resident for part of the year.
            </p>

            <h1 className="text-[#1C2A46] font-medium mt-4">
              Conditions to Qualify:
            </h1>
            <ol className="list-disc mt-3 ml-4 lg:mt-2 lg:ml-8">
              <li className="text-[#1C2A46] text-sm">
                You must meet the Substantial Presence Test in the following
                year.
              </li>
              <li className="text-[#1C2A46] text-sm">
                Be physically present in the U.S. for at least 31 continuous
                days in the current year.
              </li>
              <li className="text-[#1C2A46] text-sm">
                Be present for at least 75% of the days between the first
                possible 31-day period and the last day of the year.
              </li>
            </ol>
          </div>

          <div className="w-full mt-5 lg:mt-0 lg:w-[40%] flex justify-center">
            <img
              src="/elections.jpg"
              alt="Tax Elections Guidance"
              className="w-full h-auto max-w-[350px] lg:max-w-none lg:h-[100%] lg:w-[74%] lg:rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%] mt-6 lg:mt-4 mb-5 lg:mb-0">
          <h1 className="text-[#1C2A46] font-medium mt-4 lg:mt-6">
            How to Make the Election:
          </h1>
          <p className="text-[#1C2A46] text-sm mt-3">
            Submit a signed statement including:
          </p>
          <ul className="list-disc mt-3 ml-4 lg:ml-8 space-y-2">
            <li className="text-[#1C2A46] text-sm">
              Confirmation you were not a resident in the prior year
            </li>
            <li className="text-[#1C2A46] text-sm">
              That you will be a resident under the Substantial Presence Test
              next year
            </li>
            <li className="text-[#1C2A46] text-sm">
              Your number of days in the U.S. during the following year
            </li>
            <li className="text-[#1C2A46] text-sm">
              Dates of your 31-day period and continuous presence this year
            </li>
            <li className="text-[#1C2A46] text-sm">
              Dates of any absences you want treated as days of presence
            </li>
          </ul>

          <h3 className="text-[#1C2A46] font-semibold mt-8">
            Nonresident Alien Becomes Resident (Married Filing Joint – 6013(H))
          </h3>
          <p className="text-[#1C2A46] text-sm mt-3">
            A nonresident alien and their spouse may elect to be treated as U.S.
            residents for the entire year, which means both are taxed on
            worldwide income and must file a joint return using Married Filing
            Joint rates.
          </p>

          <h1 className="text-[#1C2A46] font-medium mt-6">
            Eligibility Conditions:
          </h1>
          <ol className="list-disc mt-3 ml-4 lg:mt-2 lg:ml-8">
            <li className="text-[#1C2A46] text-sm">
              Nonresident alien at the beginning of the year
            </li>
            <li className="text-[#1C2A46] text-sm">
              Resident alien at the end of the year
            </li>
            <li className="text-[#1C2A46] text-sm">
              Married at the end of the year to a U.S. citizen or resident
            </li>
          </ol>

          <h3 className="text-[#1C2A46] font-semibold mt-8">
            Nonresident Alien Treated as a Resident (Married – 6013(G))
          </h3>
          <p className="text-[#1C2A46] text-sm mt-3">
            If a nonresident alien is married to a U.S. citizen or resident at
            any time during the year, this election allows both spouses to be
            treated as residents for the entire year.
          </p>
          <p className="text-[#1C2A46] text-sm mt-3">
            In subsequent years, the couple may file either jointly or
            separately as residents. This option is ideal for couples wanting
            consistent tax treatment and to take advantage of U.S. tax benefits
            for the entire year.
          </p>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h1 className="text-[#1C2A46] font-bold text-lg mb-4">
              Why This Matters:
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="text-[#1C2A46] text-sm flex items-start gap-2">
                <span className="text-[#43C17A]">✔</span> Helps avoid errors in
                filing status
              </li>
              <li className="text-[#1C2A46] text-sm flex items-start gap-2">
                <span className="text-[#43C17A]">✔</span> Allows access to
                deductions and credits available only to residents
              </li>
              <li className="text-[#1C2A46] text-sm flex items-start gap-2">
                <span className="text-[#43C17A]">✔</span> Ensures proper
                reporting of worldwide income
              </li>
              <li className="text-[#1C2A46] text-sm flex items-start gap-2">
                <span className="text-[#43C17A]">✔</span> Provides flexibility
                for married couples
              </li>
            </ul>
            <p className="text-[#1C2A46] text-sm mt-6 font-medium">
              Vertix Tax Solutions guides individuals and families through
              First-Year and Residency Elections, making sure your tax strategy
              is optimized and compliant.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
