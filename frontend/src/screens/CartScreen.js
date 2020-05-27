import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";

import { useDispatch, useSelector } from "react-redux";
const CartScreen = (props) => {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    return () => {
      //
    };
  }, []);
  const checkoutHandler = () => {
    props.history.push("/shipping");
  };

  return (
    <>
      <div>
        <section id="aa-catg-head-banner">
          <img src="/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
          <div className="aa-catg-head-banner-area">
            <div className="container">
              <div className="aa-catg-head-banner-content">
                <h2>Cart</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Cart Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="cart-view">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-view-area">
                <div className="cart-view-table">
                  <form action>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Pizza image</th>
                            <th>Pizza name</th>
                            <th>Quantity</th>
                            <th>Price</th>

                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.length === 0 ? (
                            <div>
                              <Link to="/">
                                <p
                                  className="aa-cart-view-btn"
                                  style={{ marginTop: 34 }}
                                >
                                  Cart is Empty CLick Here for new order
                                </p>
                              </Link>
                            </div>
                          ) : (
                            cartItems.map((item) => (
                              <tr>
                                <td>
                                  <a href="#">
                                    <img src={item.image} alt="product" />
                                  </a>
                                </td>
                                <td>
                                  <Link to={"/product/" + item.product}>
                                    {item.name}
                                  </Link>
                                </td>

                                <td>
                                  <select
                                    className="aa-cart-quantity"
                                    value={item.qty}
                                    onChange={(e) =>
                                      dispatch(
                                        addToCart(item.product, e.target.value)
                                      )
                                    }
                                  >
                                    {[...Array(item.countInStock).keys()].map(
                                      (x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </td>
                                <td>${item.price}</td>
                                <td>
                                  <a className="remove" href="#">
                                    <fa
                                      onClick={() =>
                                        removeFromCartHandler(item.product)
                                      }
                                      className="fa fa-close"
                                    />
                                  </a>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </form>
                  {/* Cart Total view */}
                  <div className="cart-view-total">
                    <h4>Cart Totals</h4>
                    <table className="aa-totals-table">
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>
                            ${" "}
                            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a
                      href="#"
                      className="aa-cart-view-btn"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                    >
                      Proced to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartScreen;
