"use client";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            ITIN Application
          </h1>
        </div>
        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-0 lg:pr-7">
            <h1 className="text-[#1C2A46] font-semibold lg:mt-0 mt-0">
              ITIN Services Made Simple
            </h1>

            <p className="text-[#1C2A46] text-sm lg:mt-3 mt-1">
              Helping non-U.S. citizens and residents comply with U.S. tax laws
              At <span className="font-bold">Vertix Tax Solutions</span>, we
              guide clients through every step of obtaining, renewing, and using
              an ITIN correctly — making the process smooth, secure, and fully
              compliant with IRS requirements.
            </p>

            <h1 className="text-[#1C2A46] font-semibold lg:mt-4">
              1. Applying for an ITIN
            </h1>
            <p className="text-[#1C2A46] text-sm lg:mt-3">
              Applying for an ITIN requires submitting{" "}
              <span className="font-bold">Form W-7</span> along with supporting
              documentation. You can submit your application:
            </p>
            <ol className="list-disc lg:mt-2 lg:ml-8 ml-4">
              <li className="text-[#1C2A46] text-sm">
                <span className="font-bold">In person</span> at an IRS office
                (TAC) or through a certified acceptance agent
              </li>
              <li className="text-[#1C2A46] text-sm">
                <span className="font-bold">By mail</span> to the IRS
              </li>
            </ol>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              <span className="font-bold">Why Vertix:</span> We help you prepare
              and review all documents accurately, guide you through in-person
              or mail submission, and ensure your application meets all IRS
              standards — minimizing delays or errors.
            </p>

            <h1 className="text-[#1C2A46] font-semibold lg:mt-4">
              2. Renewing an ITIN
            </h1>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              ITINs have expiration rules depending on the year of issuance.
              Using an expired ITIN can result in:
            </p>
            <ol className="list-disc lg:mt-2 lg:ml-8 ml-4">
              <li className="text-[#1C2A46] text-sm">
                Rejected or delayed tax returns
              </li>
              <li className="text-[#1C2A46] text-sm">Adjusted refunds</li>
              <li className="text-[#1C2A46] text-sm">Possible penalties</li>
            </ol>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              <span className="font-bold">Our Approach:</span> We track
              expiration timelines, submit renewals on your behalf, and ensure
              your ITIN remains valid for tax filing — so you never risk delayed
              refunds or compliance issues.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              <span className="font-bold">Important:</span> Certain credits,
              like the Earned Income Tax Credit, cannot be claimed with an ITIN.
              Using an expired or invalid ITIN can trigger IRS math error
              notices.
            </p>

            <p className="text-[#1C2A46] text-sm lg:mt-3">
              <span className="font-bold">Why Vertix:</span> We ensure your ITIN
              is properly applied, renewed, and used to maximize compliance and
              avoid errors — protecting your refunds and tax standing.
            </p>
          </div>

          <div className="w-full mt-6 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/itin.jpg"
              alt="itin.jpg"
              className="
                h-auto w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%]
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
