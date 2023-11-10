import React from "react";
import SideDashboard from "./SideDashboard";
import StockBar from "./StockBar";
import Graph from "./Stock Graph & Price/Graph";
import Price from "./Stock Graph & Price/Price";
import TradeInNavbar from "./Navbar";

const Home = () => {
  return (
    // this is the main container having both sides
    <div className="flex flex-row bg-black min-h-screen">
      {/* this is the left part of homepage */}
      <div className="shadow-lg border-r-2 border-slate-800 hidden sm:block shrink">
        <SideDashboard />
      </div>

      {/* this is the right part of homepage */}
      <div className="flex-col flex-1">
        <TradeInNavbar />
        <StockBar />
        {/* this part is for graph and the prices */}
        <div className="flex gap-2 xs:flex-col flex-wrap">
          {/* as the graph and the prices are in same line  */}
          <Graph />
          <Price />
        </div>
      </div>
    </div>
  );
};

export default Home;
