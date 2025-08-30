import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const [formData, setFormData] = useState({ 
    username: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check if username already exists
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const existingUser = registeredUsers.find(u => u.username === formData.username);
    if (existingUser) {
      newErrors.username = "Username already exists";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Save user to localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const newUser = {
        id: Date.now(),
        username: formData.username,
        password: formData.password,
        registeredAt: new Date().toISOString()
      };
      
      registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      
      setIsLoading(false);
      alert("Account created successfully! Please login with your credentials.");
      navigate("/login");
    }, 1500);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        {/* Left side - Company info */}
        <div className="signup-left">
          <div className="company-logo">
            <h1 className="younicorn-logo">younicorn</h1>
          </div>
          <p className="company-tagline">
            Join Younicorn and connect with people in your business life.
          </p>
        </div>

        {/* Right side - Signup form */}
        <div className="signup-right">
          <div className="signup-card">
            {/* Header */}
            <div className="card-header">
              <h3 className="card-title">Create Account</h3>
              <span className="badge signup-badge">
                🎉 New User
              </span>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="input-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Choose Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className={`signup-input ${errors.username ? 'error' : ''}`}
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className={`signup-input ${errors.password ? 'error' : ''}`}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className={`signup-input ${errors.confirmPassword ? 'error' : ''}`}
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className={`signup-btn ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            {/* Requirements */}
            <div className="signup-requirements">
              <small>
                📝 Username: min 3 characters<br/>
                🔒 Password: min 6 characters
              </small>
            </div>
          </div>
          
          <div className="login-redirect-section">
            <p className="login-text">Already have an account?</p>
            <button 
              type="button" 
              className="login-redirect-btn"
              onClick={handleLoginRedirect}
            >
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;