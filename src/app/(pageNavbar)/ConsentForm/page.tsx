"use client"

import YearSelect from "../../../../utils/yearSelect"

function ConsentForm() {
  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <div className="bg-green-00 flex flex-col w-[65%] text-center">
            <h2 className="font-semibold text-[#1D2B48] text-lg">User</h2>
            <p className="text-start text-xs mt-5 text-[#616161]">
              Federal law requires this consent form be provided to you. Unless
              authorized by law, we cannot use, without your consent, your tax{" "}
              <br /> return information for purposes other than the preparation
              and fling of your tax return.
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              You are not required to complete this form. If we obtain your
              signature on this form by conditioning our services on your
              consent, <br /> your consent will not be valid. Your consent is
              valid for the amount of time that you specify. If you do not
              specify the duration of <br /> your consent, your consent is valid
              for one year
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              Duration of Consent: 1 year(s)
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              If you give your consent, then you may still have your tax return
              prepared and electronically filed by us for a fee
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              By signing below, you including each of you it there is more than
              one taxpayer) authorize us to use the information you provide to
              us during the preparation of your 2024 tax return to determine
              whether to present you with the opportunity to apply for these
              products and services.
            </p>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Name of taxpayer :{" "}
              </p>
              <div className="border border-b-1 border-l-0 border-r-0 border-t-0 border-[#616161] w-30 ml-1"></div>
            </div>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Taxpayer Signature :{" "}
              </p>
              <div className="border border-b-1 border-l-0 border-r-0 border-t-0 border-[#616161] w-30 ml-1"></div>
              <p className="text-start text-xs mt-2 text-[#616161] ml-3">
                Date :{" "}
              </p>
              <div className="border border-b-1 border-l-0 border-r-0 border-t-0 border-[#616161] w-30 ml-1"></div>
            </div>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Name of Joint taxpayer :{" "}
              </p>
              <div className="border border-b-1 border-l-0 border-r-0 border-t-0 border-[#616161] w-30 ml-1"></div>
            </div>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Joint Taxpayer Signature :{" "}
              </p>
              <div className="border border-b-1 border-l-0 border-r-0 border-t-0 border-[#616161] w-30 ml-1"></div>
              <p className="text-start text-xs mt-2 text-[#616161] ml-3">
                Date :{" "}
              </p>
              <div className="border border-b-1 border-l-0 border-r-0 border-t-0 border-[#616161] w-30 ml-1"></div>
            </div>
            <p className="text-start text-xs mt-5 text-[#616161]">
              If you believe your tax return information has been disclosed or
              used improperty in a manner unauthorized by law or without your
              permission, you may contact the Treasury Inspector General for Tax
              Administration (TIGTA) byl
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ConsentForm
