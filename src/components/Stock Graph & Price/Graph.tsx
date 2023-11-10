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
const data = [
  { Date: '10/16/2023', Price: 0.013135531834577802 },
  { Date: '10/17/2023', Price: 0.013135531834577802 },
  { Date: '10/18/2023', Price: 0.011913582049249584 },
  { Date: '10/19/2023', Price: 0.009739495713289043 },
  { Date: '10/20/2023', Price: 0.009706701116487802 },
  { Date: '10/21/2023', Price: 0.00568820932405429 },
  { Date: '10/22/2023', Price: 0.004975849255372646 },
  { Date: '10/23/2023', Price: 0.005175243187754998 },
  { Date: '10/24/2023', Price: 0.005097735311922618 },
  { Date: '10/25/2023', Price: 0.005201108519294425 },
  { Date: '10/26/2023', Price: 0.005309335560474713 },
  { Date: '10/27/2023', Price: 0.005182592895588143 },
  { Date: '10/28/2023', Price: 0.004865836907470763 },
  { Date: '10/29/2023', Price: 0.0048459540056011614 },
  { Date: '10/30/2023', Price: 0.00493515891937446 },
  { Date: '10/31/2023', Price: 0.00501763021661517 },
  { Date: '11/1/2023', Price: 0.0048973833088963616 },
  { Date: '11/2/2023', Price: 0.004941993539977771 },
  { Date: '11/3/2023', Price: 0.004931221168753471 },
  { Date: '11/4/2023', Price: 0.0050336619109299045 },
  { Date: '11/5/2023', Price: 0.005252819092754764 },
  { Date: '11/6/2023', Price: 0.0053318816555861645 },
  { Date: '11/7/2023', Price: 0.005320740404588513 },
  { Date: '11/8/2023', Price: 0.0051613756809782575 },
  { Date: '11/9/2023', Price: 0.005239721794845901 },
  { Date: '11/10/2023', Price: 0.006150711097996899 },
  { Date: '11/10/2023', Price: 0.006364204044577569 }
]

const Graph = () => {
  return (
    <div className="flex-1 w-4/5 m-2">
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
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Price" stroke="#53c68c" strokeWidth={0.2} fill="#53c68c" fillOpacity={0.3} />
    </AreaChart>
    </div>
  );
};

export default Graph;
