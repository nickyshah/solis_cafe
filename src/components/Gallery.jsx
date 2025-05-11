import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src="/assets/interior.jpg" className="img-fluid rounded" alt="Cafe Interior" />
          </div>
          {/* Add more images */}
        </div>
      </div>
    </section>
  );
}
