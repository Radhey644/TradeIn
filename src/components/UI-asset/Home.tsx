import React from "react";
import SideDashboard from "../SideDashboard/SideDashboard";
import StockBar from "./StockBar";
import Graph from "../Stock Graph & Price/Graph";
import Price from "../Stock Graph & Price/Price";

const Home = () => {
  const data = [
    { Date: "10/16/2023", Price: 0.013135531834577802 },
    { Date: "10/17/2023", Price: 0.013135531834577802 },
    { Date: "10/18/2023", Price: 0.011913582049249584 },
    { Date: "10/19/2023", Price: 0.009739495713289043 },
    { Date: "10/20/2023", Price: 0.009706701116487802 },
    { Date: "10/21/2023", Price: 0.00568820932405429 },
    { Date: "10/22/2023", Price: 0.004975849255372646 },
    { Date: "10/23/2023", Price: 0.005175243187754998 },
    { Date: "10/24/2023", Price: 0.005097735311922618 },
    { Date: "10/25/2023", Price: 0.005201108519294425 },
    { Date: "10/26/2023", Price: 0.005309335560474713 },
    { Date: "10/27/2023", Price: 0.005182592895588143 },
    { Date: "10/28/2023", Price: 0.004865836907470763 },
    { Date: "10/29/2023", Price: 0.0048459540056011614 },
    { Date: "10/30/2023", Price: 0.00493515891937446 },
    { Date: "10/31/2023", Price: 0.00501763021661517 },
  ];
  return (
    // this is the main container having both sides
    <div className="flex flex-row bg-black min-h-screen">
      {/* this is the left part of homepage */}
      <div className="shadow-lg border-r-2 border-slate-800 hidden sm:block shrink">
        <SideDashboard />
      </div>

      {/* this is the right part of homepage */}
      <div className="flex-col flex-1">
        
        <StockBar />
        {/* this part is for graph and the prices */}
        <div className="flex gap-2 xs:flex-col flex-wrap">
          {/* as the graph and the prices are in same line  */}
          <Graph data={data} />
          <Graph />
          <Graph />
          <Graph />
          <Graph />
          <Price />
        </div>
      </div>
    </div>
  );
};

export default Home;
