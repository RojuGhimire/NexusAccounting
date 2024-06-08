import React from "react";
import { motion } from "framer-motion";

const Banner2: React.FC = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-teal-500 h-[367px] mb-8 text-white flex flex-col md:flex-row items-center justify-between  p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex gap-[450px] mx-60 items-center justify-center w-[1295px] text-center md:text-left mb-4 md:mb-0  md:mr-8">
        <div className="w-full md:w-[503px] h-[114px] leading-[57px]">
          <p className="text-2xl md:text-3xl font-extrabold mb-4">"Where Every Number</p>
          <p className="text-2xl md:text-3xl font-extrabold">Tells A Story Of Growth."</p>
        </div>
      <motion.div
        className="flex-shrink-0"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        >
        <motion.img
          src="/banner2.png"
          alt="Image 1"
          className="w-[429px] h-[269px] object-contain gap-[10px] "
          transition={{ duration: 0.8 }}
          />
      </motion.div>
          </div>
    </motion.div>
  );
};

export default Banner2;
