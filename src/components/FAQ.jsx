import React, { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 5–10 days depending on the number of pages and required features."
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Yes. Every website I build is fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "Can I update the website content later?",
    answer:
      "Yes. I can integrate a CMS or provide simple editing options so you can easily update your content."
  },
  {
    question: "Do you provide SEO optimization?",
    answer:
      "Yes. Basic SEO setup including meta tags, page structure, and fast loading optimization is included."
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. Ongoing maintenance, updates, and support can be provided depending on your requirements."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container">

      {/* Section Heading */}
      <p
        className="reviews-section-subtitle"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        FAQs
      </p>

      <h2
        className="section-title"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        Frequently Asked Questions
      </h2>

      <p
        className="section-description"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        Answers to common questions about website development and services.
      </p>

      {/* FAQ Items */}
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
            data-aos-delay={100 + index * 100} // stagger each question
            data-aos-duration="800"
          >
            <div className="faq-question">
              <h4>{faq.question}</h4>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;