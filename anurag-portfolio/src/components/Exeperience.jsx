import React from "react";
import { motion } from "framer-motion";
import { experience } from "../assets/assets";

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          My <span className="text-purple">Experience</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A brief overview of my internships, projects, and achievements so far.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Experience Items */}
            {experience.map((data, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* timeline circle */}
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>


                {/* experience content */}

                <div className='bg-dark-300 rounded-2xl p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold text-white'>{data.title}</h3>
                    <span className='px-3 py-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:txt-sm'>{data.duration}</span>
                  </div> 
                  <p className='text-gray-400'>{data.description}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;