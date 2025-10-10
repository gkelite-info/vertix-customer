'use client';

import { Buildings, ChartBar, CheckCircle, CreditCard, Globe, GlobeHemisphereWest, GraduationCap, Handshake, LockKey, Money, Notepad, PhoneCall, Shield, ThumbsUp, Users, UsersThree, Wrench } from "phosphor-react";

function Page() {
  return (
    <>
      <div className="bg-white flex flex-col items-center lg:pb-15">
        <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/Home_img.png')", width: '100%' }}>
          <div className="flex flex-col text-center lg:gap-5">
            <h1 className="text-white font-bold lg:text-4xl text-center">Welcome to Vertix TAX Solutions your <br /> trusted partner in taxes.</h1>
            <p className="text-[#AEAEAE] text-sm">Managing taxes can be overwhelming endless forms, changing rules, and tight <br /> deadlines. At Vertix TAX Solutions, our mission is simple: take the stress out of taxes.</p>
          </div>
        </section>
        <div className="lg:mt-10 bg-white flex flex-col items-center lg:gap-4 text-center">
          <h3 className="text-[#1D2B48] text-2xl font-bold">Why Clients Trust Us</h3>
          <p className="text-[#545E74]">Tax services aren’t just about crunching numbers they’re about trust, clarity, and <br /> peace of mind. Here’s why thousands choose us every year:</p>
          <div className="w-full h-164 bg-cover bg-center mt-6"
            style={{ backgroundImage: "url('/home2.jpg')" }}>
            <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-xl">
              <span className="text-black flex flex-wrap justify-between items-center bg-[#FFFEFE] lg:p-2 rounded-lg lg:h-[55%] text-xl font-semibold lg:w-[80%]">
                <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
                  <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                    <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                      <GraduationCap size={24} weight="fill" />
                    </div>
                    <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                      <h5 className="text-[#1D2B48] text-sm font-bold">Professional Expertise</h5>
                      <p className="text-gray-500 text-xs">A team of CAs, CPAs, Enrolled Agents, and Lawyers with Big 4 expertise, dedicated to delivering accurate, reliable, and client-focused tax solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
                  <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                    <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                      <LockKey size={24} weight="fill" />
                    </div>
                    <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                      <h5 className="text-[#1D2B48] text-sm font-bold">Secure & Confidential</h5>
                      <p className="text-gray-500 text-xs">Our team is made up of Chartered Accountants, CPAs, Enrolled Agents, Lawyers, and Management graduates with proven experience in Big 4 audit and top consulting firms.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
                  <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                    <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                      <Money size={24} weight="fill" />
                    </div>
                    <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                      <h5 className="text-[#1D2B48] text-sm font-bold">Affordable Pricing</h5>
                      <p className="text-gray-500 text-xs">We have built lasting trust with our clients through a professional approach combined with a personal touch, resulting in strong and enduring business relationships.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
                  <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                    <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                      <PhoneCall size={24} weight="fill" />
                    </div>
                    <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                      <h5 className="text-[#1D2B48] text-sm font-bold">Year-Round Support</h5>
                      <p className="text-gray-500 text-xs">We have gained the strong confidence of our clients through a professional approach combined with a personal touch, reflected in the long-standing relationships we share with them.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
                  <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                    <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                      <Wrench size={24} weight="fill" />
                    </div>
                    <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-2 rounded-r-lg text-start">
                      <h5 className="text-[#1D2B48] text-sm font-bold">Comprehensive services</h5>
                      <p className="text-gray-500 text-xs">Our services cover the full spectrum of foreign exchange law, delivered by tax professionals who bring more than ten years of experience and rigorous training to every client.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
                  <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                    <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                      <Globe size={24} weight="fill" />
                    </div>
                    <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-2 rounded-r-lg text-start">
                      <h5 className="text-[#1D2B48] text-sm font-bold">Seamless Digital Process</h5>
                      <p className="text-gray-500 text-xs">We offer advisory and compliance services in foreign exchange law, delivered by tax professionals with over a decade of experience.</p>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 bg-white flex flex-col items-center lg:gap-4 text-center">
          <h3 className="text-[#1D2B48] text-2xl font-bold">Our Services</h3>
          <p className="text-[#545E74]">We offer end-to-end tax solutions designed for individuals, families, and businesses alike</p>
          <span className="text-black flex flex-wrap justify-between items-center lg:p-2 rounded-lg lg:h-[55%] text-xl font-semibold lg:w-[80%] lg:gap-3">
            <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
              <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                  <Notepad size={24} weight="fill" />
                </div>
                <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                  <h5 className="text-[#1D2B48] text-sm font-bold">Personal Tax Filing</h5>
                  <p className="text-gray-500 text-xs">We assist salaried individuals, freelancers, and self-employed professionals in preparing and filing returns correctly, helping them claim maximum benefits on eligible deductions.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
              <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                  <Buildings size={24} weight="fill" />
                </div>
                <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                  <h5 className="text-[#1D2B48] text-sm font-bold">Business Tax Filing & Planning</h5>
                  <p className="text-gray-500 text-xs">Running a business is tough our tailored tax solutions for LLCs, startups, and corporations cover compliance and planning, helping you keep more of what you earn.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
              <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                  <Shield size={24} weight="fill" />
                </div>
                <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                  <h5 className="text-[#1D2B48] text-sm font-bold">IRS Audit Protection</h5>
                  <p className="text-gray-500 text-xs">If the IRS contacts you, don’t panic you won’t face it alone. Our specialists will represent you, respond to IRS notices, and guide you until the issue is fully resolved.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
              <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                  <GlobeHemisphereWest size={24} weight="fill" />
                </div>
                <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                  <h5 className="text-[#1D2B48] text-sm font-bold">FBAR & International Reporting</h5>
                  <p className="text-gray-500 text-xs">For NRIs, expats, and those with overseas accounts, we manage FBAR, FATCA, and global tax compliance ensuring full U.S. compliance.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
              <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                  <CreditCard size={24} weight="fill" />
                </div>
                <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                  <h5 className="text-[#1D2B48] text-sm font-bold">Payment Plans & IRS Relief</h5>
                  <p className="text-gray-500 text-xs">If you owe taxes and can’t pay in full, we’ll help you negotiate with the IRS to set up an installment agreement or explore relief programs that reduce your financial stress.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[47%] h-[30%] lg:rounded-lg bg-[#1D2B48] flex justify-end shadow-lg">
              <div className="bg-[#F7F7F7] w-[97%] flex justify-start items-center lg:rounded-lg lg:p-2">
                <div className="bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] self-start flex items-center justify-center lg:py-3 rounded-full">
                  <ChartBar size={24} weight="fill" />
                </div>
                <div className="bg-green-00 lg:w-[90%] lg:h-full flex flex-col justify-start items-start lg:py-2 lg:pl-3 lg:gap-1 rounded-r-lg text-start">
                  <h5 className="text-[#1D2B48] text-sm font-bold">Tax Planning & Year-Round Consultation</h5>
                  <p className="text-gray-500 text-xs">Don’t wait for April our proactive tax planning helps you make smart decisions year-round, minimize liabilities, and avoid last-minute surprises.</p>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="lg:mt-10 bg-red-00 flex flex-col items-center justify-center lg:w-[100%] lg:gap-4 text-center">
          <h3 className="text-[#1D2B48] text-2xl font-bold">How It Works</h3>
          <p className="text-[#545E74]">We offer end-to-end tax solutions designed for individuals, families, and businesses alike</p>
          <span className="text-black flex flex-wrap bg-blue-00 justify-between items-center lg:p-2 rounded-lg lg:h-[55%] text-xl font-semibold lg:w-[80%] lg:gap-3 lg:mt-5">
            <div className="bg-red-00 lg:w-[100%] flex justify-between">
              <div className="lg:w-[30%] bg-white lg:h-50 flex flex-col gap-2">
                <div className="lg:h-[50%] bg-pink-00 flex items-center justify-center">
                  <div className="border border-3 border-dashed lg:w-[22%] lg:h-[65%] rounded-full flex justify-center items-center">
                    <div className="bg-[#1D2B48] lg:h-[95%] lg:w-[95%] rounded-full flex justify-center items-center">
                      <h1 className="text-white">1</h1>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute z-10 center-0 lg:left-90 w-[43%] border-t-2 border-dashed border-[#1D2B48]"></div>
                </div>
                <h3 className="text-[#1D2B48] text-lg font-semibold">Upload Your Documents</h3>
                <p className="text-gray-500 text-xs">Use our encrypted online portal <br /> to securely share your tax forms <br /> and financial details.</p>
              </div>
              <div className="lg:w-[30%] bg-white lg:h-50 flex flex-col items-center gap-2">
                <div className="lg:h-[50%] lg:w-[80%] bg-white relative z-10 flex items-center justify-center">
                  <div className="border border-3 border-dashed lg:w-[27%] lg:h-[65%] rounded-full flex justify-center items-center">
                    <div className="bg-[#1D2B48] lg:h-[95%] lg:w-[95%] rounded-full flex justify-center items-center">
                      <h1 className="text-white">2</h1>
                    </div>
                  </div>
                </div>
                <h3 className="text-[#1D2B48] text-lg font-semibold">Expert Review & Preparation</h3>
                <p className="text-gray-500 text-xs">Our experts ensure fast, accurate <br /> returns and the best refund or lowest <br /> liability.</p>
              </div>
              <div className="lg:w-[30%] bg-white lg:h-50 flex flex-col gap-2">
                <div className="lg:h-[50%] bg-pink-00 flex items-center justify-center">
                  <div className="border border-3 border-dashed lg:w-[22%] lg:h-[65%] rounded-full flex justify-center items-center">
                    <div className="bg-[#1D2B48] lg:h-[95%] lg:w-[95%] rounded-full flex justify-center items-center">
                      <h1 className="text-white">3</h1>
                    </div>
                  </div>
                </div>
                <h3 className="text-[#1D2B48] text-lg font-semibold">Filing with Confidence</h3>
                <p className="text-gray-500 text-xs">We handle filing, updates, and  <br /> your copy so you can relax knowing <br /> it’s done right.</p>
              </div>
            </div>
          </span>
        </div>
        <div className="lg:w-[80%] bg-green-00 lg:h-100 flex flex-col items-center justify-between lg:mt-15">
          <div className="relative border border-3 border-dashed border-[#1D2B48] z-50 top-12 flex justify-center items-center bg-[#FFFEFE] lg:h-[27%] lg:w-[10%] lg:rounded-full">
            <UsersThree size={40} weight="fill" className="text-[#1D2B48]" />
          </div>
          <div className="bg-[#1D2B48] lg:w-[100%] h-[80%] text-center lg:rounded-lg flex flex-col justify-center items-center lg:p-6 lg:gap-5">
            <h3 className="text-white text-lg">WHO WE HELP</h3>
            <p className="text-white text-sm">We prepare personal tax returns for people from all walks of life. The base forms are Forms <br /> 1040 with all types of income, deductions and credits. This includes any supporting tax and <br /> reporting forms if you have dependents, itemized deductions, tax benefits, investments, <br /> accounts or property outside the United States.</p>
            <p className="text-white text-md border border-b-1 border-l-0 border-r-0 border-t-0 cursor-pointer">READ MORE</p>
          </div>
        </div>
        <div className="lg:w-[80%] lg:mt-10 flex justify-between">
          <div className="bg-[#F7F7F7] lg:w-[22%] lg:h-30 rounded-lg flex flex-col justify-center items-center lg:gap-3 shadow-lg cursor-pointer">
            <div className="bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] flex justify-center items-center rounded-full">
              <Users size={32} weight="fill" className="text-[#1D2B48]" />
            </div>
            <p className="text-[#1D2B48] font-semibold text-sm">REFER A FRIEND</p>
          </div>
          <div className="bg-[#F7F7F7] lg:w-[22%] lg:h-30 rounded-lg flex flex-col justify-center items-center lg:gap-3 shadow-lg cursor-pointer">
            <div className="bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] flex justify-center items-center rounded-full">
              <Handshake size={32} weight="fill" className="text-[#1D2B48]" />
            </div>
            <p className="text-[#1D2B48] font-semibold text-sm">CONTENTIMENT</p>
          </div>
          <div className="bg-[#F7F7F7] lg:w-[22%] lg:h-30 rounded-lg flex flex-col justify-center items-center lg:gap-3 shadow-lg cursor-pointer">
            <div className="bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] flex justify-center items-center rounded-full">
              <CheckCircle size={32} weight="fill" className="text-[#1D2B48]" />
            </div>
            <p className="text-[#1D2B48] font-semibold text-sm">ADVISORY & COMPLIANCE</p>
          </div>
          <div className="bg-[#F7F7F7] lg:w-[22%] lg:h-30 rounded-lg flex flex-col justify-center items-center lg:gap-3 shadow-lg cursor-pointer">
            <div className="bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] flex justify-center items-center rounded-full">
              <ThumbsUp size={32} weight="fill" className="text-[#1D2B48]" />
            </div>
            <p className="text-[#1D2B48] font-semibold text-sm">SUPPORT</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page