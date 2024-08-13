import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  return (
    <div className="justify-center px-20 items-center h-auto bg-[#FDF7F7]">
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-zinc-900">Send Your Message</h2>
        <div className="border-b-2 border-zinc-600 w-16 mx-auto my-4"></div>
        <div className="border-b-2 border-zinc-600 w-16 mx-auto my-4"></div>
        <p className="text-zinc-600  mt-2">
          Don’t hestiate to ask us something, Our customer support team <br />{" "}
          always ready to help you, they will support you 24/7
        </p>
      </div>
      <div className="flex  w-[448.15px] h-[505px] gap-[10px] flex-col lg:flex-row rounded-md ">
          
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-primary font-poppins leading-[25px]  justify-center "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-[445px] px-4   py-2 mt-2 border rounded  focus:ring-primary"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-primary font-poppins leading-[25px] justify-center "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-[445px] px-4  py-2 mt-2 border rounded  focus:ring-primary"
                  placeholder="abcdel12@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-primary font-poppins leading-[25px] justify-center "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-[445px] px-4 py-2 mt-2 border rounded  focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-primary font-poppins leading-[25px] justify-center "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-[445px] h-[105px] px-4 py-2 mt-2 border rounded focus:ring-primary"
                  placeholder="Your Message...."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-900 transition duration-200"
              >
                Submit Now
              </button>
            </form>
          

          {/* Right Information Section */}
           <div className=" flex w-[269.16px] bg-primary h-[221.72px]  top-[475.84px] right-[789px] p-[20.63px_0_0_0] gap-[25.78px] rounded-tl-[10.31px] rounded-br-none rounded-bl-none rounded-tr-none">
            <img
              src="/con.png" // Replace with the actual image source
              alt="Customer Support"
              className="w-[386.72px] h-[579.56px] top-[118px] left-[864.28px]"
            /> 
           <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white w-6 h-6" />
                </div>
                <p className='text-white'>Pepsicola, Kathmandu, Nepal</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-2 rounded-full">
                  <FaPhoneAlt className="text-white w-6 h-6" />
                </div>
                <p>+977 984-3715414</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-2 rounded-full">
                  <FaEnvelope className="text-white w-6 h-6" />
                </div>
                <p>nexus@gmail.com</p>
              </div>
            </div> 
        </div>{" "}
    
         </div> 
      </div>
    
  );
};

export default ContactForm;
