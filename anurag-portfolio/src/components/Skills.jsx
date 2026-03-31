import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-sm md:text-base">
          Here are some of the technologies and tools I use to create modern,
          responsive, and efficient web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const MainIcon = skill.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition duration-300 cursor-pointer"
              >
                <div>
                  <MainIcon className="text-2xl mb-3 text-purple-400" />

                  <h3 className="text-white text-lg font-semibold mb-2">
                    {skill.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, i) => {
                      const TagIcon = tag.icon;

                      return (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md"
                        >
                          <TagIcon className="text-sm" />
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;