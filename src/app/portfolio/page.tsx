import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <TradeInNavbar />
      <div className="flex min-h-screen justify-center items-center">
        <div>This is portfolio page </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
