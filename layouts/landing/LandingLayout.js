import { Header } from "@/src/components/header";
import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-5">{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default LandingLayout;
