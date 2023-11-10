"use client"
import Home from "@/components/Home";
import { debounce } from "@/helpers/debounce";
import { Flex, Input, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Coin from "./coin";


const Test = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // Create a debounced version of the function that makes API requests
  const debouncedFetchData = debounce((searchQuery) => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${searchQuery}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData)
        setData(responseData.coins);
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
    <div className="p-2 bg-black min-h-screen">
      <Input
      className="border-gray-600"
        placeholder="Search a Trade"
        size="lg"
        bg={"gray.900"}
        color={"white"}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Flex flexDir={"column"} gap={4} px={8} py={8} wrap={"wrap"}>
         {data &&
        data.map((item) => {
          return <Link href={`/test/${item.id}`}><Coin Coin={item}/></Link>
          
        })}
      </Flex>
     
    </div>
  );
};

export default Test;
