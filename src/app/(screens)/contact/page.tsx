'use client'

import { insertContact } from "@/app/api/SupabaseAPI/contactApi";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await insertContact(form);

    if (res.success) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error(res.error || "Failed to send message");
    }
  };


  return (
    <main>
      <div className="bg-white text-white py-5 -mt-[20px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4">
          <h1 className="text-3xl font-bold text-[#1D2B48]">Contact</h1>
        </div>
      </div>

      <section id="contact" className="py-0 bg-white lg:pb-10">
        <div className=" mx-auto px-6  gap-5 grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7612.986577123368!2d78.44641198813004!3d17.436088483837402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b7b28eced7%3A0x53434bd3914f4737!2sGreenland%20Towers!5e0!3m2!1sen!2sin!4v1755668697654!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="h-[400px]">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 flex-grow flex flex-col bg-white p-6 rounded-lg shadow-2xl h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-black text-[#1D2B48] border-1 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-1 border-black text-[#1D2B48] rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-3 border border-1 border-black text-[#1D2B48] rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-3 border rounded-md border-1 border-black text-[#1D2B48] h-32 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1D2A46] cursor-pointer hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>


          <div className="space-y-6 p-6 shadow-2xl pt-5 rounded-lg h-[400px] ">
            <div>
              <h3 className="text-xl font-semibold text-[#1D2B48] text-center">
                Get in touch
              </h3>
              <p className="text-black text-center">
                For any concerns, please contact us.
              </p>
            </div>

            <div className="flex items-start gap-3 pl-2">
              <span className="text-indigo-600 text-xl">📍</span>
              <div>
                <h4 className="font-semibold text-[#1D2B48]">Location:</h4>
                <p className="text-[#1D2B48]">
                  8 The Green Ste RDover, DE 19901, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-2">
              <span className="text-indigo-600 text-xl">✉️</span>
              <div>
                <h4 className="font-semibold text-[#1D2B48]">Email:</h4>
                <p className="text-[#1D2B48]">Vertixtax@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-2">
              <span className="text-indigo-600 text-xl">📞</span>
              <div>
                <h4 className="font-semibold text-[#1D2B48]">Call:</h4>
                <p className="text-[#1D2B48]">
                  +1 (302) 244-9149 <br /> +91 8500090206
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

