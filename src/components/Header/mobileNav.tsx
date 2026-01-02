"use client";

import Link from "next/link";
import { HiX } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function MobileNav({
  mobileNavOpen,
  toggleMobileNav,
  openService,
  setOpenService,
  openResearch,
  setOpenResearch,
}: any) {
  if (!mobileNavOpen) return null;

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const isServicePath = () => {
    return [
      "/individual",
      "/business",
      "/incorporation_business",
      "/amendement_tax_returns",
      "/our_accuracy_promise",
      "/data_protection_privacy",
      "/smart_tax_strategy",
      "/irs_statelevy",
      "/tax_problem_solving",
      "/the_five",
    ].includes(pathname);
  };

  const isResearchPath = () => {
    return [
      "/tax_treaties",
      "/hsa_ira",
      "/foreign_earned_income_exclusion",
      "/elections",
      "/healthcare",
      "/bankaccount_reporting",
      "/reit",
      "/unreimbursed_expenses",
    ].includes(pathname);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-40 z-40"
        onClick={toggleMobileNav}
      />

      <div className="fixed right-0 top-0 h-[90%] w-[70%] bg-[#1D2B48] shadow-xl z-50 p-5 animate-slideLeft flex flex-col overflow-y-auto">
        <div className="w-full flex justify-end mb-4">
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMobileNav}
          />
        </div>

        <Link
          href="/"
          onClick={toggleMobileNav}
          className="block py-3 font-medium text-white"
        >
          <span
            className={`inline-block ${
              isActive("/") ? "border-b-2 border-red-400" : ""
            }`}
          >
            Home
          </span>
        </Link>

        <Link
          href="/about"
          onClick={toggleMobileNav}
          className="block py-3 font-medium text-white"
        >
          <span
            className={`inline-block ${
              isActive("/about") ? "border-b-2 border-red-400" : ""
            }`}
          >
            About Us
          </span>
        </Link>

        <div>
          <button
            className="w-full py-3 text-left font-medium flex justify-between items-center text-white"
            onClick={() => setOpenService(!openService)}
          >
            <span
              className={`inline-block ${
                isServicePath() ? "border-b-2 border-red-400" : ""
              }`}
            >
              Services
            </span>
            <MdArrowDropDown
              className={`transition ${openService ? "rotate-180" : ""}`}
            />
          </button>

          {openService && (
            <div className="flex flex-col items-start">
              <button className="py-2 font-medium text-white">
                Tax Filing
              </button>

              {[
                ["/individual", "Individual"],
                ["/business", "Business"],
                ["/incorporation_business", "Incorporation Business"],
                ["/amendement_tax_returns", "Amendement of Tax Returns"],
                ["/our_accuracy_promise", "Our Accuracy Promise"],
                ["/data_protection_privacy", "Data Protection & Privacy"],
                ["/smart_tax_strategy", "Smart Tax Strategy"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href as string}
                  onClick={toggleMobileNav}
                  className="py-2 text-xs ml-4 text-white"
                >
                  <span
                    className={`inline-block ${
                      isActive(href as string)
                        ? "border-b-2 border-red-400"
                        : ""
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full py-3 text-left font-medium flex justify-between items-center text-white"
            onClick={() => setOpenResearch(!openResearch)}
          >
            <span
              className={`inline-block ${
                isResearchPath() ? "border-b-2 border-red-400" : ""
              }`}
            >
              Research
            </span>
            <MdArrowDropDown
              className={`transition ${openResearch ? "rotate-180" : ""}`}
            />
          </button>

          {openResearch && (
            <div className="ml-3 flex flex-col items-start text-white">
              {[
                ["/tax_treaties", "Tax Treaties"],
                ["/hsa_ira", "HSA IRA"],
                ["/elections", "Elections"],
                ["/healthcare", "Health Care"],
                ["/bankaccount_reporting", "Bank Account Reporting"],
                ["/reit", "REIT"],
                [
                  "/foreign_earned_income_exclusion",
                  "Foreign Earned Income Exclusion",
                ],
                ["/unreimbursed_expenses", "Unreimbursed Expenses"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href as string}
                  onClick={toggleMobileNav}
                  className="py-2 text-xs text-white"
                >
                  <span
                    className={`inline-block ${
                      isActive(href as string)
                        ? "border-b-2 border-red-400"
                        : ""
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/contact"
          onClick={toggleMobileNav}
          className="block py-3 font-medium text-white"
        >
          <span
            className={`inline-block ${
              isActive("/contact") ? "border-b-2 border-red-400" : ""
            }`}
          >
            Contact
          </span>
        </Link>
      </div>
    </>
  );
}
