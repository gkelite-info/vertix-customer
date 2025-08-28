'use client';

import { Airplane, Briefcase, Buildings, Globe, Handshake, IdentificationCard, Note, Star, User, Users, UsersThree, WarningCircle } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[27%]">Individual Tax</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7 flex flex-wrap lg:gap-5">
                        <a href="#individuals" className="lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                            <div className="bg-red-00 flex flex-col items-center justify-around lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                                <div className="bg-blue-200 lg:p-2 lg:h-[49%] lg:w-[35%] lg:rounded-full flex justify-center items-center">
                                    <User size={28} weight="fill" className="text-[#1D2B48]" />
                                </div>
                                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                                    <h3 className="text-[#1D2B48] font-semibold">Individuals</h3>
                                </div>
                            </div>
                        </a>
                        <a href="#entrepreneurs" className="lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                            <div className="bg-red-00 flex flex-col items-center justify-around lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                                <div className="bg-blue-200 lg:p-2 lg:h-[49%] lg:w-[35%] lg:rounded-full flex justify-center items-center">
                                    <UsersThree size={28} weight="fill" className="text-[#1D2B48]" />
                                </div>
                                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                                    <h3 className="text-[#1D2B48] font-semibold">Entrepreneurs</h3>
                                </div>
                            </div>
                        </a>
                        <a href="#visaworkers" className="lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                            <div className="bg-red-00 flex flex-col items-center justify-around lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                                <div className="bg-blue-200 lg:p-2 lg:h-[49%] lg:w-[35%] lg:rounded-full flex justify-center items-center">
                                    <Briefcase size={28} weight="fill" className="text-[#1D2B48]" />
                                </div>
                                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                                    <h3 className="text-[#1D2B48] font-semibold">Guest workers</h3>
                                </div>
                            </div>
                        </a>
                        <a href="#permanentresidants" className="lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                            <div className="bg-red-00 flex flex-col items-center justify-around lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                                <div className="bg-blue-200 lg:p-2 lg:h-[49%] lg:w-[35%] lg:rounded-full flex justify-center items-center">
                                    <IdentificationCard size={28} weight="fill" className="text-[#1D2B48]" />
                                </div>
                                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                                    <h3 className="text-[#1D2B48] font-semibold text-center">Green card holders</h3>
                                </div>
                            </div>
                        </a>
                        <a href="#taxpayers" className="lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                            <div className="bg-red-00 flex flex-col items-center justify-around lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                                <div className="bg-blue-200 lg:p-2 lg:h-[49%] lg:w-[35%] lg:rounded-full flex justify-center items-center">
                                    <Airplane size={26} weight="fill" className="text-[#1D2B48]" />
                                </div>
                                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                                    <h3 className="text-[#1D2B48] font-semibold text-center">U.S. citizens abroad</h3>
                                </div>
                            </div>
                        </a>
                        <a href="#irregularworkers" className="lg:h-[35%] lg:w-[30%] lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                            <div className="bg-red-00 flex flex-col items-center justify-around lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg hover:shadow-xl cursor-pointer">
                                <div className="bg-blue-200 lg:p-2 lg:h-[49%] lg:w-[35%] lg:rounded-full flex justify-center items-center">
                                    <WarningCircle size={28} weight="fill" className="text-[#1D2B48]" />
                                </div>
                                <div className="bg-yellow-00 lg:h-[30%] lg:w-full flex justify-center items-center">
                                    <h3 className="text-[#1D2B48] font-semibold">Irregular workers</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
                <div className="bg-green-00 lg:w-[90%]">
                    <h1 id="individuals" className="text-[#1C2A46] font-medium lg:scroll-mt-30 lg:mt-10">Representation is different than assistance.</h1>
                    <p className="text-[#1C2A46] lg:text-sm lg:mt-2">Assistance is when we review information and advise you on what needs to be done. It is then your responsibility to communicate with the IRS or state taxing authority and to provide them with any required documents or information. We provide this service for our tax clients as part of our standard guarantee. Engagement Agreements are beneficial so that everyone understands the scope of the assignment, level of services, the cost and expectations of each party.</p>
                    <p className="text-[#1C2A46] text-md lg:mt-3">We give clients, during the tax preparation process, the option to purchase an audit assistance plan through Protection Plus Audit Assistance that offers additional benefits to clients. We will tell you more about it when we are reviewing your tax return together.</p>
                    <p className="text-[#1C2A46] text-md lg:mt-3">Representation is when you hire us to act on your behalf and deal directly with the IRS or state to resolve tax issues. We will ask you to sign an Engagement Agreement, pay a retainer for services, and sign an authorization to allow us to receive information from the IRS about your tax account. We may ask you to sign a Power of Attorney, as well. This is a fee paid service for both clients and non-clients.</p>


                    <h1 id="entrepreneurs" className="text-[#1C2A46] font-medium lg:mt-8 lg:scroll-mt-25">Late filed tax returns</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">We help people get caught up on their tax filing responsibilities. It is a complicated process, especially if you haven’t filed tax returns for a significant number of years or the IRS or state have assessed tax due based upon information received from third party reporting. This issue often comes with additional IRS and state income tax problems.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Filing late return tax returns can come with a host of other tax issues, including both civil and</p>

                    <h1 id="visaworkers" className="text-[#1C2A46] font-medium lg:mt-8">Notices from IRS or States</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">The IRS and state taxing authorities use computer matching programs that help them match income and some tax credit information they receive third parties with what was reported on your tax return. A computer generated notice is sent to you if there is a mismatch of information. Sometimes a human looks at the notice before it is sent out, most of the time only the computer knows.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">All of the notices have numbers assigned to them. For example, the IRS mismatch notice is called a CP2000. The notices can be confusing for a layperson, even though the IRS is working to make them easier to understand.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">A listing of IRS notices can be found on the IRS website. https://www.irs.gov/Individuals/Understanding-Your-IRS-Notice-or-Letter</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Please, please, please consult with an Enrolled Agent before you assume that the IRS notice or calculations are correct!. Remember, a computer may have generated the notice–not a human being. Also, the IRS may make adjustments to your tax return that could affect your claimed tax credits, deductions or dependents. These adjustments, if ignored or misunderstood, could cause problems for you in past year returns, state tax returns, or future year tax filings. Don’t take any chances, don’t sign any documents or send any money unless you understand what you are doing.</p>



                    <h1 id="permanentresidants" className="text-[#1C2A46] font-medium lg:mt-8 lg:scroll-mt-25">Paying balances due</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Owing money to the IRS or state taxing authority is stressful, painful and, if you can’t pay them off, very scary. The governments have powers to take money, seize property, encumber your property for unpaid taxes and create problems with selling property or obtaining credit. They add interest and late payment penalty each month to your tax debt. Here are a few of the ways we can help you resolve your tax debt with the IRS or a state department of revenue:</p>
                    <ol className="list-disc lg:mt-2 lg:ml-8">
                        <li className="text-[#1C2A46] text-sm">Installment Agreements, full pay or partial pay, short term or long term;</li>
                        <li className="text-[#1C2A46] text-sm">Collection Levies and Liens, read our articles about levies or liens for more information;</li>
                        <li className="text-[#1C2A46] text-sm">Currently Not Collectible, stop collections until your financial situation improves;</li>
                        <li className="text-[#1C2A46] text-sm">Offers In Compromise, settle for less than what you owe;</li>
                        <li className="text-[#1C2A46] text-sm">Statute of Limitations, the legal date when you no longer have to pay a tax debt;</li>
                        <li className="text-[#1C2A46] text-sm">Penalty Abatement, when the IRS or state removes penalties from your tax debt;</li>
                        <li className="text-[#1C2A46] text-sm">Custom Solutions, there are other ways to resolve a tax debt, such as Audit Reconsideration or correcting previously filed returns and combinations of solutions.</li>
                    </ol>

                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">We help taxpayers after a consultation where you get to know us, we get to know you and learn some facts about your situation. We follow a two step process in tax debt resolution.</p>

                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">1. A FREE one hour consultation is the first step. We proceed with steps two and three if you hire us to represent you.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">2. The second step is the discovery phase. This is when we learn more of the facts and circumstances of your tax problem and your financial and personal situation. We will gather information from you, the IRS, and/or the state tax department. We will devise a tax debt resolution plan for us to review together.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">3. The third step is when you decide which pathway of tax problem solving you want to follow and we implement it. The cost of late filed tax returns, if part of the plan, is included with the fee for this step. We will quote a flat fee for each step and ask that you agree to an Engagement Agreement detailing the terms of our representation and the payment of the fee for each step.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Unlike some of the other tax resolution services, we will help you if you owe less than $10,000.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Audits</p>

                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">There are several types of audits:</h1>
                    <ol className="list-disc lg:mt-2 lg:ml-8">
                        <li className="text-[#1C2A46] text-sm">Correspondence where the IRS or state ask that you mail or fax them documents and fill out questionnaires;</li>
                        <li className="text-[#1C2A46] text-sm">In-person where they ask you to bring your documents to an IRS office to meet with a Tax Examiner;</li>
                        <li className="text-[#1C2A46] text-sm">The IRS agent visits you;</li>
                        <li className="text-[#1C2A46] text-sm">A computer can’t match third party reporting with what you have on your tax return (CP2000). We provide full-service representation for taxpayers being audited.</li>
                    </ol>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Appeals</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">There are several avenues to appeal an IRS determination, depending upon the issues and the time that has passed since notices were sent to you. We offer representation to taxpayers who are eligible to appeal an IRS notice, lien or levy.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Tax Court</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">We are not licensed to represent taxpayers in Tax Court. We do refer people to Enrolled Agents who are licensed to practice in U.S. Tax Court or to tax attorneys. Timing is of the essence in pursuing tax court remedies! The U.S. Tax Court has information for taxpayers on it’s website.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">We are not licensed to represent taxpayers in Tax Court. We do refer people to Enrolled Agents who are licensed to practice in U.S. Tax Court or to tax attorneys. Timing is of the essence in pursuing tax court remedies! The U.S. Tax Court has information for taxpayers on it’s website.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">We are not licensed to represent taxpayers in Tax Court. We do refer people to Enrolled Agents who are licensed to practice in U.S. Tax Court or to tax attorneys. Timing is of the essence in pursuing tax court remedies! The U.S. Tax Court has information for taxpayers on it’s website.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Our hourly rate for representation is $125 per hour if we didn’t prepare your tax return. Representation services for our tax clients are offered at a reduced rate.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">The fee for collection representation or preparing late filed tax returns is quoted on a flat fee basis depending upon the level of service and the pathways required to resolve the tax problem. Costs for copying, mailing, research, travel or transportation, or other out-of-pocket costs are billed separately from the retainer. We may ask for a deposit to cover anticipated costs at the time you engage our services.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Retainers and deposits for anticipated costs are requested and placed into a holding bank account. Once we have issued a bill for our time (usually once every 30 days), the balance is transferred from the holding bank account into our general business account. Unused retainers are refunded to the client, less outstanding unbilled time and costs advanced on your behalf. We may request an additional retainer with an explanation of what we need it for if the balance in your retainer account drops below a certain level or is depleted.</p>
                    
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Resources</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Correspondence Audits: IRS Publication 3498-A </p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Audits/Examinations: IRS Publication 556 </p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">IRS Fast Track Mediation: IRS Publication 3605 </p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">IRS Collection Process: IRS Publication 594 </p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">IRS Appeals: IRS Publication 5 </p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Retainers and deposits for anticipated costs are requested and placed into a holding bank account. Once we have issued a bill for our time (usually once every 30 days), the balance is transferred from the holding bank account into our general business account. Unused retainers are refunded to the client, less outstanding unbilled time and costs advanced on your behalf. We may request an additional retainer with an explanation of what we need it for if the balance in your retainer account drops below a certain level or is depleted.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Retainers and deposits for anticipated costs are requested and placed into a holding bank account. Once we have issued a bill for our time (usually once every 30 days), the balance is transferred from the holding bank account into our general business account. Unused retainers are refunded to the client, less outstanding unbilled time and costs advanced on your behalf. We may request an additional retainer with an explanation of what we need it for if the balance in your retainer account drops below a certain level or is depleted.</p>


                </div>
            </div>
        </>
    )
}
export default Page