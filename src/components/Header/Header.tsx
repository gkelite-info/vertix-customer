"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "../AuthContext"
import { MdArrowDropDown } from "react-icons/md"
import { IoMdArrowDropright } from "react-icons/io"
import LogoutModal from "../logoutModal/page"

function Header() {
  const router = useRouter()

  const pathname = usePathname()
  const [, setIsLoggedIn] = useState(false)
  const { isAuthenticated, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const linkClass = (href: string) =>
    `relative text-black font-medium
         after:content-[''] after:absolute after:left-0 after:bottom-0
         after:h-[2px] after:bg-red-400 
         after:transition-[width] after:duration-200 after:ease-linear
         ${pathname === href ? "after:w-full" : "after:w-0"}`

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [pathname])

  const handleLogout = () => setShowLogoutModal(true)
  const confirmLogout = () => {
    logout()
    setShowLogoutModal(false)
    router.push("/login")
  }
  const cancelLogout = () => setShowLogoutModal(false)


  return (
    <>
      <div className="flex justify-center items-center bg-white sticky z-100 top-0 lg:h-25">
        <header className="bg-[#1D2B48] sticky top-0 z-50 shadow-lg lg:mt-0 lg:h-15 lg:w-[95%] rounded-full flex items-center px-3 lg:gap-5">
          <div className="bg-red-00 lg:h-[100%] lg:w-[80%] flex justify-center items-center lg:gap-10">
            <Link href="/" className={`${linkClass("/")} text-white`}>
              Home
            </Link>
            <Link href="/about" className={`${linkClass("/about")} text-white`}>
              About us
            </Link>
            <div className="relative lg:h-[100%] group flex items-center cursor-pointer">
              <div className="flex items-center">
                <Link href="" className={`${linkClass("")} text-white`}>
                  Services
                </Link>
                <MdArrowDropDown className="text-white text-xl ml-1" />
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded w-65 z-50">
                <ul className="flex flex-col text-black">
                  <li className="relative group/submenu">
                    <div className="flex items-center justify-between lg:pr-1 hover:bg-gray-100 hover:rounded">
                      <Link href="" className="block px-4 py-2 lg:text-sm">
                        Tax Filing
                      </Link>
                      <IoMdArrowDropright className="text-black text-lg" />
                    </div>
                    <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-white shadow-md rounded w-40 z-50">
                      <ul className="flex flex-col text-black">
                        <li>
                          <Link
                            href="/individual"
                            className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded"
                          >
                            Individual
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/business"
                            className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded"
                          >
                            Business
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group/submenu">
                    <div className="flex items-center justify-between lg:pr-1 hover:bg-gray-100 hover:rounded">
                      <Link href="" className="block px-4 py-2 lg:text-sm">
                        Expert Tax Advice
                      </Link>
                      <IoMdArrowDropright className="text-black text-lg" />
                    </div>
                    <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-white shadow-md rounded w-50 z-50">
                      <ul className="flex flex-col text-black">
                        <li>
                          <Link
                            href="/incorporation_business"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Incorporation Business
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/amendement_tax_returns"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Amendement of Tax Returns
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/our_accuracy_promise"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Our Accuracy Promise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/data_protection_privacy"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Data Protection & Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/smart_tax_strategy"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Smart Tax Strategy
                    </Link>
                  </li>
                  <li className="relative group/submenu">
                    <div className="flex items-center justify-between lg:pr-1 hover:bg-gray-100 hover:rounded">
                      <Link href="#" className="block px-4 py-2 lg:text-sm">
                        IRS Issue Resolution
                      </Link>
                      <IoMdArrowDropright className="text-black text-lg" />
                    </div>
                    <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-white shadow-md rounded w-45 z-50">
                      <ul className="flex flex-col text-black">
                        <li>
                          <Link
                            href="/irs_statelevy"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Irs or State Levy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/tax_problem_solving"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Tax Problem Solving
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/the_five"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            The five &quot;Ws&quot; one &quot;H&quot; of tax
                            Liens
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/business_tax_services"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Business Tax Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/expats_overseas_filers"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Expats & Overseas Filers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/non_citizen_tax_guidance"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Non-Citizen Tax Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/itin_application_help"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      ITIN Application Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/foreign_account_reporting"
                      className="block px-4 py-2 hover:bg-gray-100 hover:rounded lg:text-sm"
                    >
                      Foreign Account Reporting (FBAR)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group lg:h-[100%] flex items-center cursor-pointer">
              <div className="flex items-center">
                <Link
                  href="/research"
                  className={`${linkClass("/research")} text-white`}
                >
                  Research
                </Link>
                <MdArrowDropDown className="text-white text-xl cursor-pointer" />
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded mt-0 w-55 z-50">
                <ul className="flex flex-col text-black">
                  <li>
                    <Link
                      href="/tax_treaties"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Tax Treaties
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/elections"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Elections
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center justify-between lg:pr-1 hover:bg-gray-100 hover:rounded">
                      <Link
                        href="/healthcare"
                        className="block px-4 py-2 lg:text-sm"
                      >
                        Health Care
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/bankaccount_reporting"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      Bank Account Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reit"
                      className="block px-4 py-2 hover:bg-gray-100 lg:text-sm"
                    >
                      REIT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/unreimbursed_expenses"
                      className="block px-4 py-2 hover:bg-gray-100 hover:rounded lg:text-sm"
                    >
                      Unreimbursed Expenses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className={`${linkClass("/contact")} text-white`}
            >
              Contact
            </Link>
          </div>
          {/* <button
            className="font-medium lg:px-2 bg-white text-black lg:w-[13%] lg:h-[65%] lg:rounded-full cursor-pointer"
            onClick={handlerefer}
          >
            Refer a Friend
          </button> */}
          <div className="bg-gray-00 lg:h-[100%] flex justify-center items-center lg:w-[10%]">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 lg:rounded-full"
              >
                Signout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-white text-black font-medium px-4 py-2 lg:rounded-full"
              >
                Sign In
              </Link>
            )}
          </div>
        </header>
      </div>
      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </>
  )
}
export default Header
