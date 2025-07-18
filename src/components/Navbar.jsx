import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Solis Espresso
        </a>
        <button
          onClick={toggleMenu}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show d-flex p-5" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
