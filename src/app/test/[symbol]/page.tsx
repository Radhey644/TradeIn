"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Symbol = () => {
  const {symbol} = useParams();
  console.log(symbol)
  const [data, setData] = useState();
  useEffect(()=>{fetch(
    `https://api.coingecko.com/api/v3/coins/${symbol}?localization=true`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((responseData) => {
      console.log(responseData)
      setData(responseData.description.en)
    })
    .catch((err) => {
      console.log("Error occurred:", err);
    })},[])

  return <div>{data}</div>;
};
export default Symbol;
