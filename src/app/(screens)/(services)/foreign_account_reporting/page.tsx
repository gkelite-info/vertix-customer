"use client"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit lg:w-[63%]">
            Foreign Account Reporting (FBAR)
          </h1>
        </div>
        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              U.S. taxpayers, whether a resident for tax purposes, a permanent
              resident or a citizen, are required by law to report all gross
              income from foreign sources on their U.S. tax return. It doesn’t
              make any difference where you live or whether you have to file a
              tax return in another country. The IRS considers worldwide income
              in calculating taxable income and income tax liability. There are
              treaty benefits and tax laws that may be used on your U.S. tax
              return to reduce or offset your U.S. income tax or to reduce your
              U.S. taxable income.
            </p>

            <h1 className="text-[#1C2A46] font-semibold mt-4 lg:mt-8">
              FinCEN 114, commonly called the FBAR
            </h1>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              You are also required, if you cross a certain threshold of an
              aggregate balance in your foreign financial accounts, to file an
              annual disclosure report with FinCEN (the harmless sounding
              acronym for Financial Crimes Enforcement Network). The report is
              called the FinCEN 114, commonly known as an FBAR. The disclosure
              must be electronically filed using the FinCEN filing system. I
              does not accompany a tax return. The due date is June 30 of the
              year following the year you are reporting. For example, the 2015
              FinCEN 114 will be due on June 30, 2016.
            </p>
          </div>

          <div className="w-full mt-6 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/outside_accounts.jpg"
              alt="outside_accounts.jpg"
              className="
                h-auto w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The FinCEN instructions for filing the FinCEN 114
            (https://www.fincen.gov/forms/files/FBAR%20Line%20Item%20Filing%20Instructions.pdf)
            explains the rules and regulations for who has to file, how it is
            filed, what has to be reported and when it is due.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Judy Coker, EA, CAA has been assisting taxpayers with FBAR and
            FinCEN 114 filings for several years using the Bank Secrecy Act
            Filing (BSAF) efile system. Please let us know if you need our help.
          </p>

          <h1 className="text-[#1C2A46] font-semibold mt-4 lg:mt-8">
            Form 8938, the FATCA Form
          </h1>

          <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
            In addition to the FinCEN 114, you may also have a requirement to
            disclose certain foreign assets with your tax return using Form
            8938. The rules and regulations for Form 8938 often reports the same
            accounts, but has additional information or supplemental forms
            depending upon the type of foreign assets you own. The FATCA laws
            and global cooperation with the U. S. Department of the Treasury are
            rapidly developing. The Treasury Department is entering into
            agreements with foreign countries to share information about
            taxpayers holding financial assets in their respective countries.
            The information shared between countries varies from country to
            country. The Treasury Department has published a list of countries
            (http://www.treasury.gov/resource-center/tax-policy/treaties/Pages/FATCA-Archive.aspx)
            with which it has agreements. You should follow the tax laws about
            reporting worldwide income and financial accounts even if your
            country is not listed.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The instructions for Form 8938
            (https://www.irs.gov/pub/irs-pdf/i8938.pdf) has detailed information
            about who has to file the form, what type of financial accounts must
            be reported and more.
          </p>

          <h1 className="text-[#1C2A46] font-semibold mt-4 lg:mt-8">
            Foreign Currency Exchange
          </h1>

          <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
            The way that foreign currency amounts are converted to US dollars is
            often confusing as Form 8939 and FinCEN 114 require that you use the
            US Treasury rate of exchange for the last day of the tax year. The
            rates are published on the Bureau of Fiscal Service website.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            (https://www.fiscal.treasury.gov/fsreports/rpt/treasRptRateExch/treasRptRateExch_home.htm)
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            The IRS doesn’t have any specifically prescribed exchange rate for
            income you receive from a foreign source. The same applies to
            deductions and valuation of assets for purposes of depreciation.
            However there are recommendations for what exchange source and the
            advisable timing. Here is an excerpt from the IRS website: ” The
            Internal Revenue Service has no official exchange rate. Generally,
            it accepts any posted exchange rate that is used consistently. When
            valuing currency of a foreign country that uses multiple exchange
            rates, use the rate that applies to your specific facts and
            circumstances. Use the exchange rate prevailing when you receive,
            pay, or accrue the item. If there is more than one exchange rate,
            use the one that most properly reflects your income.” 
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            As you may guess, challenges can arise in tax return preparation due
            to the fluctuation in exchange rates.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
