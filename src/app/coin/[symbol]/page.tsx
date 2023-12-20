"use client";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Symbol = () => {
  const {symbol} = useParams();
  console.log(symbol)
  const [Coindata, setCoinData] = useState();
  useEffect(()=>{fetch(
    `https://api.coingecko.com/api/v3/coins/${symbol}?localization=true`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setCoinData(data)
      console.log(Coindata)
      
    })
    .catch((err) => {
      console.log("Error occurred:", err);
    })},[])

  return (
  <>
  <TradeInNavbar/>
  <div className="min-h-screen flex flex-col">
    <div className="flex-1">
      <span></span>
    </div>
    
    </div>
  <Footer/>
  </>);
};
export default Symbol;
