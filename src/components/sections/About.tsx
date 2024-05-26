import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useLinkInView } from "@/hooks/useLinkInView";

const About = () => {
  const { ref } = useLinkInView("About Us", 0.4);
  const animateRef1 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: firstScrollY } = useScroll({
    target: animateRef1,
    offset: ["0 1", "1.33 1"],
  });

  const firstScaleProgress = useTransform(firstScrollY, [0, 1], [0.5, 1]);
  const firstOpacityProgress = useTransform(firstScrollY, [0, 1], [0.4, 1]);

  return (
    <>
      <SectionHeading
        sectionTitle="About Us"
        className="font-bold text-center md:text-left"
      />
      <h1 className="text-[24px] md:text-[38px] italic text-center md:text-left">
        We can help with your Accounting project
      </h1>

      <section ref={ref} id="about" className="w-full px-4 md:px-8 lg:px-16 pt-12 pb-20">
        <motion.div
          ref={animateRef1}
          style={{
            scale: firstScaleProgress,
            opacity: firstOpacityProgress,
          }}
          className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 w-full"
        >
          <figure className="flex-shrink-0">
            <img
              src="/about1.jpg"
              className="w-full md:w-[422px] h-auto md:h-[453px] rounded-[40px] md:rounded-[82px] mx-auto md:mx-0"
              alt="About Us"
            />
          </figure>

          <div className=" md:mt-0">
            <p className="text-[20px] md:text-[24px] font-medium text-left mb-4">
              Nexus Accounting Firm was founded with a mission to provide businesses with flexible and reliable bookkeeping solutions. Our team brings years of industry experience and expertise to every client partnership.
            </p>
            <p className="text-[20px] md:text-[24px] font-medium text-left mb-4">
              With a team of seasoned professionals, we bring expertise across various industries, providing comprehensive support in <span className="text-text">accounting, bookkeeping, payroll, taxation, and financial advisory services.</span> Whether you're a startup navigating rapid growth or an established enterprise seeking optimization, we offer scalable solutions to drive your success.
            </p>

            <h1 className="text-[#23676C] font-semibold italic text-[22px] md:text-[26px] mt-5 leading-[32px] md:leading-[39.6px]">
              Our Core Values
            </h1>
            <ul className="list-disc pl-5 mt-3 text-[20px] md:text-[24px] font-medium">
              <li>Commitment to Accuracy</li>
              <li>Client-Centric Approach</li>
              <li>Embracing Technology</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
