import React from "react";
import { Toaster } from "react-hot-toast";

import ActiveLinkContextProvider from "@/context/active-link-context";
import Header from "@/components/Header";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ViewportProvider } from "@/hooks/userViewPort";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className=" fixed top-[-6rem]  -z-10  h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
      <div />
      <ViewportProvider>
        <ActiveLinkContextProvider>
          <Header />
          <TracingBeam>
            <Toaster position="top-right" />
            <div className="w-full  mx-auto pt-24">{children}</div>
          </TracingBeam>
        </ActiveLinkContextProvider>
      </ViewportProvider>
    </div>
  );
};

export default RootLayout;
