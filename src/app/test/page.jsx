"use client";
import Home from "@/components/Home";
import { Input, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [query,setQuery]= useState("AAPLvb nvmb vncm")
  useEffect(() => {
    fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=${query}&api_token=vSyIAV736hFJzHR2iy0atyKST4qHmWrE1UTQvwie`
    )
      .then((res) => {
       return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch((err) => {
        console.log("error occured");
      });
  }, []);
  // if (!data)
  //   return (
  //     <Spinner
  //       thickness="4px"
  //       speed="0.65s"
  //       emptyColor="gray.200"
  //       color="blue.500"
  //       size="xl"
  //     />
  //   );
  return (
    <>
      <Input placeholder="large size" size="lg" onChange={(e)=>{
        setQuery(e.target.value)
      }}/>
      {data.map((item) => {
        return <li>{item.name}</li>;
      })}
    </>
  );
};

export default Test;
