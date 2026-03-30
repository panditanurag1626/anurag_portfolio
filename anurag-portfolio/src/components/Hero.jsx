import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* 🔥 Left Side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-purple-500">Anurag Pandit</span>
          </h1>

          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Aspiring Full Stack Developer with strong fundamentals, eager to
            learn and build scalable, user-friendly web applications.
          </p>

          <div className="flex gap-4">
            
            {/* View Work */}
            <a
              href="#projects"
              className="text-white px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300"
            >
              View Resume
            </a>

          </div>
        </div>

        {/* 🔥 Right Side Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          
          {/* Optional Glow (remove if not needed) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-40"></div>

          {/* Profile Image */}
          <motion.img
            src="/profile.png"
            alt="Profile"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top shadow-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;