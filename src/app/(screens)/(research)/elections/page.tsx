"use client"

import Image from "next/image"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2 lg:pb-10">
        <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[19%]">
            ELECTIONS
          </h1>
        </div>
        <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
          <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              First Year Election If an individual does not meet either the
              green card test or substantial presence test for 2004, he may
              elect to be treated as a U.S. resident for part of the year.
              [7701(b)(4)] Conditions
            </p>
            <ol className="list-disc lg:mt-2 lg:ml-8">
              <li className="text-[#1C2A46] text-sm">
                The individual must meet the substantial presence test in the
                following year (2015);
              </li>
              <li className="text-[#1C2A46] text-sm">
                The individual must meet the substantial presence test in the
                following year (2015);
              </li>
              <li className="text-[#1C2A46] text-sm">
                The individual must be present in the U.S. for at least 75% of
                the number of days beginning with the first day of the first
                possible 31-day period and ending with the last day of 2014.
              </li>
            </ol>
            <h1 className="text-[#1C2A46] font-medium lg:mt-8">How to Elect</h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              The first year election is made by completing a statement (see the
              Appendix III). The statement must contain the individual&apos;s
              name and address and a signed declaration that the election is
              being made. The statement must specify the following:
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              i) That the alien individual was not a resident in the prior year;
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              ii) That the individual is a resident under the substantial
              presence test in the subsequent year;
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              iii)The individual&apos;s number of days of presence in the U.S.
              during the subsequent year;
            </p>
          </div>
          <div className="lg:w-[40%] bg-red-00 flex justify-center">
            <Image
              src="/aboutpage.png"
              alt="aboutpage.png"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="bg-green-00 lg:w-[90%]">
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            iv)The date or dates of the individual&apos;s 31-day period of
            presence and period of continuous presence in the U.S. during the
            current year; and
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            v) The date or dates of absence from the U.S. during the current
            year that the individual is treating as days of presence.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Non-resident Alien Becomes Resident [6013(H)] An individual and
            spouse may elect to be treated as residents for the entire year.
            They will be taxed ontheir worldwide income for the year, and must
            file a joint return and use Married Filing Joint rates.
          </p>
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">Conditions</h1>
          <ol className="list-disc lg:mt-2 lg:ml-8">
            <li className="text-[#1C2A46] text-sm">
              The individual must be a non-resident alien at the beginning of
              the year;
            </li>
            <li className="text-[#1C2A46] text-sm">
              The individual must be a resident alien at the end of the year;
              and
            </li>
            <li className="text-[#1C2A46] text-sm">
              At the end of such year, such individual is married to a citizen
              or resident of the U.S.
            </li>
          </ol>
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">
            Non-resident Alien Treated As A Resident [6013(G)] Conditions
          </h1>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            This election applies with respect to an individual who, at the end
            of the year, was a non- resident alien married to a citizen or
            resident of the U.S. at any time in the year.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Both spouses will be treated as residents for the entire year. They
            will be taxed on their worldwide income and must file a joint return
            for the year the election is made.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            In subsequent years, the individual and the spouse must file as
            residents, but they can file either joint or separate returns.
          </p>
        </div>
      </div>
    </>
  )
}
export default Page
