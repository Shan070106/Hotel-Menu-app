export default function AboutSection({ isExpanded }) {
  return (
    <div className="about-content-container">
      <div className="icon-circle green">
        <span className="icon-text">ℹ️</span>
      </div>
      <h2>About Us</h2>
      <p className="about-subtitle">{isExpanded ? "Discover what makes us special" : "Learn more"}</p>

      {isExpanded ? (
        <div className="about-details expanded-content">
          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Premium Experience</h3>
              <p>
                We provide top-notch services with cutting-edge technology and innovative solutions tailored to your
                needs.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">👥</span>
              <h3>Community Driven</h3>
              <p>Join thousands of satisfied users who trust our platform for their daily needs and business growth.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Secure & Reliable</h3>
              <p>Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Lightning Fast</h3>
              <p>Experience blazing-fast performance with our optimized infrastructure and global CDN network.</p>
            </div>
          </div>

          <div className="mission-statement">
            <h3>Our Mission</h3>
            <p>
              To empower individuals and businesses with innovative digital solutions that drive growth, enhance
              productivity, and create meaningful connections in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      ) : (
        <div className="about-teaser">
          <p>Hover to discover our story, mission, and what makes us unique in the digital world.</p>
          <div className="hover-indicator">
            <div className="dot green-dot"></div>
            <div className="dot teal-dot"></div>
            <div className="dot cyan-dot"></div>
          </div>
        </div>
      )}
    </div>
  )
}
