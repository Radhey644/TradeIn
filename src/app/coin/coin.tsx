import { redirect } from "next/navigation";
import React from "react";

const Coin = ({ Coin }:any) => {
  return (
   <img src={Coin.large} alt="" />
  );
};

export default Coin;
