
function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2 lg:pb-10">
        <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[58%]">
            TAX PLANNING SMALL BUSINESS
          </h1>
        </div>
        <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
          <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
            <h1 className="text-[#1C2A46] font-medium lg:mt-8">
              Sole Proprietors and Single Member LLC’s
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Are you self-employed and operate your business as a sole
              proprietorship or a single member LLC? Your income and expenses
              from this type of operation are reported to the IRS using Schedule
              C, along with supporting tax forms as needed. The net profit is
              used to calculate the amount of self-employment tax and income
              tax. The net profit, self employment tax and income tax are
              reported on your personal tax return, Form 1040. There is one
              exception.
            </p>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              A single member LLC has the option to file proper paperwork with
              the IRS to elect taxation as a corporation, typically one known as
              an S-corporation. If so, the corporation has to file a tax return
              separate from your personal tax return. The due date for the
              corporate tax return is about a month before your personal return
              is due. It is vital to accurate tax reporting to always have your
              corporate return completed before your personal return as there is
              financial data that flows from the corporate return onto your
              personal return. Your S-corporation does not pay income tax on the
              corporate return. The corporation’s income, some deductions and
              some credits are reported on the personal return and the tax, if
              any is due, is part of the personal tax due.
            </p>
          </div>
          <div className="lg:w-[40%] bg-red-00 flex justify-center">
            <img
              src="/small_business.jpg"
              alt="small_business.jpg"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>
        <div className="bg-green-00 lg:w-[90%]">
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">
            Multiple Member LLC’s, Partnerships, S-Corps
          </h1>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The default tax status of this type of LLC is that of a partnership.
            The LLC members can file proper paperwork with the IRS to elect a
            different tax status, usually that of an S-corporation.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The business is required to file it’s tax return first and then
            issue a tax form, K-1, reporting each partner’s or shareholder’s
            share of income, deductions and credits that has to be reported on
            the partner’s personal tax return.
          </p>
        </div>
      </div>
    </>
  )
}
export default Page
