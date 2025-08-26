'use client';

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[25%]">Business Tax</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">At Vertix Tax Solutions LLC we help our clients understand and manage tax compliance and reporting obligations responsibly and proactively. We help them assess, improve and monitor their tax function’s processes and controls. We offer the following services for Partnerships, S and C Corporations :</p>
                        <ol className="list-disc lg:mt-2 lg:ml-8">
                            <li className="text-[#1C2A46] text-sm">Entity Planning</li>
                            <li className="text-[#1C2A46] text-sm">Accounting Services</li>
                            <li className="text-[#1C2A46] text-sm">Payroll</li>
                            <li className="text-[#1C2A46] text-sm">Tax Compliance</li>
                        </ol>
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">Partnership:</h1>
                        <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">If you are a partner or plan to start, a partnership in United States you will need experienced tax advisor.</p>
                        <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">These are the most common services we offer, but it’s not our full list. Please contact us to discuss your needs if you don’t see them reflected here.</p>
                        <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">An unincorporated organization formed after 1996 with two or more members is classified as a partnership. This organization is formed to carry on a trade or business, with each person contributing money, property, labor or skill and each expecting to share in the profits and losses of the business whether or not a formal partnership agreement is made.</p>
                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
                <div className="bg-green-00 lg:w-[90%]">
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">The partnership agreement includes the original agreement and any modifications. All partners must agree to any modifications or the partnership must adopt any modifications in any other manner provided by the partnership agreement. The agreement or modifications can be oral or written. Partners can modify the partnership agreement for a particular tax year after the close of the year but not later than the date for filing the partnership return for that year. This filing date does not include any extension of time. If the partnership agreement or any modification is silent on any matter, treat the provisions of local law as part of the agreement.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Form 1065 is an information return used to report income, gains, losses, deductions, credits, etc., from the operation of a partnership. The partnership does not pay taxes, instead, income or loss items “Passthrough” to its partners. Schedule K-1 states each partner’s distributive share of these items for partners to include on their own tax returns.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">S Corporation:</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">An eligible domestic corporation can avoid double taxation by electing treatment as an S Corporation (SCORP). Like a partnership, an SCORP is a flow through entity. Generally, an SCORP is exempt from federal income tax other than tax on certain capital gains and passive income. On their tax returns, the SCORP shareholders include their share of the corporation’s separately state items of income, deduction, loss and credit and their share of non-separately stated ordinary business income or loss reported to them on Schedule K-1 (Form 1120S).</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">We at Shoonya can assist you in forming an SCORP and help you in being compliant with your responsibilities as a corporation. We can assist you in choosing the right entity type and making the election to be treated as a SCORP.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">We can assist you in doing the entity accounting and payroll and assist you in generating the K-1’s for the shareholders and filing of Form 1120S.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">C Corporation:</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Unlike the S Corp and Partnership discussed earlier, C Corporation are taxable on their earnings and pay taxes. The distributions from earnings and profits are treated as dividends for U.S. Income Tax purposes.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">In the United States, corporations are formed under laws of a state or the District of Columbia. Procedures vary widely by state. Some states allow formation of corporations through electronic filing on the state's web site or very quickly. All states require payment of a fee upon incorporation. Corporations are issued a "certificate of incorporation" by most states upon formation. Most state corporate laws require that the basic governing instrument be either the certificate of incorporation or formal articles of incorporation.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Tax rates for C Corporations range from 15 % to 35 % at graduated rates. We at Shoonya help you in tax compliances required for C Corporations and help you in being compliant.We help in filing Form 1120 and generating Schedule K-1 (1120). We can also assist in preparation of Financial Statements for C Corporations.</p>
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