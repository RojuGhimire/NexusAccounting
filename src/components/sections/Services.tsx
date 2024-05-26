import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import { fadeInAnimationVariants, servicesCards } from "@/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { useLinkInView } from "@/hooks/useLinkInView";

const Services = () => {
  const { ref } = useLinkInView("Services", 0.35);

  return (
    <section id="services" ref={ref} className="flex_col_center w-full pt-20 ">
      <SectionHeading sectionTitle="Our Services" />
      <div className="flex justify-between flex-wrap lg:gap-x-10 w-full">
        {servicesCards.slice(0, 4).map((card, id) => (
          <motion.div
            key={card.title + id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={id}
            className="w-full sm:w-[280px] lg:w-[350px]"
          >
            <ServiceCard
              title={card.title}
              description={card.description}
              image={card.img}
            />
          </motion.div>
        ))}
      </div>
      <h2 className="text-3xl my-4 font-bold">
        Third Party Software and Services
      </h2>
      <div className="flex justify-between flex-wrap  lg:gap-x-10 w-full">
        {servicesCards.slice(4).map((card, id) => (
          <motion.div
            key={card.title + id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={id}
            className="w-full sm:w-[280px] lg:w-[350px] "
          >
            <ServiceCard
              title={card.title}
              description={card.description}
              image={card.img}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
