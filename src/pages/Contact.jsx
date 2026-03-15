import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5grqmvb",
        "template_lppct78",
        form.current,
        "pgoSkX9ZCGzPEU6Nw"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="contact-section container">
      <p 
        className="contact-section-subtitle"         
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        GET IN TOUCH
      </p>

      <h2 
        className="section-title"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        Contact Me
      </h2>

      <p 
        className="section-description"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        Have a project, question, or idea? Send me a message, and I’ll get back to you as soon as possible.
      </p>

      <div className="contact-wrapper">

        {/* LEFT SIDE - FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-up" data-aos-delay="200">

          <div className="contact-form-title">Fill out the form.</div>

          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
            data-aos="fade-up"
            data-aos-delay="300"
          />

          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            data-aos="fade-up"
            data-aos-delay="400"
          />

          <select
            required
            name="website_type"
            data-aos="fade-up"
            data-aos-delay="450"
            className="contact-select"
          >
            <option value="">What type of website do you need?</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="business">Business Website</option>
            <option value="personal-brand">Personal Brand Website</option>
            <option value="landing-page">Landing Page</option>
            <option value="real-estate">Real Estate Website</option>
          </select>

          <textarea
            placeholder="Your Message"
            required
            name="message"
            data-aos="fade-up"
            data-aos-delay="500"
          >

          </textarea>

          <button type="submit" data-aos="zoom-in" data-aos-delay="600">
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>

        </form>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="contact-info" data-aos="fade-left">

          <h3>Or reach me directly through the links below.</h3>

          <p className="contact-info-text">
            Prefer direct communication? Reach me through these platforms.
          </p>

          <div className="contact-links">

            <a href="tel:+923120182784">
              <FaWhatsapp /> +92 312 018 2784
            </a>

            <a href="https://github.com/fizzajabeen13" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View My GitHub
            </a>

            <a href="https://www.linkedin.com/in/fizza-jabeen-13ch/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> Connect on LinkedIn
            </a>

            <a href="https://www.facebook.com/profile.php?id=61587992474958" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Visit My Facebook
            </a>

            <a href="https://www.instagram.com/fizzajabeen13/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Follow on Instagram
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;