'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";


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
                    <Link href='/screens/about' className={linkClass('/screens/about')}>About</Link>
                    <div className="relative lg:h-[100%] group flex items-center cursor-pointer">
                        <div className="flex items-center">
                            <Link href='/screens/services' className={linkClass('/screens/services')}>
                                Services
                            </Link>
                            <MdArrowDropDown className="text-black text-xl ml-1" />
                        </div>
                        <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded w-40 z-50">
                            <ul className="flex flex-col text-black">
                                <li>
                                    <div className="flex items-center justify-between lg:pr-1 hover:bg-gray-100 hover:rounded">
                                        <Link href="/screens/services/tax" className="block px-4 py-2 lg:text-sm">Tax</Link>
                                        <IoMdArrowDropright className="text-black text-lg" />
                                    </div>
                                    <div className="absolute top-0 left-full hidden group-hover/submenu:block bg-red-600 shadow-md rounded w-100 z-50">
                                        <ul className="flex flex-col text-black">
                                            <li>
                                                <Link href="/screens/services/tax/income" className="block px-4 py-2 hover:bg-gray-100">
                                                    Income Tax
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/screens/services/tax/gst" className="block px-4 py-2 hover:bg-gray-100">
                                                    GST
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/screens/services/service" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Service</Link>
                                </li>
                                <li>
                                    <Link href="/screens/services/goods" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Goods</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group lg:h-[100%] flex items-center cursor-pointer">
                        <div className="flex items-center">
                            <Link href='/screens/research' className={linkClass('/screens/research')}>Research</Link>
                            <MdArrowDropDown className="text-black text-xl cursor-pointer" />
                        </div>
                        <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded mt-0 w-55 z-50">
                            <ul className="flex flex-col text-black">
                                <li>
                                    <div className="flex items-center justify-between lg:pr-1 hover:bg-gray-100"><Link href="/screens/services/tax" className="block px-4 py-2 lg:text-sm">Health Care</Link><IoMdArrowDropright className="text-black text-lg" /></div>
                                </li>
                                <li>
                                    <Link href="/screens/services/service" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Bank Account Reporting</Link>
                                </li>
                                <li>
                                    <Link href="/screens/services/goods" className="block px-4 py-2 hover:bg-gray-100 lg:text-sm">Goods</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link href='/screens/contact' className={linkClass('/screens/contact')}>Contact</Link>
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
                            href="/screens/login"
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