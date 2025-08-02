"use client"

import { useState } from "react"
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import AboutSection from "../components/AboutSection"
import "../app/globals.css" // Import the global CSS file

export default function HomePage() {
  const [isAboutHovered, setIsAboutHovered] = useState(false)

  return (
    <div className="page-container">
      <div className="main-content-wrapper">
        <div className="boxes-container">
          {/* About Box - Now on the left */}
          <div
            className={`box about-box ${isAboutHovered ? "expanded-about-box" : ""}`}
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
          >
            <AboutSection isExpanded={isAboutHovered} />
          </div>

          {/* Signup Box - In the middle */}
          <div className={`box signup-box ${isAboutHovered ? "hidden-box" : ""}`}>
            <SignupForm />
          </div>

          {/* Login Box - On the right */}
          <div className={`box login-box ${isAboutHovered ? "hidden-box" : ""}`}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
