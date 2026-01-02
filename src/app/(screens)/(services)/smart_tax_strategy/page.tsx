"use client";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-3 gap-4 pb-6 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="mt-6 lg:h-[20%] lg:w-[45%] flex flex-col items-center lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold w-fit">
            Smart Tax Strategy
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <h1 className="text-[#1C2A46] font-semibold mt-4 lg:mt-8">
              Tax Planning: Maximize Savings & Build Wealth
            </h1>

            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              Effective <span className="font-bold">tax planning</span> is more
              than just filing returns — it’s a strategic tool to{" "}
              <span className="font-bold">
                save money, optimize refunds, and plan for future financial
                success.
              </span>
            </p>
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              At <span className="font-bold">Vertix Tax Solutions</span>, we
              help you:
            </p>
            <ol className="list-disc lg:mt-2 lg:ml-8 ml-4">
              <li className="text-[#1C2A46] text-sm">
                Estimate your income, deductions, and credits for the current
                year
              </li>
              <li className="text-[#1C2A46] text-sm">
                Calculate your expected tax liability
              </li>
              <li className="text-[#1C2A46] text-sm">
                Adjust your withholding or estimated tax payments
              </li>
              <li className="text-[#1C2A46] text-sm">
                Plan for refunds or balances due with expert’s
              </li>
            </ol>

            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              We offer{" "}
              <span className="font-bold">
                simple, complimentary tax planning
              </span>{" "}
              as part of our tax return review process, helping you make
              informed decisions{" "}
              <span className="font-bold">before your return is filed.</span>
            </p>

            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              For clients seeking a{" "}
              <span className="font-bold">more comprehensive approach</span>, we
              also provide an in-depth{" "}
              <span className="font-bold">Tax Planning Program</span> with
              detailed reports tailored to your unique situation. This program
              helps you plan for future tax years, reduce liabilities, and
              achieve long-term financial goals.
            </p>

            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm">
              <span className="font-bold">Contact us today</span> to learn how
              our tax planning services can help you{" "}
              <span className="font-bold">
                maximize savings and take control of your financial future.
              </span>
            </p>
          </div>

          <div className="w-full mt-5 flex justify-center lg:mt-0 lg:w-[40%]">
            <img
              src="/tax_planning.jpg"
              alt="tax_planning.jpg"
              className="
                h-[200px] w-[90%] rounded-lg object-cover
                md:h-auto md:w-[60%]
                lg:h-[100%] lg:w-[74%] lg:rounded-lg
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
