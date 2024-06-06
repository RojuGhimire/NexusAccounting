import React from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "/blue.png", text: "Remote Bookkeeping" },
  { icon: "/green.png", text: "Financial Reporting" },
  { icon: "/green.png", text: "Audit assistance" },
  { icon: "/green.png", text: "Payroll Services" },
  {
    icon: "/green.png",
    text: "Tax Preparation and Filing",
  },
  {
    icon: "/green.png",
    text: "Accounts receivable/payable",
  },
];

const benefits = [
  { icon: "🎧", text: "24/7 Customer Support" },
  { icon: "🔄", text: "Business Process Streamlining" },
  { icon: "⚙️", text: "Efficiency Maximization" },
  { icon: "👨‍💼", text: "Access Expert Talent" },
];

const ServicesComponent: React.FC = () => {
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
      className="py-16 w-full max-w-[1440px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-zinc-900"
          variants={childVariants}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-zinc-600 dark:text-zinc-700 mt-2"
          variants={childVariants}
        >
          Meet Our Professional Team
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-300 dark:border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <div className="flex flex-row mt-20 justify-center items-center gap-[195px]">
          <div className="flex flex-row justify-center items-center">
            <img src="/ser.png" alt="" className="w-52 h-56 left-14" />
            <img src="DOT.png" alt="" className="w-32 h-64 left-12" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-4">
              <div className="space-y-4 relative">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.7 }}
                  >
                    <img src={service.icon} alt="" className="w-[375px]" />
                    <span className="text-lg absolute top-4 left-20 px-2 py-1">
                      {service.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#DFF0EE] rounded-3xl w-[320px] h-[330px] gap-y-[26px]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                variants={childVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.7 }}
              >
                <div className="text-4xl text-green-600 items-start justify-start">
                  {benefit.icon}
                </div>
                <span className="text-lg text-green-900">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesComponent;
