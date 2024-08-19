import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

const HeroSection = () => {
  const { ref } = useLinkInView("Home", 0.3);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full h-[600px] md:h-[750px] lg:h-[550px] overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-[81px_0_78px_89px] gap-6 lg:gap-[25px] mx-auto"
      style={{
        backgroundImage: 'url("/mount.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "100%"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto items-center lg:items-start">
        <motion.div
          className="text-lg lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container  lg:mt-16 font-poppins flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div
              className="w-full lg:w-1/2 space-y-6 text-white"
              variants={itemVariants}
            >
              <div>
                <span className="block font-poppins text-[36px] md:text-[38px] lg:text-[40px] font-bold leading-tight">
                  NEXUS YOUR
                </span>
                <span className="block font-poppins text-[#FFB600] text-[40px] md:text-[48px] lg:text-[50px] font-bold leading-tight">
                  TRUSTED PARTNER IN
                </span>
                <span className="block font-poppins text-[42px] md:text-[52px] lg:text-[54px] font-bold leading-tight">
                  REMOTE BOOKKEEPING
                </span>
              </div>
              <p className="text-base md:text-lg text-teal-400 font-poppins">
                Ready to streamline your bookkeeping? Book a consultation today!
              </p>
              <motion.button
                className="mt-6 bg-secondary text-white font-poppins font-semibold py-1.5 px-6 rounded text-[18px] hover:bg-primary transition duration-500"
                whileHover="hover"
                variants={buttonVariants}
              >
                <a href="#appointment">Book Now</a>
              </motion.button>
            </motion.div>
            <motion.div className="w-full  lg:w-1/2" variants={itemVariants}>
              <motion.img
                src="/Hero.png"
                alt="Illustration of remote bookkeeping"
                className="w-full h-[300px] md:h-[411px] max-w-[500px] lg:max-w-[638px] object-cover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
