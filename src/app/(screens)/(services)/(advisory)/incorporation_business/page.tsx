function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 gap-4 pb-10 lg:px-4 lg:gap-2 lg:pb-10">

        <div className="w-full flex flex-col items-center mt-6 lg:h-[20%] lg:w-[45%] lg:mt-10">
          <h1 className="border border-b-4 border-l-0 border-t-0 border-r-0 text-[#1D2B48] text-xl font-bold text-center w-fit lg:w-[65%]">
            INCORPORATION OF BUSINESS IN US
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-col gap-6 bg-yellow-00 lg:w-[90%] lg:mt-10 lg:flex-row">

          <div className="w-full lg:w-[60%] lg:pt-5 lg:pr-7">
            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm lg:mt-2">
              Vertix Tax offers company incorporation services for foreigners
              and US nationals at a competitive price in numerous states,
              including Delaware, New York, California, DC, etc.
            </p>

            <p className="text-[#1C2A46] text-sm mt-2 lg:text-sm lg:mt-2">
              There are two main types of US companies in various states. These
              are Corporations and LLCs. USA companies must file recurring
              (usually annual) franchise tax reports to the secretary of state
              in their home jurisdiction. These often carry a fixed annual
              licence fee and a requirement to submit brief information about
              the company. Please contact us to enquire about the USA companies’
              incorporation and Renewal services.
            </p>
          </div>

          <div className="w-full flex justify-center lg:w-[40%] bg-red-00">
            <img
              src="/business_formation.jpg"
              alt="business_formation.jpg"
              className="w-[90%] rounded-lg lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Page;
