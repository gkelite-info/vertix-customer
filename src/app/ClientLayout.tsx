"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayoutRoutes = ["/login", "/signup", "/consent"];

  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
