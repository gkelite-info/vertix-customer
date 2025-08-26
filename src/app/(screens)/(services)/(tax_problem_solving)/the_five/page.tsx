'use client';

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[74%]">THE FIVE”WS” AND ONE “H” OF TAX LIENS</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">“I owe back taxes and need help because I don’t have the money to pay it all.” Could you have said that? Has the IRS or state tax department sent you bills and notices demanding payment? If so, read on to learn the who, what, why, where, when and how of tax liens.</p>
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">What is a tax lien?</h1>
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">The IRS or a state tax department can file a lien document in the county where you live or own property. A tax lien is a claim against all of your property that you now own or may own in the future and your rights to property. A Notice of Lien is a public notice to creditors that your property is now encumbered with a tax debt that takes priority over their debt. A tax lien can prevent you from selling or buying property until the tax debt is paid or otherwise released. It damages your credit rating and your ability to borrow money.</p>
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">Who can file a tax lien against me?</h1>
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">The IRS and the state tax department both have legal authority to place a lien on your property if you owe back taxes. The legal authority comes from federal or state laws. They are required to follow specific procedures to make certain that your rights of due process and notice are met before the lien is placed on your property.</p>

                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
                <div className="bg-green-00 lg:w-[90%]">
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">When is a tax lien effective?</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">A lien is effective ten days after the date of a bill for assessed tax is sent to you by the IRS. The IRS can file a tax lien at any time after that time. State laws have different time frames that are established by each state’s regulations and procedures.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">A tax lien can be filed with the county recorder at any time after a tax is deemed unpaid or delinquent. There are costs associated with the lien filing. These costs are always added to the tax bill. The IRS almost always files a tax lien if you owe more than $10,000, but can file one for less if it is in the government’s best interest, sometimes without following due process and notice requirements.</p>

                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Where are tax liens filed?</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Tax liens are filed in public records, with a state or local authority such as a county recorder of deeds or a Secretary of State. Lists of filings are sometimes reported in newspapers. Other people can review the tax lien — it is open to the public.</p>

                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Why has a tax lien been filed against me?</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Short and simple, because you owe delinquent taxes and the IRS or state government wants to be paid. This is one of the collection tools in the governments “tool box” to get money owed by taxpayers.</p>

                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">What can I do if I don’t believe I owe the tax debt?</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">You have the right to appeal a Notice of Federal Tax Lien in either a Collection Due Process hearing or through a Collect Appeals Program hearing. Each process has specific timing and legal requirements. The Collection Due Process allows you to go to tax court if you don’t agree with the outcome of the hearing. The Collection Appeals Program does not.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">What can I do if I can’t pay the tax debt?</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">You have options. The type of options depends upon your specific financial, health and living situation</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Below is a listing of some of the options that may be available. Please note that these options won’t automatically remove a tax lien already filed. They might help you work out an arrangement that will hold the lien filing, but only if the IRS agrees. They are also possible avenues to help stop a levy or garnishment.</p>
                    <ol className="list-disc lg:mt-2 lg:ml-8">
                        <li className="text-[#1C2A46] text-sm">Payment plan to make monthly payments for the full tax or a partial amount of the tax.</li>
                        <li className="text-[#1C2A46] text-sm">Offer in Compromise to settle with the IRS for an amount less than what you owe.</li>
                        <li className="text-[#1C2A46] text-sm">Request that the IRS stop collection activities because of your inability to pay the debt.</li>
                        <li className="text-[#1C2A46] text-sm">Innocent or injured spouse relief</li>
                        <li className="text-[#1C2A46] text-sm">Equitable relief</li>
                        <li className="text-[#1C2A46] text-sm">Economic hardship</li>
                    </ol>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">How do I get a lien withdrawn?</h1>

                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">A lien withdrawal doesn’t make the tax debt goes away, it just lets other creditors know that the lien has been withdrawn. A withdrawal is usually at the discretion of the taxing authority after a review of your application for the lien withdrawal. A federal lien withdrawal is completed when the IRS files a Notice of Federal Lien Withdrawal with the same office where the lien was filed. It doesn’t contact any creditors or any credit reporting bureaus unless you specifically request it in writing.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">A lien withdrawal can clear your credit report. A lien release won’t.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">How can I get a lien removed so I can sell or refinance my house?</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">You can request a discharge of the lien to have it removed from a specific piece of property, such as your home. This typically would occur when the taxman would be paid from the proceeds of the sale.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">There is also something called subordination of the IRS lien. This would allow you to refinance the home because the IRS would agree to let the lender be in the primary creditor position.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Both of these requests must be made using IRS forms and are at the discretion of the IRS. State tax departments may or may not have similar procedures depending upon the laws of each state. What can I do if the IRS won’t agree to withdraw, discharge or subordinate the tax lien? You can file a Collection Appeal Request to have the denial reviewed by a settlement officer. Timing is critical. The appeal must be filed timely to be accepted.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Conclusion</h1>
                    
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">I’ve had many stressed-out and worried people with delinquent tax debts sitting across from me at my office. Sometimes the IRS or state tax department has placed a lien on their property or levied on a bank account or garnished wages. They’ve come looking for help. They have made the first step…the most important one…stop ignoring the IRS or the state about their tax debt. The next step is to get professional help if you need it.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Please give us a call or send us a message to find out if we can help you. We provide a free, one hour consultation to visit with you about your particular situation. No fee will be due unless you engage us to represent you.</p>
                </div>

                <div className="bg-red-00 lg:w-[90%] flex flex-wrap justify-between lg:gap-10 lg:mt-15">
                    <div className="bg-[#F7F7F7] flex flex-col items-start lg:h-[20%] lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5 lg:shadow-lg hover:shadow-xl">
                        <div className="bg-[#E1E2E5] lg:p-2 lg:w-[14%] lg:rounded-full flex justify-center items-center">
                            <Users size={25} weight="fill" className="text-[#1D2B48]" />
                        </div>
                        <div className="bg-yellow-00">
                            <h3 className="text-[#1D2B48] font-semibold">Our Team</h3>
                            <p className="text-sm lg:mt-2 text-[#1C2A46] font-regular">Skilled professionals including CAs, CPAs, Management Graduates, Enrolled Agents, and Lawyers with Big 4 and top consulting experience.</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex flex-col items-start lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5 lg:shadow-lg hover:shadow-xl">
                        <div className="bg-[#E1E2E5] lg:p-2 lg:w-[14%] lg:rounded-full flex justify-center items-center">
                            <Handshake size={25} weight="fill" className="text-[#1D2B48]" />
                        </div>
                        <div className="bg-yellow-00">
                            <h3 className="text-[#1D2B48] font-semibold">Client Relationships</h3>
                            <p className="text-sm lg:mt-2 text-[#1C2A46] font-regular">We’ve built lasting client trust through professionalism blended with a personal touch.</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex flex-col items-start lg:h-[20%] lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5 lg:shadow-lg hover:shadow-xl">
                        <div className="bg-[#E1E2E5] lg:p-2 lg:w-[14%] lg:rounded-full flex justify-center items-center">
                            <Note size={25} weight="fill" className="text-[#1D2A47]" />
                        </div>
                        <div className="bg-yellow-00">
                            <h3 className="text-[#1D2B48] font-semibold">Advisory & Compliance</h3>
                            <p className="text-sm lg:mt-2 text-[#1C2A46] font-regular">Comprehensive advisory and compliance services, with experts having 10+ years of experience and extensive training.</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex flex-col items-start lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5 lg:shadow-lg hover:shadow-xl">
                        <div className="bg-[#E1E2E5] lg:p-2 lg:w-[14%] lg:rounded-full flex justify-center items-center">
                            <Globe size={25} weight="fill" className="text-[#1D2A47]" />
                        </div>
                        <div className="bg-yellow-00">
                            <h3 className="text-[#1D2B48] font-semibold">Client Focus</h3>
                            <p className="text-sm lg:mt-2 text-[#1C2A46] font-regular">Serving both owner-managed businesses and large multinational corporations with equal dedication.</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex flex-col items-start lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5 lg:shadow-lg hover:shadow-xl">
                        <div className="bg-[#E1E2E5] lg:p-2 lg:w-[14%] lg:rounded-full flex justify-center items-center">
                            <Buildings size={25} weight="fill" className="text-[#1D2A47]" />
                        </div>
                        <div className="bg-yellow-00">
                            <h3 className="text-[#1D2B48] font-semibold">Multi-Skilled Firm</h3>
                            <p className="text-sm lg:mt-2 text-[#1C2A46] font-regular">A multi-disciplined firm offering a wide range of industry-focused business solutions.</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex flex-col items-start lg:h-[20%] lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5 lg:shadow-lg hover:shadow-xl">
                        <div className="bg-[#E1E2E5] lg:p-2 lg:w-[14%] lg:rounded-full flex justify-center items-center">
                            <Star size={25} weight="fill" className="text-[#1D2A47]" />
                        </div>
                        <div className="bg-yellow-00">
                            <h3 className="text-[#1D2B48] font-semibold">People & Expertise</h3>
                            <p className="text-sm lg:mt-2 text-[#1C2A46] font-regular">Dynamic young graduates combined with seasoned executives deliver world-class expertise to solve complex business problems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page