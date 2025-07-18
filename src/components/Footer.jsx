import React from "react";

export default function AboutUs() {
  return (
    // <section id="about" className="py-5 bg-light">
    //   <div className="container">
    //     <div className="row align-items-center">
    //       {/* Image */}
    //       <div className="col-md-6 mb-4 mb-md-0">
    //         <img
    //           src={cafeImage || fallbackImage}
    //           onError={(e) => {
    //             e.target.onerror = null;
    //             e.target.src = fallbackImage;
    //           }}
    //           alt="Inside our cozy cafe"
    //           className="img-fluid rounded shadow"
    //           style={{ width: "100%", maxWidth: "400px", height: "auto" }}
    //         />
    //       </div>

    //       {/* Text Content */}
    //       <div className="col-md-6">
    //         <h2 className="mb-3">About Us</h2>
    //         <h5 className="text-muted mb-4">A Cozy Space, A Strong Brew</h5>
    //         <p>
    //           At <strong>Brew & Bean</strong>, coffee is more than a drink —
    //           it's a connection. Nestled in the heart of the city, we created a
    //           space that feels like home, with handpicked beans, fresh pastries,
    //           and friendly faces. Whether you're grabbing a quick espresso or
    //           settling in with a book, our café is designed to welcome you.
    //         </p>
    //         <p>
    //           Locally owned and operated, we believe in supporting local farms
    //           and building community one cup at a time. Stop by, sip slow, and
    //           stay a while.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Address */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Our Address</h5>
            <address>
              123 Coffee St,
              <br />
              Norths Sydney 2060
              <br />
              Australia
            </address>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Opening Hours</h5>
            <p className="mb-1">Mon - Fri: 6:00 AM - 3:30 PM</p>
            <p className="mb-0">Sat - Sun: Closed</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 d-flex flex-column align-items-center align-items-md-start">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mt-2 fs-4">
              <a
                href="https://instagram.com/yourcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://facebook.com/yourcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/yourcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-3" />

        <p className="text-center mb-0 small">
          &copy; {new Date().getFullYear()} Solis Café. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
