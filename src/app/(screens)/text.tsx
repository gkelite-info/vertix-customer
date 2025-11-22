'use client';

import {
  Buildings,
  ChartBar,
  CheckCircle,
  CreditCard,
  Globe,
  GlobeHemisphereWest,
  GraduationCap,
  Handshake,
  LockKey,
  Money,
  Notepad,
  PhoneCall,
  Shield,
  ThumbsUp,
  Users,
  UsersThree,
  Wrench
} from 'phosphor-react';

function Page() {
  return (
    <>
      <div className="lg:bg-white lg:flex lg:flex-col lg:items-center lg:pb-15">
        <section
          className="lg:relative lg:bg-cover lg:bg-center lg:h-screen lg:flex lg:items-center lg:justify-center lg:w-full lg:bg-[url('/Home_img.png')]"
          style={{ backgroundImage: "url('/Home_img.png')" }}
        >
          <div className="lg:flex lg:flex-col lg:text-center lg:gap-5">
            <h1 className="lg:text-white lg:font-bold lg:text-4xl lg:text-center">
              Welcome to Vertix TAX Solutions your <br /> trusted partner in taxes.
            </h1>
            <p className="lg:text-[#AEAEAE] lg:text-sm">
              Managing taxes can be overwhelming endless forms, changing rules, and tight <br /> deadlines.
              At Vertix TAX Solutions, our mission is simple: take the stress out of taxes.
            </p>
          </div>
        </section>

        <div className="lg:mt-10 lg:bg-white lg:flex lg:flex-col lg:items-center lg:gap-4 lg:text-center">
          <h3 className="lg:text-[#1D2B48] lg:text-2xl lg:font-bold">Why Clients Trust Us</h3>
          <p className="lg:text-[#545E74]">
            Tax services aren’t just about crunching numbers they’re about trust, clarity, and <br /> peace of mind.
            Here’s why thousands choose us every year:
          </p>

          <div
            className="lg:w-full lg:h-164 lg:bg-cover lg:bg-center lg:mt-6 lg:bg-[url('/home2.jpg')]"
            style={{ backgroundImage: "url('/home2.jpg')" }}
          >
            <div className="lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center lg:bg-black/40 lg:rounded-xl">
              <span className="lg:text-black lg:flex lg:flex-wrap lg:justify-between lg:items-center lg:bg-[#FFFEFE] lg:p-2 lg:rounded-lg lg:h-[55%] lg:text-xl lg:font-semibold lg:w-[80%]">
                <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
                  <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                    <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                      <GraduationCap size={24} weight="fill" />
                    </div>
                    <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                      <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Professional Expertise</h5>
                      <p className="lg:text-gray-500 lg:text-xs">
                        A team of CAs, CPAs, Enrolled Agents, and Lawyers with Big 4 expertise, dedicated to delivering
                        accurate, reliable, and client-focused tax solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
                  <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                    <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                      <LockKey size={24} weight="fill" />
                    </div>
                    <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                      <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Secure & Confidential</h5>
                      <p className="lg:text-gray-500 lg:text-xs">
                        Our team is made up of Chartered Accountants, CPAs, Enrolled Agents, Lawyers, and Management
                        graduates with proven experience in Big 4 audit and top consulting firms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
                  <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                    <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                      <Money size={24} weight="fill" />
                    </div>
                    <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                      <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Affordable Pricing</h5>
                      <p className="lg:text-gray-500 lg:text-xs">
                        We have built lasting trust with our clients through a professional approach combined with a
                        personal touch, resulting in strong and enduring business relationships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
                  <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                    <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                      <PhoneCall size={24} weight="fill" />
                    </div>
                    <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                      <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Year-Round Support</h5>
                      <p className="lg:text-gray-500 lg:text-xs">
                        We have gained the strong confidence of our clients through a professional approach combined with
                        a personal touch, reflected in the long-standing relationships we share with them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
                  <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                    <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                      <Wrench size={24} weight="fill" />
                    </div>
                    <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-2 lg:rounded-r-lg lg:text-start">
                      <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Comprehensive services</h5>
                      <p className="lg:text-gray-500 lg:text-xs">
                        Our services cover the full spectrum of foreign exchange law, delivered by tax professionals who
                        bring more than ten years of experience and rigorous training to every client.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
                  <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                    <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                      <Globe size={24} weight="fill" />
                    </div>
                    <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-2 lg:rounded-r-lg lg:text-start">
                      <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Seamless Digital Process</h5>
                      <p className="lg:text-gray-500 lg:text-xs">
                        We offer advisory and compliance services in foreign exchange law, delivered by tax professionals
                        with over a decade of experience.
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:mt-10 lg:bg-white lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:w-[100%] lg:text-center">
          <h3 className="lg:text-[#1D2B48] lg:text-2xl lg:font-bold">Our Services</h3>
          <p className="lg:text-[#545E74]">
            We offer end-to-end tax solutions designed for individuals, families, and businesses alike
          </p>

          <span className="lg:text-black lg:flex lg:flex-wrap lg:justify-between lg:items-center lg:p-2 lg:rounded-lg lg:h-[55%] lg:text-xl lg:font-semibold lg:w-[80%] lg:gap-3">
            <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
              <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                  <Notepad size={24} weight="fill" />
                </div>
                <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                  <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Personal Tax Filing</h5>
                  <p className="lg:text-gray-500 lg:text-xs">
                    We assist salaried individuals, freelancers, and self-employed professionals in preparing and filing
                    returns correctly, helping them claim maximum benefits on eligible deductions.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
              <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                  <Buildings size={24} weight="fill" />
                </div>
                <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                  <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Business Tax Filing &amp; Planning</h5>
                  <p className="lg:text-gray-500 lg:text-xs">
                    Running a business is tough our tailored tax solutions for LLCs, startups, and corporations cover
                    compliance and planning, helping you keep more of what you earn.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
              <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                  <Shield size={24} weight="fill" />
                </div>
                <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                  <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">IRS Audit Protection</h5>
                  <p className="lg:text-gray-500 lg:text-xs">
                    If the IRS contacts you, don’t panic you won’t face it alone. Our specialists will represent you,
                    respond to IRS notices, and guide you until the issue is fully resolved.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
              <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                  <GlobeHemisphereWest size={24} weight="fill" />
                </div>
                <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                  <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">FBAR &amp; International Reporting</h5>
                  <p className="lg:text-gray-500 lg:text-xs">
                    For NRIs, expats, and those with overseas accounts, we manage FBAR, FATCA, and global tax compliance
                    ensuring full U.S. compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
              <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                  <CreditCard size={24} weight="fill" />
                </div>
                <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                  <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Payment Plans &amp; IRS Relief</h5>
                  <p className="lg:text-gray-500 lg:text-xs">
                    If you owe taxes and can’t pay in full, we’ll help you negotiate with the IRS to set up an installment
                    agreement or explore relief programs that reduce your financial stress.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[47%] lg:h-[30%] lg:rounded-lg lg:bg-[#1D2B48] lg:flex lg:justify-end lg:shadow-lg">
              <div className="lg:bg-[#F7F7F7] lg:w-[97%] lg:flex lg:justify-start lg:items-center lg:rounded-lg lg:p-2">
                <div className="lg:bg-[#E1E2E5] lg:w-[10%] lg:h-[49%] lg:self-start lg:flex lg:items-center lg:justify-center lg:py-3 lg:rounded-full">
                  <ChartBar size={24} weight="fill" />
                </div>
                <div className="lg:bg-green-00 lg:w-[90%] lg:h-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:py-2 lg:pl-3 lg:gap-1 lg:rounded-r-lg lg:text-start">
                  <h5 className="lg:text-[#1D2B48] lg:text-sm lg:font-bold">Tax Planning &amp; Year-Round Consultation</h5>
                  <p className="lg:text-gray-500 lg:text-xs">
                    Don’t wait for April our proactive tax planning helps you make smart decisions year-round, minimize
                    liabilities, and avoid last-minute surprises.
                  </p>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="lg:mt-10 lg:bg-red-00 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[100%] lg:gap-4 lg:text-center">
          <h3 className="lg:text-[#1D2B48] lg:text-2xl lg:font-bold">How It Works</h3>
          <p className="lg:text-[#545E74]">
            We offer end-to-end tax solutions designed for individuals, families, and businesses alike
          </p>

          <span className="lg:text-black lg:flex lg:flex-wrap lg:bg-blue-00 lg:justify-between lg:items-center lg:p-2 lg:rounded-lg lg:h-[55%] lg:text-xl lg:font-semibold lg:w-[80%] lg:gap-3 lg:mt-5">
            <div className="lg:bg-red-00 lg:w-[100%] lg:flex lg:justify-between">
              <div className="lg:w-[30%] lg:bg-white lg:h-50 lg:flex lg:flex-col lg:gap-2">
                <div className="lg:h-[50%] lg:bg-pink-00 lg:flex lg:items-center lg:justify-center">
                  <div className="lg:border lg:border-3 lg:border-dashed lg:w-[22%] lg:h-[65%] lg:rounded-full lg:flex lg:justify-center lg:items-center">
                    <div className="lg:bg-[#1D2B48] lg:h-[95%] lg:w-[95%] lg:rounded-full lg:flex lg:justify-center lg:items-center">
                      <h1 className="lg:text-white">1</h1>
                    </div>
                  </div>
                  <div className="lg:black lg:block lg:absolute lg:z-10 lg:center-0 lg:left-90 lg:w-[43%] lg:border-t-2 lg:border-dashed lg:border-[#1D2B48]"></div>
                </div>

                <h3 className="lg:text-[#1D2B48] lg:text-lg lg:font-semibold">Upload Your Documents</h3>
                <p className="lg:text-gray-500 lg:text-xs">
                  Use our encrypted online portal <br /> to securely share your tax forms <br /> and financial details.
                </p>
              </div>

              <div className="lg:w-[30%] lg:bg-white lg:h-50 lg:flex lg:flex-col lg:items-center lg:gap-2">
                <div className="lg:h-[50%] lg:w-[80%] lg:bg-white lg:relative lg:z-10 lg:flex lg:items-center lg:justify-center">
                  <div className="lg:border lg:border-3 lg:border-dashed lg:w-[27%] lg:h-[65%] lg:rounded-full lg:flex lg:justify-center lg:items-center">
                    <div className="lg:bg-[#1D2B48] lg:h-[95%] lg:w-[95%] lg:rounded-full lg:flex lg:justify-center lg:items-center">
                      <h1 className="lg:text-white">2</h1>
                    </div>
                  </div>
                </div>

                <h3 className="lg:text-[#1D2B48] lg:text-lg lg:font-semibold">Expert Review &amp; Preparation</h3>
                <p className="lg:text-gray-500 lg:text-xs">
                  Our experts ensure fast, accurate <br /> returns and the best refund or lowest <br /> liability.
                </p>
              </div>

              <div className="lg:w-[30%] lg:bg-white lg:h-50 lg:flex lg:flex-col lg:gap-2">
                <div className="lg:h-[50%] lg:bg-pink-00 lg:flex lg:items-center lg:justify-center">
                  <div className="lg:border lg:border-3 lg:border-dashed lg:w-[22%] lg:h-[65%] lg:rounded-full lg:flex lg:justify-center lg:items-center">
                    <div className="lg:bg-[#1D2B48] lg:h-[95%] lg:w-[95%] lg:rounded-full lg:flex lg:justify-center lg:items-center">
                      <h1 className="lg:text-white">3</h1>
                    </div>
                  </div>
                </div>

                <h3 className="lg:text-[#1D2B48] lg:text-lg lg:font-semibold">Filing with Confidence</h3>
                <p className="lg:text-gray-500 lg:text-xs">
                  We handle filing, updates, and <br /> your copy so you can relax knowing <br /> it’s done right.
                </p>
              </div>
            </div>
          </span>
        </div>

        <div className="lg:w-[80%] lg:bg-green-00 lg:h-100 lg:flex lg:flex-col lg:items-center lg:justify-between lg:mt-15">
          <div className="lg:relative lg:border lg:border-3 lg:border-dashed lg:border-[#1D2B48] lg:z-50 lg:top-12 lg:flex lg:justify-center lg:items-center lg:bg-[#FFFEFE] lg:h-[27%] lg:w-[10%] lg:rounded-full">
            <UsersThree size={40} weight="fill" className="lg:text-[#1D2B48]" />
          </div>

          <div className="lg:bg-[#1D2B48] lg:w-[100%] lg:h-[80%] lg:text-center lg:rounded-lg lg:flex lg:flex-col lg:justify-center lg:items-center lg:p-6 lg:gap-5">
            <h3 className="lg:text-white lg:text-lg">WHO WE HELP</h3>
            <p className="lg:text-white lg:text-sm">
              We prepare personal tax returns for people from all walks of life. The base forms are Forms <br /> 1040
              with all types of income, deductions and credits. This includes any supporting tax and <br /> reporting
              forms if you have dependents, itemized deductions, tax benefits, investments, <br /> accounts or property
              outside the United States.
            </p>
            <p className="lg:text-white lg:text-md lg:border lg:border-b-1 lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:cursor-pointer">
              READ MORE
            </p>
          </div>
        </div>

        <div className="lg:w-[80%] lg:mt-10 lg:flex lg:justify-between">
          <div className="lg:bg-[#F7F7F7] lg:w-[22%] lg:h-30 lg:rounded-lg lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 lg:shadow-lg lg:cursor-pointer">
            <div className="lg:bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] lg:flex lg:justify-center lg:items-center lg:rounded-full">
              <Users size={32} weight="fill" className="lg:text-[#1D2B48]" />
            </div>
            <p className="lg:text-[#1D2B48] lg:font-semibold lg:text-sm">REFER A FRIEND</p>
          </div>

          <div className="lg:bg-[#F7F7F7] lg:w-[22%] lg:h-30 lg:rounded-lg lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 lg:shadow-lg lg:cursor-pointer">
            <div className="lg:bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] lg:flex lg:justify-center lg:items-center lg:rounded-full">
              <Handshake size={32} weight="fill" className="lg:text-[#1D2B48]" />
            </div>
            <p className="lg:text-[#1D2B48] lg:font-semibold lg:text-sm">CONTENTIMENT</p>
          </div>

          <div className="lg:bg-[#F7F7F7] lg:w-[22%] lg:h-30 lg:rounded-lg lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 lg:shadow-lg lg:cursor-pointer">
            <div className="lg:bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] lg:flex lg:justify-center lg:items-center lg:rounded-full">
              <CheckCircle size={32} weight="fill" className="lg:text-[#1D2B48]" />
            </div>
            <p className="lg:text-[#1D2B48] lg:font-semibold lg:text-sm">ADVISORY &amp; COMPLIANCE</p>
          </div>

          <div className="lg:bg-[#F7F7F7] lg:w-[22%] lg:h-30 lg:rounded-lg lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 lg:shadow-lg lg:cursor-pointer">
            <div className="lg:bg-[#E1E2E5] lg:h-[50%] lg:w-[27%] lg:flex lg:justify-center lg:items-center lg:rounded-full">
              <ThumbsUp size={32} weight="fill" className="lg:text-[#1D2B48]" />
            </div>
            <p className="lg:text-[#1D2B48] lg:font-semibold lg:text-sm">SUPPORT</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
