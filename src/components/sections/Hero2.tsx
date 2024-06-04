import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Hero2(): JSX.Element {
  return (
    <motion.div
      className="flex flex-col w-[1440px] h-[398px] md:flex-row items-center md:items-start px-56 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex-shrink-0 mb-4 md:mb-0 md:mr-24" variants={childVariants}>
        <img
          src="/Audit.png"
          alt="Audit Image"
          className="w-full md:w-auto h-auto object-cover"
        />
      </motion.div>
      <motion.div className="w-[834px] h-[348px] top-[35px] left-[517px] gap-[86px]" variants={childVariants}>
        <h1 className="text-2xl md:text-3xl font-extrabold text-teal-500 mb-4 w-[350px] h-[54px]">
          Welcome To Nexus
        </h1>
        <div className="w-[853px]  h-[216px] leading-[27px] size-[18px] font-bold text-lg gap-[22px]">
          <p className="text-zinc-700 ">
            Nexus Accounting Firm was founded with a mission to provide businesses with flexible and reliable bookkeeping solutions. Our team brings years of industry experience and expertise to every client partnership.
          </p>
          <p className="text-zinc-700 mt-6 ">
            With a team of seasoned professionals, we bring expertise across various industries, providing comprehensive support in accounting, bookkeeping, payroll, taxation, and financial advisory services. Whether you're a startup navigating rapid growth or an established enterprise seeking optimization, we offer scalable solutions to drive your success.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
