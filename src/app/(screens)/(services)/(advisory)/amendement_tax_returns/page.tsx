function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit lg:w-[55%]">
            AMENDMENT OF TAX RETURNS
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              Self-evidently, you sign your tax return under penalties of
              perjury. That means it should be accurate and complete. But in the
              real world, despite your best efforts and honesty, you may forget
              something or make an innocent-even if foolish-mistake. In such
              cases in order to make changes, make corrections, or add
              information to an income tax return that has already been accepted
              by the IRS, you must file a tax amendment or amend your accepted
              federal or state tax return.
            </p>

            <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
              Should you feel you need to amend your tax return for any of the
              reason, Shoonya tax is here to help you. Contact us to discuss
              further and to know if you are required to file amended return.
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
