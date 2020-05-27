import React from "react";

function NavBar() {
  return (
    <section id="menu">
      <div className="container">
        <div className="menu-area">
          {/* Navbar */}
          <div className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="navbar-collapse collapse">
              {/* Left nav */}
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">
                    Pizza
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Margherita</a>
                    </li>
                    <li>
                      <a href="#">Veggie Crush</a>
                    </li>
                    <li>
                      <a href="#">Tropical Tuna</a>
                    </li>
                    <li>
                      <a href="#">Napoletana</a>
                    </li>
                    <li>
                      <a href="#">Diavola</a>
                    </li>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">
                        And more.. <span className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Turkish Pizza</a>
                        </li>
                        <li>
                          <a href="#">BBq Piza</a>
                        </li>
                        <li>
                          <a href="#">Vegan piza</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Beverages <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Coke &amp; Pepsi</a>
                    </li>
                    <li>
                      <a href="#">Beer</a>
                    </li>
                    <li>
                      <a href="#">Juice</a>
                    </li>
                    <li>
                      <a href="#">Lemon Water</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Shakes <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Milk Shake</a>
                    </li>
                    <li>
                      <a href="#">Mango</a>
                    </li>
                    <li>
                      <a href="#">Carrot</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Appetizers</a>
                </li>
                <li>
                  <a href="#">
                    Rice Balls <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Loaded Fries</a>
                    </li>
                    <li>
                      <a href="#">Porky Sliders</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {/*/.nav-collapse */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default NavBar;
