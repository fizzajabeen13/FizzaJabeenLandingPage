import { FaWhatsapp, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">

      <div className="footer-grid">

        {/* COLUMN 1 — LOGO */}
        <div className="footer-brand" data-aos="fade-up" data-aos-delay="100">

          <div className="footer-logo">
            <img
              src="/Images/fj-logo2.svg"
              alt="Fizza Jabeen Logo"
              className="footer-logo-img"
            />

            <div className="footer-logo-text">
              <span className="footer-logo-name">Fizza Jabeen</span>
              <span className="footer-logo-role">Full Stack Developer</span>
            </div>
          </div>

          <p className="footer-description">
            Turning ideas into responsive, high-performance websites. 
            I help businesses and personal brands shine online with clean code, thoughtful design, and seamless user experiences.
          </p>

        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* COLUMN 3 — SERVICES */}
        <div className="footer-links" data-aos="fade-up" data-aos-delay="300">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">Portfolio Website</a></li>
            <li><a href="#services">Business Website</a></li>
            <li><a href="#services">Personal Brand Website</a></li>
            <li><a href="#services">Landing Page</a></li>
            <li><a href="#services">Real Estate Website</a></li>
          </ul>
        </div>

        {/* COLUMN 4 — CONTACT */}
        <div className="footer-contact" data-aos="fade-up" data-aos-delay="400">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> fizzajabeen13@gmail.com</p>

          <a href="tel:+923120182784">
            <FaWhatsapp /> +92 312 018 2784
          </a>

          <p>
            <a href="https://github.com/fizzajabeen13" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View My GitHub
            </a>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/fizza-jabeen-13ch/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </p>

          <p>
            <a href="https://www.facebook.com/profile.php?id=61587992474958" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Visit My Facebook
            </a>
          </p>

          <p>
            <a href="https://www.instagram.com/fizzajabeen13/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Follow on Instagram
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
        &copy; {new Date().getFullYear()} FizzaJabeen. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;