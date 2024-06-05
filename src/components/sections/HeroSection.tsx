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
      className="w-full max-w-[1437px] h-[463px] relative overflow-hidden mx-auto"
    >
      <div className="flex mt-5">
        <motion.div
          className="px-4 md:px-6 text-lg lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container p-[60px] gap-[84px] top-[620px] flex flex-col lg:flex-row">
            <motion.div className="w-[685px] h-[291px] gap-[45px]" variants={itemVariants}>
              <h1 className="text-4xl font-bold text-zinc-900">
                NEXUS YOUR <br />
                <span className="text-teal-500">TRUSTED PARTNER IN</span>{" "}
                <br className="hidden lg:block" />
                <span className="font-bold text-5xl text-zinc-900 text-left">
                  REMOTE BOOKKEEPING
                </span>
              </h1>
              <p className="mt-4 text-lg text-yellow-500">
                Ready to streamline your bookkeeping? Book a consultation today!
              </p>
              <motion.button
                className="mt-10 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
                whileHover="hover"
                variants={buttonVariants}
              >
                Book Now
              </motion.button>
            </motion.div>
            <motion.div className="" variants={itemVariants}>
              <motion.img
                src="/Hero.png"
                alt="Illustration of remote bookkeeping"
                className="w-[579px] h-[365px] object-cover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>

          <motion.ul
            className="mt-16 mb-10 flex justify-center items-center gap-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{
              delay: 0.7,
            }}
          >
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
