"use client"

import { CheckCircle, CreditCard, Warning } from "phosphor-react"

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Accuracy & Support
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div
            className="
              w-full 
              grid grid-cols-2 md:grid-cols-3 gap-4
              lg:w-[60%] lg:pt-5 lg:pr-7 lg:flex lg:flex-wrap lg:gap-5
            "
          >
            <a
              href="#notices"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%] lg:rounded-2xl lg:shadow-lg"
            >
              <div className="bg-red-00 flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center
                lg:h-[49%] lg:w-[29%]">
                  <Warning size={30} weight="fill" className="text-[#1D2B48]" />
                </div>
                <div className="lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold mt-4">Accuracy</h3>
                </div>
              </div>
            </a>

            <a
              href="#accuracy"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%]"
            >
              <div className="h-full flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl 
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center
                lg:h-[49%] lg:w-[29%]">
                  <CheckCircle size={30} weight="fill" className="text-[#1D2B48]" />
                </div>
                <div className="lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold">Notices</h3>
                </div>
              </div>
            </a>

            <a
              href="#taxpayment"
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer h-auto w-full
              lg:h-[45%] lg:w-[40%]"
            >
              <div className="bg-red-00 h-full flex flex-col items-center justify-around p-4 rounded-xl shadow-md hover:shadow-xl
              lg:h-[100%] lg:w-[100%] lg:p-5 lg:rounded-2xl lg:shadow-lg">
                <div className="bg-blue-200 p-2 h-[60px] w-[60px] rounded-full flex justify-center items-center
                lg:h-[49%] lg:w-[29%]">
                  <CreditCard size={30} weight="fill" className="text-[#1D2B48]" />
                </div>
                <div className="lg:h-[30%] lg:w-full flex justify-center items-center">
                  <h3 className="text-[#1D2B48] font-semibold">Tax Payment</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/guarantee.jpg"
              alt="guarantee.jpg"
              className="
                h-[200px] w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%]
              "
            />
          </div>
        </div>

        <div className="w-full lg:w-[90%]">

          <p className="text-[#1C2A46] lg:text-sm lg:mt-2">
            Handling Tax Errors and IRS Notices with Confidence
            Mistakes happen — we’ve got you covered.
            Nobody likes making a mistake — and even the most careful taxpayers aren’t perfect.
            At Vertix Tax Solutions, we believe integrity means admitting errors and fixing them promptly.
            That’s why we’ve built quality control and review procedures into every tax return we prepare.
          </p>

          <p className="text-[#1C2A46] text-sm lg:mt-3">
            Our commitment doesn’t stop once your return is filed:<br className="hidden sm:inline" />
            • Complimentary post-filing support from an Enrolled Agent licensed to practice before the IRS in all 50 states.<br className="hidden sm:inline" />
            • Reimbursement for interest or penalties assessed due to a legitimate preparer error.<br className="hidden sm:inline" />
            • Free audit representation if the audit results from our mistake.<br className="hidden sm:inline" />
          </p>

          <h1
            id="notices"
            className="text-[#1C2A46] font-medium lg:mt-8 mt-4 scroll-mt-18 lg:scroll-mt-24"
          >
            Sometimes things happen outside our control:
          </h1>

          <p className="text-[#1C2A46] text-sm scroll-md-4 lg:mt-3">
            • Documents arrive late or are corrected after filing<br className="hidden sm:inline" />
            • Something gets lost or overlooked<br className="hidden sm:inline" />
            • You forget to include something<br className="hidden sm:inline" />
            Don’t panic — additional taxes aren’t always owed, and you may even receive a refund.
          </p>

          <p className="text-[#1C2A46] font-medium text-sm lg:mt-3">
            Notify us immediately. We’ll:<br className="hidden sm:inline" />
          </p>
          <p className="text-[#1C2A46] text-sm lg:mt-3">
            • Prepare a corrected tax return at a discounted price<br className="hidden sm:inline" />
            • Assist in requesting waivers or reductions for late payment penalties where possible<br className="hidden sm:inline" />
          </p>
          {/* <p className="text-[#1C2A46] text-sm lg:mt-3"> */}
          {/* We will review our files and, if we made a mistake, we will tell you */}
          {/* and reimburse you, subject to our reimbursement policies, for */}
          {/* initially assessed interest and penalty that you have to pay due to */}
          {/* our mistake. */}
          {/* </p> */}

          {/* <p className="text-[#1C2A46] text-sm lg:mt-3"> */}
          {/* Please don’t assume that the IRS or state is correct! Sometimes */}
          {/* there are computer glitches, misunderstandings or missing */}
          {/* information that can clear everything up. Get the notice to us */}
          {/* within 30 days of the date of the notice! */}
          {/* </p> */}

          {/* <p className="text-[#1C2A46] text-sm lg:mt-3"> */}
          {/* Our policy is to reimburse clients for interest initially assessed */}
          {/* by the IRS or a state tax department due to our error. */}
          {/* </p> */}

          {/* <p className="text-[#1C2A46] text-sm lg:mt-3"> */}
          {/* We reimburse clients for late payment penalties initially assessed */}
          {/* by the IRS or state tax department due to our error. Again there are */}
          {/* time constraints that apply and you must give us the opportunity to */}
          {/* dispute the penalty or to ask that it be waived if the law allows. */}
          {/* </p> */}

          {/* <p className="text-[#1C2A46] text-sm lg:mt-3"> */}
          {/* Please get any notices to us within 45 days of the date of the */}
          {/* notice. In fact, get all notices to us no matter how much time has */}
          {/* passed. We may not reimburse you for all the interest or late */}
          {/* payment penalty, but we will provide review and assistance services */}
          {/* free of charge. Representation is also provided if the tax problem */}
          {/* is a result of legitimate preparer error */}
          {/* </p> */}

          <h1
            id="accuracy"
            className="text-[#1C2A46] font-medium lg:mt-8 mt-4 scroll-mt-18 md:scroll-mt-18 lg:scroll-mt-24"
          >
            If You Receive a Notice
          </h1>

          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            Receiving an IRS or state notice can be stressful. Here’s how we help:
          </p>

          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            1. Send the notice to us within 7-15 days of the notice date.<br className="hidden sm:inline" />
            2. We review it, explain it clearly, and guide you on next steps.<br className="hidden sm:inline" />
            3. We assist in responding to the notice and may request your signature to access information<br className="hidden sm:inline" />
            directly from the IRS or state tax authority.<br className="hidden sm:inline" />
          </p>

          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            We will review our files, and if the error is on our side, we’ll reimburse any initially assessed interest
            or penalties, subject to our policies.
          </p>


          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            Important: Don’t assume the IRS or state is correct! Notices can result from glitches,
            misunderstandings, or missing information. Even if time has passed, send it to us — we’ll review
            and assist free of charge.
          </p>



          {/* <p className="lg:mt-3 text-[#1C2A46] lg:text-sm"> */}
          {/* Sometimes things happen. You don’t get a document until after the */}
          {/* tax return is filed. You get a corrected document late. You forgot */}
          {/* something. Something got lost. Things fell through the cracks. We */}
          {/* understand. */}
          {/* </p> */}

          {/* <p className="lg:mt-3 text-[#1C2A46] lg:text-sm"> */}
          {/* First of all, don’t assume that you will owe additional taxes if */}
          {/* this should happen to you. Sometimes you may get a refund! */}
          {/* </p> */}

          {/* <p className="lg:mt-3 text-[#1C2A46] lg:text-sm"> */}
          {/* Please advise us of the situation right away. We will help you with */}
          {/* a corrected tax return at a discounted price and help you request a */}
          {/* waiver of any late payment penalties if you owe money. There is no */}
          {/* guarantee that the IRS or state will grant the waiver, but we will */}
          {/* certainly help you to the best of our ability to get it waived or */}
          {/* reduced. */}
          {/* </p> */}

          <h1
            id="taxpayment"
            className="text-[#1C2A46] font-medium lg:mt-8 mt-4 scroll-mt-18 md:scroll-mt-18 lg:scroll-mt-24"
          >
            Income Tax Obligations
          </h1>

          <p className="lg:mt-3 text-[#1C2A46] lg:text-sm">
            Please note, we do not reimburse additional income tax due or excess refunds required to be repaid
            to the IRS or state. Our focus is on errors caused by our preparation, ensuring you are protected and
            supported.
          </p>
        </div>
      </div >
    </>
  )
}

export default Page
