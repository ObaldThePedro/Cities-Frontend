import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default class JobSalariesChart extends PureComponent {
  render() {
    const data = [
      {
        name: this.props.cityA,
        A: this.props.salaryA
      },
      {
        name: this.props.cityB,
        B: this.props.salaryB
      }
    ];
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            animationDuration={1000}
            isAnimationActive={true}
            dataKey="A"
            fill="#29b6f6"
          />
          <Bar
            animationDuration={1500}
            isAnimationActive={true}
            dataKey="B"
            fill="#e57373"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
