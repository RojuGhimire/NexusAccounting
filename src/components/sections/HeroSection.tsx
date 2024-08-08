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
      className="w-full lg:h-[550px] h-[580px] md:h-[750px] md:mt-20 relative left-[1px] p-[81px_0_78px_89px] gap-[25px]  overflow-hidden mx-auto items-center justify-center px-12 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url("/Everest.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col max-w-[1440px] mx-auto h-auto lg:flex-row  items-center lg:items-start">
        <motion.div
          className="text-lg lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container font-poppins  flex flex-col lg:flex-row   items-center justify-center gap-12">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              variants={itemVariants}
            >
              <div  >
                <span className="font-poppins text-[38px] font-bold leading-[46.74px] text-left">
                  NEXUS YOUR
                </span>
                <br />
                <span className="font-poppins text-primary  text-[48px] font-bold leading-[59.04px] text-left">
                  TRUSTED PARTNER IN
                </span>{" "}
                <br className="hidden lg:block" />
                <span className="font-poppins text-[52px] font-bold leading-[78px] text-left">
                  REMOTE BOOKKEEPING
                </span>
              </div>
              <p className="text-base text-[#FFB600] font-poppins">
                Ready to streamline your bookkeeping? Book a consultation today!
              </p>
              <motion.button
                className="mt-6 bg-primary text-white font-poppins font-semibold py-1.5 px-6 rounded text-[18px] hover:bg-secondary transition duration-500"
                whileHover="hover"
                variants={buttonVariants}
              >
                <a href="#appointment">Book Now</a>
              </motion.button>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
              <motion.img
                src="/Hero.png"
                alt="Illustration of remote bookkeeping"
                className="w-full h-[411px]  max-w-[638px]   object-cover"
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
