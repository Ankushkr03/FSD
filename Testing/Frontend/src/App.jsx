import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="card">
      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
      </button>

      <Form />
    </div>
  );
}

export default App;
