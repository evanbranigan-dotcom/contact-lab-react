import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Calendar from './components/pages/Calendar'
import ContactUs from './components/pages/ContactUs'
import Directions from './components/pages/Directions'
import Guidelines from './components/pages/Guidelines'
import Links from './components/pages/Links'
import Photos from './components/pages/Photos'
import Donate from './components/pages/Donate'
import SignIn from './components/pages/SignIn'
import './styles/global.css'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/directions" element={<Directions />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/links" element={<Links />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
