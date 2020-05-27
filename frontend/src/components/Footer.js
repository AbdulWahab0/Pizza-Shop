import React from "react";

function Footer() {
  return (
    <div>
      <section id="aa-subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-subscribe-area">
                <h3>Subscribe for latest Pizza Deals</h3>
                <p>We would love to hear your</p>
                <form action className="aa-subscribe-form">
                  <input type="email" name id placeholder="Enter your Email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Subscribe section */}
      {/* footer */}
      <footer id="aa-footer">
        {/* footer bottom */}
        <div className="aa-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-footer-top-area">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <h3>Main Menu</h3>
                        <ul className="aa-footer-nav">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/">Pizza</a>
                          </li>
                          <li>
                            <a href="/">Burger</a>
                          </li>
                          <li>
                            <a href="#">Pasta</a>
                          </li>
                          <li>
                            <a href="#">Drinks</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <div className="aa-footer-widget">
                          <h3>Burger</h3>
                          <ul className="aa-footer-nav">
                            <li>
                              <a href="#">Chicken</a>
                            </li>
                            <li>
                              <a href="#">Fish</a>
                            </li>
                            <li>
                              <a href="#">BBQ</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <div className="aa-footer-widget">
                          <h3>Pasta</h3>
                          <ul className="aa-footer-nav">
                            <li>
                              <a href="#">Sweet Pasta</a>
                            </li>
                            <li>
                              <a href="#">Spicy</a>
                            </li>
                            <li>
                              <a href="#">Cheese Pasta</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <div className="aa-footer-widget">
                          <h3>Contact Us</h3>
                          <address>
                            <p>Potsdamer street 63,10785,Berlin,Germany</p>
                            <p>
                              <span className="fa fa-phone" />
                              +1 212-982-4589
                            </p>
                            <p>
                              <span className="fa fa-envelope" />
                              wahab3060@gmail.com
                            </p>
                          </address>
                          <div className="aa-footer-social">
                            <a href="#">
                              <span className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <span className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <span className="fa fa-google-plus" />
                            </a>
                            <a href="#">
                              <span className="fa fa-youtube" />
                            </a>
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
        {/* footer-bottom */}
        <div className="aa-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-footer-bottom-area">
                  <p>
                    Designed by{" "}
                    <a href="https://github.com/AbdulWahab0">Abdul Wahab</a>
                  </p>
                  <div className="aa-footer-payment">
                    <span className="fa fa-cc-mastercard" />
                    <span className="fa fa-cc-visa" />
                    <span className="fa fa-paypal" />
                    <span className="fa fa-cc-discover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* / footer */}
      {/* Login Modal */}
      <div
        className="modal fade"
        id="login-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4>Login or Register</h4>
              <form className="aa-login-form" action>
                <label htmlFor>
                  Username or Email address<span>*</span>
                </label>
                <input type="text" placeholder="Username or email" />
                <label htmlFor>
                  Password<span>*</span>
                </label>
                <input type="password" placeholder="Password" />
                <button className="aa-browse-btn" type="submit">
                  Login
                </button>
                <label htmlFor="rememberme" className="rememberme">
                  <input type="checkbox" id="rememberme" /> Remember me
                </label>
                <p className="aa-lost-password">
                  <a href="#">Lost your password?</a>
                </p>
                <div className="aa-register-now">
                  Don't have an account?<a href="account.html">Register now!</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
