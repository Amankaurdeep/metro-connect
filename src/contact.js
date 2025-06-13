import React, { useState } from "react";
import "./Contact.css";
import login3 from './assets/login3.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Missing fields in Metro Control Form.");
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="main-contact">
      {/* <div>  */}
      <div className="contact-wrapper">
        <div className="image-section">
          <img src={login3} alt="Contact Metro Finder" className="contact-image" />
        </div>
      </div>
      {/* </div> */}
      <div className="terminal-container">
        <div className="grid-overlay"></div>
        <form className="terminal-form" onSubmit={handleSubmit}>
          <h1>🛰️CONTACT METRO FINDER</h1>
          <p>Stuck at a station?Drop us a message</p>

          <label>
            Your Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Johnson"
            />
          </label>

          <label>
            Your E-mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@metro.com"
            />
          </label>

          <label>
            Your Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the issue or route request"
            />
          </label>

          <button type="submit">Send Message</button>

          {sent && <div className="transmit-popup">✅ Signal transmitted successfully</div>}
        </form>

      </div>
    </div>
      // </div >
    // </div>

  );
};

export default Contact;



