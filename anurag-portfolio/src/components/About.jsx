import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";
const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            id="about"
            className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-white text-3xl font-bold text-center mb-4">
                    About <span className="text-purple-500">Me</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Discover my journey, skills, and passion for building modern web applications.
                </p>

                {/* Image And My Journey */}
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image */}
                    <div className="md:w-1/2 rounded-lg overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full h-full object-cover"
                            src="/profile.png"  // ✅ public folder se
                            alt="Profile"
                        />
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-4">
                                My Journey
                            </h3>

                            <p className="text-gray-300 mb-6">
                                I am a passionate aspiring Full Stack Developer at the beginning of my journey in web development.
                                I started with HTML, CSS, Bootstrap and JavaScript, and expanded to React, SQL, and Python.
                            </p>

                            <p className="text-gray-300 mb-12">
                                I enjoy building responsive and user-friendly web applications and continuously improving my problem-solving skills.
                            </p>

                            {/* Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {aboutInfo.map((data, index) => {
                                    const Icon = data.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"
                                        >
                                            <div className={`text-4xl mb-4 ${data.color}`}>
                                                <Icon />
                                            </div>

                                            <h3 className="text-xl font-semibold mb-3 text-white">
                                                {data.title}
                                            </h3>

                                            <p className="text-gray-400">
                                                {data.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
};

export default About;