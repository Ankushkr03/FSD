export default function Dashboard() {
  return (
    <div className="content-box">
      <h1>Dashboard</h1>
      <p>This component was loaded lazily!</p>

      <h2>Performance Stats</h2>
      <p>Here are some statistics showing the benefits of lazy loading:</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">65%</div>
          <div className="stat-label">Bundle Size Reduced</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">0.8s</div>
          <div className="stat-label">Load Time</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">98/100</div>
          <div className="stat-label">Performance Score</div>
        </div>
      </div>

      <h3>What Happens When You Load This Page?</h3>
      <p>
        When you clicked the Dashboard button, React loaded this component separately
        from the initial bundle. This means:
      </p>
      <ul className="feature-list">
        <li className="feature-item">
          The initial app loads faster because this code wasn't included
        </li>
        <li className="feature-item">
          Users who never visit this page never download this code
        </li>
        <li className="feature-item">
          The code is cached for future visits
        </li>
      </ul>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#d4edda', borderRadius: '5px', border: '1px solid #28a745' }}>
        <strong>Success!</strong> You just saw lazy loading in action. The Dashboard component
        was loaded only when you needed it.
      </div>
    </div>
  );
}