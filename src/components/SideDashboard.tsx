"use client"
import { Link } from "@chakra-ui/next-js";
import { Box, Divider, Heading, VStack, Text, Flex } from "@chakra-ui/react";
import React from "react";

const SideDashboard = () => (
  <div className="overflow-x-hidden bg-slate-900 ">
    <VStack className="text-white h-full mr-14" gap={2} pt={4}>
      <div className="order-3 flex m-2 p-2 gap-4">
        <img
          className="rounded-full w-7"
          src="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
          alt=""
        />
        <Heading fontSize={"2xl"} className="font">
          TradeIn
        </Heading>
      </div>
    </VStack>
    <span className="text-white opacity-70 text-xs lg:ml-4 ">INDEX LIST </span>
    <span className="text-white float-right mr-4">+</span>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        w="230px"
        h="50px"
        bg="rgba(33, 40, 60, 1)"
        padding={2}
        borderRadius={7}
        display="flex"
        alignItems="center"
        mt="1.8rem"
      >
        <div>
          <Text fontSize="12px" fontWeight="bold" textColor={"white"}>
            IHSG
          </Text>
          <Text fontSize="10px" opacity="0.7" textColor={"white"}>
            6,655.17
          </Text>
        </div>
      </Box>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        w="230px"
        h="50px"
        bg="rgba(33, 40, 60, 1)"
        borderRadius={7}
        padding={2}
        display="flex"
        alignItems="center"
        mt="1.1rem"
        mb="1.8rem"
      >
        <div>
          <Text fontSize="12px" fontWeight="bold" textColor={"white"}>
            S&P 500
          </Text>
          <Text fontSize="10px" opacity="0.7" textColor={"white"}>
            4,410.33
          </Text>
        </div>
      </Box>
    </div>
    <span className="text-white opacity-70 text-xs lg:ml-4 ">GENERAL </span>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-house"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <Text
        textColor="white"
        fontSize="15px"
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        <Link href={"/test"}> Home</Link>
        
      </Text>
    </Flex>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-file-zipper"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <Text
        textColor="white"
        fontSize="15px"
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Portfolio
      </Text>
    </Flex>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-money-bill-trend-up"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <Text
        textColor="white"
        fontSize="15px"
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Stocks & Funds
      </Text>
      <span className="text-white float-right ml-12 cursor-pointer">↓</span>
    </Flex>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-arrow-down-up-across-line"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <Text
        textColor="white"
        fontSize="15px"
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Transaction
        <span className="text-white float-right cursor-pointer">↓</span>
      </Text>
    </Flex>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-regular fa-newspaper"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <Text
        textColor="white"
        fontSize="15px"
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        News
      </Text>
    </Flex>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-people-arrows"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <Text
        textColor="white"
        fontSize="15px"
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Community
      </Text>
    </Flex>
  </div>
);

export default SideDashboard;
