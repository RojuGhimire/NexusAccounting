import React from "react";
import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

interface PlanProps {
  imgSrc: string;
  buttonText: string;
  price: string;
  features: string[];
  additionalInfo?: string;
}

const Plan: React.FC<PlanProps> = ({
  buttonText,
  price,
  features,
  additionalInfo,
}) => {
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };
  const { ref } = useLinkInView("Pricing", 0.7);
  return (
    <motion.div
      ref={ref}
      className="bg-card  p-6 rounded-lg shadow-lg w-full md:w-[300px] lg:w-[420px]  h-auto gap-8 bg-[#d1e3de] mx-2 my-4"
      whileHover="hover"
      variants={hoverVariants}
    >
      
      <button className="bg-[#16AF9D] text-white h-[39px] py-2 px-4 rounded mb-2 mx-auto block">
        {buttonText}
      </button>
      {price && (
        <p className="text-[#E20000] text-center mt-4 font-extrabold">
          {price}
        </p>
      )}
      <div className="bg-white h-[257px] w-full mt-5 p-3 rounded-lg shadow-inner items-center justify-center">
        <p className="text-[#16AF9D] mb-2">{additionalInfo || "Including"}</p>
        <ul className="mb-4 h-[60%]">
          {features.map((feature, index) => (
            <li key={index}>✔️ {feature}</li>
          ))}
        </ul>
        {buttonText === "THE BIG NEXUS ADVISOR" ? (
          <p className="text-[#E20000] mt-16 text-xs font-bold leading-4 text-left">
            Contact us for a personalized quote.
          </p>
        ) : (
          <button className="bg-black text-white py-2 px-4 rounded items-center justify-center w-full">
            Start
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Price: React.FC = () => {
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
      id="pricing"
      className="max-w-[1440px] font-poppins  h-auto overflow-hidden  mx-auto px-4 lg:py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center  lg:mt-10">
        <motion.h2
          className="text-3xl font-bold text-zinc-900"
          variants={childVariants}
        >
          Pricing
        </motion.h2>
        <motion.p className="text-zinc-600 mt-2" variants={childVariants}>
          Our pricing is tailored to your business size and specific needs:
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="border-b-2  border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4  lg:gap-8 p-4">
        {[
          {
            // imgSrc: '/rhinoo.png',
            buttonText: "BASIC",
            price: "$300/ Month",
            features: [
              "Once a week processing",
              "Quickbooks Setup",
              "Monthly Transaction Review",
              "Direct Text Line",
              "Bookkeeping Concierge “Rhino”",
            ],
          },
          {
            // imgSrc: '/rhinoo.png',
            buttonText: "PREMIUM",
            price: "$600/ Month",
            features: [
              "Twice a week processing",
              "W2 management",
              "Light A/R & A/P",
              "+ Year-End Processing",
            ],
            additionalInfo: "Save Membership",
          },
          {
            buttonText: "CUSTOM",
            price: "$1,200/ Month",
            features: [
              "Large-Scale Monthly Bookkeeping",
              "4 times a week processing",
              "A/R & A/P",
              "+ Year-End Processing",
            ],
            additionalInfo: "Save Membership",
          },
        ].map((plan, index) => (
          <Plan
            key={index}
            buttonText={plan.buttonText}
            price={plan.price}
            features={plan.features}
            additionalInfo={plan.additionalInfo}
            imgSrc={""}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Price;
