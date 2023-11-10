"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Divider,
  Heading,
  VStack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Avatar } from "@nextui-org/react";
import React from "react";

const SideDashboard = () => (
  <div className=" bg-inherit min-w-[250px] shrink z-10 ">
    <div className="text-white h-full mr-24 gap-4">
      <div className=" flex m-2 p-2 gap-4 mb-5 z-10 top-0">
        <Avatar
          src="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
          size="md"
        />
        <h1 className="font-semibold self-center">Hello Atul</h1>
      </div>
    </div>
    <span className="text-white opacity-70 text-xs lg:ml-4 ">INDEX LIST </span>
    <span className="text-white float-right mr-4">+</span>
    <div className="p-2 bg-gray-900 rounded-md my-2 mx-2">
        <div className="shadow-md ">
          <h1>IHSG</h1>
          <span>6,655.17</span>
        </div>
    </div>
    <div className="p-2 bg-gray-900 rounded-md my-2 mx-2">
        <div>
          <h1>S&P 500</h1>
          <h1>4,410.33</h1>
        </div>
    </div>
    <span className="text-white opacity-70 text-xs lg:ml-4 ">GENERAL </span>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
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
    </div>
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
      <Spacer />
      <span className="text-white cursor-pointer fa-solid fa-chevron-down "></span>
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
      </Text>
      <Spacer />
      <span className="text-white cursor-pointer fa-solid fa-chevron-down "></span>
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
    <span
      className="text-white opacity-70 text-xs lg:ml-4 mt-10"
      style={{ marginBottom: "3rem" }}
    >
      {" "}
      ABOUT{" "}
    </span>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-handshake-angle"
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
        <Link href={"/test"}> Help & Services</Link>
      </Text>
    </Flex>
    <Flex alignItems="center" className="order-3 flex m-2 p-2 gap-2">
      <span
        className="fa-solid fa-question"
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
        <Link href={"/test"}> FAQ</Link>
      </Text>
    </Flex>
  </div>
);

export default SideDashboard;
