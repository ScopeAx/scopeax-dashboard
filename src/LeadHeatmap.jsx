import React, { useState, useEffect } from "react";

export default function LeadHeatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock AI lead intelligence data
    const mockData = [
      { region: "North America", industry: "Tech", score: 89 },
      { region: "Europe", industry: "Finance", score: 76 },
      { region: "Asia", industry: "Manufacturing", score: 64 },
      { region: "Latin America", industry: "Energy", score: 58 },
      { region: "Middle East", industry: "Logistics", score: 72 },
    ];
    setData(mockData);
  }, []);

  return (
    <div className="heatmap-card">
      <h2>Lead Intelligence Heatmap</h2>
      <p>AI-simulated conversion probability by region & sector</p>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Industry</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.region}</td>
              <td>{row.industry}</td>
              <td className={`score ${getColor(row.score)}`}>{row.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getColor(score) {
  if (score >= 80) return "high";
  if (score >= 60) return "medium";
  return "low";
}
