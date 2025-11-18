"use client"

import Link from "next/link"
import { HiX } from "react-icons/hi"
import { MdArrowDropDown } from "react-icons/md"

export default function MobileNav({
  mobileNavOpen,
  toggleMobileNav,
  openService,
  setOpenService,
  openResearch,
  setOpenResearch
}: any) {

  if (!mobileNavOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-40 z-40"
        onClick={toggleMobileNav}
      />

      <div
        className="fixed right-0 top-0 h-[90%] w-[70%] bg-[#1D2B48] shadow-xl z-50 p-5 animate-slideLeft flex flex-col overflow-y-auto"
      >
        <div className="w-full flex justify-end mb-4">
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMobileNav}
          />
        </div>

        <Link href="/" className="block py-3 text-white font-medium" onClick={toggleMobileNav}>
          Home
        </Link>

        <Link href="/about" className="block py-3 text-white font-medium" onClick={toggleMobileNav}>
          About Us
        </Link>

        <div>
          <button
            className="w-full py-3 text-left font-medium flex justify-between items-center"
            onClick={() => setOpenService(!openService)}
          >
            Services
            <MdArrowDropDown className={`transition ${openService ? "rotate-180" : ""}`} />
          </button>

          {openService && (
            <div className="flex flex-col items-start">

              <button className="py-2 font-medium">Tax Filing</button>

              <Link href="/individual" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                Individual
              </Link>
              <Link href="/business" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                Business
              </Link>

              <button className="py-2 font-medium">Expert Tax Advice</button>

              <Link href="/incorporation_business" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                Incorporation Business
              </Link>
              <Link href="/amendement_tax_returns" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                Amendement of Tax Returns
              </Link>

              <Link href="/our_accuracy_promise" className="py-2 text-xs" onClick={toggleMobileNav}>
                Our Accuracy Promise
              </Link>
              <Link href="/data_protection_privacy" className="py-2 text-xs" onClick={toggleMobileNav}>
                Data Protection & Privacy
              </Link>
              <Link href="/smart_tax_strategy" className="py-2 text-xs" onClick={toggleMobileNav}>
                Smart Tax Strategy
              </Link>

              <button className="py-2 font-medium">IRS Issue Resolution</button>

              <Link href="/irs_statelevy" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                IRS or State Levy
              </Link>
              <Link href="/tax_problem_solving" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                Tax Problem Solving
              </Link>
              <Link href="/the_five" className="py-2 text-xs ml-4" onClick={toggleMobileNav}>
                The Five W’s & H of Liens
              </Link>

            </div>
          )}
        </div>

        <div>
          <button
            className="w-full py-3 text-left font-medium flex justify-between items-center"
            onClick={() => setOpenResearch(!openResearch)}
          >
            Research
            <MdArrowDropDown className={`transition ${openResearch ? "rotate-180" : ""}`} />
          </button>

          {openResearch && (
            <div className="ml-3 flex flex-col items-start">
              <Link href="/tax_treaties" className="py-2 text-xs" onClick={toggleMobileNav}>Tax Treaties</Link>
              <Link href="/elections" className="py-2 text-xs" onClick={toggleMobileNav}>Elections</Link>
              <Link href="/healthcare" className="py-2 text-xs" onClick={toggleMobileNav}>Health Care</Link>
              <Link href="/bankaccount_reporting" className="py-2 text-xs" onClick={toggleMobileNav}>Bank Account Reporting</Link>
              <Link href="/reit" className="py-2 text-xs" onClick={toggleMobileNav}>REIT</Link>
              <Link href="/unreimbursed_expenses" className="py-2 text-xs" onClick={toggleMobileNav}>Unreimbursed Expenses</Link>
            </div>
          )}
        </div>

        <Link href="/contact" className="block py-3 text-white font-medium" onClick={toggleMobileNav}>
          Contact
        </Link>
      </div>
    </>
  )
}
