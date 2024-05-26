import React from "react";
import { Toaster } from "react-hot-toast";

import ActiveLinkContextProvider from "@/context/active-link-context";
import Header from "@/components/Header";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ViewportProvider } from "@/hooks/userViewPort";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 2xl:28 overflow-hidden">
      <div className="bg-primary-secondary fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
      <div className="bg-primary fixed top-[-15rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
      <ViewportProvider>
        <ActiveLinkContextProvider>
          <Header />
          <TracingBeam>
            <Toaster position="top-right" />
            <div className="w-full max-w-[90%] mx-auto pt-24">{children}</div>
          </TracingBeam>
        </ActiveLinkContextProvider>
      </ViewportProvider>
    </div>
  );
};

export default RootLayout;
