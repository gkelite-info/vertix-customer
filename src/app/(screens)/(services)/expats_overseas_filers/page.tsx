"use client"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Expats & Overseas Filers
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-0">
              The IRS has been focusing on U. S. taxpayers living overseas, who
              are often called expats or expatriates, for the last few years.
              The agency has been quite successful in collecting additional
              revenue for the U.S. government from people who haven’t filed
              income tax returns and informational returns. There are a number
              of ongoing international efforts for cooperation between countries
              and information sharing, for example the Foreign Account Tax
              Compliance Act (FATCA).
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Tax return and informational return filing requirements apply to
              citizens, green card holders (permanent residents) and
              non-citizens who have worked in the U.S. and then left without
              filing a final tax return. Some permanent residents mistakenly
              believe that they no longer have to file tax returns with the IRS
              if their green cards have expired. Generally, you still have to
              file U.S. tax returns unless your resident status was judicially
              taken away from you, you have officially abandoned your residency
              status with the UCSIS or a U.S. consular officer, or have filed
              Form 8854 if applicable.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Non-citizens who have left the U.S. often fail to timely file
              their tax returns or file inaccurate tax returns. Either situation
              should be corrected as quickly as possible to avoid increased
              penalties and interest if tax dollars are owed.
            </p>

          </div>

          <div className="w-full mt-6 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/tax_payers_abroad.jpg"
              alt="tax_payers_abroad.jpg"
              className="
                h-auto w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <h1 className="text-[#1C2A46] font-semibold mt-0 lg:mt-0">
            Worldwide Income
          </h1>

          <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
            U.S. tax laws require that a U.S. taxpayer report worldwide income
            on the tax return, unless the income is exempt from gross income by
            law. The IRS understands that sometimes the taxpayer has to pay
            income tax to the country of residence and that it would be unfair
            for the taxpayer to pay income tax to both the U.S. and the country
            of residence on the same income. The law does have options that a
            taxpayer may utilize to reduce or, in some instances, eliminate the
            double taxation of the same income.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The options can often be a bit complex and the taxpayer may have to
            weigh choices. The taxpayer might live in a country with tax treaty
            benefits, choose to claim the foreign earned income, foreign housing
            exclusion or foreign tax credit. The forms for foreign financial
            account reporting can be extremely confusing and often seem
            duplicative.
          </p>

          <h1 className="text-[#1C2A46] font-semibold mt-3 md:mt-4 lg:mt-5">
            How to Comply with U.S. Tax Laws
          </h1>

          <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
            There are potentially severe consequences for failing to file tax
            returns on time and, especially, for failing to timely file accurate
            informational reports of foreign financial accounts. The IRS has
            several programs to help overseas taxpayers get caught up with
            delinquent filings or to correct inaccurate filings. Below are links
            to the basic information about these programs.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3 border border-b-1 border-t-0 border-l-0 border-r-0 lg:w-[27%]">
            Streamlined Filing Compliance Procedures
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3 border border-b-1 border-t-0 border-l-0 border-r-0 lg:w-[28%]">
            2012 Offshore Voluntary Disclosure Program
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3 border border-b-1 border-t-0 border-l-0 border-r-0 lg:w-[43%]">
            Delinquent International Information Return Submission Procedures
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3 border border-b-1 border-t-0 border-l-0 border-r-0 lg:w-[34%]">
            Delinquent FBAR or FinCEN 114 Submission Procedures
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
