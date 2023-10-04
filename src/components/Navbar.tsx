"use client";
import { Divider, Spacer } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

import router from "next/router";

const Navbar = () => {
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      location.reload();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="overflow-x-hidden ">
      {/* <Divider
        className="inline-block"
          orientation="vertical" // Set the orientation to vertical
           // Adjust the margin as needed
          h="76px" // Adjust the height as needed
        /> */}
      <div className="flex flex-col sm:flex-row bg-slate-900 p-2 gap-4 text-white">
        {/* <div className="flex-shrink-0 font-bold text-xl text-center sm:text-left self-center">
          TradeIn
        </div> */}
        <div className="order-2 flex flex-col sm:flex-row p-1 h-1/2 justify-center items-center self-center border border-gray-400 rounded-md ml-1">
          <input
            type="text"
            className="search-input bg-transparent text-white p-1  outline-none w-full sm:w-64 md:w-96 text-xs" // Adjusted padding and font size
            placeholder="Search...."
          />
          {/* <button className="search-button bg-green-700 text-gray-700 border-0 rounded-md ml-2 cursor-pointer mt-2 sm:mt-0">
            Search
          </button> */}
        </div>

        <Spacer />
        {/* Spacer for small screens */}

        <div className="order-3 flex m-2 p-2 gap-4">
          <i
            className="fa-regular fa-message"
            style={{ color: "#ffffff", fontSize: "20px" }}
          ></i>
          <i
            className="fa-regular fa-bell"
            style={{ color: "#ffffff", fontSize: "20px" }}
          ></i>
          <img
            className="rounded-full w-7"
            src="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
            alt=""
          />
          {/* Logout button */}
          <button
            onClick={logout}
            style={{
              backgroundColor: "rgba(52, 211, 153, 0.4)",
              borderRadius: "5px",
            }}
            className="hover:bg-green-700 text-white font-bold px-1.5"
          >
            Logout
          </button>
          {/* <div className="flex flex-col relative -top-0.4 ">
            <span className="font-medium text-sm">Pankaj Kumar</span>
            <span className="font-light text-xs">lcb2022039@gmail.com</span>
          </div> */}
        </div>

        {/* Search bar */}
      </div>
    </div>
  );
};

export default Navbar;
