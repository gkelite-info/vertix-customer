"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "../AuthContext"
import { MdArrowDropDown } from "react-icons/md"
import { IoMdArrowDropright } from "react-icons/io"
import LogoutModal from "../modals/logoutModal"
import { useHandleMagicLinkAuth } from "../../../utils/useHandleMagicLinkAuth"
import toast from "react-hot-toast"
import { HiOutlineMenu, HiX } from "react-icons/hi"
import MobileNav from "./mobileNav"
import { FaUserLarge } from "react-icons/fa6";
import EditDetailsModal from "../modals/profileModal"

function Header() {
  const router = useRouter()
  const { isTemporary } = useHandleMagicLinkAuth()
  const pathname = usePathname()
  const { isAuthenticated, logout, setIsAuthenticated } = useAuth()

  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev)

  const isServicesActive =
    pathname.startsWith("/individual") ||
    pathname.startsWith("/business") ||
    pathname.startsWith("/incorporation_business") ||
    pathname.startsWith("/amendement_tax_returns") ||
    pathname.startsWith("/our_accuracy_promise") ||
    pathname.startsWith("/data_protection_privacy") ||
    pathname.startsWith("/smart_tax_strategy") ||
    pathname.startsWith("/irs_statelevy") ||
    pathname.startsWith("/tax_problem_solving") ||
    pathname.startsWith("/the_five") ||
    pathname.startsWith("/business_tax_services") ||
    pathname.startsWith("/expats_overseas_filers") ||
    pathname.startsWith("/non_citizen_tax_guidance") ||
    pathname.startsWith("/itin_application_help") ||
    pathname.startsWith("/foreign_account_reporting")

  const isResearchActive =
    pathname.startsWith("/tax_treaties") ||
    pathname.startsWith("/elections") ||
    pathname.startsWith("/healthcare") ||
    pathname.startsWith("/bankaccount_reporting") ||
    pathname.startsWith("/reit") ||
    pathname.startsWith("/unreimbursed_expenses")

  const linkClass = (active: boolean) =>
    `relative text-black font-medium
     after:content-[''] after:absolute after:left-0 after:bottom-0
     after:h-[2px] after:bg-red-400 
     after:transition-[width] after:duration-200 after:ease-linear
     ${active ? "after:w-full" : "after:w-0"}`

  const handleLogout = () => setShowLogoutModal(true)

  const confirmLogout = () => {
    if (isTemporary) {
      localStorage.removeItem("temporary_access_flag")
      localStorage.removeItem("temporary_access_expiry")
      localStorage.removeItem("selectedYear")
      localStorage.removeItem("token")
      setIsAuthenticated(false)
      toast.success("Logged out successfully")
    } else {
      logout()
    }
    setShowLogoutModal(false)
    router.push("/")
  }

  const cancelLogout = () => setShowLogoutModal(false)

  const [openService, setOpenService] = useState(false)
  const [openResearch, setOpenResearch] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileNavOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="hidden lg:flex justify-center items-center bg-white sticky z-100 top-0 lg:h-25">
        <header className="bg-[#1D2B48] sticky top-0 z-50 shadow-lg lg:mt-0 lg:h-15 lg:w-[95%] rounded-full flex justify-between items-center px-7 lg:gap-5">
          <div className="h-[100%] flex items-center justify-center cursor-pointer" onClick={() => router.push("/")}>
            <img src="/logo.png" alt="logo.png" className="h-10 w-30" />
          </div>

          {!isAuthenticated &&
            <div className="lg:h-[100%] lg:w-[60%] flex justify-center items-center lg:gap-8">
              <Link
                href="/"
                className={`${linkClass(pathname === "/")} text-white p-2 hover:bg-white hover:text-[#1D2B48] transition-colors duration-200 rounded-full`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`${linkClass(pathname === "/about")} text-white hover:bg-white hover:text-[#1D2B48] p-2 transition-colors duration-200 rounded-full`}
              >
                About us
              </Link>

              <div className="relative lg:h-[100%] group flex items-center cursor-pointer">
                <div className="flex items-center">
                  <span className={`${linkClass(isServicesActive)} text-white hover:bg-white hover:text-[#1D2B48] p-2 transition-colors duration-200 rounded-full`}>
                    Services
                  </span>
                  <MdArrowDropDown className="text-white text-xl" />
                </div>

                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded w-65 z-50">
                  <ul className="flex flex-col text-black">

                    <li className="relative group/submenu">
                      <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-2">
                        <span className="lg:text-sm">Tax Filing</span>
                        <IoMdArrowDropright className="text-black text-lg" />
                      </div>

                      <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-white shadow-md rounded w-40 z-50">
                        <ul className="flex flex-col text-black">
                          <li><Link href="/individual" className="block px-4 py-2 text-sm hover:bg-gray-100">Individual</Link></li>
                          <li><Link href="/business" className="block px-4 py-2 text-sm hover:bg-gray-100">Business</Link></li>
                        </ul>
                      </div>
                    </li>

                    <li className="relative group/submenu">
                      <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-2">
                        <span className="lg:text-sm">Expert Tax Advice</span>
                        <IoMdArrowDropright className="text-black text-lg" />
                      </div>

                      <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-white shadow-md rounded w-50 z-50">
                        <ul className="flex flex-col text-black">
                          <li><Link href="/incorporation_business" className="block px-4 py-2 text-sm hover:bg-gray-100">Incorporation Business</Link></li>
                          <li><Link href="/amendement_tax_returns" className="block px-4 py-2 text-sm hover:bg-gray-100">Amendement of Tax Returns</Link></li>
                        </ul>
                      </div>
                    </li>

                    <li><Link href="/our_accuracy_promise" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Our Accuracy Promise</Link></li>
                    <li><Link href="/data_protection_privacy" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Data Protection & Privacy</Link></li>
                    <li><Link href="/smart_tax_strategy" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Smart Tax Strategy</Link></li>

                    <li className="relative group/submenu">
                      <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-2">
                        <span className="lg:text-sm">IRS Issue Resolution</span>
                        <IoMdArrowDropright className="text-black text-lg" />
                      </div>

                      <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-white shadow-md rounded w-45 z-50">
                        <ul className="flex flex-col text-black">
                          <li><Link href="/irs_statelevy" className="block px-4 py-2 text-sm hover:bg-gray-100">IRS or State Levy</Link></li>
                          <li><Link href="/tax_problem_solving" className="block px-4 py-2 text-sm hover:bg-gray-100">Tax Problem Solving</Link></li>
                          <li><Link href="/the_five" className="block px-4 py-2 text-sm hover:bg-gray-100">The Five W’s & H of Liens</Link></li>
                        </ul>
                      </div>
                    </li>

                    <li><Link href="/business_tax_services" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Business Tax Services</Link></li>
                    <li><Link href="/expats_overseas_filers" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Expats & Overseas Filers</Link></li>
                    <li><Link href="/non_citizen_tax_guidance" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Non-Citizen Tax Guidance</Link></li>
                    <li><Link href="/itin_application_help" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">ITIN Application Help</Link></li>
                    <li><Link href="/foreign_account_reporting" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Foreign Account Reporting (FBAR)</Link></li>
                  </ul>
                </div>
              </div>

              <div className="relative group flex items-center cursor-pointer">
                <div className="flex items-center">
                  <span
                    className={`${linkClass(isResearchActive)} text-white hover:bg-white hover:text-[#1D2B48] p-2 transition-colors duration-200 rounded-full`}
                  >
                    Research
                  </span>
                  <MdArrowDropDown className="text-white text-xl cursor-pointer" />
                </div>

                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded mt-0 w-55 z-50">
                  <ul className="flex flex-col text-black">
                    <li><Link href="/tax_treaties" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Tax Treaties</Link></li>
                    <li><Link href="/elections" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Elections</Link></li>
                    <li><Link href="/healthcare" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Health Care</Link></li>
                    <li><Link href="/bankaccount_reporting" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Bank Account Reporting</Link></li>
                    <li><Link href="/reit" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">REIT</Link></li>
                    <li><Link href="/unreimbursed_expenses" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Unreimbursed Expenses</Link></li>
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className={`${linkClass(pathname === "/contact")} text-white hover:bg-white hover:text-[#1D2B48] p-2 transition-colors duration-200 rounded-full`}
              >
                Contact
              </Link>
            </div>
          }

          <div className="lg:h-[100%] bg-red-00 gap-7 flex justify-end items-center lg:w-auto">
<<<<<<< Updated upstream
            {isAuthenticated && (
              <FaUserLarge
                size={23}
                className="cursor-pointer"
                onClick={() => setShowEditModal(true)}
              />
            )}
=======
            <FaUserLarge size={23} className="cursor-pointer text-white" />
>>>>>>> Stashed changes
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

      <div className="lg:hidden bg-[#1D2B48] w-full sticky top-0 z-50 shadow-md px-4 py-2 flex justify-between items-center h-14">
        <img src="/logo.png" alt="logo" className="h-8 cursor-pointer" onClick={() => router.push("/")} />
        {!isAuthenticated &&
          <>
            {!mobileNavOpen ? (
              <HiOutlineMenu
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMobileNav}
              />
            ) : (
              <HiX
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMobileNav}
              />
            )
            }
          </>
        }
      </div>

      {!isAuthenticated &&
        <MobileNav
          mobileNavOpen={mobileNavOpen}
          toggleMobileNav={toggleMobileNav}
          openService={openService}
          setOpenService={setOpenService}
          openResearch={openResearch}
          setOpenResearch={setOpenResearch}
        />
      }

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
      <EditDetailsModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
      />
    </>
  )
}

export default Header
