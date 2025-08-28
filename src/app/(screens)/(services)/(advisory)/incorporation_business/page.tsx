'use client';

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[65%]">INCORPORATION OF BUSINESS IN US</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">Shoonya Tax offers company incorporation services for foreigners and US nationals at a competitive price in numerous states, including Delaware, New York, California, DC, etc.</p>

                        <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">There are two main types of US companies in various states. These are Corporations and LLCs. USA companies must file recurring (usually annual) franchise tax reports to the secretary of state in their home jurisdiction. These often carry a fixed annual licence fee and a requirement to submit brief information about the company. Please contact us to enquire about the USA companies’ incorporation and Renewal services.</p>
                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page