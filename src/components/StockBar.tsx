"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";

const StockBar = () => {
  const [watchlist, setWatchlist] = useState(false);
  return (
    <div className="flex-row  p-3 text-white gap-4 flex-1">
      <div className="float-left">
        <div className="flex relative">
          <h1 className="font-semibold">BBCA</h1>
        </div>
        <span className="text-white opacity-70 text-xs">
          IDX{" "}
          <span className="">
            <img
              src="/flag.jpeg"
              alt=""
              className="w-4 h-4 rounded-full inline-block"
            />
          </span>{" "}
          Bank Central Asia Tbk
        </span>
      </div>
      {/* this will be a group of buttons to sell and buy stocks */}
      <div className="flex gap-2 flex-1 p-2 items-center space-x-2 justify-end">
        
        <Button className="bg-green-300 px-4 rounded-md text-black font-bold text-sm">
          Buy
        </Button>
        <Button className="bg-red-400 px-4 rounded-md text-black font-bold text-sm">
          Sell
        </Button>
        <Button
          disableRipple
          className={`${
            watchlist ? "bg-white text-black border-black" : "bg-transparent"
          } divide-solid border px-2 py-1 rounded-md text-xs active:scale-95`}
          onClick={() => {
            setWatchlist(!watchlist);
          }}
        >
          {watchlist ? "Added to Watchlist" : "Add to Watchlist"}
        </Button>
      </div>
    </div>
  );
};

export default StockBar;
