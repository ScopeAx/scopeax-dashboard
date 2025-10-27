import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell,
} from "recharts";

const mockData = [
  { region: "North America", industry: "Tech", score: 89 },
  { region: "Europe", industry: "Finance", score: 76 },
  { region: "Asia", industry: "Manufacturing", score: 64 },
  { region: "Latin America", industry: "Energy", score: 58 },
  { region: "Middle East", industry: "Logistics", score: 72 },
];

const colorScale = (score) => {
  if (score >= 80) return "#22c55e"; // green
  if (score >= 60) return "#facc15"; // yellow
  return "#f87171"; // red
};

export default function LeadHeatmapChart() {
  return (
    <div className="chart-card">
      <h2>Lead Conversion Probability Heatmap</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" type="category" name="Region" />
          <YAxis dataKey="industry" type="category" name="Industry" />
          <ZAxis dataKey="score" range={[100, 800]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Leads" data={mockData}>
            {mockData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorScale(entry.score)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
