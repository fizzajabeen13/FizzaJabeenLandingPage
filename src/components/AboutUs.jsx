import ScrollCounter from "./ScrollCounter";

function AboutUs() {
  return (
    <section className="about">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">

          <div className="about-badge" data-aos="fade-right" data-aos-delay="150" data-aos-duration="800">
            Developer Profile
          </div>

          <div className="aboutme" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Building Websites <span className="about-span">That Elevate Your Digital Presence!</span>
          </div>

          <p className="about-description" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
            I’m a passionate Web Developer focused on building modern, high-performing websites that help individuals and businesses establish a strong digital presence.
          </p>

          <p className="about-description" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            I specialize in creating clean, responsive, and conversion-focused websites tailored to specific goals — 
            whether it’s helping students showcase their work through professional portfolios, enabling small businesses to reach more customers online, or building strong personal brands that stand out in today’s digital world.
          </p>

          <div className="about-stats" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">

            <div className="stat" data-aos="zoom-in" data-aos-delay="400">
              <h3><ScrollCounter end={3} label="+" duration={2000} /></h3>
              <p>Years Experience</p>
            </div>

            <div className="stat" data-aos="zoom-in" data-aos-delay="500">
              <h3><ScrollCounter end={20} label="+" duration={2000} /></h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat" data-aos="zoom-in" data-aos-delay="600">
              <h3><ScrollCounter end={10} label="+" duration={2000} /></h3>
              <p>Technologies</p>
            </div>

          </div>

          <p className="about-description" data-aos="fade-up" data-aos-delay="650" data-aos-duration="1000">
              I focus on delivering clean code, modern UI/UX, fast performance, and scalable solutions so every website not only looks professional but also performs effectively.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="about-right" data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">

          <div className="about-card" data-aos="fade-left" data-aos-delay="750" data-aos-duration="1000">
            <h4>What I Offer</h4>

            <ul>
              <li><span className="niches">Portfolio Websites</span> for students and professionals</li>
              <li><span className="niches">Small Business Websites</span> that build trust and attract customers</li>
              <li><span className="niches">Personal Brand Websites</span> for creators, freelancers, and professionals</li>
              <li><span className="niches">Landing Pages</span> for products, startups, and events</li>
              <li><span className="niches">Real Estate Websites</span> for property dealers to showcase listings and generate leads</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;