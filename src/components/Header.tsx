import { motion } from "framer-motion";
import { NAVLINKS } from "@/constants";
import { useActiveLinkContext } from "@/context/active-link-context";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, 
  FaWhatsapp, FaLinkedinIn, FaInstagram, FaSearch 
} from 'react-icons/fa';

export default function Header() {
  const { setActiveLink, setTimeOfLastClick } =
    useActiveLinkContext();

  return (
    <header className="z-50 fixed top-0 left-0 w-full">
    
      <div className="bg-teal-500 text-white flex justify-between items-center lg:px-32 px-10 py-2 text-sm flex-wrap">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>Pepsicola, Kathmandu, Nepal</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[30px] flex-grow">
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>01-4000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>9860000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>nexus@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer transition duration-300" />
        </div>
      </div>

      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center h-16 ">
          <img src="logo.png" alt="" className="h-[131px] w-[164px] gap-[10px]"/>
            <ul className="flex gap-[48px] justify-center items-center flex-grow">
              {NAVLINKS.map((link) => (
                <motion.li
                  className="text-zinc-700 font-bold cursor-pointer hover:text-teal-500"
                  key={link.path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <a
                    href={link.path}
                    onClick={() => {
                      setActiveLink(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center">
              <FaSearch className="text-white bg-teal-700 gap-[100px] h-8 w-8 p-2 rounded-full cursor-pointer hover:bg-gray-200 hover:text-teal-700 transition duration-300 shadow-md" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
