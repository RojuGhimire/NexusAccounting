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
      className="w-full h-auto relative overflow-hidden mx-auto  px-12 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url("/Everest.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col max-w-[1440px] mx-auto h-auto lg:flex-row  mt-28 items-center lg:items-start">
        <motion.div
          className="text-lg lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <motion.div className="w-full lg:w-1/2 space-y-6" variants={itemVariants}>
              <h1 className="text-4xl font-bold text-zinc-900">
                NEXUS YOUR <br />
                <span className="text-teal-500">TRUSTED PARTNER IN</span>{" "}
                <br className="hidden lg:block" />
                <span className="font-bold text-5xl text-zinc-900">
                  REMOTE BOOKKEEPING
                </span>
              </h1>
              <p className="mt-4 text-lg text-yellow-500">
                Ready to streamline your bookkeeping? Book a consultation today!
              </p>
              <motion.button
                className="mt-6 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
                whileHover="hover"
                variants={buttonVariants}
              >
                Book Now
              </motion.button>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
              <motion.img
                src="/Hero.png"
                alt="Illustration of remote bookkeeping"
                className="w-full h-auto max-w-[579px] mx-auto lg:mx-0 object-cover"
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
