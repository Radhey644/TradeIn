"use client";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <>
      <TradeInNavbar />
      <div className="min-h-screen mt-[5%]">
      <div className="flex justify-center p-7 min-h-[600px] flex-1">
        <div className="flex-col p-4 bg-slate-600 rounded-l-lg w-1/3 space-y-6">
          <h1 className="text-2xl font-semibold"> Write us</h1>
          <Input type="name" variant="underlined" label="Name" />
          <Input type="email" variant="underlined" label="Email" />
          <Input type="subject" variant="underlined" label="Subject" />
          <Input type="message" variant="underlined" label="Message" />
          <Button variant="shadow" className="float-left bg-primary-200">Submit</Button>
        </div>
        <div className="flex-col p-4 bg-slate-900 rounded-r-lg w-1/3">
          <h1 className="text-2xl font-semibold"> Contact information</h1>
          <h1 className="text-sm opacity-50">
            We're open for any suggestion or just to have chat
          </h1>
          <div className="mt-12 cursor-pointer flex items-center">
            <span className="p-3 rounded-full bg-slate-500 w-max inline-block bg-opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </span>
            <span className="inline-block ml-3 mt-0">
              <h1 className="font-semibold opacity-80">Address:</h1>
              <h1 className="opacity-50">
                Indian Institute of Information Techonology Lucknow
              </h1>
            </span>
          </div>
          <div className="mt-3 cursor-pointer flex items-center">
            <span className="p-3 rounded-full bg-slate-500 w-max inline-block bg-opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </span>
            <span className="inline-block ml-3 mt-0">
              <h1 className="font-semibold opacity-80">Phone:</h1>
              <h1 className="opacity-50">01234567890</h1>
            </span>
          </div>
          <div className="mt-3 cursor-pointer flex items-center">
            <span className="p-3 rounded-full bg-slate-500 w-max inline-block bg-opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 496 512"
              >
                <path
                  fill="#ffffff"
                  d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                />
              </svg>
            </span>
            <span className="inline-block ml-3 mt-0">
              <h1 className="font-semibold opacity-80">Email:</h1>
              <h1 className="opacity-50">lcb2022@iiitl.ac.in</h1>
            </span>
          </div>
          <div className="mt-3 cursor-pointer flex items-center">
            <span className="p-3 rounded-full bg-slate-500 w-max inline-block bg-opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                />
              </svg>
            </span>
            <span className="inline-block ml-3 mt-0">
              <h1 className="font-semibold opacity-80">Website:</h1>
              <h1 className="opacity-50">tradein.in</h1>
            </span>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
