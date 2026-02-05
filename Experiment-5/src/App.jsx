import React, { lazy, Suspense, useState } from "react";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-logo">Lazy Loading Demo</div>
        <nav className="app-nav">
          <button
            className={`nav-button ${page === "home" ? "active" : ""}`}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={`nav-button ${page === "dashboard" ? "active" : ""}`}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>
        </nav>
      </header>

      <main className="app-content">
        <Suspense
          fallback={
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading...</p>
            </div>
          }
        >
          {page === "home" && <Home />}
          {page === "dashboard" && <Dashboard />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
