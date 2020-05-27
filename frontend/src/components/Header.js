import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header(props) {
  const cart = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    props.history.push("/shipping");
  };
  return (
    <header id="aa-header">
      {/* start header top  */}
      <div className="aa-header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-header-top-area">
                {/* start header top left */}
                <div className="aa-header-top-left">
                  {/* start language */}
                  <div className="aa-language">
                    <div className="dropdown">
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <img src="/img/flag/english.jpg" alt="english flag" />
                        ENGLISH
                        <span className="caret" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a href="#">
                            <img src="/img/flag/french.jpg" alt />
                            FRENCH
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/flag/english.jpg" alt />
                            ENGLISH
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* / language */}
                  {/* start currency */}
                  <div className="aa-currency">
                    <div className="dropdown">
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <i className="fa fa-usd" />
                        USD
                        <span className="caret" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a href="#">
                            <i className="fa fa-euro" />
                            EURO
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-jpy" />
                            YEN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* / currency */}
                  {/* start cellphone */}
                  <div className="cellphone hidden-xs">
                    <p>
                      <span className="fa fa-phone" />
                      00-62-658-658
                    </p>
                  </div>
                  {/* / cellphone */}
                </div>
                {/* / header top left */}
                <div className="aa-header-top-right">
                  <ul className="aa-head-top-nav-right">
                    <li>
                      <a href="account.html">My Account</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li className="hidden-xs">
                      <Link to="/cart">My Cart</Link>
                    </li>
                    <li className="hidden-xs">
                      <Link to="/Checkout">Checkout</Link>
                    </li>
                    <li>
                      <a href data-toggle="modal" data-target="#login-modal">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / header top  */}
      {/* start header bottom  */}
      <div className="aa-header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-header-bottom-area">
                {/* logo  */}
                <div className="aa-logo">
                  {/* Text based logo */}
                  <a href="/">
                    <span className="fa fa-shopping-cart" />
                    <p>
                      Pizza<strong>Shop</strong>
                      <span>Get your pizza on Door </span>
                    </p>
                  </a>
                  {/* img based logo */}
                  {/* <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> */}
                </div>
                {/* / logo  */}
                {/* cart box */}
                <div className="aa-cartbox">
                  <Link to="/cart">
                    <a className="aa-cart-link" href="#">
                      <span className="fa fa-shopping-basket" />
                      <span className="aa-cart-title">SHOPPING CART</span>
                      <span className="aa-cart-notify">2</span>
                    </a>
                  </Link>
                </div>
                {/* / cart box */}
                {/* search box */}
                <div className="aa-search-box">
                  <form action>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Search here ex. 'Turkish pizza' "
                    />
                    <button type="submit">
                      <span className="fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* / search box */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / header bottom  */}
    </header>
  );
}
export default Header;
