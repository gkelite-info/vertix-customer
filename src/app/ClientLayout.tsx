"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header/Header"
import Footer from "@/components/footer/Footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const hideLayoutRoutes = [
    "/login",
    "/signup",
    "/consent",
    "/forgot_password",
    "/verification",
    "/new_password",
  ]

  const shouldHideLayout = hideLayoutRoutes.includes(pathname)

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main className="flex-1 scrollbar-hide">{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  )

}
