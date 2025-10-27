import React from "react";
import LeadHeatmap from "./LeadHeatmap";
import "./App.css";

export default function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>ScopeAX</h2>
        <ul>
          <li>Dashboard</li>
          <li>Leads</li>
          <li>Signals</li>
          <li>Companies</li>
          <li>Insights</li>
        </ul>
      </aside>

      <main className="content">
        <header>
          <h1>AI Lead Intelligence Dashboard</h1>
          <p>Internal System – CMI Market Intelligence</p>
        </header>

        <div className="workspace">
          <div className="card full-width">
            <LeadHeatmap />
          </div>
        </div>
      </main>
    </div>
  );
}
