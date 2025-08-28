'use client';

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react";


function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto lg:px-4 lg:gap-2">
                <div className="lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
                    <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold lg:w-[39%]">Standard Guarantee</h1>
                </div>
                <div className="bg-yellow-00 lg:w-[90%] lg:mt-10 flex">
                    <div className="lg:w-[60%] lg:pt-5 lg:pr-7">
                        <p className="text-[#1C2A46] lg:text-sm lg:mt-2">Nobody likes making a mistake. Unfortunately, we are all human and no matter how hard we try to be perfect…sometimes it just doesn’t happen. The test of character and integrity is to admit when you make a mistake and to do what you can to correct it.</p>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">We are diligent in our tax preparation services with quality control and reviews built into our policies and procedures. We support our clients after the filing of their tax returns with complimentary tax question assistance from an Enrolled Agent, admitted to practice before the IRS in all 50 states. We reimburse for interest and penalties assessed due to a legitimate preparer error and provide free audit representation if the audit is due to a legitimate preparer error.</p>
                        <h1 className="text-[#1C2A46] font-medium lg:mt-8">If You Receive a Notice</h1>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">If you receive a notice from the IRS or a state tax department, please get it to us within 45 days of the date on the notice. We will review the notice, explain it to you and advise you of what needs to be done to respond to it. We will assist you in responding to the notice. We may ask you to sign documents so we can get information about your tax account directly from the IRS or from the state tax department.</p>
                        <p className="text-[#1C2A46] text-sm lg:mt-3">We will review our files and, if we made a mistake, we will tell you and reimburse you, subject to our reimbursement policies, for initially assessed interest and penalty that you have to pay due to our mistake.</p>

                    </div>
                    <div className="lg:w-[40%] bg-red-00 flex justify-center">
                        <img src="/aboutpage.png" alt="aboutpage.png" className="lg:h-[100%] lg:w-[74%] lg:rounded-lg" />
                    </div>
                </div>
                <div className="bg-green-00 lg:w-[90%]">
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Please don’t assume that the IRS or state is correct! Sometimes there are computer glitches, misunderstandings or missing information that can clear everything up. Get the notice to us within 30 days of the date of the notice!</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Our policy is to reimburse clients for interest initially assessed by the IRS or a state tax department due to our error.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">We reimburse clients for late payment penalties initially assessed by the IRS or state tax department due to our error. Again there are time constraints that apply and you must give us the opportunity to dispute the penalty or to ask that it be waived if the law allows.</p>
                    <p className="lg:mt-2 text-[#1C2A46] lg:text-sm">Please get any notices to us within 45 days of the date of the notice. In fact, get all notices to us no matter how much time has passed. We may not reimburse you for all the interest or late payment penalty, but we will provide review and assistance services free of charge. Representation is also provided if the tax problem is a result of legitimate preparer error</p>
                    
                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">If We Didn’t Make a Mistake:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Sometimes things happen. You don’t get a document until after the tax return is filed. You get a corrected document late. You forgot something. Something got lost. Things fell through the cracks. We understand.</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">First of all, don’t assume that you will owe additional taxes if this should happen to you. Sometimes you may get a refund!</p>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Please advise us of the situation right away. We will help you with a corrected tax return at a discounted price and help you request a waiver of any late payment penalties if you owe money. There is no guarantee that the IRS or state will grant the waiver, but we will certainly help you to the best of our ability to get it waived or reduced.</p>

                    <h1 className="text-[#1C2A46] font-medium lg:mt-8">Income Tax Due:</h1>
                    <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">Sorry, we do not reimburse for additional income tax due or for excess refunds that have to be paid back to the IRS or state.</p>
                </div>
            </div>
        </>
    )
}
export default Page