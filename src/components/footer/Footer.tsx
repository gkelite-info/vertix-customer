"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Footer = () => {
  const router = useRouter();

  const handleStateRefund = () => {
    router.push('/state_refund')
  }

  return (
    <footer className="bg-[#1D2B48] text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:justify-items-center grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start md:items-start">
            <Link
              href="https://maps.app.goo.gl/K7L8txP4VR5cpA3MA"
              className="text-2xl font-bold text-white hover:text-gray-300 transition"
              target="_blank"
            >
              Vertix Tax
            </Link>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-[#D1D5DC]">8 The Green Ste R Dover, DE 19901, USA</p>

              <div className="flex">
                <strong className="text-white flex-shrink-0">Phone :</strong>
                <div className="pl-2">
                  <p className="text-[#D1D5DC]">+1 (302) 244-9149</p>
                  <p className="text-[#D1D5DC]">+91 8500090206</p>
                </div>
              </div>

              <div className="flex">
                <strong className="text-white flex-shrink-0">Email :</strong>
                <p className="pl-3 text-[#D1D5DC]">Vertixtax@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <Link href="https://x.com/GkeliteInfo" target="_blank" className="hover:text-blue-400 transition">
                <i className="bi bi-twitter-x text-xl"></i>
              </Link>
              <Link href="https://www.facebook.com/people/GK-Elite-Info/61579019744439/" target="_blank" className="hover:text-blue-600 transition">
                <i className="bi bi-facebook text-xl"></i>
              </Link>
              <Link href="https://www.instagram.com/gkelite_info/" target="_blank" className="hover:text-pink-500 transition">
                <i className="bi bi-instagram text-xl"></i>
              </Link>
              <Link href="https://www.linkedin.com/company/gk-elite-info/" target="_blank" className="hover:text-blue-500 transition">
                <i className="bi bi-linkedin text-xl"></i>
              </Link>
            </div>
          </div>

          <div className="text-left">
            <h4 className="text-lg font-semibold mb-3 text-white">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white text-[#D1D5DC]">Home</Link></li>
              <li><Link href="/about" className="hover:text-white text-[#D1D5DC]">About us</Link></li>
              <li><Link href="/individual" className="hover:text-white text-[#D1D5DC]">Services</Link></li>
              <li className="hover:text-white text-[#D1D5DC] cursor-pointer">Terms of service</li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-lg font-semibold mb-3 text-white">CHECK YOUR REFUND</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://sa.www4.irs.gov/wmr/" target="_blank" className="text-[#D1D5DC] hover:text-white">Federal Refund</Link>
              </li>
              <li className="cursor-pointer text-[#D1D5DC] hover:text-white" onClick={handleStateRefund}>
                State Refund
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © <span>Copyrights</span>
            <strong className="px-1 text-white">Vertix Tax</strong>
            <span>All Rights Reserved</span>
          </p>
          <p className="mt-2">
            Designed by
            <Link
              href="https://www.gkeliteinfo.com/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              {" "}GK Elite Info-IT
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
