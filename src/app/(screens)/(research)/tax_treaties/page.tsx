export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:mt-10 lg:h-[20%] lg:w-[45%] flex flex-col items-center">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            TAX TREATIES
          </h1>
        </div>

        <div className="w-full mt-6 lg:mt-10 flex flex-col lg:flex-row lg:w-[90%]">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-3">
              India-US Tax Treaty: Avoid Double Taxation & Maximize Benefits
              The India-US Tax Treaty helps Indian residents working, studying, or researching in the U.S.
              avoid double taxation on the same income. This ensures you pay tax only where required
              and can claim exemptions or deductions under the treaty.
            </p>

            <h1 className="text-[#1C2A46] font-medium mt-6 md:mt-4 lg:mt-5">
              For Indian Students in US:
            </h1>

            <p className="text-[#1C2A46] text-sm mt-3">
              Scholarships & Stipends from India: Payments received from India (or any country outside
              the U.S.) for education, maintenance, or training are generally exempt from U.S. tax under
              Article 21.<br className="hidden sm:inline" />
              U.S. Income: Payments received from U.S. sources, like scholarships or assistantships
              from a university, are taxable.<br className="hidden sm:inline" />
              Nonresident Status: Most international students are considered nonresidents for U.S. tax
              purposes, so foreign-source income is usually tax-free.<br className="hidden sm:inline" />
              Standard Deduction: Unlike other nonresidents, Indian students may claim the standard
              deduction instead of itemizing, which often results in lower taxes.<br className="hidden sm:inline" />
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              Dependent Exemption:
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              F-1 and J-1 students can claim exemptions for spouses or dependent children if they:
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              Live with the student in the U.S. during the tax year<br className="hidden sm:inline" />
              Are not claimed as dependents by another taxpayer<br className="hidden sm:inline" />
              Do not have any U.S. gross income<br className="hidden sm:inline" />
              Are not on F-2 or J-2 visas (except spouses meeting the above criteria)<br className="hidden sm:inline" />
              Are U.S. citizen children<br className="hidden sm:inline" />
            </p>

            <p className="text-[#1C2A46] font-semibold text-sm mt-3">
              Dependent Personal Services (Article 16)
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              Provides treaty exemption for income from work performed in the U.S. if both the employee
              and employer are residents of the other treaty country.<br className="hidden sm:inline" />
              Residence is defined by the domestic laws of each country — generally meaning the
              person is liable to pay tax in that country.<br className="hidden sm:inline" />
              Important: If a foreign employer’s U.S. branch reimburses or charges back the U.S. income,
              the exemption may not apply.<br className="hidden sm:inline" />
            </p>

            <p className="text-[#1C2A46] font-semibold text-sm mt-3">
              Professors, Teachers & Research Scholars (Article 22)
            </p>

            <p className="text-[#1C2A46] text-sm mt-3">
              Exempts remuneration from U.S. tax for teaching or research at a recognized educational
              institution for up to two years.<br className="hidden sm:inline" />
              Research income qualifies only if undertaken in the public interest, not primarily for private
              gain.<br className="hidden sm:inline" />
            </p>

             <p className="text-[#1C2A46] font-semibold text-sm mt-3">
              Why This Matters:
             </p>
              
              <p className="text-[#1C2A46] text-sm mt-3">
                Helps you reduce U.S. taxes legally<br className="hidden sm:inline" />
                Prevents double taxation on your Indian and U.S. income<br className="hidden sm:inline" />
                Ensures you claim all exemptions and deductions available under the treaty<br className="hidden sm:inline" />
                Vertix Tax Solutions guides Indian students, professionals, and researchers in the U.S. to maximize treaty benefits and stay fully compliant with IRS rules.
              </p>

          </div>

          <div className="w-full mt-5 lg:mt-0 lg:w-[40%] flex justify-center">
            <img
              src="/tax_treaties.jpg"
              alt="tax_treaties.jpg"
              className="w-full h-fit max-w-[350px] lg:max-w-none lg:h-fit lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
