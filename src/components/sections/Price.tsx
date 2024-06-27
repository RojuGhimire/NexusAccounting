import React from "react";
import { motion } from "framer-motion";

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

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      id="pricing"
      className="max-w-[1440px] h-auto overflow-hidden  gap-8 w-full mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-zinc-900"
          variants={childVariants}
        >
          Pricing
        </motion.h2>
        <motion.p className="text-zinc-600  mt-2" variants={childVariants}>
          Our pricing is tailored to your business size and specific needs:
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.p
          className="text-zinc-600 font-bold italic mt-2"
          variants={childVariants}
        >
          Choose from our flexible packages designed to accommodate businesses
          of all scales.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-[70px] p-4">
        {[
          {
            title: "SAVE A NEXUS ASSISTANT",
            price: "$300/Month",
            features: [
              "Once a week processing",
              "Quickbooks Setup",
              "Monthly Transaction Review",
              "Direct Text Line",
              "Bookkeeping Concierge “Rhino”",
            ],
            imageSrc: "/rhinoo.png",
            altText: "Nexus Assistant",
          },
          {
            title: "MAKE A NEXUS ASSISTANT",
            price: "$600/Month",
            features: [
              "Twice a week processing",
              "W2 management",
              "Light A/R & A/P",
              "+ Year-End Processing",
            ],
            imageSrc: "/rhinoo.png",
            altText: "Nexus Assistant",
          },
          {
            title: "GIVE A NEXUS EXECUTIVE",
            price: "$1,200/Month",
            features: [
              "Large-Scale Monthly Bookkeeping",
              "4 times a week processing",
              "A/R & A/P",
              "+ Year-End Processing",
            ],
            imageSrc: "/rhinoo.png",
            altText: "Nexus Executive",
          },
          {
            title: "THE BIG NEXUS ADVISOR",
            price: "Contact Us",
            features: [
              "Co-Founders?",
              "Financial Management?",
              "Capital Fundraising?",
              "Equity Investment?",
            ],
            imageSrc: "/rhinoo.png",
            altText: "Nexus Advisor",
          },
        ].map((plan, index) => (
          <motion.div
            key={index}
            className="bg-[#F0F9F8] rounded-lg mt-16 shadow-xl p-6 w-full sm:w-1/2 lg:w-[271px] "
            variants={childVariants}
            whileHover="hover"
          >
            <motion.img
              src={plan.imageSrc}
              alt={plan.altText}
              className="w-full h-48 object-cover rounded-t-lg"
              variants={hoverVariants}
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">
                {plan.title.includes("NEXUS") ? (
                  <>
                    {plan.title.split("NEXUS")[0]}
                    <span className="text-teal-500 w-[70px] h-[26px] border-[2px] ">
                      <br />
                      NEXUS <br />
                    </span>
                    {plan.title.split("NEXUS")[1]}
                  </>
                ) : (
                  plan.title
                )}
              </h2>
              {plan.price !== "Contact Us" && (
                <p className="text-red-500">{plan.price}</p>
              )}
            </div>
            <div className="mt-4 p-4 bg-white shadow-sm rounded-lg">
              <p className="text-teal-500 font-bold">
                {plan.price === "Contact Us" ? "Contact Us" : "Including"}
              </p>
              <ul className="list-disc list-inside text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              {plan.price === "Contact Us" && (
                <p className="text-red-500 mt-2">
                  Contact us for a personalized quote.
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Price;
