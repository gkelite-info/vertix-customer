"use client"

import Image from "next/image"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2 lg:pb-10">
        <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[94%]">
            NONRESIDENT, DUAL STATUS OR FULL YEAR RESIDENT
          </h1>
        </div>
        <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
          <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
            <h1 className="text-[#1C2A46] font-medium lg:mt-8">
              How Do You Know if You are Nonresident or Resident for Tax
              Purposes?
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              The type of tax return filed by noncitizens is determined by a
              variety of factors:
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              1. Number of days you were present in the United States over the
              most recent three year period. This is called the substantial
              presence test. A formula is used to determine whether your
              residency status for income tax purposes is that of nonresident,
              dual status (part-year resident) or a full-year resident.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              2. Whether you left the country in a prior year and then returned
              during the current tax year.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              3. Your visa type and perhaps the number of years you have been in
              the United States, usually F and J visa types.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              4. Whether you have waived, either intentionally or
              unintentionally, tax treaty benefits available for your visa type.
              This usually applies to students with an F-1 visa.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              5. Whether you were married at any time during the tax year and
              remained married on December 31 of the applicable tax year. This
              applies even if your spouse is still in your home country and has
              never been to the United States.
            </p>
          </div>
          <div className="lg:w-[40%] bg-red-00 flex justify-center">
            {/* <img
              src="/aboutpage.png"
              alt="aboutpage.png"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            /> */}
            <Image
              src="/aboutpage.png"
              width={1200}
              height={800}
              alt="aboutpage.png"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>
        <div className="bg-green-00 lg:w-[90%]">
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            6. Whether you have left the United States and are filing your final
            U.S. tax return or if you plan to return in the following year.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            7. Your country of citizenship or resident status. Sometimes you may
            be a citizen of one country, but come to the U.S. from a different
            country where you have been living for a period of time. The tax
            treaty of the country of your most recent residency may apply
            instead of the tax treaty of your country of
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            8. There are more factors to be considered depending upon your
            particular situation. U.S. taxes for noncitizens can be quite
            complicated. You may have choices that could allow you to take
            advantage of tax benefits in the U.S., but affect your tax return
            filing in the country where you previously lived and worked.
            Substantial Presence Test
          </p>
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">
            The substantial presence test determines
          </h1>
          <ol className="list-disc lg:mt-2 lg:ml-8">
            <li className="text-[#1C2A46] text-sm">
              The forms you use when filing your return
            </li>
            <li className="text-[#1C2A46] text-sm">
              The type and sources of income you must report to the IRS
            </li>
            <li className="text-[#1C2A46] text-sm">
              Whether you can claim tax benefits for a spouse or dependent on
              your return
            </li>
            <li className="text-[#1C2A46] text-sm">
              Whether you qualify for special elections to claim tax benefits
            </li>
          </ol>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The test is a mathematical formula applied to the number of days you
            were physically present in the United States. Here it is, generally:
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            All of the days in the current tax year, even if you were in the
            country on a visitor visa + 1/3 of the days in the immediately
            preceding year + 1/6 of the days in the year before the immediately
            preceding year. If the total is 183 days or more, but less than the
            entire current tax year, you will generally default to being taxed
            as a dual status taxpayer, what I call part-year resident. That’s
            provided you were in the U.S. for the last 31 days of the year.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            If the total is less than 183 days, your tax status will default to
            nonresident.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            There are special elections that could be considered if you are
            married on December 31 of the current tax year. For example, if you
            were married at any time during 2016, and you were still married on
            December 31, 2016, your marital status for tax purposes is married.
            You could even get married on December 31 and your tax filing status
            would still be married for the entire 2016 tax year.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Tax Laws for Nonresidents, Dual Status and Full Year Residents
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Just as there are specific forms for each tax filing status
            (nonresident, dual status or resident) there are specific laws and
            restrictions that apply for each status. Noncitizens often don’t
            understand this and inadvertently file their tax returns using the
            wrong form and the incorrect set of laws. Correcting Inaccurate
            Returns
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Taxpayers who have filed incorrect tax returns should correct them
            as soon as they learn that the returns are inaccurate. Failure to do
            so could result in the IRS assessing penalties and interest in
            addition to more taxes. The penalties can be quite high if you are
            audited and the understatement of tax on your return exceeds certain
            thresholds.
          </p>
        </div>
      </div>
    </>
  )
}
export default Page
