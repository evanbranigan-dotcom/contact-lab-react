import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/">Boulder Contact Lab</Link>
        </h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/directions">Directions</Link>
          <Link to="/guidelines">Guidelines</Link>
          <Link to="/links">Links</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/sign-in">Sign In</Link>
        </nav>
      </div>
    </header>
  )
}