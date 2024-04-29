"use client";

import React, { PureComponent } from "react";
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
