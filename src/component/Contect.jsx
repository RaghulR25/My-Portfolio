import React from "react";
import { MapPin, MailIcon, PhoneCallIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 py-12 bg-indigo-50">
      <h1 className="font-extrabold text-4xl sm:text-5xl text-center mt-6">
        Get In<span className="text-indigo-600"> Touch</span>
      </h1>

      <p className="text-gray-600 text-center mt-4 px-4">
        Feel free to reach out for collaboration or a friendly hello.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10 px-6 md:px-16">
        {/* Info */}
        <div className="md:w-1/2 flex flex-col gap-8 items-start">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-indigo-600 w-6 h-6" />
            <span className="text-lg font-medium">Pondicherry, India</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="text-indigo-600 w-6 h-6" />
            <a
              href="mailto:rraghul2k3@gmail.com"
              className="text-lg font-medium hover:text-indigo-600 transition duration-300"
            >
              rraghul2k3@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <PhoneCallIcon className="text-indigo-600 w-6 h-6" />
           <h1 className="font-bold"> 7904492354</h1>
          </div>
        </div>

        {/* Form */}
        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-12 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-12 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
            <textarea
              placeholder="Your Message"
              maxLength={1500}
              className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
