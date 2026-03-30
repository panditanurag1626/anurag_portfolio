import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-100/90 backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <a href="#" className="text-3xl font-bold text-white flex items-center gap-2">
                    Anurag
                    <span className="text-purple-500">Pandit</span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-10">
                    <a href="#home" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Home</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#about" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>About</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#skills" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Skills</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#projects" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Projects</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#experience" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Experience</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#contact" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Contact</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {showMenu ? (
                        <FaXmark onClick={() => setShowMenu(false)} className="text-2xl cursor-pointer" />
                    ) : (
                        <FaBars onClick={() => setShowMenu(true)} className="text-2xl cursor-pointer" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a onClick={() => setShowMenu(false)} href="#home" className="text-white/80 transition duration-300 active:text-purple-500">Home</a>
                    <a onClick={() => setShowMenu(false)} href="#about" className="text-white/80 transition duration-300 active:text-purple-500">About</a>
                    <a onClick={() => setShowMenu(false)} href="#skills" className="text-white/80 transition duration-300 active:text-purple-500">Skills</a>
                    <a onClick={() => setShowMenu(false)} href="#projects" className="text-white/80 transition duration-300 active:text-purple-500">Projects</a>
                    <a onClick={() => setShowMenu(false)} href="#experience" className="text-white/80 transition duration-300 active:text-purple-500">Experience</a>
                    <a onClick={() => setShowMenu(false)} href="#contact" className="text-white/80 transition duration-300 active:text-purple-500">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;