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
            <div className="pt-4">
              <h3 className="text-white font-semibold mb-2">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple/20 transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue/20 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink/20 transition duration-300"
                >
                  <FaInstagram />
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