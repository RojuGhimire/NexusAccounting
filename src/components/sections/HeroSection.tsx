import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

const HeroSection = () => {
  const { ref } = useLinkInView("Home", 0.3);

  return (
    <section ref={ref} id="home" className="pt-12 pb-20 w-full relative overflow-hidden">
      <img
        src="/rhino-removebg-preview 1.png"
        alt="Rhino"
        className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px] absolute lg:-top-[200px] lg:-left-[180px] top-[-50px] sm:top-[-100px] md:top-[-150px] left-[50%] transform -translate-x-1/2 lg:left-auto"
      />
      <div className="flex justify-center lg:justify-end">
        <div className="w-full lg:w-[80%]">
          <motion.div
            className="mt-4 px-4 md:px-6 text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[24px] sm:text-[28px] md:text-[33px]">
              Hi, I am <strong className="italic text-text">Nexus</strong>, your
              trusted partner in remote bookkeeping services. We provide skilled
              and reliable accountants to handle your bookkeeping needs
              efficiently and accurately.
            </p>
            <div className="w-full flex justify-center lg:justify-end">
              <div className="w-full lg:w-[70%] leading-normal lg:leading-[33.89px] mt-6 lg:mt-0">
                <h1 className="flex justify-center lg:justify-start mt-8 lg:mt-16 font-bold text-text italic">
                  Why Choose Us:
                </h1>
                <div className="w-full flex justify-center lg:justify-end">
                  <p className="text-[20px] sm:text-[24px] md:text-[28px] mt-5 text-[#000000CC] opacity-[80%] w-full lg:w-[86%]">
                    Our team consists of experienced professionals dedicated to
                    delivering quality results. We utilize advanced software and
                    tools to streamline processes, ensuring accuracy and
                    timeliness in our services.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center lg:justify-start mt-8">
              <h1 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#000000CC] opacity-[80%]">
                Ready to streamline your bookkeeping? Book a consultation today!
              </h1>
              <button className="text-[#23676C]  bg-[#BDFFFF] items-center justify-center rounded-md px-8 py-2 font-medium text-lg lg:mt-0">
                Book Now!
              </button>
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
