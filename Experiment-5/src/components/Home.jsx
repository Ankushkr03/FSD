export default function Home() {
  return (
    <div className="content-box">
      <h1>Welcome to React Lazy Loading</h1>
      <p>
        This is a simple demonstration of React's lazy loading feature.
        Lazy loading helps improve performance by loading components only when they are needed.
      </p>

      <h2>What is Lazy Loading?</h2>
      <p>
        Lazy loading is a technique where you delay loading of components until they are actually needed.
        This reduces the initial bundle size and makes your app load faster.
      </p>

      <h3>Benefits:</h3>
      <ul className="feature-list">
        <li className="feature-item">
          <strong>Faster Initial Load:</strong> Components are loaded on-demand, reducing initial bundle size.
        </li>
        <li className="feature-item">
          <strong>Better Performance:</strong> Only load what you need, when you need it.
        </li>
        <li className="feature-item">
          <strong>Easy to Implement:</strong> React makes it simple with React.lazy() and Suspense.
        </li>
      </ul>

      <h3>How to Use:</h3>
      <p>
        1. Import React.lazy() and Suspense from 'react'<br />
        2. Use lazy() to import your component<br />
        3. Wrap your component with Suspense and provide a fallback
      </p>

      <p style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '5px', border: '1px solid #007bff' }}>
        <strong>Try it out:</strong> Click on the Dashboard button above to see lazy loading in action!
      </p>
    </div>
  );
}
