'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#1D2B48] text-white py-2">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:pt-3">
                    <div>
                        <Link
                            href="https://maps.app.goo.gl/K7L8txP4VR5cpA3MA"
                            className="text-2xl font-bold text-white"
                            target="_blank"
                        >
                            Vertix Tax
                        </Link>
                        <div className="mt-4 space-y-2 text-gray-300 text-sm">
                            <p>Opp: Pillar No. 1421 Street,</p>
                            <p>6-3-865/1/2, 4th Floor Greenland Apartments,</p>
                            <p>Begumpet, Hyderabad, Telangana</p>
                            <p>500016.</p>
                            <p>
                                <strong>Phone:</strong> +91 9000266832, +91 7093256562
                            </p>
                            <p>
                                <strong>Email:</strong> hr@gkeliteinfo.com
                            </p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Link
                                href="https://x.com/GkeliteInfo"
                                target="_blank"
                                className="hover:text-blue-400 transition"
                            >
                                <i className="bi bi-twitter-x text-xl"></i>
                            </Link>
                            <Link
                                href="https://www.facebook.com/people/GK-Elite-Info/61579019744439/"
                                target="_blank"
                                className="hover:text-blue-600 transition"
                            >
                                <i className="bi bi-facebook text-xl"></i>
                            </Link>
                            <Link
                                href="https://www.instagram.com/gkelite_info/"
                                target="_blank"
                                className="hover:text-pink-500 transition"
                            >
                                <i className="bi bi-instagram text-xl"></i>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/gk-elite-info/"
                                target="_blank"
                                className="hover:text-blue-500 transition"
                            >
                                <i className="bi bi-linkedin text-xl"></i>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-services" className="hover:text-white">
                                    Terms of service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Our Services</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>
                                <Link href="/service-details/ai_services" className="hover:text-white">
                                    AI Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/service-details/dynamic_Digital_marketing_solutions"
                                    className="hover:text-white"
                                >
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-details/b2b_b2c_sales_mastery" className="hover:text-white">
                                    B2B &amp; B2C Sales
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-details/bpo_services" className="hover:text-white">
                                    BPO Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-details/hr_consultancy" className="hover:text-white">
                                    HR Consultancy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Our Newsletter</h4>
                        <p className="text-gray-300 text-sm">
                            Subscribe to our newsletter and receive the latest news about our products and
                            services!
                        </p>
                        <form action="your_api_endpoint_here" method="POST" className="mt-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your email"
                                    className="w-full p-2 bg-white text-xs rounded-l-lg text-black focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-xs font-medium px-4 rounded-r-lg hover:bg-blue-700 transition"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    <p>
                        © <span>Copyright</span>{' '}
                        <strong className="px-1 text-white">Vertix</strong> <span>All Rights Reserved</span>
                    </p>
                    <p className="mt-2">
                        Designed by{' '}
                        <Link
                            href="https://bootstrapmade.com/"
                            target="_blank"
                            className="text-blue-400 hover:underline"
                        >
                            GKelite-IT
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
