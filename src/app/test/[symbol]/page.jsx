"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Symbol = () => {
  const name = useParams();
  const [data, setData] = useState([]);
  useEffect(()=>{fetch(
    `https://twelve-data1.p.rapidapi.com/symbol_search?symbol=${name.symbol}`,
    {
      params: {
        outputsize: "4",
      },
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cc975687aemshc0763b961baa52ep1836fcjsn7d06c55309e4",
      },
    }
  )
    .then((res) => res.json())
    .then((responseData) => {
      console.log(responseData)
      setData(...responseData.data)
      console.log(data[0])
    })
    .catch((err) => {
      console.log("Error occurred:", err);
    })},[])
    const firstCountry = data.country;

  return <div className="text-3xl">{firstCountry}</div>;
};
export default Symbol;
