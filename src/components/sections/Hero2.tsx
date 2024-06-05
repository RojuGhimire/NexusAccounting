import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the animation of children elements
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
      className="flex flex-col w-full max-w-[1440px] h-[398px] md:flex-row items-center md:items-start px-4 md:px-8 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex-shrink-0 mb-4 md:mb-0 md:mr-24" variants={childVariants}>
        <motion.img
          src="/Audit.png"
          alt="Audit Image"
          className="w-full md:w-auto h-auto object-cover"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div className="w-full md:w-[834px] h-[348px] mt-4 md:mt-0 gap-[20px]" variants={childVariants}>
        <motion.h1 
          className="text-2xl md:text-3xl font-extrabold text-teal-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome To Nexus
        </motion.h1>
        <motion.div
          className="leading-[27px] text-lg font-bold text-zinc-700 space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p variants={childVariants}>
            Nexus Accounting Firm was founded with a mission to provide businesses with flexible and reliable bookkeeping solutions. Our team brings years of industry experience and expertise to every client partnership.
          </motion.p>
          <motion.p variants={childVariants}>
            With a team of seasoned professionals, we bring expertise across various industries, providing comprehensive support in accounting, bookkeeping, payroll, taxation, and financial advisory services. Whether you're a startup navigating rapid growth or an established enterprise seeking optimization, we offer scalable solutions to drive your success.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
