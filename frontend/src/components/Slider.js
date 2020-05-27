import React from "react";
import { NavLink, Link } from "react-router-dom";

function Slider() {
  return (
    <section id="aa-promo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-promo-area">
              <div className="row">
                {/* promo left */}
                <div className="col-md-5 no-padding">
                  <div className="aa-promo-left">
                    <div className="aa-promo-banner">
                      <img src="/img/promo-banner-1.jpg" alt="img" />
                      <div className="aa-prom-content">
                        <span>75% Off</span>
                        <h4>
                          <a href="#">For Vegan</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* promo right */}
                <div className="col-md-7 no-padding">
                  <div className="aa-promo-right">
                    <div className="aa-single-promo-right">
                      <div className="aa-promo-banner">
                        <img src="/img/promo-banner-3.jpg" alt="img" />
                        <div className="aa-prom-content">
                          <span>Exclusive Item</span>
                          <h4>
                            <a href="#">For Old peoples</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="aa-single-promo-right">
                      <div className="aa-promo-banner">
                        <img src="/img/promo-banner-2.jpg" alt="img" />
                        <div className="aa-prom-content">
                          <span>Sale Off</span>
                          <h4>
                            <a href="#">On Turkish</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="aa-single-promo-right">
                      <div className="aa-promo-banner">
                        <img src="/img/promo-banner-4.jpg" alt="img" />
                        <div className="aa-prom-content">
                          <span>New Arrivals</span>
                          <h4>
                            <a href="#">For Kids</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="aa-single-promo-right">
                      <div className="aa-promo-banner">
                        <img src="/img/promo-banner-5.jpg" alt="img" />
                        <div className="aa-prom-content">
                          <span>25% Off</span>
                          <h4>
                            <a href="#">For Spice lovers</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slider;
