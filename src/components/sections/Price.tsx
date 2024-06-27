import React from 'react';
import { motion } from 'framer-motion';

interface PlanProps {
  imgSrc: string;
  buttonText: string;
  price: string;
  features: string[];
  additionalInfo?: string;
}

const Plan: React.FC<PlanProps> = ({ imgSrc, buttonText, price, features, additionalInfo }) => {
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg w-full md:w-[300px] lg:w-[300px] h-auto gap-8 bg-[#F0F9F8] mx-2 my-4"
      whileHover="hover"
      variants={hoverVariants}
    >
      <motion.img
        src={imgSrc}
        alt="business-rhino"
        className="mx-auto h-[119px] w-[119px]"
        variants={hoverVariants}
      />
      <button className="bg-[#16AF9D] text-white h-[39px] py-2 px-4 rounded mb-2 mx-auto block">
        {buttonText}
      </button>
      {price && <p className="text-[#E20000] text-center mt-4 font-extrabold">{price}</p>}
      <div className="bg-white h-[257px] w-full mt-5 p-3 rounded-lg shadow-inner items-center justify-center">
        <p className="text-[#16AF9D] mb-2">{additionalInfo || 'Including'}</p>
        <ul className="mb-4">
          {features.map((feature, index) => (
            <li key={index}className="flex items-center mb-2">
            <img src="/Check.png" alt="Check" className="h-4 w-4 mr-2" />
            {feature}</li>
          ))}
        </ul>
        {buttonText === 'THE BIG NEXUS ADVISOR' ? (
          <p className="text-[#E20000] mt-16 text-xs font-bold leading-4 text-left">Contact us for a personalized quote.</p>
        ) : (
          <button className="bg-black text-white py-2 px-4 rounded items-center justify-center w-full">Start</button>
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
        type: 'spring',
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
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      id="pricing"
      className="max-w-[1440px] h-auto overflow-hidden gap-8 w-full mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mt-12">
        <motion.h2 className="text-3xl font-bold text-zinc-900" variants={childVariants}>
          Pricing
        </motion.h2>
        <motion.p className="text-zinc-600 mt-2" variants={childVariants}>
          Our pricing is tailored to your business size and specific needs:
        </motion.p>
        <motion.div className="border-b-2 border-zinc-600 w-16 mx-auto my-4" variants={childVariants}>
        </motion.div>
        <motion.div className="border-b-2 border-zinc-600 w-16 mx-auto my-4" variants={childVariants}>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 p-4">
        {[
          {
            imgSrc: '/rhinoo.png',
            buttonText: 'SAVE A NEXUS ASSISTANT',
            price: '$300/ Month',
            features: [
              'Once a week processing',
              'Quickbooks Setup',
              'Monthly Transaction Review',
              'Direct Text Line',
              'Bookkeeping Concierge “Rhino”',
            ],
          },
          {
            imgSrc: '/rhinoo.png',
            buttonText: 'MAKE A NEXUS ASSISTANT',
            price: '$600/ Month',
            features: [
              'Twice a week processing',
              'W2 management',
              'Light A/R & A/P',
              '+ Year-End Processing',
            ],
            additionalInfo: 'Save Membership',
          },
          {
            imgSrc: '/rhinoo.png',
            buttonText: 'GIVE A NEXUS EXECUTIVES',
            price: '$1,200/ Month',
            features: [
              'Large-Scale Monthly Bookkeeping',
              '4 times a week processing',
              'A/R & A/P',
              '+ Year-End Processing',
            ],
            additionalInfo: 'Save Membership',
          },
          {
            imgSrc: '/rhinoo.png',
            buttonText: 'THE BIG NEXUS ADVISOR',
            price: 'Contact Us',
            features: [
              'Co-Founders?',
              'Financial Management?',
              'Capital Fundraising?',
              'Equity Investment?',
            ],
            additionalInfo: 'Contact Us',
          },
        ].map((plan, index) => (
          <Plan
            key={index}
            imgSrc={plan.imgSrc}
            buttonText={plan.buttonText}
            price={plan.price}
            features={plan.features}
            additionalInfo={plan.additionalInfo}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Price;
