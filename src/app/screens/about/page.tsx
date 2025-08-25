'use client';


import Header from "@/components/Header/page";


function About() {
    return (
        <>
            <div className="flex flex-col bg-gray-300 lg:h-[100vh]">
                <div className="lg:h-[9%] sticky top-0 z-50 shadow-lg">
                    <Header />
                </div>
                <div className="flex flex-col bg-yellow-00 lg:p-4 overflow-y-auto">
                    <h1 className="font-semibold text-3xl bg-green-00 text-black lg:mt-2">
                        About Vertix Tax Solutions LLC</h1>
                    <p className="text-black lg:mt-2 text-lg">
                        At Vertix Tax Solutions LLC, we specialize in providing end-to-end tax filing services for
                        Non-Resident Indians (NRIs). Our goal is to make U.S. tax compliance simple, secure, and
                        stress-free for individuals and businesses across the globe.
                    </p>
                    <p className="text-black lg:mt-2 text-lg">
                        With a strong focus on accuracy, transparency, and client trust, we combine technology with
                        professional expertise to deliver seamless tax filing experiences. From secure online registration
                        and document uploads to professional tax preparation and e-filing through Drake Tax Software,
                        Vertix ensures that every step of the process is smooth and compliant.
                    </p>
                    <h2 className="text-black lg:text-2xl font-semibold lg:mt-7">
                        Our Mission
                    </h2>
                    <p className="text-black lg:font-lg lg:text-lg">
                        To empower NRIs with hassle-free tax filing solutions that save time, ensure accuracy, and
                        provide peace of mind.
                    </p>
                    <h2 className="text-black lg:text-2xl font-semibold lg:mt-7">
                        Our Vision
                    </h2>
                    <p className="text-black lg:font-lg lg:text-lg">
                        To become a trusted global partner for tax solutions by combining technology, expertise, and
                        personalized service
                    </p>
                    <h2 className="text-black lg:text-2xl font-semibold lg:mt-7">
                        Why Choose Vertix Tax Solutions?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-red-400 lg:mt-3">
                        {[
                            {
                                title: "Client-Centric Platform",
                                desc: "User-friendly portals for easy registration, document uploads, and tracking.",
                            },
                            {
                                title: "Secure & Compliant",
                                desc: "Advanced encryption, role-based access, and GDPR-style privacy protection.",
                            },
                            {
                                title: "Expert Guidance",
                                desc: "Our tax professionals handle your return with precision using Drake Tax Software.",
                            },
                            {
                                title: "End-to-End Support",
                                desc: "From consultation to final e-filing, we’re with you at every step.",
                            },
                            {
                                title: "Transparent Pricing",
                                desc: "Clear service fees with secure payment options (Stripe, PayPal, Bank Transfer).",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl shadow-md border bg-white hover:shadow-2xl transition"
                            >
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default About