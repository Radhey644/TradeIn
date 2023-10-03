"use client";
import { VStack } from "@chakra-ui/react";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "18Aug22",
    uv: 4000,

    amt: 2400,
  },
  {
    name: "18Aug22",
    uv: 3000,

    amt: 2210,
  },
  {
    name: "18Aug22",
    uv: 2000,

    amt: 2290,
  },
  {
    name: "18Aug22",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "18Aug22",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "18Aug22",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "18Aug22",
    uv: 3490,
    amt: 2100,
  },
];

const Graph = () => {
  return (
    <VStack className="flex-1 w-4/5 m-2">
      <LineChart
        width={700}
        height={350}
        data={data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </VStack>
  );
};

export default Graph;
