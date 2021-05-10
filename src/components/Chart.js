import React, { Fragment } from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ projects }) => {
  const python = Object.keys(
    projects.filter(function (item) {
      return item.language == "Python";
    })
  ).length;
  const react = Object.keys(
    projects.filter(function (item) {
      return item.language == "React";
    })
  ).length;
  console.log(python);
  const state = {
    labels: ["Python", "React"],
    datasets: [
      {
        label: "Languages",
        backgroundColor: ["#d12121", "#5f21d1"],
        hoverBackgroundColor: ["#2199d1", "#2199d1"],
        data: [python, react],
      },
    ],
  };
  return (
    <div className="card" style={{ width: "25rem" }}>
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
