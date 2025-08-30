export default function ContactUs() {
  return (
    <div className="page-content">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>
          We'd love to hear from you! Whether you're new to Contact Improvisation 
          or an experienced practitioner, feel free to reach out with any questions.
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p>
              <a href="mailto:labcore@googlegroups.com">labcore@googlegroups.com</a>
            </p>
          </div>

          <div className="contact-method">
            <h3>Facebook Group</h3>
            <p>
              Join our community on Facebook for updates, discussions, and connections 
              with other Contact Improvisation practitioners in the Boulder area.
            </p>
            <a 
              href="https://www.facebook.com/groups/bouldercontactlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="facebook-link"
            >
              Join Facebook Group
            </a>
          </div>

          <div className="contact-method">
            <h3>Mailing List</h3>
            <p>
              Subscribe to our email list for announcements about sessions, 
              workshops, and other Contact Improvisation events.
            </p>
            <a 
              href="https://groups.google.com/g/labcore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mailing-list-link"
            >
              Subscribe to Mailing List
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}