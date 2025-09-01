'use client';


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[7%]">ITIN</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">How a Person Applies</h1>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">A person applies for an ITIN using Form W-7. The documentation requirements are essentially the same as before. The submission of the application is a bit different. The applications have to be submitted either in person or through the mail. In-person applications may be submitted to either an employee of the IRS authorized to review and accept applications or a community-based certified acceptance agent approved by the IRS. The procedure for mailed in applications appears, at this time, to be unchanged.</p>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">There are going to be customer service issues for those who go to an IRS office in person. There are reduced service levels and reduced staff at nearly all of the IRS Taxpayer Assistance Centers due to budget cuts.</p>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">If the person lives outside the United States, in-person applications may be submitted to an authorized employee of the IRS or a designee of the IRS at a diplomatic mission or consular post. The IRS is also authorized to establish procedures to accept overseas applications via mail.</p>
                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
                <div className="bg-green-00 lg:w-[90%]">
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Expiration of an ITIN</h1>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">ITINs issued before 2013 will expire, unless they are timely renewed, according to a staggered schedule between 2017 and 2020.</p>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">If the ITIN was issued before 2008, it is no longer valid as of January 1, 2017. An application for a new ITIN will need to be submitted with the 2016 tax return.</p>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">Any tax returns filed with an invalid ITIN will be automatically adjusted by the IRS using its Math Error Notice powers. This will likely cause delays in the processing of returns prior to a refund being issued and the refunds being reduced. The taxpayer has a very short window to disagree with the Math Error Notice and should carefully and timely follow the instructions in the Notice or seek the services of an Enrolled Agent for assistance or representation. You have 30 days from the date of the Notice to disagree.</p>
                    <ol className="list-disc lg:mt-2 lg:ml-8">
                        <li className="text-[#1C2A46] text-sm">If the ITIN was issued in 2008, it expires on January 1, 2018.</li>
                        <li className="text-[#1C2A46] text-sm">If the ITIN was issued in 2009 or 2010, it expires on January 1, 2019.</li>
                        <li className="text-[#1C2A46] text-sm">If the ITIN was issued in 2011 or 2012, it expires on January 1, 2020.</li>
                    </ol>

                    <p className="text-[#1C2A46] text-sm lg:mt-3">If an ITIN was issued in 2013 or later years, the ITIN will expire if not used on a Federal income tax return for a period of three consecutive taxable years. The expiration date would be December 31 of the third consecutive year. (The previous law was that an ITIN would be deactivated only if the ITIN was not used during any tax year for a period of five consecutive years.)</p>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">Child Tax Credit and the American Opportunity Credit</p>

                    <p className="text-[#1C2A46] text-sm lg:mt-3">Prior to the enactment of the PATH Act, a taxpayer could use an ITIN issued in the current year to claim the child tax credit or the American Opportunity credit on a prior year amended tax return or a late-filed original tax return. That is no longer allowed as of December 18, 2015. A timely filed current year tax return with an ITIN application still allows the child tax credit and the American Opportunity Credit for the 2015 tax period going forward.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Earned Income Tax Credit</h1>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">Taxpayers that have an ITIN for any person on the tax return have never been able to claimed Earned Income Tax Credit (EITC). However, if the person with the ITIN became eligible for a Social Security Number and obtained one, amended returns could be filed to claim the EITC. That is no longer allowed.</p>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">Penalties for Improper Claims of Refundable Credits There have always been penalties to the taxpayer who had been convicted of fraud or who had been found to have recklessly or intentionally disregarded the rules for claiming the Earned Income Tax Credit. This has been expanded to include the Child Tax Credit and the American Opportunity Tax Credit. This expansion starts with the 2016 tax year.</p>
                    <p className="text-[#1C2A46] text-sm lg:mt-3">An accuracy related penalty of 20% of the understatement of income tax due on a tax return will, beginning with 2016 tax returns, apply in cases of erroneous claims for these tax credits. The exception to the penalty for erroneous refunds has been eliminated. Reasonable cause relief is still applicable.</p>

                </div>

            </div>
        </>
    )
}
export default Page