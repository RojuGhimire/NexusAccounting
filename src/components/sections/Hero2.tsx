import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Hero2(): JSX.Element {
  return (
    <motion.div
      className="flex flex-col font-poppins overflow-hidden justify-between w-full max-w-[1440px]  min-h-[398px] md:flex-row items-center md:items-start px-4 md:px-12 lg:mx-auto mt-5 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="basis-[35%]  lg:mt-8 lg:min-h-[480px]  lg:mb-4 md:mb-0 md:mr-8 relative"
        variants={childVariants}
      >
        <div>
          <motion.img
            src="/wel.png"
            alt="Audit Image"
            className="hidden lg:flex w-full md:w-[250px] lg:w-[250px] object-cover"
            initial={{ opacity: 0.9 }} // Initial opacity
            whileHover={{ opacity: 0.6 }} // Lower opacity on hover
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/nex1.png"
            alt="Audit Image"
            className="hidden lg:flex w-full md:w-[250px] lg:w-[250px] object-cover"
            initial={{ opacity: 5 }} // Initial opacity
            whileHover={{ opacity: 0.8 }} // Lower opacity on hover
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="absolute top-[25%] right-[5%]">
          <motion.img
            src="/join.png"
            alt="Audit Image"
            className="hidden lg:flex w-full md:w-[250px] lg:w-[250px] h-auto object-cover"
            initial={{ opacity: 0.9 }} // Initial opacity
            whileHover={{ opacity: 0.8 }} // Lower opacity on hover
            transition={{ duration: 0.1 }}
          />
          <motion.img
            src="/cal1.png"
            alt="Audit Image"
            className="hidden lg:flex w-full md:w-[300px] lg:w-[300px] object-contain absolute right-[10%] -bottom-[6rem] z-20"
            initial={{ opacity: 0.9 }} // Initial opacity
            whileHover={{ opacity: 0.8 }} // Lower opacity on hover
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.img
          src="/ipad.png"
          alt="Audit Image"
          className="hidden lg:flex w-full md:w-[250px] lg:w-[250px] object-cover absolute -right-[35%] md:-right-[35%] bottom-[25%] z-40"
          initial={{ opacity: 2 }} // Initial opacity
          whileHover={{ opacity: 0.9 }} // Lower opacity on hover
          transition={{ duration: 0.1 }}
        />
        <motion.img
          src="/Group.png"
          alt="Audit Image"
          className="lg:hidden w-full h-[267px] md:h-[300px] md:w-[3000px] object-fit "
          initial={{ opacity: 0.9 }} // Initial opacity
          whileHover={{ opacity: 0.6 }} // Lower opacity on hover
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[834px]  lg:basis-[50%] h-auto  md:mt-0 md:ml-8"
        variants={childVariants}
      >
        <motion.h1
          className="text-3xl lg:mt-12 font-lobster font-extrabold md:text-4xl lg:text-[36px] leading-[54px] text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome To Nexus
        </motion.h1>
        <motion.div
          className="leading-7  text-lg lg:text-xl font-semibold text-zinc-700 space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            variants={childVariants}
            className="font-overpass text-[22px] font-normal leading-[28.26px] text-justify"
          >
            Nexus Accounting Firm was founded with a mission to provide
            businesses with flexible and reliable bookkeeping solutions. Our
            team brings years of industry experience and expertise to every
            client partnership. With a team of seasoned professionals, we bring
            expertise across various industries, providing comprehensive support
            in accounting, bookkeeping, payroll, taxation, and financial
            advisory services. Whether you're a startup navigating rapid growth
            or an established enterprise seeking optimization, we offer scalable
            solutions to drive your success.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
