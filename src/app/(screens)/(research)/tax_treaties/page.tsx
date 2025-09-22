"use client"

import Image from "next/image"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2 lg:pb-10">
        <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[25%]">
            TAX TREATIES
          </h1>
        </div>
        <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
          <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              India-US Tax Treaty Agreement In order to provide tax relief to
              avoid double taxation, various countries have entered into Double
              Taxation Avoidance Agreements (Tax Treaty). One of the ways to
              avoid double taxation is by way of an exemption from tax in the
              source country where the income is accrued or received.
            </p>
            <h1 className="text-[#1C2A46] font-medium lg:mt-8">
              For Indian Students in US:
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Article 21 of the treaty stipulates that residents of India who
              are in the United States to study do not need to pay U.S. income
              tax on any payments received from India (or other country outside
              the U.S.) for the purposes of maintenance, education or training.
              Thus, payments received from U.S. sources (such as a scholarship
              or assistantship from The University of Tennessee) are taxable. As
              most international students are considered
              &quot;nonresidents&quot; for tax purposes, they are already exempt
              from U.S. income tax from income that comes from outside the U.S.
              Thus, most Indian students will be required to pay income tax on
              all U.S. income. However, students (not scholars) from India,
              unlike other non-residents, may choose to claim the standard
              deduction, instead of itemizing deductions*.
            </p>
          </div>
          <div className="lg:w-[40%] bg-red-00 flex justify-center">
            <Image
              src="/aboutpage.png"
              width={1200}
              height={800}
              alt="aboutpage.png"
              className="lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
            {/* <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" /> */}
          </div>
        </div>
        <div className="bg-green-00 lg:w-[90%]">
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">
            In addition, F-1 and J-1 students may claim an exemption for each
            spouse or dependent child who meets the following criteria:
          </h1>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            a) is living with the student in the U.S. during the tax year
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            b) is not claimed as dependent by another taxpayer
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            c) does not have any gross income in the U.S.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            d) if not a spouse, does not hold F-2 or J-2 immigration status (a
            spouse who meets criteria a-c may be claimed as a dependent)
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            e) a U.S. citizen child.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            * In most cases, claiming the standard deduction will result in
            lower taxes than itemizing deductions.)
          </p>
          <h1 className="text-[#1C2A46] font-medium lg:mt-8">
            Dependent Personal Services:
          </h1>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Article 16, available to aliens which prerequisites to obtaining
            U.S. income tax treaty exemption for remuneration with respect to
            “dependent personal services” performed in the United States if both
            the alien and the payer (employer) are “residents” of the other
            country. Many income tax treaties include a definition of
            “residence,” usually by referencing the domestic laws of each
            country. To be a resident of a country according to that country’s
            laws, treaties generally provide that a person must be “liable to”
            or “subject to” tax in that country. However, a few treaties merely
            require that the person be a resident for purposes of that country’s
            domestic laws.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            An individual who is paid for a temporary assignment in the U.S. by
            a foreign employer but whose remuneration is charged to the U.S.
            branch or subsidiary may not qualify for treaty exemption because
            the remuneration is charged back to or reimbursed by a U.S. entity.
            Payments received by Professors, Teachers and Research Scholars:
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Article 22, An individual who visits a Contracting State for a
            period not exceeding two years for the purpose of teaching or
            engaging in research at a university, college or other recognized
            educational institution in that State, and who was immediately
            before that visit a resident of the other Contracting State, shall
            be exempted from tax by the first-mentioned Contracting State on any
            remuneration for such teaching or research for a period not
            exceeding two years from the date he first visits that State for
            such purpose.
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            This Article shall apply to income from research only if such
            research is undertaken by the individual in the public interest and
            not primarily for the benefit of some other private person or
            persons.
          </p>
        </div>
      </div>
    </>
  )
}
export default Page
