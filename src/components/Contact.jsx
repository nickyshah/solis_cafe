import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("MYour Email has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send your email. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-transparent">
      <div
        className="container rounded p-3"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
        id="contact1"
      >
        <h2 className="text-center mb-4">Contact Us</h2>
        <form
          className="mx-auto"
          style={{ maxWidth: "500px" }}
          ref={form}
          onSubmit={sendEmail}
        >
          {/* <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div> */}
          {/* Name field with icon */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
          </div>

          {/* Email field with icon */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          {/* <!-- Submit btn --> */}
          <div class="text-center">
            <button type="submit" class="btn btn-primary" tabIndex="-1">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
