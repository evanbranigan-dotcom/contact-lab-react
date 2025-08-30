import './Links.css'

export default function Links() {
  return (
    <div className="page-content">
      <h2>Links & Resources</h2>
      
      <div className="links-sections">
        <section className="links-section">
          <h3>Announcements and Group Messages</h3>
          <ul>
            <li>
              <a href="https://groups.google.com/g/labcore" target="_blank" rel="noopener noreferrer">
                Email List Archives & Subscription
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/bouldercontactlab" target="_blank" rel="noopener noreferrer">
                Facebook Group
              </a>
            </li>
          </ul>
        </section>

        <section className="links-section">
          <h3>Boulder CI Resources</h3>
          <ul>
            <li>
              <a href="https://groups.google.com/g/boulderci" target="_blank" rel="noopener noreferrer">
                Boulder CI Email Group
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/BoulderContactImprov" target="_blank" rel="noopener noreferrer">
                Boulder Contact Improv Facebook Page
              </a>
            </li>
          </ul>
        </section>

        <section className="links-section">
          <h3>Classes and Workshops</h3>
          <ul>
            <li>
              <a href="https://www.tumblebones.com" target="_blank" rel="noopener noreferrer">
                Tumblebones - Classes and Workshops
              </a>
            </li>
          </ul>
        </section>

        <section className="links-section">
          <h3>General Contact Improvisation Resources</h3>
          <ul>
            <li>
              <a href="https://www.earthdance.org" target="_blank" rel="noopener noreferrer">
                Earthdance - Artist Workshop and Retreat Center
              </a>
            </li>
            <li>
              <a href="https://contactquarterly.com" target="_blank" rel="noopener noreferrer">
                Contact Quarterly - International Dance Journal
              </a>
            </li>
            <li>
              <a href="https://www.contactimprov.net" target="_blank" rel="noopener noreferrer">
                ContactImprov.net - Community Connection Site
              </a>
            </li>
            <li>
              <a href="https://www.contactimprov.com" target="_blank" rel="noopener noreferrer">
                ContactImprov.com - Online CI Resource
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}