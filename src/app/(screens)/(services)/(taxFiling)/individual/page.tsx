"use client"

import {
  Airplane,
  Briefcase,
  IdentificationCard,
  User,
  UsersThree,
  WarningCircle,
} from "phosphor-react"

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Individual
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">

          <div className="
            w-full 
            grid grid-cols-2 md:grid-cols-3 gap-4
            lg:w-[60%] lg:pt-5 lg:pr-7 lg:flex lg:flex-wrap lg:gap-5
          ">
            <a
              href="#individuals"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full rounded-2xl
              lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center lg:h-[42%] lg:w-[35%]">
                  <User size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] font-semibold mt-2">Individuals</h3>
              </div>
            </a>

            <a
              href="#entrepreneurs"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <UsersThree size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] font-semibold mt-2">Entrepreneurs</h3>
              </div>
            </a>

            <a
              href="#visaworkers"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <Briefcase size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] font-semibold mt-2">Guest workers</h3>
              </div>
            </a>

            <a
              href="#permanentresidants"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <IdentificationCard size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] font-semibold text-center mt-2">
                  Green card holders
                </h3>
              </div>
            </a>

            <a
              href="#taxpayers"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <Airplane size={26} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] font-semibold text-center mt-2">
                  U.S. citizens abroad
                </h3>
              </div>
            </a>

            <a
              href="#irregularworkers"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <WarningCircle size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] font-semibold mt-2 text-center">Irregular workers</h3>
              </div>
            </a>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="individual_tax.jpg"
              alt="individual_tax.jpg"
              className="h-[200px] w-[90%] rounded-lg object-cover lg:h-[100%] lg:w-[74%]"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">

          <h1 id="individuals" className="text-[#1C2A46] font-semibold mt-6 lg:scroll-mt-30">
            INDIVIDUALS:
          </h1>
          <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
            We prepare personal tax returns for people from all walks of life.
            The base forms are Forms 1040 with all types of income, deductions
            and credits. This includes any supporting tax and reporting forms if
            you have dependents, itemized deductions, tax benefits, investments,
            accounts or property outside the United States.
          </p>
          <p className="text-[#1C2A46] text-md mt-3">
            Below are just some of the additional tax items we can help you
            with:
          </p>

          <ol className="list-disc mt-2 ml-6 lg:ml-8">
            <li className="text-sm text-[#1C2A46]">Rental property</li>
            <li className="text-sm text-[#1C2A46]">Self-employment</li>
            <li className="text-sm text-[#1C2A46]">
              Investment sales, including day trading activities
            </li>
            <li className="text-sm text-[#1C2A46]">Vacation rental</li>
            <li className="text-sm text-[#1C2A46]">Sale of home</li>
            <li className="text-sm text-[#1C2A46]">Forgiven debt</li>
            <li className="text-sm text-[#1C2A46]">
              Tax benefits for post-secondary education
            </li>
            <li className="text-sm text-[#1C2A46]">
              Tax benefits for home ownership
            </li>
            <li className="text-sm text-[#1C2A46]">
              Limited partnership pass-through reporting
            </li>
            <li className="text-sm text-[#1C2A46]">And More!</li>
          </ol>

          <h1 id="entrepreneurs" className="text-[#1C2A46] font-semibold mt-8 lg:scroll-mt-25">
            SMALL BUSINESS OWNERS:
          </h1>
          <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
            Whether you are a sole proprietor or the owner of an LLC, a
            partnership or a small corporation, we can help with your tax
            returns. We work with bookkeepers if you need bookkeeping services.
          </p>

          <h1 id="visaworkers" className="text-[#1C2A46] font-semibold mt-8">
            U.S. VISA WORKERS:
          </h1>
          <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
            We have experience in preparing tax returns (Forms 1040, 1040-NR and
            1040-C) and supporting tax forms, including the Report of Foreign
            Bank accounts, (FinCen Form 114, also known as the FBAR) for the
            following visa holders:
          </p>
          <ol className="list-disc mt-2 ml-6 lg:ml-8">
            <li className="text-sm text-[#1C2A46]">Students with an F-1 visa</li>
            <li className="text-sm text-[#1C2A46]">Students working in OPT</li>
            <li className="text-sm text-[#1C2A46]">
              Teachers or professors with a J visa
            </li>
            <li className="text-sm text-[#1C2A46]">
              H-1B workers in specialty occupations in fields requiring highly
              specialized knowledge
            </li>
            <li className="text-sm text-[#1C2A46]">
              L-1 Intra-company transferees
            </li>
            <li className="text-sm text-[#1C2A46]">
              NAFTA workers with TN/TD visas
            </li>
            <li className="text-sm text-[#1C2A46]">
              O visa for a person of extraordinary ability in science, art,
              business, athletics or education
            </li>
            <li className="text-sm text-[#1C2A46]">
              Domestic employee or nanny accompanying a foreign national
              employer with a B visa
            </li>
            <li className="text-sm text-[#1C2A46]">Any other visa type.</li>
          </ol>

          <h1 id="permanentresidants" className="text-[#1C2A46] font-semibold mt-8 lg:scroll-mt-25">
            PERMANENT RESIDENTS:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            Foreign nationals who are also permanent residents of the United
            States have the same tax reporting requirements as a U.S. citizen
            does. It makes no difference if you are living overseas or if your
            green card has expired and you haven’t yet filed Form I-407
            (http://www.uscis.gov/i-407) to abandon your permanent resident
            status. We can help with the tax return issues.
          </p>

          <h1 id="taxpayers" className="text-[#1C2A46] font-semibold mt-8 lg:scroll-mt-20">
            U.S. TAXPAYERS LIVING ABROAD:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            U.S. citizens and permanent residents living abroad are required to
            file U.S. tax returns reporting all income, the same as someone
            living in the United States. Your tax return could be very simple or
            it could be an extremely complex return with many, many points and
            issues to cover. The key is to do what is right while best
            protecting your interests. Late or previously inaccurate filings
            compound your risk.
          </p>

          <h1 id="irregularworkers" className="text-[#1C2A46] font-semibold mt-8">
            UNDOCUMENTED WORKERS:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            We can help you with your tax return filings if you are working in
            the United States without proper documents. You are in a very scary
            and difficult position, we understand. We can help you get compliant
            with your U.S. income tax filings and in obtaining an Individual
            Taxpayer Identification Number if needed. You may need to correct
            previously filed returns to become totally compliant.
          </p>

          <h1 className="text-[#1C2A46] font-semibold mt-8">
            TAXPAYERS WITH TAX PROBLEMS:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            We are usually hired to either represent or to assist a taxpayer
            needing help to resolve IRS or state tax problems. Sometimes the
            issue can be solved rather quickly, sometimes it takes many months.
            It just depends upon the issues involved, the time that has passed
            since the problem first began, and what, if anything, was done after
            the first time the problem arose. Lots of factors.
          </p>

          <h1 className="text-[#1C2A46] font-semibold mt-8">
            VICTIMS OF TAX IDENTITY THEFT:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            You are, or could be, the victim of tax identity theft if your name,
            Social Security number and date of birth were stolen by an identity
            thief or as part of a data breach. You need to take steps to protect
            yourself and perhaps correct your federal and state tax account. We
            can help you through the process to safeguard your future tax return
            filings, obtain stolen tax refunds, get suspended tax returns
            processed, and to stop IRS or state collection activity for taxes
            you do not owe.
          </p>

        </div>
      </div>
    </>
  )
}
