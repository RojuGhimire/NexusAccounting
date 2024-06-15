import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className="py-16 w-full  max-w-[1440px] mx-auto overflow-hidden px-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto  text-center">
        <motion.h2
          className="text-3xl font-bold text-zinc-900"
          variants={childVariants}
        >
          Our Team
        </motion.h2>
        <motion.p
          className="text-zinc-600 dark:text-zinc-700 mt-2"
          variants={childVariants}
        >
          Meet Our Professional Team
        </motion.p>
        <motion.div
          className="border-b-2  border-zinc-300 dark:border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="flex flex-wrap justify-center items-center mt-10 lg:mt-20 gap-8 md:gap-10 lg:gap-[250px] w-full "
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={childVariants}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="rounded-full  overflow-hidden w-48   h-48 md:w-60 md:h-60">
                  <motion.img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                  />
                </div>
              </motion.div>
              <motion.h3
                className="text-teal-500 mt-4 text-lg font-semibold"
                variants={childVariants}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="text-zinc-600 dark:text-zinc-400"
                variants={childVariants}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
