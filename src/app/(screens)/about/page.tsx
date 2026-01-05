"use client"

import { Buildings, Globe, Handshake, Note, Star, Users } from "phosphor-react"

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFFEFE] overflow-y-auto px-4 gap-4 pb-10 lg:px-4 lg:gap-2 lg:pb-10">
        <div className="w-full flex flex-col items-center mt-6 lg:h-[20%] lg:w-[45%] lg:mt-10">
          <h1 className="border-b-4 border-l-0 border-t-0 border-r-0 border-[#1D2B48] text-[#1D2B48] text-xl font-bold w-fit text-center">
            About us
          </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row mt-8 lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] pt-5 pr-0 lg:pt-5 lg:pr-7">
            <p className="text-black text-sm lg:text-sm">
              Welcome to Vertix Tax Solutions LLC, where trust meets expertise in U.S. taxation for NRIs.
              We know managing taxes from abroad can be stressful — that’s why we’ve built a system
              that simplifies every step, from document collection to e-filing, with total security and
              human support at every stage.
            </p>
            <p className="mt-4 text-black text-sm lg:mt-5 lg:text-sm">
              Our team of trained professionals understands both Indian and U.S. tax systems, helping
              you navigate complex tax rules with confidence. Whether you’re a student, salaried
              employee, entrepreneur, or high-net-worth individual, we customize our services to your
              unique goals and circumstances.

            </p>
            <p className="mt-4 text-black text-sm lg:mt-5 lg:text-sm">
              At Vertix, you’re not just a tax client — you’re a long-term partner.
              Our promise is simple: accurate filing, transparent process, and peace of mind, every
              single time.
            </p>
          </div>

          <div className="w-full flex justify-center mt-6 lg:w-[40%] lg:mt-0">
            <img
              src="/aboutpage.png"
              width={1200}
              height={800}
              alt="aboutpage.png"
              className="w-full max-w-md h-auto rounded-lg lg:h-[100%] lg:w-[74%] lg:rounded-lg"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-4 mt-8 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-10 lg:mt-15 lg:w-[90%] items-stretch">
          {[
            { icon: Users, title: "Our Team", desc: "Skilled professionals including CAs, CPAs, Management Graduates, Enrolled Agents, and Lawyers with Big 4 and top consulting experience." },
            { icon: Handshake, title: "Client Relationships", desc: "We’ve built lasting client trust through professionalism blended with a personal touch." },
            { icon: Note, title: "Advisory & Compliance", desc: "Comprehensive advisory and compliance services, with experts having 10+ years of experience and extensive training." },
            { icon: Globe, title: "Client Focus", desc: "Serving both owner-managed businesses and large multinational corporations with equal dedication." },
            { icon: Buildings, title: "Multi-Skilled Firm", desc: "A multi-disciplined firm offering a wide range of industry-focused business solutions." },
            { icon: Star, title: "People & Expertise", desc: "Dynamic young graduates combined with seasoned executives deliver world-class expertise to solve complex business problems." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] flex flex-col items-start w-full sm:w-[48%] p-5 rounded-2xl gap-4 shadow-lg hover:shadow-xl
                 lg:w-[30%] lg:p-5 lg:rounded-2xl lg:gap-5"
            >
              <div className="bg-[#E1E2E5] p-2 rounded-full flex justify-center items-center">
                <item.icon size={25} weight="fill" className="text-[#1D2B48]" />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-[#1D2B48] font-semibold">{item.title}</h3>
                <p className="text-sm mt-2 text-[#1C2A46] font-regular">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}