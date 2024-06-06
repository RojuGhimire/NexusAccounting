




import React from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "/blue.png", text: "Remote Bookkeeping" },
  { icon: "/green.png", text: "Financial Reporting" },
  { icon: "/green.png", text: "Audit assistance" },
  { icon: "/green.png", text: "Payroll Services"},
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
  return (
    <>
      <div className="w-[1440px] h-[549px] left-10 gap-53">
        <div className="flex flex-row items-center gap-[195px]  ">
          <div className="flex flex-row justify-center items-center">
          <img src="/ser.png" alt=""  className="w-52 h-56  left-14"/>
          <img src="DOT.png" alt="" className=" w-32 h-64 left-12" />
          </div>
          <div className="flex flex-col  items-center space-y-4">
            <h2 className="text-2xl font-bold">Our Services</h2>
            <p className="text-zinc-500">Meet Our Professional Team</p>
           
            <div className="space-y-4 ">
              <div className="space-y-4 relative">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.7 }}
                  >
                    <img src={service.icon} alt="" className="w-[395px] h-[55px]" />
                    <span className="text-lg absolute top-3 left-12 px-2 py-1">{service.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  p-4 bg-[#DFF0EE] rounded-3xl w-[320px] h-[330px] gap-y-[26px]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.7 }}
              >
                <div className="text-4xl text-green-600">{benefit.icon}</div>
                <span className="text-lg text-green-900">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;