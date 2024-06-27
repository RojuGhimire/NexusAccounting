import React from "react";
import { Toaster } from "react-hot-toast";

import ActiveLinkContextProvider from "@/context/active-link-context";
import { ViewportProvider } from "@/hooks/userViewPort";
import TransitionProvider from "@/components/TransitionProvider";
import Header from "@/components/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ViewportProvider>
        <ActiveLinkContextProvider>
          <Header />
          <Toaster position="top-right" />
          <TransitionProvider>
            <div className="w-full mx-auto pt-24">{children}</div>
          </TransitionProvider>
        </ActiveLinkContextProvider>
      </ViewportProvider>
    </>
  );
};

export default RootLayout;
