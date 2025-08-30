import './Calendar.css'

export default function Calendar() {
  return (
    <div className="page-content">
      <h2>Calendar</h2>
      <div className="calendar-info">
        <p>
          Subscribe to our calendar to stay updated on all Boulder Contact Lab sessions and events.
          If you notice any issues with the calendar, please contact us at{' '}
          <a href="mailto:labcore@googlegroups.com">labcore@googlegroups.com</a>.
        </p>
        
        <div className="calendar-links">
          <a 
            href="https://calendar.google.com/calendar/embed?src=bouldercontactlab%40gmail.com&ctz=America%2FDenver"
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-link"
          >
            View Google Calendar
          </a>
          <a 
            href="https://calendar.google.com/calendar/ical/bouldercontactlab%40gmail.com/public/basic.ics"
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-link"
          >
            Subscribe to iCal
          </a>
        </div>

        <div className="calendar-embed">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=bouldercontactlab%40gmail.com&ctz=America%2FDenver" 
            style={{border: 0}} 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
            title="Boulder Contact Lab Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  )
}