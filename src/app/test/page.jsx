"use client";
import Home from "@/components/Home";
import { Input, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("https://twelve-data1.p.rapidapi.com/symbol_search", {
      params: {
        symbol: query,
        outputsize: "4",
      },
      method: "GET",
      // You should specify the HTTP method
      headers: {
        "X-RapidAPI-Key": "cc975687aemshc0763b961baa52ep1836fcjsn7d06c55309e4",
      },
    })
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
      <Input
        placeholder="large size"
        size="lg"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {data &&
        data.map((item) => {
          return <li>{item.instrument_name}</li>;
        })}
    </>
  );
};

export default Test;
