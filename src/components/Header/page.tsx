'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";


function Header() {
    const router = useRouter();

    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    const linkClass = (href: string) =>
        `relative text-black font-medium
         after:content-[''] after:absolute after:left-0 after:bottom-0
         after:h-[2px] after:bg-red-400 
         after:transition-[width] after:duration-200 after:ease-linear
         ${pathname === href ? "after:w-full" : "after:w-0"}`;

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, [pathname]);

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            logout();
        }
    };

    return (
        <>
            <header className="bg-white sticky top-0 z-50 shadow-lg lg:h-15 flex items-center px-3 lg:gap-5">
                <div className="bg-pink-400 lg:h-[100%] lg:w-[10%] flex items-center justify-center">
                    <p className="text-black">Logo</p>
                </div>
                <div className="bg-red-00 lg:h-[100%] lg:w-[80%] flex justify-center items-center lg:gap-10">
                    <Link href='/' className={linkClass('/')}>Home</Link>
                    <Link href='/about' className={linkClass('/about')}>About</Link>
                </div>
                <div className="bg-gray-00 lg:h-[100%] flex justify-center items-center lg:w-[10%]">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </header>
        </>
    )
}
export default Header