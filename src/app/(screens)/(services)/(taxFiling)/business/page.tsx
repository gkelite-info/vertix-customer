"use client";

import { Bank, ChartPieSlice, Handshake } from "phosphor-react";

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
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg"
              >
                <div
                  className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center 
                lg:h-[44%] lg:w-[35%]"
                >
                  <Handshake
                    size={30}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold text-md text-center">
                    Sole Proprietors, LLCs, and S-Corps Made Simple
                  </h3>
                </div>
              </div>
            </a>

            <a
              href="#s_corporation"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%]"
            >
              <div
                className="bg-red-00 flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg"
              >
                <div
                  className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center 
                lg:h-[44%] lg:w-[35%]"
                >
                  <ChartPieSlice
                    size={30}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold text-md text-center">
                    Sole Proprietors & Single-Member LLCs
                  </h3>
                </div>
              </div>
            </a>

            <a
              href="#c_corporation"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%]"
            >
              <div
                className="bg-red-00 flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg"
              >
                <div
                  className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center 
                lg:h-[44%] lg:w-[35%]"
                >
                  <Bank size={30} weight="fill" className="text-[#1D2B48]" />
                </div>
                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold text-md text-center">
                    Multi-Member LLCs, Partnerships & S-Corps
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
          <h1
            id="partnership"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            Sole Proprietors, LLCs, and S-Corps Made Simple
          </h1>

          <p className="text-[#1C2A46] lg:text-sm lg:mt-2">
            Running a business comes with its own set of tax responsibilities.
            At Vertix Tax Solutions, we help sole proprietors, single-member
            LLCs, multi-member LLCs, partnerships, and SCorps navigate U.S. tax
            rules with confidence and accuracy.
          </p>

          <h1
            id="s_corporation"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            Sole Proprietors & Single-Member LLCs
          </h1>

          <p className="text-[#1C2A46] lg:text-sm lg:mt-2">
            If you operate as a sole proprietor or a single-member LLC, your
            business income and expenses are reported on Schedule C of your
            personal tax return (Form 1040). Your net profit determines your
            income tax and self-employment tax, which are included on your
            personal return.
          </p>

          <p className="text-[#1C2A46] lg:text-sm lg:mt-2">
            S-Corporation Election Option:
          </p>

          <ol className="list-disc lg:mt-2 lg:ml-8 ml-4">
            <li className="text-[#1C2A46] text-sm">
              A single-member LLC can elect to be taxed as an S-Corporation by
              filing the appropriate IRS paperwork.
            </li>
            <li className="text-[#1C2A46] text-sm">
              In this case, the corporation files a separate tax return before
              your personal return. This is crucial, as some income, deductions,
              and credits flow from the corporate return to your personal
              return.
            </li>
            <li className="text-[#1C2A46] text-sm">
              S-Corps do not pay income tax at the corporate level; tax
              obligations pass through to your personal return.
            </li>
          </ol>

          <h1
            id="c_corporation"
            className="text-[#1C2A46] font-semibold lg:mt-8 mt-4 scroll-mt-16 lg:scroll-mt-25"
          >
            Multi-Member LLCs, Partnerships & S-Corps
          </h1>
          <p className="lg:mt-2 mt-1 text-[#1C2A46] lg:text-sm">
            By default, multi-member LLCs are treated as partnerships for tax
            purposes. Members can also elect S-Corporation taxation if it better
            suits their financial goals. The business files its tax return
            first.
          </p>
          <p className="lg:mt-2 mt-1 text-[#1C2A46] lg:text-sm">
            Each member or shareholder receives a K-1 form, showing their share
            of income, deductions, and credits.
          </p>
          <p className="lg:mt-2 mt-1 text-[#1C2A46] lg:text-sm">
            The information from the K-1 is then reported on each partner’s
            personal return, ensuring accurate pass-through taxation.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
