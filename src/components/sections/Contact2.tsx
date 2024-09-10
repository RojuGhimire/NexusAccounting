import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { BiLoaderCircle } from "react-icons/bi";
import { useLinkInView } from "@/hooks/useLinkInView";

import { useViewport } from "@/hooks/userViewPort";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { Input } from "../ui/Input";

const ContactSection: React.FC = () => {
    const { ref } = useLinkInView("Contact", 0.8);
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  };

  const [contactForm, setContactForm] = useState(initialState);
  useViewport();
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

  return (
    <div 
     ref={ref}
      id="contact"
    className=" bg-[#FDF7F7] lg:h-[857px] justify-center items-center p-6 w-full ">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-zinc-900">Send Your Message</h2>
        <div className="border-b-2 border-zinc-600 w-16 mx-auto my-4"></div>
        <div className="border-b-2 border-zinc-600 w-16 mx-auto my-4"></div>
        <p className="text-zinc-600  mt-2">
          Don’t hestiate to ask us something, Our customer support team <br />{" "}
          always ready to help you, they will support you 24/7
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10">
        {/* Contact Form */}

        <div className="bg-white shadow-lg p-8 w-full lg:w-[511.47px] lg:h-[500.5px] mt-6 lg:mt-0 lg:top-[60px] lg:left-[117.68px] rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-semibold font-overpass mb-2">
            Get In Touch
          </h2>
          <p className="mb-4">Advance Your Career with us.</p>

          {/* Form Inputs */}
          <form className="w-full"
            onSubmit={postData}
          >
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
          </form> 

          {/* Enroll Button */}
          <button
            type="submit"
            className="inline-flex mt-7 w-[120px] h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#001C3D,45%,#F6F5F2,48%,#001C3D)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
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
        </div>

        {/* Office Information Box */}
        <div className="bg-primary text-white p-8 w-full lg:w-[365.69px] lg:h-[434.27px] mt-6 lg:mt-0 lg:top-[90.65px] lg:right-[100.31px] rounded-2xl ml-0 lg:ml-10 relative">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            LET'S HAVE A<br /> TALK
          </h3>
          <p className="text-white font-semibold mb-1">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the...
          </p>

          <div className="space-y-8 mt-9">
            <div className="flex items-center ">
              <FaLocationDot className="text-secondary mr-5 h-6 w-4" />
              <p className="font-semibold ">Jorpati, Kathmandu</p>
            </div>
            <div className="flex items-center ">
              <IoCall className="text-secondary h-8 w-5 mr-5 " />
              <p className="font-semibold ">+977 940031548</p>
            </div>
            <div className="flex items-center ">
              <IoMdMail className="text-secondary h-8  mr-5 w-6" />
              <p className="font-semibold ">nexusacc@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8 items-center justify-center mt-6">
            <FaInstagram className="h-5 w-5" />
            <FaFacebookF className="h-5 w-5" />
            <FaTwitter className="h-5 w-5" />
            <IoLogoWhatsapp className="h-5 w-5" />
            <FaLinkedin className="h-5 w-5" />
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 lg:ml-10">
          <img
            src="/contact.png"
            alt="Support Person"
            className=" w-full lg:w-[404px] lg:h-[381px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

