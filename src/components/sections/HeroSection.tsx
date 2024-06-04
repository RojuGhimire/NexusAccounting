import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

const HeroSection = () => {
  const { ref } = useLinkInView("Home", 0.3);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full relative overflow-hidden"
    >
      <div className="flex  ">
        <div className="w-full lg:w-[80%]">
          <motion.div
            className="mt-16  px-4 md:px-6 text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="container p-[60px] gap-[84px] w-[1437px] h-[463px] top-[620px] flex flex-col lg:flex-row">
              <div className=" w-[685px] h-[291px] gap-[45px] ">
                <h1 className="text-4xl font-bold text-zinc-900 ">
                  NEXUS YOUR <br />
                  <span className="text-teal-500">TRUSTED PARTNER IN</span>{" "}
                  <br className="hidden lg:block" />
                  <span className=" font-bold text-5xl text-zinc-900  text-left">
                    REMOTE BOOKKEEPING
                  </span>
                </h1>
                <p className="mt-4 text-lg text-yellow-500">
                  Ready to streamline your bookkeeping? Book a consultation
                  today!
                </p>
                <button className="mt-10 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
                  Book Now
                </button>
              </div>
              <div className="">
                <img
                  src="/Hero.png"
                  alt="Illustration of remote bookkeeping"
                  className="w-[579px] h-[365px] object-cover"
                />
              </div>
            </div>

            <motion.ul
              className="mt-16 mb-10 flex justify-center items-center gap-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            ></motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
