import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>ScopeAX</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Leads</li>
            <li>Signals</li>
            <li>Companies</li>
            <li>Insights</li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <header>
          <h1>AI Lead Intelligence Dashboard</h1>
          <p>Internal System – CMI Market Intelligence</p>
        </header>
        <section className="workspace">
          <div className="card">
            <h3>Lead Pipeline</h3>
            <p>Data modules coming soon...</p>
          </div>
          <div className="card">
            <h3>Market Signals</h3>
            <p>Integrations in progress...</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
