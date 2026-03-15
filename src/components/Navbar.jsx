import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <img src="/Images/fj-logo.svg" alt="logo" className="logo-img" />
        <div className="logo-text">
          <h2 className="logo-name">Fizza Jabeen</h2>
          <span className="logo-role">Full Stack Developer</span>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line top ${isOpen ? "open-top" : ""}`}></div>
        <div className={`line middle ${isOpen ? "open-middle" : ""}`}></div>
        <div className={`line bottom ${isOpen ? "open-bottom" : ""}`}></div>
      </div>

      {/* MENU */}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        {[
          { id: "hero", label: "Home" },
          { id: "about", label: "About Us" },
          { id: "services", label: "Services" },
          { id: "why-us", label: "Why Us" },
          { id: "testimonials", label: "Reviews" },
          { id: "pricing", label: "Pricing" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact Us" }
        ].map((item) => (
          <li key={item.id}>
            <button
              className="menu-btn"
              onClick={() => { scrollToSection(item.id); setIsOpen(false); }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* BOOK NOW */}
      <div className="buttons">
        <button
          className="book-btn"
          onClick={() => { scrollToSection("contact"); setIsOpen(false); }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"> 
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /> 
        </svg>
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;