import React from "react";
import { HorizontalBar, Radar, Bar } from "react-chartjs-2";
import { height } from "@material-ui/system";

const Chart = props => {
  return (
    <div className="chart">
      <Radar
        data={props.chartData}
        width={700}
        height={700}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          maintainAspectRatio: true,
          title: {
            display: true,
            text:
              props.path === "/compare/:cityA/:cityB/"
                ? "Quality of Life Comparison"
                : "Life Quality Score",
            fontSize: 25
          },
          legend: {
            display: true
          },
          responsive: false
        }}
      />
    </div>
  );
};

export default Chart;
