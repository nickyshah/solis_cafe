import React from 'react';

export default function Menu() {
  return (
    <section id="menu" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/assets/coffee.jpg" className="card-img-top" alt="Coffee" />
              <div className="card-body">
                <h5 className="card-title">Espresso</h5>
                <p className="card-text">$3.00</p>
              </div>
            </div>
          </div>
          {/* Add more menu items here */}
        </div>
      </div>
    </section>
  );
}
