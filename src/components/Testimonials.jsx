function Testimonials() {
  return (
    <section className="testimonials-container">

      <p className="reviews-section-subtitle" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
        CLIENT TESTIMONIALS
      </p>

      <h2 className="section-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
        What People Say About My Work
      </h2>

      <p className="section-description" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        I focus on building clean, responsive, and user-friendly interfaces.
        Here’s what clients and collaborators say about working with me.
      </p>

      <div className="testimonials-grid">
        {[
          {
            quote: `"Working with Fizza was an amazing experience. The website design was modern, fast, and perfectly responsive across devices. She understood our requirements clearly and delivered exactly what we needed."`,
            name: "Ali Khan",
            role: "Business Owner",
            avatar: "A",
            delay: 400
          },
          {
            quote: `"Fizza has excellent frontend development skills. Her attention to UI details and ability to turn complex ideas into clean, usable interfaces makes her stand out."`,
            name: "Sarah Ahmed",
            role: "Product Manager",
            avatar: "S",
            delay: 450
          },
          {
            quote: `"Reliable, professional, and highly skilled. Fizza delivered our landing page ahead of schedule and optimized it for performance and responsiveness. I would definitely work with her again."`,
            name: "David Malik",
            role: "Startup Founder",
            avatar: "D",
            delay: 500
          },
        ].map((testimonial, index) => (
          <div
            className="testimonial-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={testimonial.delay}
            data-aos-duration="1000"
          >
            <div className="quote-icon">❞</div>

            <div className="stars">★★★★★</div>

            <p className="review-text">{testimonial.quote}</p>

            <div className="client">
              <div className="avatar">{testimonial.avatar}</div>

              <div className="client-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;