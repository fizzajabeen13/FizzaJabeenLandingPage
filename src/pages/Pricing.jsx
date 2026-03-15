import React from "react";

const pricingPlans = [
  {
    title: "Portfolio Website",
    price: "$150 – $400",
    pages: "1 – 3 Pages",
    delay: "100",
    features: [
      "Project & achievement showcase",
      "Responsive design for all devices",
      "Contact form",
      "Social media integration",
      "SEO-friendly & fast loading",
      "Optional CMS integration"
    ]
  },
  {
    title: "Small Business Website",
    price: "$300 – $700",
    pages: "3 – 5 Pages",
    delay: "200",
    features: [
      "Company info & services showcase",
      "Client testimonials",
      "Inquiry / contact forms",
      "Google Maps integration",
      "SEO optimization",
      "Social media integration"
    ]
  },
  {
    title: "Personal Brand Website",
    price: "$250 – $600",
    pages: "3 – 6 Pages",
    delay: "300",
    features: [
      "Personal bio & portfolio",
      "Blog / articles section",
      "Newsletter integration",
      "Testimonials & achievements",
      "SEO-ready",
      "Analytics setup"
    ]
  },
  {
    title: "Landing Page",
    price: "$100 – $300",
    pages: "1 Page",
    delay: "400",
    features: [
      "High converting design",
      "Strong call-to-action buttons",
      "Lead capture / subscription forms",
      "Promotional banners",
      "Fast loading",
      "Optional animations"
    ]
  },
  {
    title: "Real Estate Website",
    price: "$400 – $900",
    pages: "5 – 8 Pages",
    delay: "500",
    features: [
      "Property listings with images",
      "Search & filter listings",
      "Lead capture forms",
      "Google Maps property location",
      "SEO optimized",
      "Mobile friendly"
    ]
  }
];

function Pricing() {
  return (
    <section className="pricing-page container">

      {/* Section Heading */}
      <p className="reviews-section-subtitle" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
        PRICING PLANS
      </p>

      <h2 className="section-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
        Flexible Pricing for Your Website Needs
      </h2>

      <p className="section-description" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        Transparent and affordable packages designed to help you launch a professional website with confidence.
      </p>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div
            className="card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={plan.delay}
            data-aos-duration="800"
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <p className="pages">{plan.pages}</p>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <button
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Pricing;