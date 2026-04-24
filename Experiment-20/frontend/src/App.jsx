import { useState, useCallback } from "react";
import axios from "axios";
import "./index.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ── Small SVG icons (inline) ── */
const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

/* ── Toast component ── */
function Toast({ toasts }) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type}`} role="alert">
          <span className="toast-dot" />
          {t.message}
        </div>
      ))}
    </div>
  );
}

/* ── Main App ── */
function App() {
  const [mode, setMode]         = useState("login");   // "login" | "register"
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [toasts, setToasts]     = useState([]);

  /* Push a toast that auto-dismisses after 3 s */
  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  }, []);

  const handleRegister = async () => {
    if (!email || !password) return addToast("Please fill in all fields.", "error");
    setLoading(true);
    try {
      await axios.post(`${API}/register`, { email, password });
      addToast("Account created! You can now log in.", "success");
      setMode("login");
    } catch (err) {
      const msg = err?.response?.data?.message || "Registration failed.";
      addToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) return addToast("Please fill in all fields.", "error");
    setLoading(true);
    try {
      const res = await axios.post(`${API}/login`, { email, password });
      addToast(res.data.message || "Welcome back!", "success");
    } catch (err) {
      const msg = err?.response?.data?.message || "Invalid credentials.";
      addToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "login" ? handleLogin() : handleRegister();
  };

  return (
    <>
      {/* Animated background */}
      <div className="bg-gradient" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      {/* Toasts */}
      <Toast toasts={toasts} />

      {/* Main content */}
      <main className="page-wrapper">
        <div className="card" role="main">
          {/* Logo */}
          <div className="card-logo" aria-hidden="true">
            <IconShield />
          </div>

          {/* Heading */}
          <h1 className="card-title">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="card-subtitle">
            {mode === "login"
              ? "Sign in to your secure account"
              : "Start your journey with AuthApp"}
          </p>

          {/* Tab Switcher */}
          <div className="tabs" role="tablist">
            <button
              id="tab-login"
              role="tab"
              aria-selected={mode === "login"}
              className={`tab-btn ${mode === "login" ? "active" : ""}`}
              onClick={() => setMode("login")}
            >
              Sign In
            </button>
            <button
              id="tab-register"
              role="tab"
              aria-selected={mode === "register"}
              className={`tab-btn ${mode === "register" ? "active" : ""}`}
              onClick={() => setMode("register")}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="input-email">Email address</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconMail /></span>
                <input
                  id="input-email"
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="input-password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconLock /></span>
                <input
                  id="input-password"
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              id="btn-submit"
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading && <span className="btn-spinner" aria-hidden="true" />}
              {loading
                ? "Please wait…"
                : mode === "login"
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          {/* Divider + footer link */}
          <div className="divider">or</div>
          <p className="card-footer">
            {mode === "login" ? (
              <>Don't have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); setMode("register"); }}>
                  Register now
                </a>
              </>
            ) : (
              <>Already have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); setMode("login"); }}>
                  Sign in
                </a>
              </>
            )}
          </p>
        </div>
      </main>
    </>
  );
}

export default App;