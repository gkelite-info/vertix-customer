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
          <p className="text-[#1C2A46] text-center text-sm mt-3 lg:text-sm lg:mt-3">
            We focus on clients. We take pride in our ability to provide quality
            services whether they are an owner-managed business or a large
            multinational corporation.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row mt-8 lg:w-[90%] lg:mt-10">
          <div className="w-full lg:w-[60%] pt-5 pr-0 lg:pt-5 lg:pr-7">
            <p className="text-black text-sm lg:text-sm">
              Our team consists of highly skilled and motivated professionals
              including Chartered Accountants, Management graduates, CPA&apos;s,
              Enrolled Agent&apos;s and Lawyers who have worked for top
              consulting firms and Big 4 Audit firms. Over the years, we have
              gained in-depth experience in providing multitude of services.
            </p>
            <p className="mt-4 text-black text-sm lg:mt-5 lg:text-sm">
              We have earned enormous confidence of all our clients courtesy our
              professional approach blended with personal touch. The same is
              reflected in an enduring business relationship that we enjoy with
              our clients.
            </p>
            <p className="mt-4 text-black text-sm lg:mt-5 lg:text-sm">
              We provide advisory and compliance services encompassing the
              entire gamut of foreign exchange law. A typical client is served by
              a tax professional with more than a decade of experience and
              hundreds of hours of training.
            </p>
            <p className="mt-4 text-black text-sm lg:mt-5 lg:text-sm">
              We focus on clients. We take pride in our ability to provide
              quality services - whether they are an owner-managed business or a
              large multinational corporation. We are a multi-skilled, multi-
              disciplined firm, offering clients a wide range of
              industry-focused business solutions. We recruit the brightest and
              the best - whatever their specialisation.
            </p>
            <p className="mt-4 text-black text-sm lg:mt-5 lg:text-sm">
              We combine the dynamism and fluid-thinking of the young graduate,
              with the business knowledge and insight of the seasoned executive.
              Investing in our people means our clients get world-class
              expertise to solve their complex business problems.
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