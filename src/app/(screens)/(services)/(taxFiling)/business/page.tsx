"use client"

import { Bank, ChartPieSlice, Handshake } from "phosphor-react"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Business
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div
            className="
              w-full 
              grid grid-cols-2 md:grid-cols-3 gap-4
              lg:w-[60%] lg:pt-5 lg:pr-7 lg:flex lg:flex-wrap lg:gap-5
            "
          >
            <a
              href="#partnership"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%] lg:rounded-2xl lg:shadow-lg"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center 
                lg:h-[44%] lg:w-[35%]">
                  <Handshake
                    size={30}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold text-lg">
                    Partnership
                  </h3>
                </div>
              </div>
            </a>

            <a
              href="#s_corporation"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%]"
            >
              <div className="bg-red-00 flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center 
                lg:h-[44%] lg:w-[35%]">
                  <ChartPieSlice
                    size={30}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold text-lg">
                    S Corporation
                  </h3>
                </div>
              </div>
            </a>

            <a
              href="#c_corporation"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%]"
            >
              <div className="bg-red-00 flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center 
                lg:h-[44%] lg:w-[35%]">
                  <Bank size={30} weight="fill" className="text-[#1D2B48]" />
                </div>
                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold text-lg">
                    C Corporation
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/business_tax.jpg"
              alt="aboutpage.png"
              className="h-auto w-[90%] rounded-lg object-cover lg:h-[100%] lg:w-[74%]"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <p className="text-[#1C2A46] lg:text-sm lg:mt-2">
            At Vertix Tax Solutions LLC we help our clients understand and
            manage tax compliance and reporting obligations responsibly and
            proactively. We help them assess, improve and monitor their tax
            function’s processes and controls. We offer the following services
            for Partnerships, S and C Corporations :
          </p>

          <ol className="list-disc lg:mt-2 lg:ml-8 ml-4">
            <li className="text-[#1C2A46] text-sm">Entity Planning</li>
            <li className="text-[#1C2A46] text-sm">Accounting Services</li>
            <li className="text-[#1C2A46] text-sm">Payroll</li>
            <li className="text-[#1C2A46] text-sm">Tax Compliance</li>
          </ol>

          <h1
            id="partnership"
            className="text-[#1C2A46] font-semibold lg:mt-8 mt-4 lg:scroll-mt-25"
          >
            Partnership:
          </h1>
          <p className="lg:mt-2 mt-1 text-[#1C2A46] lg:text-sm">
            Whether you are a sole proprietor or the owner of an LLC, a
            partnership or a small corporation, we can help with your tax
            returns. We work with bookkeepers if you need bookkeeping services.
          </p>

          <h1 id="s_corporation" className="text-[#1C2A46] font-semibold mt-4 lg:mt-8">
            S Corporation:
          </h1>
          <p className="lg:mt-2 mt-1 text-[#1C2A46] lg:text-sm">
            An eligible domestic corporation can avoid double taxation by
            electing treatment as an S Corporation (SCORP). Like a partnership,
            an SCORP is a flow through entity. Generally, an SCORP is exempt
            from federal income tax other than tax on certain capital gains and
            passive income. On their tax returns, the SCORP shareholders include
            their share of the corporation’s separately state items of income,
            deduction, loss and credit and their share of non-separately stated
            ordinary business income or loss reported to them on Schedule K-1
            (Form 1120S).
          </p>
          <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">
            We at Shoonya can assist you in forming an SCORP and help you in
            being compliant with your responsibilities as a corporation. We can
            assist you in choosing the right entity type and making the election
            to be treated as a SCORP.
          </p>
          <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">
            We can assist you in doing the entity accounting and payroll and
            assist you in generating the K-1’s for the shareholders and filing
            of Form 1120S.
          </p>

          <h1
            id="c_corporation"
            className="text-[#1C2A46] font-semibold mt-4 lg:mt-8 lg:scroll-mt-25"
          >
            C Corporation:
          </h1>
          <p className="lg:mt-3 mt-1 text-[#1C2A46] lg:text-sm">
            Unlike the S Corp and Partnership discussed earlier, C Corporation
            are taxable on their earnings and pay taxes. The distributions from
            earnings and profits are treated as dividends for U.S. Income Tax
            purposes.
          </p>
          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            In the United States, corporations are formed under laws of a state
            or the District of Columbia. Procedures vary widely by state. Some
            states allow formation of corporations through electronic filing on
            the state's web site or very quickly. All states require payment of
            a fee upon incorporation. Corporations are issued a “certificate of
            incorporation“ by most states upon formation. Most state corporate
            laws require that the basic governing instrument be either the
            certificate of incorporation or formal articles of incorporation.
          </p>
          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            Tax rates for C Corporations range from 15 % to 35 % at graduated
            rates. We at Shoonya help you in tax compliances required for C
            Corporations and help you in being compliant.We help in filing Form
            1120 and generating Schedule K-1 (1120). We can also assist in
            preparation of Financial Statements for C Corporations.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
