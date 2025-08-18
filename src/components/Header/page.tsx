'use client';

//src/components/header

import { Jost } from "next/font/google";
import Link from "next/link";


function Header() {
    return (
        <>
            <header className="bg-white sticky lg:h-15 flex items-center px-3 lg:gap-5">
                <div className="bg-pink-00 lg:h-[100%] lg:w-[10%] flex items-center justify-center">
                    <p className="text-black">Logo</p>
                </div>
                <div className="bg-red-00 lg:h-[100%] lg:w-[80%] flex justify-center items-center lg:gap-10">
                    <Link href='/' className="text-black">Home</Link>
                    <Link href='/about' className="text-black">About</Link>
                </div>
                <div className="bg-gray-00 lg:h-[100%] flex justify-center items-center lg:w-[10%]">
                    <button className="bg-blue-400 lg:rounded-full lg:h-[60%] lg:w-[60%] text-white lg:text-md cursor-pointer font-semibold">
                        Contact
                    </button>
                </div>
            </header>
        </>
    )
}
export default Header