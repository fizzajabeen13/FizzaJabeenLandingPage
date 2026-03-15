import ScrollCounter from "./ScrollCounter";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <span 
          className="hero-badge" 
          data-aos="fade-right" 
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Available for Freelance Projects
        </span>

        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Building <span>Modern Web Experiences</span> with AI-Driven Precision
        </h1>

        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Turning ideas into high-performance websites and SaaS products with modern web technologies and AI-driven insights.
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <a href="https://fizzajabeen13.github.io/Portfolio/" target="_blank" className="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <a>View My Portfolio</a>
          </a>

          <a href="#contact" className="btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Contact Me
          </a>
        </div>

        <div className="hero-info-container" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          <div className="hero-info">
            <span>● Full-Stack Development</span>
          </div>

          <div className="hero-info">
            <span>● AI-Integrated Solutions</span>
          </div>
        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="image-wrapper" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1200">

          <div className="tilt-box"></div>

          <img
            src="/Images/img-2.jpg"
            alt="Full Stack Web Developer"
            className="hero-image"
          />

          <div className="experience-card" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
            <div className="title-text-wrapper">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="experience-icon"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM7 11l5-5-1.5-1.5L7 8 5.5 6.5 4 8l3 3z" />
                </svg>
              </div>
              <div className="title-text">
                <h3><ScrollCounter end={3} label="+ Years" duration={2000} /></h3>
                <p>Development</p>
              </div>
            </div>

            <small>
              <span className="line"></span>
              "Clean code, scalable systems, modern UI and AI-driven solutions."
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;