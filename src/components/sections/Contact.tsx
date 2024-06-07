import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";

import SectionHeading from "@/components/SectionHeading";
import { BiLoaderCircle } from "react-icons/bi";
import { Input } from "@/components/ui/Input";
import { useLinkInView } from "@/hooks/useLinkInView";
import { useViewport } from "@/hooks/userViewPort";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
};

export default function Contact() {
  const { ref } = useLinkInView("Contact", 0.8);
  const [isLoading, setIsLoading] = useState(false);

  const [contactForm, setContactForm] = useState(initialState);
  const { isMobile } = useViewport();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    let filteredValue: string = inputValue.replace(/\D/g, "");
    filteredValue = filteredValue.slice(0, 10);
    setContactForm({ ...contactForm, mobile: filteredValue });
  };

  const postData = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://nextnexus.vercel.app/api/users/contacts",
        {
          method: "POST",
          body: JSON.stringify(contactForm),
        }
      );
      const data = await res.json();
      res.status === 400
        ? toast.error(data.message)
        : toast.success(data.message);
      if (res.status === 201) {
        setContactForm(initialState);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // for animation
  const formVariants = {
    initial: {
      x: isMobile ? 100 : 600,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const variants = {
    initial: {
      x: isMobile ? -100 : -400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} id="contact" className="max-w-[1440px] w-full mx-auto mt-12  pb-12">
      <SectionHeading sectionTitle="Contact Us" />
      <div className="flex flex-col lg:flex-row justify-between mt-8 lg:mt-12">
        {/* left side */}
        <motion.div
          className="w-full lg:w-2/5 mb-8 lg:mb-0 lg:mr-8"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1
            variants={variants}
            className="text-3xl mb-6 underline text-gray-950"
          >
            Let&apos;s work together
          </motion.h1>
          <motion.div variants={variants}>
            <motion.div className="mb-6" variants={variants}>
              <h2 className="text-xl text-gray-950 font-medium mb-2">Mail</h2>
              <div className="flex gap-1 items-center my-1">
                <IoMail className="text-teal-500" size={24} />
                <span>nexus@gmail.com</span>
              </div>
            </motion.div>
            <motion.div className="mb-6" variants={variants}>
              <h2 className="text-xl text-gray-950 font-medium mb-2">
                Address
              </h2>
              <div className="flex gap-1 items-center my-1">
                <IoLocationSharp className="text-teal-500" size={24} />
                <span>Tinkune, Kathmandu</span>
              </div>
            </motion.div>
            <motion.div className="mb-6" variants={variants}>
              <h2 className="text-xl text-gray-950 font-medium mb-2">Phone</h2>
              <div className="flex gap-1 items-center my-1">
                <MdOutlineLocalPhone className="text-teal-500" size={24} />
                <span>9766893385</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* right side form */}
        <div className="w-full lg:w-3/5">
          <motion.form
            variants={formVariants}
            initial="initial"
            whileInView="animate"
            className="w-full"
            onSubmit={postData}
          >
            <div className="flex flex-col gap-y-5">
              <Input
                label="First Name"
                
                required
                placeholder="Enter your first name"
                value={contactForm.firstName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, firstName: e.target.value })
                }
              />
              <Input
                label="Last Name"
                required
                placeholder="Enter your last name"
                value={contactForm.lastName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, lastName: e.target.value })
                }
              />
              <Input
                label="Email"
                type="email"
                required
                placeholder="Enter your email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
              />
              <Input
                label="Mobile"
                required
                placeholder="Enter your mobile"
                value={contactForm.mobile}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="inline-flex mt-7 w-[120px] h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#159891,45%,#F6F5F2,48%,#159891)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
            >
              {isLoading ? (
                <BiLoaderCircle
                  className="animate-spin"
                  color="#ffffff"
                  size={25}
                />
              ) : (
                <div className="flex gap-2 items-center ">
                  <span>Submit</span>
                  <IoIosSend size={24} />
                </div>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
