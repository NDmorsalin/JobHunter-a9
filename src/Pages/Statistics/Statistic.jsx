import React from "react";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  LineChart,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

const data = [
  {
    name: "A 01",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 02",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 03",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 04",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 05",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 06",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 07",
    totalMarks: 60,
    obtainMarks: 60,
  },
  {
    name: "A 08",
    totalMarks: 60,
    obtainMarks: 56,
  },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#7E90FE",
  "#ff7f50",
  "#03d3f8",
  "#9873FF",
];

const Statistic = () => {
  return (
    <>
      <PagesHeader pageTitle="Statistic" />
      <div className="my-8 space-y-4">
        <div className="w-full overflow-auto flex items-center justify-between p-4 rounded bg-slate-600">
          <PieChart width={800} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="totalMarks"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={330}
              endAngle={20}
              innerRadius={60}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="obtainMarks"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </div>
        <div className="w-full overflow-auto flex items-center justify-between p-4 rounded bg-slate-600">
          <ComposedChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <defs>
              <linearGradient id="totalMarks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#9873FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="totalMarks"
              fill="url(#totalMarks)"
              stroke="#8884d8"
            />

            <Line
              fill="url(#obtainMarks)"
              type="monotone"
              dataKey="obtainMarks"
              stroke="#ff7300"
            />
          </ComposedChart>
        </div>
      </div>
    </>
  );
};

export default Statistic;
/* 

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector,Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    );
  }
}


*/
