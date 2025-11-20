"use client"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit lg:w-[48%]">
            Data Protection & Privacy
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm font-semibold">
              Data Protection & Privacy
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              We comply with all IRS regulations and rules regarding the privacy
              of our clients and the Data Protection & Privacy of information.
              These are the reasons why we ask for engagement letters, give you
              privacy notices, give you consents to disclose for your review,
              and other documents before we begin working for you or
              supplemental documents during our assignment.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Federal Trade Commission, 26 CFR Part 314, Standards for Data
              Protection & Privacy Customer Information
            </p>

            <p className="text-blue-500 text-sm lg:mt-3 cursor-pointer break-all">
              https://www.ftc.gov/sites/default/files/documents/federal_register_notices/standards-safeguarding-customer-information-16-cfr-part-314/020523standardsforsafeguardingcustomerinformation.pdf
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Data Protection & Privacy Taxpayer Data
            </p>

            <p className="text-blue-500 text-sm lg:mt-3 cursor-pointer break-all">
              https://www.irs.gov/pub/irs-pdf/p4557.pdf
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Gramm-Leach Bliley Act
            </p>

            <p className="text-blue-500 text-sm lg:mt-3 cursor-pointer break-all">
              https://www.ftc.gov/system/files/documents/plain-language/bus53-brief-financial-privacy-requirements-gramm-leach-bliley-act.pdf
            </p>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/safeguarding.jpg"
              alt="safeguarding.jpg"
              className="
                h-[200px] w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>

        </div>

        <div className="w-full lg:w-[90%]">

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Disclosure or Use of Information by Preparers of Returns
          </p>

          <p className="text-blue-500 text-sm lg:mt-3 cursor-pointer break-all">
            https://www.irs.gov/irb/2013-03_IRB/ar07.html
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Arkansas Personal Information Protection Act
          </p>

          <p className="text-blue-500 text-sm lg:mt-3 cursor-pointer break-all">
            http://law.justia.com/codes/arkansas/2010/title-4/subtitle-7/chapter-110
          </p>

        </div>

      </div>
    </>
  )
}

export default Page
