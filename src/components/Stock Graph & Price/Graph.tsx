"use client";
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
  AreaChart,
  Area,
} from "recharts";
const Graph = ({ data }: Array<Object>) => {
  return (
    <>
      {/* <LineChart
        width={500}
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
      </LineChart> */}
        <AreaChart
          width={800}
          height={450}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#33adff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#33adff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Price"
            stroke="#33adff"
            strokeWidth={2}
            fill="url(#colorUv)"
            fillOpacity={0.3}
          />
        </AreaChart>
    </>
  );
};

export default Graph;
