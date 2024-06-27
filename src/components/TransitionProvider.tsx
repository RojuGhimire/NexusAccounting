"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = useLocation().hash;

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-[90]"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-[100] w-fit h-fit capitalize"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-[80]"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
