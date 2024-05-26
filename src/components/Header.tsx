import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { NAVLINKS } from "@/constants";
import { useActiveLinkContext } from "@/context/active-link-context";

export default function Header() {
  const { activeLink, setActiveLink, setTimeOfLastClick } =
    useActiveLinkContext();

  return (
    <header className="z-50 relative w-full">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] sm:rounded-full"
        initial={{ y: -120, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>   

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex_wrap_center w-[22rem] flex-wrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {NAVLINKS.map((link) => (
            <motion.li
              className="h-3/4 flex_center relative"
              key={link.path}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >          
              <a
                href={link.path}
                className={cn(
                  "flex_center cursor-pointer w-full text-nowrap px-3 py-3 hover:text-gray-950 transition duration-500",
                  {
                    "text-gray-950": activeLink === link.name,
                  }
                )}
                onClick={() => {
                  setActiveLink(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeLink && (
                  <motion.span
                    className="bg-gray-300 bg-opacity-40 rounded-full + absolute inset-0 -z-10"
                    layoutId="activeLink"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
