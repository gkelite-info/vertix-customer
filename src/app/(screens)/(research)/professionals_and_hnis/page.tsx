"use client";

import {
  ChartLineUp,
  HandCoins,
  Buildings,
  TreeStructure,
  CurrencyCircleDollar,
  Globe,
} from "@phosphor-icons/react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[65%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit text-center">
            Strategic Tax Solutions for Global Professionals and HNIs
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 lg:w-[60%] lg:pt-5 lg:pr-7 lg:flex lg:flex-wrap lg:gap-5">
            <a
              href="#ftc"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <ChartLineUp
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-center text-sm font-semibold mt-2">
                  Foreign Tax Credit Optimization
                </h3>
              </div>
            </a>

            <a
              href="#estate"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <TreeStructure
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  Estate & Gift Tax Planning
                </h3>
              </div>
            </a>

            <a
              href="#pfic"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <CurrencyCircleDollar
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  PFIC Investment Strategies
                </h3>
              </div>
            </a>

            <a
              href="#charity"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <HandCoins
                    size={28}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  Advanced Charitable Giving
                </h3>
              </div>
            </a>

            <a
              href="#realestate"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <Buildings
                    size={26}
                    weight="fill"
                    className="text-[#1D2B48]"
                  />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold text-center mt-2">
                  1031 Exchange & Deferral
                </h3>
              </div>
            </a>

            <a
              href="#trusts"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full lg:h-[35%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center justify-around p-4 rounded-xl lg:h-[100%] lg:w-[100%] lg:p-5">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center">
                  <Globe size={28} weight="fill" className="text-[#1D2B48]" />
                </div>
                <h3 className="text-[#1D2B48] text-sm font-semibold mt-2 text-center">
                  Trust Income & Foreign Reporting
                </h3>
              </div>
            </a>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/professionals_and_hnis.jpg"
              alt="Global Tax Strategy"
              className="h-auto w-[90%] rounded-lg object-cover lg:h-[100%] lg:w-[74%]"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <h1
            id="ftc"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            1. FOREIGN TAX CREDIT OPTIMIZATION FOR GLOBAL INVESTORS
          </h1>
          <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
            High-net-worth NRIs and dual residents often pay taxes in multiple
            countries. The U.S. Foreign Tax Credit (FTC) allows taxpayers to
            offset U.S. tax with foreign taxes paid. But strategic allocation
            across general limitation income vs passive category income,
            carrybacks, and carryforwards can drastically reduce effective tax
            rates. Advanced planning helps avoid double taxation and ensures
            maximum credit utilization without triggering AMT or PFIC rules.
          </p>

          <h1
            id="estate"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            2. ESTATE & GIFT TAX PLANNING FOR CROSS-BORDER FAMILIES
          </h1>
          <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
            U.S. citizens and domiciliaries face estate taxes on worldwide
            assets, while NRAs are taxed only on U.S. situs property.
            High-net-worth individuals can use foreign grantor trusts, QDOTs,
            and lifetime exemptions ($13.61M in 2024) to minimize estate
            exposure. Strategic gifting to non-resident spouses, valuation
            discounts, and trust layering create intergenerational wealth
            transfer efficiency.
          </p>

          <h1
            id="pfic"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            3. PASSIVE FOREIGN INVESTMENT COMPANY (PFIC) STRATEGIES
          </h1>
          <p className="mt-2 text-[#1C2A46] text-sm lg:text-sm">
            Many Indian mutual funds and foreign holdings are treated as PFICs
            under U.S. law, leading to harsh taxation and interest charges. HNIs
            with offshore portfolios can use Qualified Electing Fund (QEF) or
            Mark-to-Market elections to simplify reporting and reduce tax drag.
            Proper PFIC classification and tracking prevent unexpected Form 8621
            penalties and optimize long-term capital gains.
          </p>

          <h1
            id="charity"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            4. ADVANCED CHARITABLE GIVING & DONOR-ADVISED FUNDS
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            Philanthropy and tax planning often align for HNIs. Contributions to
            Donor-Advised Funds (DAFs) allow immediate deduction while retaining
            control over grant distribution. Appreciated assets donated instead
            of cash avoid capital gains tax. Combining DAFs with estate planning
            or business exit strategies creates both legacy and liquidity
            benefits.
          </p>

          <h1
            id="realestate"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            5. 1031 EXCHANGE & REAL ESTATE TAX DEFERRAL TECHNIQUES
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            Real estate investors use Section 1031 exchanges to defer capital
            gains by reinvesting proceeds into “like-kind” property. Advanced
            investors pair this with Delaware Statutory Trusts (DSTs) for
            passive ownership, or integrate 721 UPREIT conversions for
            tax-efficient liquidity. Proper structuring avoids boot and
            maximizes reinvestment potential.
          </p>

          <h1
            id="trusts"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            6. TRUST INCOME TAXATION & FOREIGN GRANTOR TRUST REPORTING
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            HNIs frequently use foreign trusts for asset protection and
            succession. The U.S. tax code requires granular reporting on Form
            3520/3520-A and applies complex income attribution rules. Planning
            involves distinguishing between grantor vs non-grantor status,
            beneficiary distributions, and foreign tax credit coordination. A
            well-structured trust ensures compliance while maintaining estate
            efficiency.
          </p>

          <h1
            id="expatriation"
            className="text-[#1C2A46] font-semibold mt-8 scroll-mt-18 md:scroll-mt-20 lg:scroll-mt-30"
          >
            7. EXIT TAX & EXPATRIATION PLANNING
          </h1>
          <p className="mt-3 text-[#1C2A46] text-sm lg:text-sm">
            U.S. citizens and long-term green card holders renouncing their
            status may face the mark-to-market exit tax under IRC §877A.
            Pre-expatriation planning with gain recognition exclusion, trust
            restructuring, and gifting before expatriation can significantly
            reduce liabilities. Timing and valuation of appreciated assets are
            crucial to avoid unintended tax consequences.
          </p>
        </div>
      </div>
    </>
  );
}
