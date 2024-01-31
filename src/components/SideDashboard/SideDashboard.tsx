"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stock } from "@/redux/features/user/portfolioSlice";
const SideDashboard = ({ User }: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.portfolio);

  console.log(User);
  console.log(user);
  useEffect(() => {
    // Scroll to the bottom when user.stocks changes
    const holdingElement = document.getElementById("holdings");

    if (holdingElement) {
      holdingElement.scrollTop = holdingElement.scrollHeight;
    }
  }, [user.stocks]);
  return (
    <div className=" bg-inherit min-w-[250px] shrink z-10 max-w-[300px] top-0 sticky">
      <div className="text-white h-full mr-20 gap-4">
        <div className=" flex m-2 px-2 gap-4 mb-5 z-10 top-0 w-full">
          <Avatar
            src={User?.avtar}
            size="md"
            isBordered
            className="rounded-full"
          />
          <h1 className="font-semibold self-center text-center opacity-70">
            {User?.fullname}
          </h1>
        </div>
      </div>
      <span className="text-white opacity-70 text-xs lg:ml-4 ">
        INDEX LIST{" "}
      </span>
      <span className="text-white float-right mr-4">+</span>
      <div className="p-2 bg-gray-900 rounded-md my-2 mx-2 flex justify-between">
        <div className="shadow-md">
          <h1 className="font-bold">IHSG </h1>
          <span className="text-sm opacity-50">6,655.17</span>
        </div>
        <div className="shadow-md ">
          <h1 className="font-bold text-sm text-cyan-600">+107,18</h1>
          <span className="text-sm font-semibold text-cyan-700">(+5,67%)</span>
        </div>
      </div>
      <div className="p-2 bg-gray-900 rounded-md my-2 mx-2 flex justify-between">
        <div>
          <h1 className="font-bold">S&P 500</h1>
          <span className="text-sm opacity-50">4,410.33</span>
        </div>
        <div>
          <h1 className="font-bold text-red-700 text-sm">-222,11</h1>
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
          <p className="font cursor-pointer" style={{ opacity: 0.7 }}>
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
          <p className="font cursor-pointer" style={{ opacity: 0.7 }}>
            Portfolio
          </p>
        </div>

        <div className="order-3 flex m-2  gap-2 items-center">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Stocks & Funds"
              title={
                <>
                  <span
                    className="fa-solid fa-money-bill-trend-up"
                    style={{
                      fontSize: "15px",
                      color: "#ffffff",
                      opacity: 0.7,
                      marginRight: "5px",
                    }}
                  ></span>
                  <span
                    className="font cursor-pointer"
                    style={{ opacity: 0.7 }}
                  >
                    Stocks & Funds
                  </span>
                </>
              }
            >
              <Listbox
                id="holdings"
                aria-label="Actions"
                onAction={(key) => alert(key)}
                className="max-h-[150px] scrollbar-hide overflow-y-scroll"
              >
                {user.stocks.map((item: Stock, i: number) => {
                  return (
                    <ListboxItem key={i}>
                      {item.symbol} {item.quantity}
                    </ListboxItem>
                  );
                })}

                {/* <ListboxItem key="new">New file</ListboxItem>
              
              <ListboxItem key="edit">Edit file</ListboxItem>
              <ListboxItem key="delete" className="text-danger" color="danger">
                Delete file
              </ListboxItem> */}
              </Listbox>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Stocks & Funds"
              title={
                <>
                  <span
                    className="fa-solid fa-arrow-down-up-across-line"
                    style={{
                      fontSize: "15px",
                      color: "#ffffff",
                      opacity: 0.7,
                      marginRight: "5px",
                    }}
                  ></span>
                  <span
                    className="font cursor-pointer"
                    style={{ opacity: 0.7 }}
                  >
                    Transaction
                  </span>
                </>
              }
            >
              <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
                <ListboxItem key="new">New file</ListboxItem>
                <ListboxItem key="copy">Copy link</ListboxItem>
                <ListboxItem key="edit">Edit file</ListboxItem>
                <ListboxItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </ListboxItem>
              </Listbox>
            </AccordionItem>
          </Accordion>
          {/* <p
          className="font cursor-pointer"
          style={{ opacity: 0.7 }}
        >
          Stocks & Funds
        </p>
            <span className="text-white cursor-pointer fa-solid fa-chevron-down"></span> */}
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
          <p className="font cursor-pointer" style={{ opacity: 0.7 }}>
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
          <p className="font cursor-pointer" style={{ opacity: 0.7 }}>
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
          <p className="font cursor-pointer" style={{ opacity: 0.7 }}>
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
          <p className="font cursor-pointer" style={{ opacity: 0.7 }}>
            <Link href={"/test"}> FAQ</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideDashboard;
