import React, { useState } from 'react';
// import './App.css'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('coffee');

  return (
    <section className="menu-section py-5 bg-gray">
      <div className="container text-center">
        <h1 className="mb-4">Our Menu</h1>

        {/* Toggle Buttons */}
        <div className="menu-toggle-group mb-4">
          <button
            className={`menu-toggle-button ${activeTab === 'coffee' ? 'active' : ''}`}
            onClick={() => setActiveTab('coffee')}
          >
            Coffee & Drinks
          </button>
          <button
            className={`menu-toggle-button ${activeTab === 'food' ? 'active' : ''}`}
            onClick={() => setActiveTab('food')}
          >
            Food
          </button>
        </div>

        {/* Menu Sections */}
        {activeTab === 'coffee' && (
          <div className="row">
            {/* Espresso */}
            <div className="col-md-4 mb-4">
              <h4>Espresso</h4>
              <ul className="list-unstyled">
                <li>Single Shot — $2.50</li>
                <li>Double Shot — $3.50</li>
                <li>Macchiato — $3.75</li>
              </ul>
            </div>

            {/* Lattes */}
            <div className="col-md-4 mb-4">
              <h4>Lattes</h4>
              <ul className="list-unstyled">
                <li>Vanilla Latte — $4.25</li>
                <li>Caramel Latte — $4.50</li>
                <li>Mocha — $4.75</li>
              </ul>
            </div>

            {/* Cold Brew */}
            <div className="col-md-4 mb-4">
              <h4>Cold Brew</h4>
              <ul className="list-unstyled">
                <li>Classic Cold Brew — $3.95</li>
                <li>Vanilla Cream Cold Brew — $4.25</li>
                <li>Cold Brew Float — $4.95</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'food' && (
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <h4>Pastries</h4>
              <ul className="list-unstyled">
                <li>Croissant — $2.95</li>
                <li>Blueberry Muffin — $3.25</li>
                <li>Banana Bread — $3.75</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
