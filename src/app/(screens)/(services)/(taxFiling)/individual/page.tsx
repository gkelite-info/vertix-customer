"use client";

import {
  Airplane,
  Briefcase,
  IdentificationCard,
  User,
  UsersThree,
  WarningCircle,
} from "phosphor-react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Individuals 1040 Tax Return Services
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
              href="#individuals"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full rounded-2xl
              lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg"
            >
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg"
              >
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center lg:h-[42%] lg:w-[35%]">
                  <User size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] text-center text-sm font-semibold mt-2">
                  Supporting Small Business Owners
                </h3>
              </div>
            </a>

            <a
              href="#entrepreneurs"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5"
              >
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <UsersThree
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  Assisting People on U.S. Visas
                </h3>
              </div>
            </a>

            <a
              href="#visaworkers"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] h-[100%] lg:w-[100%] lg:p-5"
              >
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <Briefcase
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  Serving Permanent Residents
                </h3>
              </div>
            </a>

            <a
              href="#permanentresidents"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5"
              >
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <IdentificationCard
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center text-center mt-2">
                  Supporting Americans Living Abroad
                </h3>
              </div>
            </a>

            <a
              href="#taxpayers"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5"
              >
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <Airplane
                    size={26}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  Guiding Workers Without Proper Documentation
                </h3>
              </div>
            </a>

            <a
              href="#irregularworkers"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer 
              h-auto w-full 
              lg:h-[35%] lg:w-[30%]"
            >
              <div
                className="flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5"
              >
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <WarningCircle
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold mt-2 text-center">
                  Assisting People on U.S. Visas
                </h3>
              </div>
            </a>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="individual_tax.jpg"
              alt="individual_tax.jpg"
              className="h-auto w-[90%] rounded-lg object-cover lg:h-[100%] lg:w-[74%]"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <p
            id="individuals"
            className="text-[#1C2A46] text-sm mt-2 lg:text-sm"
          >
            At Vertix Tax Solutions, we prepare comprehensive U.S. individual
            tax returns (Form 1040) covering every source of income, deduction,
            and credit. Whether you earn wages, selfemployment income, rental
            income, or investment gains, our team ensures accurate and optimized
            filing.
          </p>

          <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
            We also specialize in reporting complex items such as capital gains,
            stock options, home sales, forgiven debt, K-1 income from
            partnerships, and foreign financial assets. From education credits
            and child tax benefits to retirement contributions and itemized
            deductions, every detail is carefully reviewed for maximum tax
            efficiency and compliance.
          </p>

          <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
            Our goal is to simplify the tax filing process while minimizing
            liability and ensuring full IRS compliance — giving you confidence
            that your return is prepared with precision, professionalism, and a
            personal touch.
          </p>

          <h1
            id="entrepreneurs"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            SUPPORTING SMALL BUSINESS OWNERS
          </h1>
          <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
            If you own a sole proprietorship, LLC, partnership, or small
            corporation, we provide full tax return services. We work closely
            with your bookkeepers to make sure your financial records are
            accurate and compliant
          </p>

          <h1
            id="visaworkers"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            ASSISTING PEOPLE ON U.S. VISAS
          </h1>
          <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
            For individuals working in the U.S. on visas like F-1, J-1, H-1B,
            L-1, TN/TD, O, or B visas, we prepare necessary tax forms and
            foreign asset reports (e.g., FBAR). We understand your unique tax
            responsibilities and help you meet them correctly.
          </p>

          <h1
            id="permanentresidents"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            SERVING PERMANENT RESIDENTS:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            Green card holders have the same tax obligations as U.S. citizens.
            Whether you live in the U.S. or abroad—and even if your green card
            has expired—we’re here to help you stay compliant.
          </p>

          <h1
            id="taxpayers"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            SUPPORTING AMERICANS LIVING ABROAD:
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            U.S. citizens and permanent residents overseas must report worldwide
            income. We make sure your tax returns are correct and on time,
            helping you avoid costly mistakes or penalties.
          </p>

          <h1
            id="taxpayers"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            GUIDING WORKERS WITHOUT PROPER DOCUMENTATION
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            If you work in the U.S. without valid papers, we help you become tax
            compliant by obtaining an ITIN and fixing past tax filings to ensure
            you meet your tax duties.
          </p>

          <h1
            id="taxpayers"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            Resolving Tax Problems
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            If you face tax issues with the IRS or state authorities, we
            represent you and help resolve problems. Whether simple or complex,
            we guide you professionally through the process.
          </p>
        </div>
      </div>
    </>
  );
}
