import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "E Learning",
  description: "",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
