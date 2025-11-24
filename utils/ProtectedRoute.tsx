"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const publicRoutes = ["/login", "/signup", "/forgot_password"];

    if (!token) {
      if (!publicRoutes.includes(pathname)) {
        router.replace("/login");
        setIsAllowed(false);
        return;
      }
      setIsAllowed(true);
      return;
    }

    if (pathname === "/login") {
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
      <div className="flex justify-center items-center h-screen w-screen">
        Loading...
      </div>
    );
  }

  if (isAllowed === false) return null;

  return <>{children}</>;
}
