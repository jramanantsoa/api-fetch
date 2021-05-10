import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ done, progress, ideas }) => {
  const state = {
    labels: ["Done", "In progress", "Ideas"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#D1C4E9", "#BBDEFB", "#F8BBD0"],
        hoverBackgroundColor: ["#90A4AE", "#90A4AE", "#90A4AE"],
        data: [done, progress, ideas],
      },
    ],
  };
  return (
    <div className="card chartdiv" style={{ width: "15rem" }}>
      <div className="card-body">
        <div>
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Chart;
