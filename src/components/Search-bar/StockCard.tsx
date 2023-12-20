import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const StockCard = ({ stock }: object) => {
  return (
    <Button className="hover:bg-primary-400 bg-gray-700 bg-opacity-40" size="lg">
      <Link href={`/coin/${stock.id}`}>
      <div className="flex gap-2 items-center flex-1">
        <span className="inline-block">
          <img
            src={stock.large}
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </span>
        <span className="text-xl">{stock.name} ({stock.symbol})</span>
        <span className="ml-3 opacity-60">Market rank : {stock.market_cap_rank}</span>
      </div>
      </Link>
    </Button>
  );
};

export default StockCard;
