import Card from "@/components/Contributor-Card/Card";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import { url } from "inspector";
import React from "react";

const page = () => {
  return (
    <>
    <TradeInNavbar/>
    <div style={{backgroundImage:'url("./aboutimg.jpg")'}} className="bg-cover bg-center min-h-screen bg-opacity-60" >
    <div className="text-2xl p-3 min-w-full">
        
        About tradeIn tradeIn is an educational stock market simulator designed to
        provide a risk-free environment for aspiring investors to learn trading
        strategies and understand market dynamics. Developed in 2023 by Atul
        Chaudhary, tradeIn aims to make early financial education accessible and
        engaging for all. With our intuitive simulations powered by real market
        data, users can experiment with buying and selling virtual stocks, ETFs,
        options, and more using imaginary capital we provide. By supporting common
        order types and tracking detailed portfolios including gains/losses, our
        platform replicates much of the experience of actual stock trading. We
        believe that financial literacy and investment practice should be
        available without risk so that potential future investors can prepare.
        That's why our simulator has no ads, catches, fees or need to deposit
        funds. Users have full access to the educational features with easy
        signup. While past performance does not guarantee future results, our goal
        at tradeIn is to prepare budding investors to make more informed financial
        decisions. With knowledge gained from interpreting market patterns through
        our stock simulator, users can develop skills to eventually transition to
        responsible real-world investing. We hope our simulator assists those
        pursuing financial education and serves as a gateway to responsible
        participation in financial markets. Please explore tradeIn to learn more!
      </div> 
      <div className="flex ">
      <Card/>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default page;
