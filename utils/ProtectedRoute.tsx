"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  const checkAuth = () => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("sb-wieinzdarxemefrzitog-auth-token") ??
        localStorage.getItem("token")
        : "";

    const normalizedPath = (pathname || "/").replace(/\/+$/g, "") || "/";
    const publicRoutes = [
      "/",
      "/login",
      "/signup",
      "/forgot_password",
      "/about",
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
      "/business_tax_services",
      "/expats_overseas_filers",
      "/non_citizen_tax_guidance",
      "/assistants_free",
      "/itin_application_help",
      "/foreign_account_reporting",
      "/tax_treaties",
      "/hsa_ira",
      "/elections",
      "/healthcare",
      "/bankaccount_reporting",
      "/reit",
      "/unreimbursed_expenses",
      "/state_refund",
      "/contact",
      "/taxfiling",
      "/refer-friend",
      "/foreign_earned_income_exclusion",
      "/professionals_and_hnis",
      "/hsa",
      "/ira"
    ];

    if (!token) {
      if (!publicRoutes.includes(normalizedPath)) {
        router.replace("/");
        setIsAllowed(false);
        return;
      }
      setIsAllowed(true);
      return;
    }

    if (normalizedPath === "/login") {
      router.replace("/");
      setIsAllowed(false);
      return;
    }

    setIsAllowed(true);
  };

  useEffect(() => {
    checkAuth();

    const handleStorage = () => checkAuth();

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, [pathname]);

  if (isAllowed === null) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isAllowed === false) return null;

  return <>{children}</>;
}
