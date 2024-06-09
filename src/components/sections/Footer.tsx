import React from 'react';
import { motion } from 'framer-motion';

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
        type: 'spring',
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
      <div className="max-w-[1440px]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-zinc-800 ">
        <motion.div className="col-span-1" variants={itemVariants}>
          <img src="/logo.png" alt="Nexus Logo" className="top-[367px] w-[185px] h-[83px] " />
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
        </motion.div>
        <motion.div className="col-span-1" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-teal-600  mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline">About us</a></li>
            <li><a className="hover:underline">Our team</a></li>
            <li><a className="hover:underline">Services</a></li>
            <li><a className="hover:underline">Software</a></li>
            <li><a className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>
        <motion.div className="col-span-1" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline">Terms of service</a></li>
            <li><a className="hover:underline">Legal</a></li>
            <li><a className="hover:underline">Help center</a></li>
            <li><a className="hover:underline">Privacy policy</a></li>
            <li><a className="hover:underline">Status</a></li>
          </ul>
        </motion.div>
        <motion.div className="col-span-1" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">Information</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://placehold.co/20x20" alt="Location Icon" className="mr-2" />
              Pepsicola<br />Kathmandu, Nepal
            </li>
            <li className="flex items-center">
              <img src="https://placehold.co/20x20" alt="Phone Icon" className="mr-2" />
              01-4000000
            </li>
            <li className="flex items-center">
              <img src="https://placehold.co/20x20" alt="Email Icon" className="mr-2" />
              nexus311@gmail.com
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
