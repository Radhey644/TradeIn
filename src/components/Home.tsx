import React from "react";
import SideDashboard from "./SideDashboard";
import Navbar from "./Navbar";
import StockBar from "./StockBar";

const Home = () => {
  return (
    // this is the main container having both sides
    <div className="flex flex-row bg-black">
      {/* this is the left part of homepage */}
      <div className="flex-none w-1/6">
        <SideDashboard />
      </div>
      {/* this is the right part of homepage */}
      <div className="flex-col flex-1">
        
          <Navbar />
          <StockBar/>
        
      </div>
    </div>
  );
};

export default Home;
