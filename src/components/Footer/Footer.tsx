"use client";
import React from "react";
import { AcmeLogo } from "../Navbar/AcmeLogo";
import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen md:py-8 p-2 justify-center">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex items-center cursor-pointer mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <AcmeLogo />
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TradeIn
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline me-4 md:me-6"> 
                Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              TradeIn™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
  );
};

export default Footer;
