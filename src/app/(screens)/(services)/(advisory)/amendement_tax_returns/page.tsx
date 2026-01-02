function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            AMENDMENT OF TAX RETURNS
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              Even with your best efforts, mistakes can happen. Perhaps a deduction was missed,
              income was reported incorrectly, or additional information has come to light after filing. If
              you need to correct or update a tax return that has already been accepted by the IRS or
              your state, filing an amended return is the proper way to make these changes.
              <br className="hidden sm:inline" />
            </p>
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              At Vertix Tax Solutions, we guide you through the amendment process step by step,
              ensuring your return is accurate, compliant, and submitted correctly. Our experienced
              team handles the paperwork, calculations, and submission so you don’t have to worry
              about penalties or delays.
              <br className="hidden sm:inline" />
            </p>
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              Don’t let a simple mistake turn into a headache. Contact Vertix Tax Solutions today to
              discuss whether you need to file an amended return and let us handle the process for you.
            </p>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/amendment.jpg"
              alt="amendment.jpg"
              className="h-[200px] w-[90%] rounded-lg object-cover md:h-auto md:w-[60%] lg:h-[100%] lg:w-[74%]"

            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Page
