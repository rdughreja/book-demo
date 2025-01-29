// import React from "react";
// import "./Contact.css";

// function Contact() {
//   return (
//     <div className="contact-us">
//       <h2>Contact Us</h2>
//       <form>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <textarea placeholder="Message" rows="4"></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">Have questions? We are here to help!</p>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message"></textarea>

            <button type="submit" className="send-btn">Send Message ➜</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h4>Visit Us</h4>
              <p>123 Education Street, Knowledge City, 400001</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+91 234-4344-3543</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <h4>Email Us</h4>
              <p>info@divinetechsolutions.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

