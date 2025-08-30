import './Directions.css'

export default function Directions() {
  return (
    <div className="page-content">
      <h2>Directions</h2>
      <p className="directions-intro">
        Boulder Contact Lab meets at various locations. Please check our{' '}
        <a href="/calendar">Calendar</a> to confirm the specific week's location.
      </p>

      <div className="venues">
        <div className="venue">
          <h3>Boulder Circus Center</h3>
          <div className="venue-info">
            <p className="address">4747 26th Street, Boulder, CO 80304</p>
            <p className="location-note">Located in north Boulder near Violet/28th</p>
            <p className="parking">Plenty of parking available</p>
            <a 
              href="https://maps.google.com/?q=4747+26th+Street,+Boulder,+CO+80304"
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="venue">
          <h3>Avalon Ballroom</h3>
          <div className="venue-info">
            <p className="address">6185 Arapahoe Road, Boulder, CO 80301</p>
            <p className="location-note">Located east of Boulder on Arapahoe past 55th</p>
            <p className="parking">Plenty of parking available</p>
            <a 
              href="https://maps.google.com/?q=6185+Arapahoe+Road,+Boulder,+CO+80301"
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}