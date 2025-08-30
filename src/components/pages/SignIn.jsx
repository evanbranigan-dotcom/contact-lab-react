export default function SignIn() {
  return (
    <div className="page-content">
      <h2>Sign In</h2>
      
      <div className="signin-content">
        <section className="signin-info">
          <p>
            Sign in functionality is currently under development. For now, 
            all Boulder Contact Lab information and resources are freely 
            accessible to everyone.
          </p>
        </section>

        <section className="community-access">
          <h3>Community Access</h3>
          <p>
            To stay connected with our community:
          </p>
          <ul>
            <li>Join our <a href="https://www.facebook.com/groups/bouldercontactlab" target="_blank" rel="noopener noreferrer">Facebook Group</a></li>
            <li>Subscribe to our <a href="https://groups.google.com/g/labcore" target="_blank" rel="noopener noreferrer">Email List</a></li>
            <li>Check our <a href="/calendar">Calendar</a> for upcoming sessions</li>
          </ul>
        </section>

        <section className="contact-signin">
          <h3>Questions?</h3>
          <p>
            If you have questions about accessing community resources, 
            please contact us at{' '}
            <a href="mailto:labcore@googlegroups.com">labcore@googlegroups.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}