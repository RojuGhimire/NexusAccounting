import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";
import { fadeInAnimationVariants } from "@/constants";

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

const imageVariants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1 },
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const teamMembers: TeamMemberProps[] = [
  { name: "Ramsharan Rijal", role: "CEO/ Founder", imageSrc: "/sital.png" },
  { name: "Sital Rijal", role: "Operation Manager", imageSrc: "/sital.png" },
  { name: "Nabin Budhathoki", role: "HR Manager", imageSrc: "/sital.png" },
];

export default function About() {
  const { ref } = useLinkInView("Our Team", 0.95);

  return (
    <section
      ref={ref}
      id="about"
      className="  w-full max-w-[1440px] mx-auto font-primary overflow-hidden px-10 ">
      <div className="flex flex-col md:flex-row-reverse  mt-12 lg:mt-0 mb-8 ">
        <div className="relative w-[360px] lg:w-[380px] lg:left-7 h-[400px] mb-10 ">
          <img
            src="/ram.png"
            alt="ram"
            className="w-full h-full object-cover"
          />
          <div className="absolute  bottom-4  bg-primary rounded-xl shadow-lg items-center justify-center  p-4 border-l-4 w-[300px] lg:w-[356px] h-[85px] top-[350px] left-[35px] hover:bg-white  border-secondary">
            <div className="w-[231.61px] h-[39px] top-[17.59px] left-[25.73px] ">
              <h2 className="font-overpass text-[18.17px] font-semibold leading-[23px] text-left text-white hover:text-black">
                Ramsharan Rijal
              </h2>
              <span className="text-secondary font-overpass text-[12.87px] font-semibold leading-[16.29px] text-left">
                CEO/Founder
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className=" text-secondary mt-8 font-overpass  text-[20px] font-bold leading-[25.32px] text-left">
            CEO/Founder
          </h2>
          <p className="font-overpass text-[36px] font-semibold leading-[45.58px] text-left mt-2 mb-2">
            Ramsharan Rijal
          </p>
          <p className="mt-2 font-overpass text-[18px] font-normal leading-[28.26px] text-justify">
            Ram Sharan Rijal is a seasoned registered auditor with a background
            in accounting and finance. With a commitment to integrity and
            professionalism,he brings extensive experience in auditing and
            financial management to ensure compliance and accuracy in financial
            reporting. Known for his attention to detail, analytical skills, and
            strong communication, Ram Sharan Rijal is dedicated to helping
            organizations achieve their financial goals while maintaining
            transparency and accountability. 
           
          </p>
        </div>
      </div>
      <div className="container mx-auto  text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-3xl mt-16  font-bold text-zinc-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our Team
          </motion.h2>
          <motion.p className="text-zinc-600 mt-2" variants={itemVariants}>
            Meet Our Professional Team
          </motion.p>
          <motion.div
            className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
            variants={itemVariants}
          >
            <motion.div
              className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
              variants={itemVariants}
            ></motion.div>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center items-center mt-10  gap-8 md:gap-10  lg:gap-[250px] w-full">
            {teamMembers.map((member, id) => (
              <motion.div
                key={id}
                className="flex flex-col items-center"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={id}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="rounded-full overflow-hidden w-48 h-48 md:w-60 md:h-60">
                    <motion.img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
                <motion.h3
                  className="text-primary mt-4  text-lg font-semibold"
                  variants={itemVariants}
                >
                  {member.name}
                </motion.h3>
                <motion.p className="text-zinc-600" variants={itemVariants}>
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
