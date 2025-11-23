import React from "react";
import RaghulPhoto from "../assets/Raghul Photo.jpg";
import GuviCert from "../assets/guvi-mearn-certificate.png"; // <-- Add your certificate here
import { CheckCircleIcon } from "lucide-react";

const Aboutme = () => {
  return (
    <section id="about" className="scroll-mt-20 py-12 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        About <span className="text-indigo-600">Me</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16">
        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={RaghulPhoto}
            alt="Raghul"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-[40vh] md:h-[40vh] rounded-full shadow-xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-2xl font-semibold text-black mb-4">
            MERN Stack Developer with Passion for Building Web Solutions
          </h2>

          <p className="leading-relaxed mb-4">
            I'm <span className="font-semibold text-indigo-600">Raghul</span>, a
            MERN Stack Developer skilled in building full-stack web applications
            using MongoDB, Express.js, React.js, and Node.js.
          </p>

          <p className="leading-relaxed mb-6">
            Passionate, self-motivated, and always eager to take on new
            challenges. I aim to continuously improve and build efficient web
            solutions.
          </p>

          {/* Skills */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
            <ul className="space-y-3">
              {["MERN Stack", "State Management", "Database Design"].map(
                (skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircleIcon className="text-indigo-500 w-5 h-5" />{" "}
                    {skill}
                  </li>
                )
              )}
            </ul>

            <ul className="space-y-3">
              {["RESTful APIs", "Authentication", "Responsive Design"].map(
                (skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircleIcon className="text-indigo-500 w-5 h-5" />{" "}
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "React.js",
              "Node.js",
              "MongoDB",
              "Express",
              "JavaScript",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full font-medium text-sm hover:bg-indigo-200 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Certificate Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-black mb-3">
              GUVI MEARN Certification
            </h3>

            <a
              href="https://drive.google.com/file/d/1tEeV-1Ccm8rWcHwIGkA4m6w48DFUSQ9R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-indigo-500 cursor-pointer text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition mb-4">
                View Certificate
              </button>
            </a>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
