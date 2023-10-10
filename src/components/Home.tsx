import React from "react";
import SideDashboard from "./SideDashboard";
import Navbar from "./Navbar";
import StockBar from "./StockBar";
import Graph from "./Stock Graph & Price/Graph";
import Price from "./Stock Graph & Price/Price";

const Home = () => {
  return (
    // this is the main container having both sides
    <div className="flex flex-row bg-black min-h-screen">
      {/* this is the left part of homepage */}
      <div className="flex-none w-1/6 shadow-lg bg-slate-900 border-r-2 border-slate-800 ">
        <SideDashboard />
      </div>

      {/* this is the right part of homepage */}
      <div className="flex-col flex-1">
        <Navbar />
        <StockBar />

        {/* this part is for graph and the prices */}
        <div className="flex text-white gap-2 xs:flex-col">
          {/* as the graph and the prices are in same line  */}
          <Graph />
          <Price />
        </div>
      </div>
    </div>
  );
};

export default Home;
