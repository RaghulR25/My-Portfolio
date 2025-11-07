import React from "react";

const projects = [
  {
    title: "Online Counselor Platform",
    description:
      "A full-stack counseling platform for online booking and consultation with authentication and real-time updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    link: "https://o-on.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    description:
      "An e-commerce web app frontend for product browsing, cart management, and responsive UI design.",
    tech: ["React", "Redux", "TailwindCSS"],
    link: "https://bright-kleicha-fe63c8.netlify.app/",
  },
  {
    title: "Note Manager",
    description:
      "A React-based note management app with CRUD features and local storage integration for saving notes.",
    tech: ["React", "JavaScript", "TailwindCSS"],
    link: "https://serene-salmiakki-dddb4a.netlify.app/",
  },
  {
    title: "Movie Search App",
    description:
      "A movie search application that fetches data from an API and displays movie details with a smooth UI.",
    tech: ["React", "API", "TailwindCSS"],
    link: "https://soft-tapioca-7438aa.netlify.app/",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "A personal finance tracker to manage income and expenses efficiently with filtering and analytics features.",
    tech: ["React", "JavaScript", "TailwindCSS"],
    link: "https://courageous-jelly-30e8e6.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4">
        My <span className="text-indigo-600">Projects</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Here are some of my works that showcase my MERN stack development
        skills.
      </p>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-indigo-600 text-white font-semibold py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
