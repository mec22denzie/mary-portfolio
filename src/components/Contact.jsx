import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mdaqdjbr",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>Let’s Work Together</h2>

          <p>
            I’m open to new opportunities. Whether you have a question or
            just want to say hello, I’ll try my best to get back to you!
          </p>
        </div>

        <div className="contact-details">
          <a href="mailto:maryciasico@yahoo.com">
            <span className="contact-icon">✉</span>
            <span>maryciasico@yahoo.com</span>
          </a>

          <a href="tel:+14375537039">
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
          onSubmit={handleSubmit}
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
          />

          <button
            type="submit"
            className="contact-submit"
            disabled={loading}
          >
            <span>➤</span>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <div
              className="success-message"
              role="status"
            >
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}

          {error && (
            <div
              className="error-message"
              role="alert"
            >
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;