import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          My <span className="text-purple-500">Projects</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
          A collection of my recent work where I turn ideas into real-world
          applications using modern technologies and clean code practices.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Icons */}
                <div className="flex gap-3 mb-4">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className="text-lg text-purple-400" />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  {/* Live Link */}
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-purple-500 rounded-lg hover:bg-purple-600 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  {/* Code Link (optional) */}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm border border-purple-500 rounded-lg hover:bg-purple-500/20 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;