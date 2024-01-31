import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const StockCard = ({ stock, onClick }: any) => {
  return (
    <Link
      onClick={onClick}
      href={`/home/coin/${stock.id}`}
      className="hover:bg-primary-400 bg-gray-700 bg-opacity-40 p-2 rounded-lg"
    >
      <div className="flex gap-2 items-center flex-1">
        <span className="inline-block">
          <img src={stock.large} alt="" className="h-10 w-10 rounded-full" />
        </span>
        <span className="text-xl">
          {stock.name} ({stock.symbol})
        </span>
        <span className="ml-3 opacity-60">
          Market rank : {stock.market_cap_rank}
        </span>
      </div>
    </Link>
  );
};

export default StockCard;
