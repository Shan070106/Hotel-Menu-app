"use client"

import { useState } from "react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // In a real app, you'd send this to a server for authentication
    alert("Login functionality not implemented in this demo.")
  }

  return (
    <div className="form-container">
      <div className="icon-circle blue">
        <span className="icon-text">🔑</span>
      </div>
      <h2>Welcome Back</h2>
      <p>Sign in to your account</p>

      <form onSubmit={handleSubmit} className="form-spacing">
        <div className="input-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="login-password">Password</label>
          <div className="password-input-wrapper">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle-button">
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button blue-gradient">
          Sign In
        </button>

        <div className="text-center">
          <a href="#" className="link-text">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  )
}
