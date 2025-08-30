import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login({ setIsAdmin, setIsLoggedIn }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("user"); // "admin" or "user"
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (loginType === "admin") {
        if (formData.username === "Devayani S" && formData.password === "Devayani@1994") {
          setIsAdmin(true);
          setIsLoggedIn(true);
          navigate("/");
        } else {
          alert("Invalid Admin credentials!");
        }
      } else {
        // User login - check if user exists in registered users
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const user = registeredUsers.find(
          u => u.username === formData.username && u.password === formData.password
        );
        
        if (user) {
          setIsAdmin(false);
          setIsLoggedIn(true);
          navigate("/");
        } else {
          alert("Invalid credentials! Please sign up first or check your username/password.");
        }
      }
    }, 1500);
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left side - Company info */}
        <div className="login-left">
          <div className="company-logo">
            <h1 className="younicorn-logo">younicorn</h1>
          </div>
          <p className="company-tagline">
            Younicorn helps you connect and share with the people in your business life.
          </p>
        </div>

        {/* Right side - Single Login form with toggle */}
        <div className="login-right">
          <div className="login-card">
            {/* Login Type Toggle */}
            <div className="login-toggle">
              <button
                type="button"
                className={`toggle-btn ${loginType === "user" ? "active" : ""}`}
                onClick={() => setLoginType("user")}
              >
                👤 User Login
              </button>
              <button
                type="button"
                className={`toggle-btn ${loginType === "admin" ? "active" : ""}`}
                onClick={() => setLoginType("admin")}
              >
                🔐 Admin Login
              </button>
            </div>

            {/* Dynamic Header */}
            <div className="card-header">
              <h3 className={`card-title ${loginType === "admin" ? "admin-title" : "user-title"}`}>
                {loginType === "admin" ? "Admin Access" : "User Access"}
              </h3>
              <span className={`badge ${loginType === "admin" ? "admin-badge" : "user-badge"}`}>
                {loginType === "admin" ? "🔐 Administrator" : "👤 Regular User"}
              </span>
            </div>

            {/* Single Login Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <input
                type="text"
                name="username"
                placeholder={loginType === "admin" ? "Admin Username" : "Username"}
                value={formData.username}
                onChange={handleInputChange}
                required
                className={`login-input ${loginType === "admin" ? "admin-input" : "user-input"}`}
              />
              
              <input
                type="password"
                name="password"
                placeholder={loginType === "admin" ? "Admin Password" : "Password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                className={`login-input ${loginType === "admin" ? "admin-input" : "user-input"}`}
              />
              
              <button 
                type="submit" 
                disabled={isLoading}
                className={`login-btn ${loginType === "admin" ? "admin-btn" : "user-btn"} ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? "Logging in..." : `${loginType === "admin" ? "Admin" : "User"} Login`}
              </button>
            </form>

            {/* Dynamic Credentials Hint */}
            <div className={`credentials-hint ${loginType === "admin" ? "admin-hint" : "user-hint"}`}>
              <small>
                {loginType === "admin" 
                  // ? "💡 Admin: Devayani S / Devayani@1994" 
                  // : "💡 Please use your registered username and password"
                }
              </small>
            </div>
          </div>
          
          <div className="create-account-section">
            <p className="signup-text">Don't have an account?</p>
            <button 
              type="button" 
              className="create-account-btn"
              onClick={handleSignupRedirect}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;