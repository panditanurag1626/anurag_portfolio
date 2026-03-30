import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="skills"
            className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
        >
            <div className="container mx-auto px-6">
                
                <h2 className="text-white text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Skills</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-sm md:text-base">
                    Here are some of the technologies and tools I use to create modern, responsive, and efficient web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {
                        skills.map((skill, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className="bg-dark-300 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer"
                                >
                                    <div>
                                        <skill.icon className="text-2xl mb-2 text-purple-400" />
                                        
                                        <h3 className="text-lg font-semibold mb-2">
                                            {skill.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-2">
                                            {skill.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {skill.tags.map((tag, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </motion.div>
    );
}

export default Skills;