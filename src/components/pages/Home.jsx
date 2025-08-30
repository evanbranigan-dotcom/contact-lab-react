import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h2>Welcome to Boulder Contact Lab</h2>
        <p className="hero-subtitle">
          A weekly gathering for Contact Improvisation dance exploration
        </p>
      </div>

      <div className="main-content">
        <section className="about-section">
          <h3>About Our Lab</h3>
          <p>
            Boulder Contact Lab meets every <strong>Sunday from 10 AM - 12:30 PM</strong> for 
            Contact Improvisation practice and exploration. We provide a supportive space 
            for dancers of all levels to engage with this form of movement.
          </p>
        </section>

        <section className="schedule-section">
          <h3>Weekly Schedule</h3>
          <div className="schedule-card">
            <div className="schedule-time">Sundays 10:00 AM - 12:30 PM</div>
            <div className="schedule-note">
              Check our <a href="/calendar">Calendar</a> for specific locations and any schedule changes
            </div>
          </div>
        </section>

        <section className="feedback-section">
          <h3>Share Your Feedback</h3>
          <p>
            We value your input to help improve our community gatherings. 
            Please share your thoughts through our anonymous feedback form.
          </p>
          <div className="feedback-form-container">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe7qOtUoAzKjGOoqoJJYJvDLYxFzPgOZjUXYEiXJqHrYwZ3-Q/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Anonymous Feedback Form"
            >
              Loading feedback form...
            </iframe>
          </div>
        </section>
      </div>
    </div>
  )
}