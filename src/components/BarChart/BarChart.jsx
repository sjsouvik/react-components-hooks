import React, { useMemo } from "react";
import { Bar } from "./Bar";
import "./BarChart.css";

const CHART_DATA = [
  { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
  { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
  { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
  { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
  { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
  {
    id: "dep-6",
    name: "Human Resourcing",
    ticketCount: 35,
    colour: "#1D1E33",
  },
  { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
];

export const BarChart = () => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...CHART_DATA.map((data) => data.ticketCount));
  }, []);

  return (
    <div>
      <h2>Bar Chart</h2>
      <div className="chart-container">
        <ul className="chart">
          {CHART_DATA.map((data) => (
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
