'use client';

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[27%]">Individual Tax</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <h1 className="text-[#1C2A46] font-medium">INDIVIDUALS:</h1>
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">We prepare personal tax returns for people from all walks of life. The base forms are Forms 1040 with all types of income, deductions and credits. This includes any supporting tax and reporting forms if you have dependents, itemized deductions, tax benefits, investments, accounts or property outside the United States.</p>
                        <p className="text-[#1C2A46] text-md lg:mt-3">Below are just some of the additional tax items we can help you with:</p>
                        <ol className="list-disc lg:mt-2 lg:ml-8">
                            <li className="text-[#1C2A46] text-sm">Rental property</li>
                            <li className="text-[#1C2A46] text-sm">Self-employment</li>
                            <li className="text-[#1C2A46] text-sm">Investment sales, including day trading activities</li>
                            <li className="text-[#1C2A46] text-sm">Vacation rental</li>
                            <li className="text-[#1C2A46] text-sm">Sale of home</li>
                            <li className="text-[#1C2A46] text-sm">Forgiven debt</li>
                            <li className="text-[#1C2A46] text-sm">Tax benefits for post-secondary education</li>
                            <li className="text-[#1C2A46] text-sm">Tax benefits for home ownership</li>
                            <li className="text-[#1C2A46] text-sm">Limited partnership pass-through reporting</li>
                            <li className="text-[#1C2A46] text-sm">And More!</li>
                        </ol>
                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
                <div className="bg-green-00 lg:w-[90%]">
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">SMALL BUSINESS OWNERS:</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Whether you are a sole proprietor or the owner of an LLC, a partnership or a small corporation, we can help with your tax returns. We work with bookkeepers if you need bookkeeping services.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">U.S. VISA WORKERS:</h1>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">We have experience in preparing tax returns (Forms 1040, 1040-NR and 1040-C) and supporting tax forms, including the Report of Foreign Bank accounts, (FinCen Form 114, also known as the FBAR) for the following visa holders:</p>
                    <ol className="list-disc lg:mt-2 lg:ml-8">
                        <li className="text-[#1C2A46] text-sm">Students with an F-1 visa</li>
                        <li className="text-[#1C2A46] text-sm">Students working in OPT</li>
                        <li className="text-[#1C2A46] text-sm">Teachers or professors with a J visa</li>
                        <li className="text-[#1C2A46] text-sm">H-1B workers in specialty occupations in fields requiring highly specialized knowledge</li>
                        <li className="text-[#1C2A46] text-sm">L-1 Intra-company transferees</li>
                        <li className="text-[#1C2A46] text-sm">NAFTA workers with TN/TD visas</li>
                        <li className="text-[#1C2A46] text-sm">O visa for a person of extraordinary ability in science, art, business, athletics or education</li>
                        <li className="text-[#1C2A46] text-sm">Domestic employee or nanny accompanying a foreign national employer with a B visa</li>
                        <li className="text-[#1C2A46] text-sm">Any other visa type.</li>
                    </ol>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">PERMANENT RESIDENTS:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Foreign nationals who are also permanent residents of the United States have the same tax reporting requirements as a U.S. citizen does. It makes no difference if you are living overseas or if your green card has expired and you haven’t yet filed Form I-407 (http://www.uscis.gov/i-407) to abandon your permanent resident status. We can help with the tax return issues.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">U.S. TAXPAYERS LIVING ABROAD:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">U.S. citizens and permanent residents living abroad are required to file U.S. tax returns reporting all income, the same as someone living in the United States. Your tax return could be very simple or it could be an extremely complex return with many, many points and issues to cover. The key is to do what is right while best protecting your interests. Late or previously inaccurate filings compound your risk.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">UNDOCUMENTED WORKERS:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">We can help you with your tax return filings if you are working in the United States without proper documents. You are in a very scary and difficult position, we understand. We can help you get compliant with your U.S. income tax filings and in obtaining an Individual Taxpayer Identification Number if needed. You may need to correct previously filed returns to become totally compliant.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">TAXPAYERS WITH TAX PROBLEMS:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">We are usually hired to either represent or to assist a taxpayer needing help to resolve IRS or state tax problems. Sometimes the issue can be solved rather quickly, sometimes it takes many months. It just depends upon the issues involved, the time that has passed since the problem first began, and what, if anything, was done after the first time the problem arose. Lots of factors.</p>
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">VICTIMS OF TAX IDENTITY THEFT:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">You are, or could be, the victim of tax identity theft if your name, Social Security number and date of birth were stolen by an identity thief or as part of a data breach. You need to take steps to protect yourself and perhaps correct your federal and state tax account. We can help you through the process to safeguard your future tax return filings, obtain stolen tax refunds, get suspended tax returns processed, and to stop IRS or state collection activity for taxes you do not owe.</p>
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