import { DownloadIcon, GithubIcon, LinkedinIcon, MailCheckIcon } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-indigo-50 flex flex-col items-center justify-center min-h-screen p-8 pt-24"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          I'm Raghul
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-8">
          Full Stack MERN Developer
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="https://drive.google.com/file/d/1biRedxqgas_v2SJdzsD2RNeozKtQvazY/view?usp=drivesdk "
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg">
              <DownloadIcon className="mr-2" /> Download Resume
            </button>
          </a>
          <a href="#contact">
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300 shadow-lg">
              Contact Me
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/RaghulR25" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={32} className="text-gray-600 hover:text-indigo-600 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/raghul-r-766b41258/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={32} className="text-gray-600 hover:text-indigo-600 transition duration-300" />
          </a>
          <a href="mailto:rraghul2k3@gmail.com">
            <MailCheckIcon size={32} className="text-gray-600 hover:text-indigo-600 transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
