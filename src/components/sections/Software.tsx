import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLinkInView } from "@/hooks/useLinkInView";

const Software: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
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
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const { ref } = useLinkInView("Software", 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      id="software"
      className="max-w-[1440px] overflow-hidden h-auto gap-8 w-full mx-auto px-12 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center lg:mt-24 lg:mb-24">
        <motion.h2
          className="text-3xl  font-bold text-zinc-900"
          variants={childVariants}
        >
          Software
        </motion.h2>
        <motion.p className="text-zinc-600 mt-2" variants={childVariants}>
          These are the software that we work with:
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-300 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="border-b-2 border-zinc-300 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
      </div>
      <div className="mb-10">
        <Slider {...settings}>
          <div className="text-center  ">
            <motion.img
              className="mx-auto  h-24 w-24"
              src="/quick.png"
              alt="QuickBooks Online"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <h3 className="mt-8 text-2xl font-extrabold text-primary">
              QuickBooks Online
            </h3>
            <p className="mt-6 text-md font-semibold text-zinc-600">
              We are proficient in QuickBooks Online, leveraging its features
              for efficient bookkeeping.
            </p>
          </div>
          <div className="text-center">
            <motion.img
              className="mx-auto h-24 w-24"
              src="/xero.png"
              alt="Xero"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <h3 className="mt-8 text-2xl font-extrabold text-primary">Xero</h3>
            <p className="mt-6 text-md font-semibold text-zinc-600">
              Our team is skilled in utilizing Xero for seamless financial
              management.
            </p>
          </div>
          <div className="text-center">
            <motion.img
              className="mx-auto h-24 w-24"
              src="/fb.png"
              alt="FreshBooks"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <h3 className="mt-8 text-2xl font-extrabold text-primary">
              FreshBooks
            </h3>
            <p className="mt-6 text-md font-semibold text-zinc-600">
              We work with FreshBooks to simplify invoicing and expense tracking
              for our clients.
            </p>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Software;
