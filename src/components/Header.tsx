import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVLINKS } from "@/constants";
import { useActiveLinkContext } from "@/context/active-link-context";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaBars,
} from "react-icons/fa";

export default function Header() {
  const { setActiveLink, setTimeOfLastClick } = useActiveLinkContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <header className="z-50 fixed top-0 left-0  w-full ">
      <div className="hidden  bg-teal-500 text-white md:flex flex-wrap justify-between items-center px-4 py-2 md:px-8 md:py-2 text-sm">
        {/* Contact Info */}
        <div className="flex  items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>Pepsicola, Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Phone and Email */}
        <div className="hidden md:flex justify-center items-center gap-8 flex-grow">
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>01-4000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>9860000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>nexus@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer transition duration-300" />
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="lg:px-20 mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img src="logo.png" alt="Logo" className="h-12  w-auto" />

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-8 items-center flex-grow justify-center">
              {NAVLINKS.map((link) => (
                <motion.li
                  className="text-zinc-700 font-bold cursor-pointer hover:text-teal-500"
                  key={link.path}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href={link.path}
                    onClick={() => {
                      setActiveLink(link.name);
                      setTimeOfLastClick(Date.now());
                      setMenuOpen(false); // Close menu on link click
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>

            {/* Search Icon */}
            <div className="hidden md:flex items-center">
              <FaSearch className="text-white bg-teal-700 h-8 w-8 p-2 rounded-full cursor-pointer hover:bg-gray-200 hover:text-teal-700 transition duration-300 shadow-md" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-gray-200 overflow-hidden"
            >
              <ul className="flex flex-col gap-4 items-center py-4">
                {NAVLINKS.map((link) => (
                  <motion.li
                    className="text-zinc-700 font-bold cursor-pointer hover:text-teal-500"
                    key={link.path}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <a
                      href={link.path}
                      onClick={() => {
                        setActiveLink(link.name);
                        setTimeOfLastClick(Date.now());
                        setMenuOpen(false); // Close menu on link click
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
