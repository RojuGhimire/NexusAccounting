import React from "react";
import { motion } from "framer-motion";

const Software: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
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
      className="max-w-[1440px] h-auto  gap-8 w-full mx-auto px-12 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-zinc-900 "
          variants={childVariants}
        >
          Software
        </motion.h2>
        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mt-2"
          variants={childVariants}
        >
          These are the software that we work with:
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-300 dark:border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="border-b-2 border-zinc-300 dark:border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
      </div>
      <motion.div
        className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20"
        variants={containerVariants}
      >
        <motion.div
          className="text-center"
          variants={childVariants}
        >
          <motion.img
            className="mx-auto h-24 w-24"
            src="/quick.png"
            alt="QuickBooks Online"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-teal-500 ">
            QuickBooks Online
          </h3>
          <p className="mt-6 text-md font-semibold text-zinc-600 ">
            We are proficient in QuickBooks Online, leveraging its features for
            efficient bookkeeping.
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          variants={childVariants}
        >
          <motion.img
            className="mx-auto h-24 w-24"
            src="/xero.png"
            alt="Xero"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-teal-500 ">
            Xero
          </h3>
          <p className="mt-6 text-md font-semibold text-zinc-600 ">
            Our team is skilled in utilizing Xero for seamless financial
            management.
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          variants={childVariants}
        >
          <motion.img
            className="mx-auto h-24 w-24"
            src="/fb.png"
            alt="FreshBooks"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-teal-500 ">
            FreshBooks
          </h3>
          <p className="mt-6 text-md font-semibold text-zinc-600 ">
            We work with FreshBooks to simplify invoicing and expense tracking
            for our clients.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Software;
