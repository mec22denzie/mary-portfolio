import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>Let’s Work Together</h2>

          <p>
            I’m open to new opportunities. Whether you have a question or just
            want to say hello, I’ll try my best to get back to you!
          </p>
        </div>

        <div className="contact-details">
          <a href="mailto:maryeden.ciasico@gmail.com">
            <span className="contact-icon">✉</span>
            <span>maryeden.ciasico@gmail.com</span>
          </a>

          <a href="tel:+15191234567">
            <span className="contact-icon">☎</span>
            <span>+1 (437) 553-7039</span>
          </a>

          <div className="contact-detail-item">
            <span className="contact-icon">⌖</span>
            <span>Windsor, Ontario, Canada</span>
          </div>

          <a
            href="https://linkedin.com/in/mary-ciasico"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">in</span>
            <span>linkedin.com/in/mary-ciasico</span>
          </a>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/your-form-id"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            <span>➤</span>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;