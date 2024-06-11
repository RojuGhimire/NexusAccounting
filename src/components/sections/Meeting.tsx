import React from "react";
import { motion } from "framer-motion";

const Meeting: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-8 p-4 max-w-[1440px] w-full mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-zinc-900"
          variants={childVariants}
        >
          Meeting
        </motion.h2>
        <motion.p className="text-zinc-600 mt-2" variants={childVariants}>
          Schedule a consultation with one of our experts
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
      </div>

      <div className="flex w-[1296.6px] h-[219px] justify-center gap-[50px] p-4">
        <motion.div
          className="bg-teal-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center w-[463px] h-[219px] md:w-1/3"
          variants={itemVariants}
          whileHover={hoverVariants.hover}
        >
          <div className="flex items-center  mb-2 md:mb-0 md:mr-4">
            <div className="w-[22px] h-[14px] bg-red-600 rounded-full mr-5"></div>
            <h2 className="text-lg font-bold">Existing Client</h2>
          </div>
          <div className="flex-grow">
            <p className="text-zinc-700 font-bold">
              We are doing all virtual meetings through Zoom. Please join with
              us over Zoom.
            </p>
          </div>
          <div className="ml-2">
            <img
              alt="arrow"
              src="/Polygon.png" // Replace with correct image path
              className="w-[40px] h-[27px]"
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded  w-[463px] h-[219px]  md:w-1/3 text-center"
          variants={itemVariants}
          whileHover={hoverVariants.hover}
        >
          <h3 className="text-zinc-600 font-bold">Calendar</h3>
          <h2 className="text-2xl font-extrabold text-teal-600 ">May, 2024</h2>
          <div className="flex justify-center items-center my-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span className="text-zinc-700 mx-1" key={day}>
                {day}
              </span>
            ))}
          </div>
          <div className="flex justify-center items-center my-2">
            {[19, 20, 21, 22, 23, 24, 25].map((date) => (
              <span className="text-zinc-900 mx-1" key={date}>
                {date}
              </span>
            ))}
          </div>
          <button
              type="submit"
              className="inline-flex h mt-7 w-[130px] h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#159891,45%,#F6F5F2,48%,#159891)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
            >

                <div className="flex flex-col items-center justify-center ">
                  <span>Book Now</span>
                </div>
            </button>
        </motion.div>

        <motion.div
          className="bg-teal-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center w-[463px] h-[219px]  md:w-1/3"
          variants={itemVariants}
          whileHover={hoverVariants.hover}
        >
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <div className="w-[22px] h-[14px] bg-teal-500 rounded-full mr-5"></div>
            <h2 className="text-lg font-bold">New Client</h2>
          </div>
          <div className="flex-grow">
            <p className="text-zinc-700 font-bold">
              We are doing all virtual meetings through Zoom. Please join with
              us over Zoom.
            </p>
          </div>
          <div className="ml-5">
            <img
              alt="arrow"
              src="/Polygon2.png" // Replace with correct image path
              className="w-[40px] h-[27px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Meeting;
