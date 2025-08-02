"use client"

import { useState } from "react"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    try {
      // Simulate saving to a JSON file using localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")

      const existingUser = existingUsers.find((user) => user.email === formData.email)
      if (existingUser) {
        alert("User with this email already exists!")
        return
      }

      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        password: formData.password, // In a real app, hash this password!
        createdAt: new Date().toISOString(),
      }

      const updatedUsers = [...existingUsers, newUser]
      localStorage.setItem("users", JSON.stringify(updatedUsers, null, 2))

      alert("Account created successfully! (Data saved to localStorage)")
      console.log("New user registered:", newUser)
      console.log("All users in localStorage:", updatedUsers)

      setFormData({ name: "", email: "", password: "", confirmPassword: "" }) // Clear form
    } catch (error) {
      console.error("Signup error:", error)
      alert("An error occurred during signup.")
    }
  }

  return (
    <div className="form-container">
      <div className="icon-circle purple">
        <span className="icon-text">➕</span>
      </div>
      <h2>Join Us</h2>
      <p>Create your account</p>

      <form onSubmit={handleSubmit} className="form-spacing">
        <div className="input-group">
          <label htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="signup-password">Password</label>
          <div className="password-input-wrapper">
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle-button">
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="signup-confirm-password">Confirm Password</label>
          <div className="password-input-wrapper">
            <input
              id="signup-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="password-toggle-button"
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button purple-gradient">
          Create Account
        </button>
      </form>
    </div>
  )
}
