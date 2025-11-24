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
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!form.name) {
        toast.error("Name is required")
        return
      }
      if (!form.email) {
        toast.error("Email is required")
        return
      }
      if (!form.subject) {
        toast.error("Subject is required")
        return
      }
      if (!form.message) {
        toast.error("Message is required")
        return
      }

      setLoading(true);
      const res = await insertContact(form);
      if (res.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(res.error || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong.")
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  };


  return (
    <main>
      <div className="bg-white text-white py-5 -mt-[20px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4">
          <h1 className="text-3xl font-bold text-[#1D2B48] mt-4 lg:mt-0">Contact</h1>
        </div>
      </div>

      <section id="contact" className="py-0 bg-white pb-5 lg:pb-10">
        <div className="mx-auto px-6 gap-5 grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.7976065252356!2d-75.52672902483106!3d39.15658477166975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c764aa7c225e51%3A0x923f74929919960!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901%2C%20USA!5e0!3m2!1sen!2sin!4v1763123821465!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
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
                  className="w-full p-3 border border-black text-[#1D2B48] border-1 rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-1 border-black text-[#1D2B48] rounded-md focus:outline-none"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-3 border border-1 border-black text-[#1D2B48] rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-3 border rounded-md border-1 border-black text-[#1D2B48] h-32 focus:outline-none"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1D2A46] cursor-pointer text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>


          <div className="space-y-6 p-6 bg-white shadow-2xl pt-5 rounded-lg h-[400px] ">
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
                <p className="text-[#1D2B48]">vertixtax@gmail.com</p>
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

