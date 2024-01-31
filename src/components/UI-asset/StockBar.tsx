"use client";
import { Stock, buyStock } from "@/redux/features/user/portfolioSlice";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const StockBar = () => {
  const selectPortfolio = (state: any) => state.portfolio;
  const user = useSelector(selectPortfolio);
  console.log(user);
  const [watchlist, setWatchlist] = useState(false);
  const dispatch = useDispatch();
  const stock: Stock = {
    symbol: "CISCO", 
    company: "Cisco Inc.",
    quantity: 10,
    price: 200,
  };
  const handleBuyStock = () => {
    dispatch(buyStock(stock));
    console.log(user);
  };
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
        <Button
          className="bg-green-300 px-4 rounded-md text-black font-bold text-sm"
          onClick={handleBuyStock}
        >
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
