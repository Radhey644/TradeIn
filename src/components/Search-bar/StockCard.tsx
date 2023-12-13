import { Button } from "@nextui-org/button";
import React from "react";

const StockCard = ({ stock }: object) => {
  return (
    <Button className="hover:bg-primary-400" size="lg">
      <div className="flex gap-2 items-center flex-1">
        <span className="inline-block">
          <img
            src={stock.large}
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </span>
        <span className="text-2xl">{stock.name}</span>
      </div>
    </Button>
  );
};

export default StockCard;
