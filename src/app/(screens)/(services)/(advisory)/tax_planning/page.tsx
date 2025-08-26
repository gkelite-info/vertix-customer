'use client';

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[25%]">Tax Planning</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">Planning</h1>

                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">Tax planning is a valuable tool you can use to save tax dollars and create wealth.</p>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">One is when we estimate your income and deductions for the current tax year and calculate an estimated amount of tax liability and use it to adjust your withholding or estimated tax payments or plan for refunds/balances due</p>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">We provide simple tax planning to our tax clients as a complimentary service when we review your tax return with you prior to it being filed.</p>
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">Tax Planning Program and Reports</h1>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">Please contact us if you would like information about the comprehensive tax planning program. We are happy to help existing clients and new clients wanting to plan for their tax future.</p>

                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
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