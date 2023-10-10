"use client"
import Home from "@/components/Home";
import { debounce } from "@/helpers/debounce";
import { Input, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Test = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // Create a debounced version of the function that makes API requests
  const debouncedFetchData = debounce((searchQuery) => {
    fetch(`https://twelve-data1.p.rapidapi.com/symbol_search?symbol=${searchQuery}`, {
      params: {
        outputsize: "4",
      },
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cc975687aemshc0763b961baa52ep1836fcjsn7d06c55309e4",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  }, 2000); // Adjust the debounce delay (1 second in this case)

  // Effect to watch for changes in the 'query' state
  useEffect(() => {
    if(query.length>2)
    {
       debouncedFetchData(query);
    }
   
  }, [query]);

  if(!data)
  {
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
  }

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
          return <li className="cursor-pointer list-none" >
            <Link href={`/test/${item.symbol}`}>{item.instrument_name}</Link></li>;
        })}
    </>
  );
};

export default Test;
