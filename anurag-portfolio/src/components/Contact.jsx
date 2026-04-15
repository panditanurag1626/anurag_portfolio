import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I’m always open to discussing new projects, creative ideas, and exciting opportunities. Feel free to reach out if you’d like to connect or collaborate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple/80 transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start">
              <FaMapMarkedAlt className="text-2xl text-purple mr-4" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Mumbai, Maharashtra, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <FaEnvelope className="text-2xl text-purple mr-4" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">anuragmishra33381@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <FaPhone className="text-2xl text-purple mr-4" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">9026067073</p>
              </div>
            </div>
          {/* Social Links */}
         <div className="pt-6">
           <h3 className="text-white font-semibold mb-3 text-lg tracking-wide">
             Connect with Me
           </h3>
         
           <div className="flex gap-4">
             {/* GitHub */}
             <a
               href="https://github.com/panditanurag1626"
               target="_blank"
               rel="noopener noreferrer"
               className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 
               hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-purple-500/40 hover:scale-110"
             >
               <FaGithub className="text-lg group-hover:rotate-6 transition-transform" />
             </a>
         
             {/* LinkedIn */}
             <a
               href="https://www.linkedin.com/in/anurag-mishra-7b15072a5"
               target="_blank"
               rel="noopener noreferrer"
               className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 
               hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/40 hover:scale-110"
             >
               <FaLinkedin className="text-lg group-hover:rotate-6 transition-transform" />
             </a>
         
             {/* Instagram */}
             <a
               href="https://www.instagram.com/_anurag4057/"
               target="_blank"
               rel="noopener noreferrer"
               className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 
               hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-pink-500/40 hover:scale-110"
             >
               <FaInstagram className="text-lg group-hover:rotate-6 transition-transform" />
             </a>
           </div>
         </div>
         {/* End Social Links */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;