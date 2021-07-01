import "./chart.css";
import React, { useEffect, useState } from "react";
// import Plot from "react-plotly.js";
import { Line } from "react-chartjs-2";

export default function Chart() {
  const [years, setYears] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/1/10/1880-2020/data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        for (let dataPoint in data.data) {
          years.push(dataPoint);
          temperatureData.push([dataPoint, data.data[dataPoint]]);
        }

        const uniq = [...new Set(years)];

        setYears(uniq);
        setTemperatureData(temperatureData);

        lineChart();
      });
  }, []);

  const lineChart = () => {
    setChartData({
      datasets: [
        {
          label: "Temparature",
          data: temperatureData,
          backgroundColor: ["red"],
          borderWidth: 4,
        },
      ],
    });
  };
  return (
    <div className="chart">
      <Line
        data={chartData}
        height={500}
        width={1000}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
