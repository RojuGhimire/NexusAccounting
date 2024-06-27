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
      className="flex flex-col overflow-hidden  w-full max-w-[1440px] min-h-[398px] md:flex-row items-center md:items-start px-12 md:px-4 lg:mx-auto py-8 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex-shrink-0 mb-4 md:mb-0 md:mr-8"
        variants={childVariants}
      >
        <motion.img
          src="/Audit.png"
          alt="Audit Image"
          className="w-full md:w-auto h-auto object-cover rounded-lg shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[834px] h-auto mt-4 md:mt-0 md:ml-8"
        variants={childVariants}
      >
        <motion.h1
          className="text-3xl font-poppins font-bold md:text-4xl lg:text-[36px] leading-[54px] text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome To Nexus
        </motion.h1>
        <motion.div
          className="leading-7 text-lg lg:text-xl font-semibold text-zinc-700 space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            variants={childVariants}
            className="font-poppins font-medium text-[18px] leading-[27px]"
          >
            Nexus Accounting Firm was founded with a mission to provide
            businesses with flexible and reliable bookkeeping solutions. Our
            team brings years of industry experience and expertise to every
            client partnership.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="hidden lg:block font-poppins font-medium text-[18px] leading-[27px]"
          >
            With a team of seasoned professionals, we bring expertise across
            various industries, providing comprehensive support in accounting,
            bookkeeping, payroll, taxation, and financial advisory services.
            Whether you're a startup navigating rapid growth or an established
            enterprise seeking optimization, we offer scalable solutions to
            drive your success.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
