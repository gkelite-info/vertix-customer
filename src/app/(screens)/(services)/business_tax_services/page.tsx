"use client";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Business Tax Services
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <h1 className="text-[#1C2A46] font-semibold mt-0 lg:mt-0">
              Helping You Navigate Partnership Taxes
            </h1>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              If you’re starting or part of a partnership in the U.S., it’s
              crucial to have an experienced tax advisor. Partnerships involve
              two or more people working together to run a business, sharing
              profits and losses. The partnership agreement guides this
              relationship and can be adjusted with everyone’s consent.
              Partnerships file Form 1065 to report income and expenses, but the
              business itself doesn’t pay taxes — instead, profits or losses
              pass through to each partner’s personal tax return via Schedule
              K-1.
            </p>

            <h1 className="text-[#1C2A46] font-semibold mt-0 lg:mt-4">
              Simplifying S Corporation Tax Benefits
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              An S Corporation (S Corp) lets eligible businesses avoid double
              taxation by passing income, losses, and credits directly to
              shareholders. This special status is available to domestic
              corporations and requires making a formal election with the IRS.
              We help you decide if an S Corp is right for your business, assist
              with setup, and manage filing requirements like Form 1120S and
              Schedule K-1 for shareholders.
            </p>

            <h1 className="text-[#1C2A46] font-semibold mt-4 lg:mt-4">
              Managing C Corporation Tax Responsibilities
            </h1>
            <p className="text-[#1C2A46] mt-1 text-sm lg:mt-3">
              C Corporations are taxed separately from their owners and pay
              taxes on their profits. When profits are distributed to
              shareholders, those payments are treated as dividends for tax
              purposes. Corporations are formed under state law, with each state
              setting its own rules and fees. Tax rates for C Corporations range
              from 15% to 35%. We support C Corps with tax compliance, filing
              Form 1120, preparing financial statements, and issuing necessary
              documents like Schedule K-1.
            </p>
          </div>

          <div className="w-full mt-6 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/small_business.jpg"
              alt="small_business.jpg"
              className="
                h-fit w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]"></div>
      </div>
    </>
  );
}

export default Page;
