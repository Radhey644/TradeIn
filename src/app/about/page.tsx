"use client";
import Card from "@/components/Contributor-Card/Card";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import { Fade } from "react-awesome-reveal";
import React from "react";
const page = () => {
  return (
    <>
      <TradeInNavbar />

      {/* First div with background */}
      <div className="min-h-screen">
        <div
          style={{ backgroundImage: 'url("/background1.jpg")' }}
          className="bg-cover bg-center min-h bg-opacity-60 flex justify-center my-5"
        >
          {/* Content of the first div */}
          <h1 className="font-mono font-medium text-2xl text-left w-1/2">
            "Welcome to our TradeIn a{" "}
            <span className="text-blue-600">Paper Stock Trading App</span> ,
            where financial exploration meets risk-free investing. Dive into the
            world of stock trading without real{" "}
            <span className="text-blue-600">financial commitments</span> .
            Practice and refine your investment strategies in a simulated
            environment, empowering you to make informed decisions in the{" "}
            <span className="text-blue-600">dynamic landscape</span> of the
            stock market."
          </h1>
        </div>

        {/* Second div with background */}
        <div
          style={{ backgroundImage: 'url("/about.avif")' }}
          className="bg-cover bg-center min-h bg-opacity-60"
        >
          <div className="flex justify-center my-3">
            <span className="font-sans text-3xl font-medium"> Our Team</span>
          </div>

          {/* Content of the second div */}
          <Fade direction="up">
            <ContributorCards />
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export type Contributor = {
  name: string;
  image: string;
  role: string;
  contribution: string;
};
const contributors: Contributor[] = [
  {
    name: "Atul Chaudhary",
    image: "/contributor.avif",
    role: "Frontend Developer",
    contribution:
      "Atul spearheads the development of our user interfaces, ensuring a seamless and engaging experience for our users. His expertise in frontend technologies brings life to our application, making it visually appealing and user-friendly.",
  },
  {
    name: "Pankaj Kumar",
    image: "/contributor.avif",
    role: "Backend Developer",
    contribution:
      "Pankaj is the architect behind the scenes, building and optimizing the server-side infrastructure. His focus on scalability and performance ensures that our application runs smoothly, handling data efficiently and securely.",
  },
  {
    name: "Radhey Verma",
    image: "/contributor.avif",
    role: "Content Manager",
    contribution:
      "Radhey plays a crucial role in curating and managing the content on our platform. From crafting engaging narratives to ensuring accurate and up-to-date information, Radhey's contributions enhance the value of our application for users seeking insightful content.",
  },
];

export const ContributorCards = () => (
  <div className="flex gap-6 mx-5 flex-wrap">
    {contributors.map((contributor, index) => (
      <div
        key={index}
        className="bg-default-50 p-4 rounded-md shadow-md flex-1"
      >
        {/* Image */}
        <div className="flex gap-2">
          <img
            src={contributor.image}
            alt={contributor.name}
            className="w-40 h-44 object- mb-4 rounded-md"
          />
          <h2 className="font-medium opacity-70">{contributor.contribution}</h2>
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold mb-2">{contributor.name}</h2>

        {/* Role */}
        <p className="text-gray-600">{contributor.role}</p>
      </div>
    ))}
  </div>
);
