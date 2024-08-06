import React from "react";
import { motion } from "framer-motion";
import { PiPhoneFill } from "react-icons/pi";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="bg-white py-8 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1440px] font-poppins  h-auto overflow-hidden items-center justify-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-zinc-800">
        <motion.div className="col-span-1" variants={itemVariants}>
          <img
            src="/logo.png"
            alt="Nexus Logo"
            className="w-[185px] h-[83px]"
          />
          <p className="text-sm hidden font-semibold md:flex">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </motion.div>
        <motion.div className="col-span-1" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-primary mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#about">Our team</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#software">Software</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </motion.div>
        <motion.div className="col-span-1" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-primary mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms">Terms and Condition</Link>
            </li>
            <li>
              <a href="#legal">Legal</a>
            </li>
            <li>
              <a href="#help">Help center</a>
            </li>
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
            <li>
              <a href="#status">Status</a>
            </li>
          </ul>
        </motion.div>
        <motion.div className="col-span-1" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-primary mb-4">Information</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-x-3">
              <IoLocationSharp size={20} />
              <div>Kathmandu, Nepal</div>
            </li>
            <li className="flex items-center gap-x-3">
              <PiPhoneFill size={20} />
              <a href="tel:+9779860000000">9860000000</a>
            </li>
            <li className="flex items-center gap-x-3">
              <IoMail size={20} />
              <a
                href="mailto:nexus@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                nexus@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
