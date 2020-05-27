import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";

function ShippingScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("payment");
  };
  return (
    <div>
      <section id="aa-catg-head-banner">
        <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
        <div className="aa-catg-head-banner-area">
          <div className="container">
            <div className="aa-catg-head-banner-content">
              <h2>Checkout</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Checkout</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / catg header banner section */}
      {/* Cart view section */}
      <section id="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout-area">
                <form action>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="checkout-left">
                        <div className="panel-group" id="accordion">
                          {/* Login section */}
                          <div className="panel panel-default aa-checkout-login">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseTwo"
                                >
                                  Client Login
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseTwo"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <p>For Checkout Please login</p>
                                <input
                                  type="text"
                                  placeholder="Username or email"
                                />
                                <input type="password" placeholder="Password" />
                                <button type="submit" className="aa-browse-btn">
                                  Login
                                </button>
                                <label htmlFor="rememberme">
                                  <input type="checkbox" id="rememberme" />{" "}
                                  Remember me{" "}
                                </label>
                                <p className="aa-lost-password">
                                  <a href="#">Lost your password?</a>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Billing Details */}
                          <div className="panel panel-default aa-checkout-billaddress">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseThree"
                                >
                                  Billing Details
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseThree"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="First Name*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Company name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="email"
                                        placeholder="Email Address*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input type="tel" placeholder="Phone*" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        cols={8}
                                        rows={3}
                                        defaultValue={"Address*"}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <select>
                                        <option value={0}>
                                          Select Your Country
                                        </option>
                                        <option value={1}>Australia</option>
                                        <option value={2}>Afganistan</option>
                                        <option value={3}>Bangladesh</option>
                                        <option value={4}>Belgium</option>
                                        <option value={5}>Brazil</option>
                                        <option value={6}>Canada</option>
                                        <option value={7}>China</option>
                                        <option value={8}>Denmark</option>
                                        <option value={9}>Egypt</option>
                                        <option value={10}>India</option>
                                        <option value={11}>Iran</option>
                                        <option value={12}>Israel</option>
                                        <option value={13}>Mexico</option>
                                        <option value={14}>UAE</option>
                                        <option value={15}>UK</option>
                                        <option value={16}>USA</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Appartment, Suite etc."
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="City / Town*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="District*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Postcode / ZIP*"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Shipping Address */}
                          <div className="panel panel-default aa-checkout-billaddress">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseFour"
                                >
                                  Shippping Address
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseFour"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="First Name*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Company name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="email"
                                        placeholder="Email Address*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input type="tel" placeholder="Phone*" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        cols={8}
                                        rows={3}
                                        defaultValue={"Address*"}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <select>
                                        <option value={0}>
                                          Select Your Country
                                        </option>
                                        <option value={1}>Australia</option>
                                        <option value={2}>Afganistan</option>
                                        <option value={3}>Bangladesh</option>
                                        <option value={4}>Belgium</option>
                                        <option value={5}>Brazil</option>
                                        <option value={6}>Canada</option>
                                        <option value={7}>China</option>
                                        <option value={8}>Denmark</option>
                                        <option value={9}>Egypt</option>
                                        <option value={10}>India</option>
                                        <option value={11}>Iran</option>
                                        <option value={12}>Israel</option>
                                        <option value={13}>Mexico</option>
                                        <option value={14}>UAE</option>
                                        <option value={15}>UK</option>
                                        <option value={16}>USA</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Appartment, Suite etc."
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="City / Town*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="District*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Postcode / ZIP*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        cols={8}
                                        rows={3}
                                        defaultValue={"Special Notes"}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-right">
                        <h4>Order Summary</h4>
                        <div className="aa-order-summary-area">
                          <table className="table table-responsive">
                            <thead>
                              <tr>
                                <th>Pizzas</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map((item) => (
                                <tr>
                                  <td>{item.name}</td>
                                  <td>${item.price}</td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Subtotal</th>
                                <td>
                                  ${" "}
                                  {cartItems.reduce(
                                    (a, c) => a + c.price * c.qty,
                                    0
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <th>Tax</th>
                                <td>$35</td>
                              </tr>
                              <tr>
                                <th>Total</th>
                                <td>$785</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <h4>Payment Method</h4>
                        <div className="aa-payment-method">
                          <label htmlFor="cashdelivery">
                            <input
                              type="radio"
                              id="cashdelivery"
                              name="optionsRadios"
                            />{" "}
                            Cash on Delivery{" "}
                          </label>
                          <label htmlFor="paypal">
                            <input
                              type="radio"
                              id="paypal"
                              name="optionsRadios"
                              defaultChecked
                            />{" "}
                            Via Paypal{" "}
                          </label>
                          <img
                            src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                            border={0}
                            alt="PayPal Acceptance Mark"
                          />
                          <input
                            type="submit"
                            defaultValue="Place Order"
                            className="aa-browse-btn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ShippingScreen;
