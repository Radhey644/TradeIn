"use client";
import { Heading, Spacer, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const StockBar = () => {
  const [watchlist, setWatchlist] = useState(false);
  return (
    <div className="flex-row p-3 text-white gap-4 flex-1">
      <VStack className="float-left">
        <Heading color={"white"} fontSize={"xl"} className="-left-12 relative">
          BBCA
        </Heading>
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
      </VStack>

      {/* this will be a group of buttons to sell and buy stocks */}
      <div className="flex-row gap-2 flex-1 items-center">
        <button
          className={`${watchlist?"bg-white text-black border-black":"bg-transparent"} divide-solid border px-1 py-1 rounded-md text-xs active:scale-95`}
          onClick={() => {
            setWatchlist(!watchlist);
          }}
        >
          {watchlist?"Added to Watchlist":"Add to Watchlist"}
        </button>
        <button className="bg-red-400 px-5 py-1 rounded-md text-black font-bold text-sm">
          Sell
        </button>
        <button className="bg-green-300 px-5 py-1 rounded-md text-black font-bold text-sm">
          Buy
        </button>
      </div>
    </div>
  );
};

export default StockBar;
