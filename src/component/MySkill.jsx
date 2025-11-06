import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiRedux } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500" />, level: "90%" },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" />, level: "85%" },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" />, level: "80%" },
  { name: "Express", icon: <SiExpress size={40} className="text-gray-700" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" />, level: "80%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-500" />, level: "85%" },
  { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" />, level: "70%" },
  { name: "HTML5 / CSS3", icon: <FaHtml5 size={40} className="text-orange-500" />, level: "95%" },
];

const MySkill = () => {
  return (
    <section id="skills" className="scroll-mt-20 py-20 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-5">
        My <span className="text-indigo-600">Skills</span>
      </h1>
      <p className="text-center mb-12 text-gray-600">
        Technologies I use to build efficient and modern web applications.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {skill.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
              <div
                className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                style={{ width: skill.level }}
              ></div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkill;
