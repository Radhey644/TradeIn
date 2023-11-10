"use client";
import  Link  from "next/link";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";

const SideDashboard = () => (
  <div className=" bg-inherit min-w-[250px] shrink z-10 ">
    <div className="text-white h-full mr-24 gap-4">
      <div className=" flex m-2 p-2 gap-4 mb-5 z-10 top-0">
        <Avatar
          src="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
          size="md"
          isBordered
        />
        <h1 className="font-semibold self-center">Atul Chaudhary</h1>
      </div>
    </div>
    <span className="text-white opacity-70 text-xs lg:ml-4 ">INDEX LIST </span>
    <span className="text-white float-right mr-4">+</span>
    <div className="p-2 bg-gray-900 rounded-md my-2 mx-2 flex justify-between">
        <div className="shadow-md">
          <h1 className="font-bold">IHSG </h1>
          <span className="text-sm">6,655.17</span>
        </div>
        <div className="shadow-md ">
          <h1 className="font-bold text-cyan-600">+107,18</h1>
          <span className="text-sm font-semibold text-cyan-700">(+5,67%)</span>
        </div>
    </div>
    <div className="p-2 bg-gray-900 rounded-md my-2 mx-2 flex justify-between">
        <div>
          <h1 className="font-bold">S&P 500</h1>
          <span className="text-sm">4,410.33</span>
        </div>
        <div>
          <h1 className="font-bold text-red-700">-222,11</h1>
          <span className="text-sm font-semibold text-red-900">(-4,79%)</span>
        </div>
    </div>
    <div className="text-md">
    <span className="text-white opacity-70 text-sm lg:ml-4 ">GENERAL </span>
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
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        <Link href={"/test"}> Home</Link>
      </p>
    </div>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-solid fa-file-zipper"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Portfolio
      </p>
    </div>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-solid fa-money-bill-trend-up"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Stocks & Funds
      </p>
          <span className="text-white cursor-pointer fa-solid fa-chevron-down"></span>
    </div>

    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-solid fa-arrow-down-up-across-line"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Transaction
      </p>
      <span className="text-white cursor-pointer fa-solid fa-chevron-down "></span>
    </div>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-regular fa-newspaper"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        News
      </p>
    </div>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-solid fa-people-arrows"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        Community
      </p>
    </div>
    <span
      className="text-white opacity-70 text-xs lg:ml-4 mt-10"
      style={{ marginBottom: "3rem" }}
    >
      {" "}
      ABOUT{" "}
    </span>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-solid fa-handshake-angle"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}
      >
        <Link href={"/test"}> Help & Services</Link>
      </p>
    </div>
    <div className="order-3 flex m-2 p-2 gap-2 items-center">
      <span
        className="fa-solid fa-question"
        style={{
          fontSize: "15px",
          color: "#ffffff",
          opacity: 0.7,
          marginRight: "5px",
        }}
      ></span>
      <p
        className="font cursor-pointer"
        style={{ opacity: 0.7 }}>
        <Link href={"/test"}> FAQ</Link>
      </p>
    </div>
    </div>
  </div>
);

export default SideDashboard;
