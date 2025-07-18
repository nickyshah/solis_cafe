import React, { useState } from "react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section
      className="menu-section p-5 bg-transparent mb-4 "
      id="menu"
      style={{ minHeight: "100vh" }}
    >
      <div className="container text-center " id="menu1">
        {/* Toggle Buttons */}
        <div className="btn-group mb-4">
          <button
            className={`btn ${
              activeTab === "coffee" ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setActiveTab("coffee")}
          >
            Beverages
          </button>
          <button
            className={`btn ${
              activeTab === "food" ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setActiveTab("food")}
          >
            Food
          </button>
        </div>

        {/* Menu Sections */}
        {activeTab === "coffee" && (
          <>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="row fw-bold border-bottom pb-2 mb-2">
                  <div className="col-8">
                    <h4 className="mb-0">Coffee</h4>
                  </div>
                  <div className="col-2 text-center">Sml</div>
                  <div className="col-2 text-center">Lrg</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Espresso</div>
                  <div className="col-2 text-center">$3.50</div>
                  <div className="col-2 text-center">$4.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Piccolo</div>
                  <div className="col-2 text-center">$3.50</div>
                  <div className="col-2 text-center">$4.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Macchiato</div>
                  <div className="col-2 text-center">$3.50</div>
                  <div className="col-2 text-center">$4.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Long Black</div>
                  <div className="col-2 text-center">$4.00</div>
                  <div className="col-2 text-center">$4.50</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Flat WHite</div>
                  <div className="col-2 text-center">$4.00</div>
                  <div className="col-2 text-center">$4.50</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Latte</div>
                  <div className="col-2 text-center">$4.00</div>
                  <div className="col-2 text-center">$4.50</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Cappuccino</div>
                  <div className="col-2 text-center">$4.00</div>
                  <div className="col-2 text-center">$4.50</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Hot Chocolate</div>
                  <div className="col-2 text-center">$4.00</div>
                  <div className="col-2 text-center">$4.50</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Matcha Latte</div>
                  <div className="col-2 text-center">$4.50</div>
                  <div className="col-2 text-center">$5.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Chai Latte</div>
                  <div className="col-2 text-center">$4.50</div>
                  <div className="col-2 text-center">$5.00</div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="row fw-bold border-bottom pb-2 mb-2">
                  <div className="col-8">
                    <h4 className="mb-0">Cold Coffee</h4>
                  </div>
                  <div className="col-2 text-center">Sml</div>
                  <div className="col-2 text-center">Lrg</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Iced Long Black</div>
                  <div className="col-2 text-center">$6.00</div>
                  <div className="col-2 text-center">$7.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Iced Latte</div>
                  <div className="col-2 text-center">$5.00</div>
                  <div className="col-2 text-center">$6.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Iced Coffee</div>
                  <div className="col-2 text-center">$6.00</div>
                  <div className="col-2 text-center">$7.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Iced Match Latte</div>
                  <div className="col-2 text-center">$6.00</div>
                  <div className="col-2 text-center">$7.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Iced Chai Latte</div>
                  <div className="col-2 text-center">$6.00</div>
                  <div className="col-2 text-center">$7.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Cold Brew</div>
                  <div className="col-2 text-center">$6.00</div>
                  <div className="col-2 text-center">$7.00</div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="row fw-bold border-bottom pb-2 mb-2">
                  <div className="col-8">
                    <h4 className="mb-0">Tea</h4>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">English Breakfast</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Earl Gray</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Green Sancha</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Chamomile</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Lemongrass</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Peppermint</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>
              </div>
            </div>
            <div className="row">
              <h3 className="border-bottom">Add Extra</h3>
              <div className="col-lg-12 mb-3">
                <p>
                  <span className="me-3">Almond Milk — $0.50</span>
                  <span className="me-3">Lactose Free Milk — $0.50</span>
                  <span className="me-3">Soy Milk — $0.50</span>
                  <span className="me-3">Oat Milk — $0.50</span>
                  <span className="me-3">Extra Shot — $0.50</span>
                  <span className="me-3">Flavored Syrup — $0.50</span>
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === "food" && (
          <>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="row fw-bold border-bottom pb-2 mb-2">
                  <div className="col-8">
                    <h4>Sandwich</h4>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Salami</div>
                  <div className="col-4 text-center">$11.00</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="row fw-bold border-bottom pb-2 mb-2">
                  <div className="col-8">
                    <h4>Pastries</h4>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Crossiant</div>
                  <div className="col-4 text-center">$5.00</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="row fw-bold border-bottom pb-2 mb-2">
                  <div className="col-8">
                    <h4>Cake/Cookies</h4>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>

                <div className="row mb-2 align-items-center">
                  <div className="col-8">Choc Chip Cookie</div>
                  <div className="col-4 text-center">$6.00</div>
                </div>
              </div>
            </div>
            <div className="row">
              <h3 className="border-bottom">Add Extra</h3>
              <div className="col-lg-12 mb-3">
                <p>
                  <span className="me-3">Salami — $2.50</span>
                  <span className="me-3">Ham — $2.50</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
