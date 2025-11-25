"use client"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Smart Tax Strategy
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">

            <h1 className="text-[#1C2A46] font-semibold mt-4 lg:mt-8">Planning</h1>

            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              Smart Tax Strategy is a valuable tool you can use to save tax
              dollars and create wealth.
            </p>

            <p className="text-[#1C2A46] text-sm mt-3 lg:text-sm">
              One is when we estimate your income and deductions for the current
              tax year and calculate an estimated amount of tax liability and
              use it to adjust your withholding or estimated tax payments or
              plan for refunds/balances due
            </p>

            <p className="text-[#1C2A46] text-sm mt-3 lg:text-sm">
              We provide simple Smart Tax Strategy to our tax clients as a
              complimentary service when we review your tax return with you
              prior to it being filed.
            </p>

            <h1 className="text-[#1C2A46] font-semibold mt-6 lg:mt-8">
              Smart Tax Strategy Program and Reports
            </h1>

            <p className="text-[#1C2A46] text-sm mt-3 lg:text-sm">
              Please contact us if you would like information about the
              comprehensive Smart Tax Strategy program. We are happy to help
              existing clients and new clients wanting to plan for their tax
              future.
            </p>

          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/tax_planning.jpg"
              alt="tax_planning.jpg"
              className="
                h-[200px] w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>

        </div>

      </div>
    </>
  )
}

export default Page
