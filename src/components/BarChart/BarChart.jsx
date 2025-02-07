import React, { useEffect, useMemo, useState } from "react";
import { Bar } from "./Bar";
import { Select } from "./Select";
import { OPTIONS, CHART_DATA, getData } from "./data";
import "./BarChart.css";

// asked in Atlassian

export const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setChartData(data);
    };

    fetchData();
  }, []);

  const maxTicketCount = useMemo(() => {
    return Math.max(...CHART_DATA.map((data) => data.ticketCount));
  }, []);

  const sortData = (sortType) => {
    switch (sortType) {
      case "ascending": {
        const updatedData = [...chartData].sort(
          (a, b) => a.ticketCount - b.ticketCount
        );
        setChartData(updatedData);
        break;
      }

      case "descending": {
        const updatedData = [...chartData].sort(
          (a, b) => b.ticketCount - a.ticketCount
        );
        setChartData(updatedData);
        break;
      }

      default:
        setChartData(CHART_DATA);
        break;
    }
  };

  return (
    <div>
      <h2>Bar Chart (asked in Atlassian)</h2>
      <Select options={OPTIONS} sortData={sortData} />
      <div className="chart-container">
        <ul className="chart">
          {chartData.map((data) => (
            <Bar
              key={data.id}
              {...data}
              height={(data.ticketCount / maxTicketCount) * 100}
            />
          ))}
        </ul>
        <div className="x-axis">Departments</div>
        <div className="y-axis">Number of tickets</div>
      </div>
    </div>
  );
};
