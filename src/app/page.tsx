"use client";

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
  Wrench,
} from "phosphor-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const cards = [
    { icon: Users, title: "REFER A FRIEND", route: "/refer-friend" },
    { icon: ThumbsUp, title: "SUPPORT", route: "/contact" },
  ];

  const serviceData = [
    {
      title: "Personal Tax Filing",
      description:
        "We assist salaried individuals, freelancers, and self-employed professionals in preparing and filing returns correctly, helping them claim maximum benefits on eligible deductions.",
      Icon: Notepad,
    },
    {
      title: "Business Tax Filing & Planning",
      description:
        "Running a business is tough—our tailored tax solutions for LLCs, startups, and corporations cover compliance and planning, helping you keep more of what you earn.",
      Icon: Buildings,
    },
    {
      title: "IRS Audit Protection",
      description:
        "If the IRS contacts you, don’t panic—you won’t face it alone. Our specialists will represent you, respond to IRS notices, and guide you until the issue is fully resolved.",
      Icon: Shield,
    },
    {
      title: "FBAR & International Reporting",
      description:
        "For NRIs, expats, and those with overseas accounts, we manage FBAR, FATCA, and global tax compliance ensuring full U.S. compliance.",
      Icon: GlobeHemisphereWest,
    },
    {
      title: "Payment Plans & IRS Relief",
      description:
        "If you owe taxes and can’t pay in full, we’ll help you negotiate with the IRS to set up an installment agreement or explore relief programs that reduce your financial stress.",
      Icon: CreditCard,
    },
    {
      title: "Tax Planning & Year-Round Consultation",
      description:
        "Don’t wait for April—our proactive tax planning helps you make smart decisions year-round, minimize liabilities, and avoid last-minute surprises.",
      Icon: ChartBar,
    },
  ];

  const cardsData = [
    {
      icon: <GraduationCap size={24} weight="fill" />,
      title: "Professional Expertise",
      desc: "A team of CAs, CPAs, Enrolled Agents, and Lawyers with Big 4 expertise, dedicated to delivering accurate, reliable, and client-focused tax solutions.",
    },
    {
      icon: <LockKey size={24} weight="fill" />,
      title: "Secure & Confidential",
      desc: "Our team consists of CA’s, CPAs, Enrolled Agents and Lawyers with experience in Big 4 audit and top consulting firms.",
    },
    {
      icon: <Money size={24} weight="fill" />,
      title: "Affordable Pricing",
      desc: "We’ve built lasting trust with our clients through a professional yet personal approach.",
    },
    {
      icon: <PhoneCall size={24} weight="fill" />,
      title: "Year-Round Support",
      desc: "We have gained strong confidence from clients through a professional approach with a personal touch.",
    },
    {
      icon: <Wrench size={24} weight="fill" />,
      title: "Comprehensive Services",
      desc: "Our services cover the full spectrum of foreign exchange law, delivered by experienced tax professionals.",
    },
    {
      icon: <Globe size={24} weight="fill" />,
      title: "Seamless Digital Process",
      desc: "We deliver advisory & compliance services in foreign exchange law with over a decade of expertise.",
    },
  ];

  return (
    <>
      <div className="lg:bg-white bg-white pb-7 lg:flex lg:flex-col lg:items-center lg:pb-15">
        <section
          className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center p-4 bg-[url('/Home_img.png')] lg:h-screen"
          style={{ backgroundImage: "url('/Home_img.png')" }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 flex flex-col text-center items-center justify-center gap-4 max-w-4xl">
            <h1 className="text-white font-bold text-2xl px-2 lg:w-[90%] md:w-[65%] md:text-4xl lg:text-4xl">
              Welcome to Vertix Tax Solutions your trusted partner in taxes.
            </h1>

            <p className="text-[#AEAEAE] lg:text-sm text-xs px-4 w-[90%] md:w-[65%] lg:w-[100%] max-w-2xl lg:text-base">
              Managing taxes can be overwhelming—endless forms, changing rules,
              and tight deadlines. At Vertix TAX Solutions, our mission is
              simple: take the stress out of taxes.
            </p>
          </div>
        </section>

        <div className="lg:mt-8 bg-white flex flex-col items-center justify-center gap-6 w-full text-center lg:mt-10 lg:gap-4">
          <h3 className="text-[#1D2B48] text-xl font-bold lg:text-2xl">
            Why Clients Trust Us
          </h3>
          <p className="text-[#545E74] max-w-xl mx-auto px-4 lg:px-0">
            Tax services aren’t just about crunching numbers they’re about
            trust, clarity, and peace of mind. Here’s why thousands choose us
            every year:
          </p>

          <div
            className="w-full h-auto min-h-[500px] bg-cover bg-center mt-6 p-4 lg:h-[450px] lg:p-0"
            style={{ backgroundImage: "url('/home2.jpg')" }}
          >
            <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-xl">
              <span className="text-black w-full p-4 bg-[#FFFEFE]/95 rounded-lg shadow-xl flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:w-[80%] lg:h-auto lg:p-3">
                {cardsData.map((card, idx) => (
                  <div
                    key={idx}
                    className="w-full h-auto min-h-[100px] rounded-lg rounded-r-xl shadow-md lg:bg-[#1D2B48] flex justify-start md:w-[48%] lg:w-[47%] lg:h-[30%] lg:shadow-lg lg:flex lg:justify-end"
                  >
                    <div className="bg-[#F7F7F7] w-full flex justify-start items-center rounded-lg p-3 lg:w-[97%] lg:p-2">
                      <div className="bg-[#E1E2E5] p-2.5 flex-shrink-0 flex items-center justify-center rounded-full self-start">
                        {card.icon}
                      </div>

                      <div className="w-full flex flex-col justify-start items-start pl-3 gap-1 text-start lg:w-[90%] lg:py-2">
                        <h5 className="text-[#1D2B48] text-sm font-bold">
                          {card.title}
                        </h5>
                        <p className="lg:text-gray-500 lg:text-xs">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-red-00 mt-8  flex flex-col items-center justify-center gap-6 w-full text-center lg:mt-10 lg:gap-4">
          <h3 className="text-[#1D2B48] text-xl font-bold lg:text-2xl">
            Our Services
          </h3>
          <p className="text-[#545E74] mx-auto px-4 lg:px-0">
            We offer end-to-end tax solutions designed for individuals,
            families, and businesses alike
          </p>

          <div className="bg-green-00 text-black flex flex-col gap-5 p-4 lg:p-2 rounded-lg w-full max-w-6xl md:flex-row md:flex-wrap md:justify-between md:gap-5 lg:flex-row lg:flex-wrap lg:justify-between lg:items-start lg:gap-5 lg:w-[80%] lg:max-w-5xl">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="w-full h-auto lg:min-h-[115px] rounded-lg shadow-md lg:bg-[#1D2B48] flex justify-start md:w-[47%] md:h-auto lg:w-[48%] lg:shadow-lg lg:flex lg:justify-end"
              >
                <div className="bg-[#F7F7F7] w-full flex justify-start items-center rounded-lg p-3 lg:w-[97%] lg:p-2">
                  <div className="bg-[#E1E2E5] w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full self-start lg:py-3">
                    <service.Icon size={24} weight="fill" />
                  </div>

                  <div className="bg-yellow-00 w-full flex flex-col justify-start items-start pl-3 gap-1 text-start lg:w-[90%] lg:h-full lg:py-2">
                    <h5 className="text-[#1D2B48] text-sm font-bold">
                      {service.title}
                    </h5>
                    <p className="text-gray-500 text-xs font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-center w-full gap-6 text-center lg:mt-10 lg:gap-4">
          <h3 className="text-[#1D2B48] text-xl font-bold lg:text-2xl">
            How It Works
          </h3>
          <p className="text-[#545E74] max-w-md mx-auto px-4 lg:px-0">
            We offer end-to-end tax solutions designed for individuals,
            families, and businesses alike
          </p>

          <div className="text-black flex flex-col gap-8 p-4 rounded-lg w-full max-w-5xl lg:flex-row lg:justify-between lg:items-start lg:gap-8 lg:mt-5 lg:h-auto">
            <div className="w-full flex flex-col items-center gap-2 lg:w-[30%] lg:h-auto">
              <div className="h-20 w-full flex items-center justify-center relative">
                <div className="border border-3 border-dashed border-[#1D2B48] w-16 h-16 rounded-full flex justify-center items-center">
                  <div className="bg-[#1D2B48] h-[90%] w-[90%] rounded-full flex justify-center items-center">
                    <h1 className="text-white text-xl font-bold">1</h1>
                  </div>
                </div>

                <div className="hidden lg:block absolute right-0 transform translate-x-[90px] w-[calc(50%)] h-0 border-t-2 border-dashed border-[#1D2B48] z-0"></div>
              </div>

              <h3 className="text-[#1D2B48] text-lg font-semibold mt-2">
                Upload Your Documents
              </h3>
              <p className="text-gray-500 text-sm leading-snug">
                Use our encrypted online portal to securely share your tax forms
                and financial details.
              </p>
            </div>

            <div
              className="
      w-full
      flex flex-col items-center gap-2
      lg:w-[30%] lg:h-auto
    "
            >
              <div
                className="
        h-20 w-full
        flex items-center justify-center
        relative
      "
              >
                <div
                  className="
          border border-3 border-dashed border-[#1D2B48]
          w-16 h-16 rounded-full
          flex justify-center items-center
        "
                >
                  <div
                    className="
            bg-[#1D2B48] h-[90%] w-[90%] rounded-full
            flex justify-center items-center
          "
                  >
                    <h1 className="text-white text-xl font-bold">2</h1>
                  </div>
                </div>

                <div
                  className="
          hidden lg:block absolute left-0 transform -translate-x-[95px]
          w-[calc(50%)] h-0 border-dashed border-[#1D2B48]
          z-0
        "
                ></div>
                <div
                  className="
          hidden lg:block absolute right-0 transform translate-x-[95px]
          w-[calc(50%)] h-0 border-t-2 border-dashed border-[#1D2B48]
          z-0
        "
                ></div>
              </div>

              <h3
                className="
        text-[#1D2B48] text-lg font-semibold mt-2
      "
              >
                Expert Review &amp; Preparation
              </h3>
              <p
                className="
        text-gray-500 text-sm leading-snug
      "
              >
                Our experts ensure fast, accurate returns and the best refund or
                lowest liability.
              </p>
            </div>

            <div
              className="
      w-full
      flex flex-col items-center gap-2
      lg:w-[30%] lg:h-auto
    "
            >
              <div
                className="
        h-20 w-full
        flex items-center justify-center
        relative
      "
              >
                <div
                  className="
          border border-3 border-dashed border-[#1D2B48]
          w-16 h-16 rounded-full
          flex justify-center items-center
        "
                >
                  <div
                    className="
            bg-[#1D2B48] h-[90%] w-[90%] rounded-full
            flex justify-center items-center
          "
                  >
                    <h1 className="text-white text-xl font-bold">3</h1>
                  </div>
                </div>

                <div
                  className="
          hidden lg:block absolute left-0 transform -translate-x-1/2
          w-[calc(100%)] h-0 border-dashed border-[#1D2B48]
          z-0
        "
                ></div>
              </div>

              <h3
                className="
        text-[#1D2B48] text-lg font-semibold mt-2
      "
              >
                Filing with Confidence
              </h3>
              <p
                className="
        text-gray-500 text-sm leading-snug
      "
              >
                We handle filing, updates, and your copy so you can relax
                knowing it’s done right.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full hidden lg:flex justify-center mt-10 sm:mt-12 md:mt-14 lg:mt-15 bg-red-00">
          <div
            className="relative w-[95%] sm:w-[85%] md:w-[75%] lg:w-[80%] 
                      h-[500px] xs:h-[520px] sm:h-[550px] md:h-[580px] lg:h-100 
                      flex flex-col lg:flex-col items-center 
                      bg-white lg:bg-transparent 
                      rounded-2xl lg:rounded-none 
                      overflow-hidden 
                      shadow-xl lg:shadow-none"
          >
            <div
              className="absolute -top-8 sm:-top-10 md:-top-12 lg:top-12 lg:relative lg:z-50 
                        z-30 
                        flex justify-center items-center 
                        bg-[#FFFEFE] 
                        border-4 sm:border-[5px] md:border-[6px] lg:border-3 
                        border-dashed border-[#1D2B48] 
                        h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-[34%] lg:w-[10%] 
                        rounded-full 
                        shadow-lg"
            >
              <UsersThree
                size={40}
                weight="fill"
                className="text-[#1D2B48] size={48} sm:size={56} md:size={72} lg:size={40}"
              />
            </div>

            <div
              className="w-full h-full 
                        bg-[#1D2B48] 
                        rounded-t-3xl sm:rounded-t-[40px] lg:rounded-lg 
                        pt-20 sm:pt-24 md:pt-28 lg:pt-0 
                        flex flex-col lg:flex-col lg:justify-center lg:items-center 
                        px-6 sm:px-10 md:px-16 lg:px-6 
                        gap-5 sm:gap-6 md:gap-8 lg:gap-5 
                        text-center"
            >
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-lg">
                People We Serve
              </h3>
              <div className="flex flex-col items-center">
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-sm leading-relaxed max-w-3xl">
                  At Vertix Tax Solutions, we prepare comprehensive U.S.
                  individual tax returns (Form 1040)
                  <br className="hidden sm:inline" />
                  employment income, rental income, or investment gains, our
                  team ensures accurate and optimized filing.
                  <br className="hidden sm:inline" />
                </p>

                <button
                  onClick={() => router.push("/individual")}
                  className="mt-2 text-yellow-300 underline hover:text-yellow-400 text-sm sm:text-base cursor-pointer transition"
                >
                  Read More →
                </button>
              </div>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-sm leading-relaxed max-w-3xl">
                We prepare personal tax returns for people from all walks of
                life. The base forms are Forms
                <br className="hidden sm:inline" />
                1040 with all types of income, deductions and credits. This
                includes any supporting tax and
                <br className="hidden sm:inline" />
                reporting forms if you have dependents, itemized deductions, tax
                benefits, investments, <br className="hidden sm:inline" />
                accounts or property outside the United States.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-indigo-00 max-w-2xl mx-auto sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 bg-yellow-00 justify-items-center">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  onClick={() => router.push(card.route)}
                  className="bg-[#F7F7F7] cursor-pointer rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-48 w-[80%] sm:h-38 sm:w-[100%] lg:h-32 lg:w-[85%] flex flex-col items-center justify-center gap-4 px-6"
                >
                  <div className="bg-[#E1E2E5] lg:p-2 p-4 rounded-full">
                    <Icon size={32} weight="fill" className="text-[#1D2B48]" />
                  </div>
                  <p className="text-[#1D2B48] font-semibold text-lg lg:text-sm sm:text-base text-center leading-tight">
                    {card.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
