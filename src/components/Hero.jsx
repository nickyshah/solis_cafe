import React from "react";

export default function HeroSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-white text-center position-relative">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="display-4 fw-bold">Welcome to Solis Espresso</h1>
        <p className="lead">Freshly brewed joy in every cup.</p>

        {/* Animated Down Arrow */}
        <div className="scroll-arrow mt-5" onClick={scrollToMenu} role="button">
          <i className="bi bi-chevron-double-down arrow-icon fs-1"></i>
        </div>
      </div>
    </section>
  );
}
