export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto 
                      px-4 gap-6 pb-10 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 w-full flex flex-col items-center lg:h-[20%] lg:w-[45%] lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 
                         text-[#1D2B48] text-xl font-bold 
                         w-fit text-center lg:w-fit">
            UNREIMBURSED EXPENSES
          </h1>
        </div>

        <div className="w-full mt-4 flex flex-col gap-4 
                        lg:w-[90%] lg:mt-10 lg:flex-row">

          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-0">
              The term “tax home” generally means the location of a taxpayer’s
              regular or principal place of business. Temporary presence or the
              maintenance of a dwelling in the United States does not
              necessarily mean that the individual’s tax home is in the United
              States.
            </p>
            <p className="text-[#1C2A46] text-sm mt-3">
              this holds true regardless of whether this dwelling is used by the
              individual’s spouse and dependents. The Internal Revenue Service
              has issued a Rev. Rul. 93-86.which establishes guidelines for
              determining whether a work assignment away from the taxpayer’s
              regular place of employment is temporary (so that his or her tax
              home is maintained) or is indefinite (so that the old tax home is
              relinquished).
            </p>
            <p className="text-[#1C2A46] text-sm mt-3">
              The courts and the Service have held that employment is temporary
              for this purpose only if its termination can be foreseen within a
              reasonably short period of time.
            </p>
            <p className="text-[#1C2A46] text-sm mt-3">
              Employment that is initially temporary may become indefinite due
              to changed circumstances. Neither the Service nor the courts have
              attempted to prescribe any specific criteria delineating the
              dividing line between the itinerant taxpayer who has his
              &ldquo;home&ldquo; wherever he is working, and the taxpayer who
              because of the nature of his business, has no regular or principal
              place of business but does have a &ldquo;regular place of abode in
              a real and substantial sense.&ldquo;
            </p>

             <p className="text-[#1C2A46] text-sm mt-3">
            The Service will recognize that a taxpayer has a &ldquo;home&ldquo;
            for traveling expense deduction purposes if he claims an abode and,
            under bona fide circumstances, satisfies all three objective factors
            set forth in the preceding paragraph. If a tax-payer is not
            recognized as having a &ldquo;home&ldquo; by virtue of the above,
            but does, under bona fide circumstances, satisfy two of the three
            objective factors set forth in the preceding paragraph, then all the
            facts and circumstances of his case will be subjected to close
            scrutiny to determine whether he has a &ldquo;home&ldquo; for
            traveling expense deduction purposes in the form of a regular place
            of abode in a real and substantial sense, or whether he is an
            itinerant.
          </p>

          </div>

          <div className="w-full flex justify-center 
                          lg:w-[40%] lg:justify-center">
            <img
              src="/unreimbursed_expenses.jpg"
              alt="unreimbursed_expenses.jpg"
              className="w-full h-auto rounded-lg 
                         lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">
          <p className="text-[#1C2A46] text-sm mt-0">
            Not all foreign nationals who accept a U.S. assignment establish a
            tax home in the U.S. In those cases where a U.S. tax home is not
            established, the individual is treated for tax purposes as being on
            a “temporary assignment” in the U.S. A temporary assignment is
            defined as an assignment where the tax home (principal place of work
            or employment) does not change. If the intent of the assignment is
            to return to the original work location within one year, the
            assignment is considered a temporary assignment (all other
            assignments are considered indefinite or long-term).
          </p>
          <p className="text-[#1C2A46] text-sm mt-3">
            The tax advantage of a temporary assignment is that
            employer-provided benefits such as lodging, meals, travel, and
            certain other items related to the assignment might not be (if
            properly structured) considered taxable wages to the employee. In
            the case of a long-term assignment, these items are typically
            considered taxable wages.
          </p>
          <p className="text-[#1C2A46] text-sm mt-3">
            If these expenses are not paid or reimbursed by the employer, the
            individual might be allowed to deduct those costs related to the
            assignment (lodging, meals, transportation, etc.) as an itemized
            deduction (subject to certain limitations).
          </p>
        </div>
      </div>
    </>
  );
}