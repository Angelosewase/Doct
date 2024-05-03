"use client";

import React, { PureComponent,useRef,useEffect } from "react";
import { CategoryStats } from "@/app/lib/placeholderdata";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export class Chart extends PureComponent {
  render() {
    return (
      <PieChart width={250} height={160} className="relative">
        <Pie
          data={CategoryStats}
          cx={100}
          cy={80}
          innerRadius={50}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="number"
        >
          {CategoryStats.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export const ProgressBar = (props: { value: number; max: number }) => {
  let percentage = ((props.value / props.max) * 100).toFixed(0);
  const divref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divref.current) {
      divref.current.style.width = `${percentage}%`;
    }
  }, [percentage]);

  return (
    <>
      <div className="w-30 h-2 rounded-lg bg-gray-100">
        <div className="bg-green-400 h-2 rounded-lg" ref={divref}></div>
      </div>
    </>
  );
};


