import React from "react";
import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

const services = [
  { icon: "/1.png" },
  { icon: "/2.png" },
  { icon: "/3.png" },
  { icon: "/4.png" },

  {
    icon: "/5.png",
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

  const { ref } = useLinkInView("Our Services", 1);

  return (
    <motion.div
      ref={ref}
      id="services"
      className="py-16 w-full overflow-hidden  max-w-[1440px] mx-auto px-12 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container text-center">
        <motion.h2
          className="text-3xl lg:mt-16 font-bold text-zinc-900"
          variants={childVariants}
        >
          Our Services
        </motion.h2>
        <motion.p className="text-zinc-600 mt-2" variants={childVariants}>
          See What We Provide.
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-300 w-16 mx-auto my-4"
          variants={childVariants}
        >
          <motion.div
            className="border-b-2 border-zinc-300 w-16 mx-auto my-4"
            variants={childVariants}
          >
            {" "}
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row mt-20 justify-center items-center gap-8 lg:gap-[195px]">
          <div className="flex flex-row  justify-center items-center">
            <img src="/ser.png" alt="" className="w-52  h-52" />
            <img src="DOT.png" alt="" className="w-32 lg:w-32 lg:h-64" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-6 ">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center"
                  >
                    <img src={service.icon} className="w-full  lg:w-[375px]" />
                    
                  </div>
                ))}
              
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-[#DFF0EE] rounded-3xl w-full lg:w-[320px] lg:h-[330px] gap-y-[26px]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-10 w-full"
                variants={childVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.7 }}
              >
                <div className="text-4xl text-green-600 items-start justify-start">
                  {benefit.icon}
                </div>
                <span className="w-full text-left text-green-900">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesComponent;
