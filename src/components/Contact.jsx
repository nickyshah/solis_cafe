import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Full Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <button className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
}
