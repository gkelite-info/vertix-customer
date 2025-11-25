export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 gap-6 pb-10 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="h-auto w-full flex flex-col items-center mt-6 lg:h-[20%] lg:w-[45%] lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            REIT
          </h1>
        </div>

        <div className="w-full flex flex-col gap-6 lg:w-[90%] lg:mt-10 lg:flex-row">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-3">
              A real estate investment trust (REIT) is a company that owns, and
              in most cases, operates income-producing real estate. REITs own
              many types of commercial real estate, ranging from office and
              apartment buildings to warehouses, hospitals, shopping centres,
              hotels and even timberlands. Some REITs also engage in financing
              real estate. The REIT structure was designed to provide a real
              estate investment structure similar to the structure mutual funds
              provide for investment in stocks.[1] REITs can be publicly or
              privately held. Public REITs may be listed on public stock
              exchanges. REITs can be classified as equity, mortgage, or a
              hybrid.
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              REIT’s in India As of January 2010, India was formulating
              legislation for REITs in the Indian real estate market. Once
              introduced, these Indian REITs (country specific/generic version
              I-REITs) will help individual investors enjoy the benefits of
              owning an interest in the securitised real estate market. The
              greatest benefit will be that of fast and easy liquidation of
              investments in the real estate market unlike the traditional way
              of disposing of real estate. The government and Securities and
              Exchange Board of India through various notifications is in the
              process of making it easier to invest in real estate in India
              directly and indirectly through foreign direct investment, through
              listed real estate companies and mutual funds. In the budget of
              2014, finance minister Arun Jaitley has introduced a law for
              setting up of REITs.
            </p>
          </div>

          <div className="w-full flex justify-center lg:w-[40%]">
            <img
              src="/reit.jpg"
              alt="reit"
              className="h-auto w-[90%] rounded-lg lg:h-[100%] lg:w-[74%]"
            />
          </div>

        </div>

        <div className="w-full lg:w-[90%]">
          <p className="text-[#1C2A46] text-sm mt-3">
            REIT’s in US Under U.S. Federal income tax law, a REIT is “any
            corporation, trust or association that acts as an investment agent
            specializing in real estate and real estate mortgages“ under
            Internal section 856.[44] The rules for federal income taxation of
            REITs are found primarily in Part II (sections 856 through 859) of
            Subchapter M of Chapter 1 of the Internal Revenue Code. Because a
            REIT is entitled to deduct dividends paid to its owners (commonly
            referred to as shareholders), a REIT may avoid incurring all or part
            of its liabilities for U.S. federal income tax. To qualify as a
            REIT, an organization makes an “election“ to do so by filing a Form
            1120-REIT with the Internal Revenue Service, and by meeting certain
            other requirements. The purpose of this designation is to reduce or
            eliminate corporate tax, thus avoiding double taxation of owner
            income. In return, REITs are required to distribute at least 90% of
            their taxable income into the hands of investors.
          </p>

          <p className="text-[#1C2A46] text-sm mt-3">
            Because of their access to corporate-level debt and equity that
            typical real estate owners cannot access, REITs have a favourable
            capital structure. They are able to use this capital to finance
            tenant improvement costs and leasing commissions that less
            capitalized owners cannot afford.
          </p>
        </div>
      </div>
    </>
  )
}