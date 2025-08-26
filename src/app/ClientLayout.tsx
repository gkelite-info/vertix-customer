"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/page";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderRoutes = ["/login", "/signup"];
  const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
    </>
  );
}
