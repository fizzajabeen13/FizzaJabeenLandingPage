import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Services from "../components/Services.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Pricing from "./Pricing.jsx"; 
import FAQ from "../components/FAQ.jsx";
import Contact from "./Contact.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />

      <section id="hero" className="hero">
        <Hero />
      </section>

      <section id="about" className="about">
        <AboutUs />
      </section>

      <section id="services" className="services">
        <Services />
      </section>

      <section id="why-us" className="WhyChooseUs">
        <WhyChooseUs />
      </section>

      <section id="testimonials" className="testimonials">
        <Testimonials />
      </section>

      <section id="pricing" className="pricing">
        <Pricing />
      </section>

      <section id="faq" className="faq">
        <FAQ />
      </section>

      <section id="contact" className="contact">
        <Contact />
      </section>

      <WhatsAppButton />
      
      <Footer />
    </div>
  );
}

export default Home;