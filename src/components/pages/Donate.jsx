export default function Donate() {
  return (
    <div className="page-content">
      <h2>Support Boulder Contact Lab</h2>
      
      <div className="donate-content">
        <section className="donate-intro">
          <p>
            Boulder Contact Lab is a community-supported space for Contact Improvisation 
            practice and exploration. Your donations help us maintain our practice spaces, 
            support our facilitators, and keep our sessions accessible to all.
          </p>
        </section>

        <section className="donate-ways">
          <h3>Ways to Support</h3>
          
          <div className="support-methods">
            <div className="support-method">
              <h4>Financial Contributions</h4>
              <p>
                Help cover venue costs, equipment, and facilitator support. 
                Every contribution, large or small, makes a difference in sustaining 
                our community practice.
              </p>
            </div>

            <div className="support-method">
              <h4>Volunteer</h4>
              <p>
                Share your skills and time by helping with setup, cleanup, 
                outreach, or other community tasks. Many hands make light work!
              </p>
            </div>

            <div className="support-method">
              <h4>Spread the Word</h4>
              <p>
                Help us grow by sharing information about Boulder Contact Lab 
                with friends, family, and anyone interested in movement and dance.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-donate">
          <h3>Get in Touch</h3>
          <p>
            To make a donation or volunteer, please contact us at{' '}
            <a href="mailto:labcore@googlegroups.com">labcore@googlegroups.com</a>.
            We're grateful for any support you can provide to our community.
          </p>
        </section>
      </div>
    </div>
  )
}