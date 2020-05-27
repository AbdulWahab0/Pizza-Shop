import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import Header from "../components/Header";

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const productList = useSelector((state) => state.productList);

  const { product, loading, error } = productDetails;
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return loading ? (
    <div> Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div>
        <section id="aa-catg-head-banner">
          <img src="/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
          <div className="aa-catg-head-banner-area">
            <div className="container">
              <div className="aa-catg-head-banner-content">
                <h2>PIZZA Details</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Pizza Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="aa-product-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-product-details-area">
                <div className="aa-product-details-content">
                  <div className="row">
                    {/* Modal view slider */}
                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <div className="aa-product-view-slider">
                        <div
                          id="demo-1"
                          className="simpleLens-gallery-container"
                        >
                          <div className="simpleLens-container">
                            <div className="simpleLens-big-image-container">
                              <a
                                data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                className="simpleLens-lens-image"
                              >
                                <img
                                  src={product.image}
                                  className="simpleLens-big-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal view content */}
                    <div className="col-md-7 col-sm-7 col-xs-12">
                      <div className="aa-product-view-content">
                        <h3>{product.name}</h3>
                        <div className="aa-price-block">
                          <span className="aa-product-view-price">
                            ${product.price}
                          </span>
                          <br />
                          <br />
                          <p className="aa-product-avilability">
                            Avilability: <span>In stock</span>
                          </p>
                        </div>
                        <p>{product.description}</p>

                        <div className="aa-prod-quantity">
                          <form action>
                            Qty:{" "}
                            <select
                              value={qty}
                              onChange={(e) => {
                                setQty(e.target.value);
                              }}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </form>

                          <p className="aa-prod-category">
                            Category: <a href="/">{product.category}</a>
                          </p>
                        </div>
                        <div className="aa-prod-view-bottom">
                          <button
                            onClick={handleAddToCart}
                            className="aa-add-to-cart-btn"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aa-product-details-bottom">
                  <ul className="nav nav-tabs" id="myTab2">
                    <li>
                      <a href="#description" data-toggle="tab">
                        Description
                      </a>
                    </li>
                    <li>
                      <a href="#review" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="description">
                      <p>{product.description}</p>
                    </div>
                    <div className="tab-pane fade " id="review">
                      <div className="aa-product-review-area">
                        <h4>2 Reviews for T-Shirt</h4>
                        <ul className="aa-review-nav">
                          <li>
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img
                                    className="media-object"
                                    src="img/testimonial-img-3.jpg"
                                    alt="girl image"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading">
                                  <strong>Marla Jobs</strong> -{" "}
                                  <span>March 26, 2016</span>
                                </h4>
                                <div className="aa-product-rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img
                                    className="media-object"
                                    src="img/testimonial-img-3.jpg"
                                    alt="girl image"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading">
                                  <strong>Marla Jobs</strong> -{" "}
                                  <span>March 26, 2016</span>
                                </h4>
                                <div className="aa-product-rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <h4>Add a review</h4>
                        <div className="aa-your-rating">
                          <p>Your Rating</p>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                        </div>
                        {/* review form */}
                        <form action className="aa-review-form">
                          <div className="form-group">
                            <label htmlFor="message">Your Review</label>
                            <textarea
                              className="form-control"
                              rows={3}
                              id="message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-default aa-review-submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Related product */}
                <div className="aa-product-related-item">
                  <h3>Related Pizzas</h3>
                  <ul
                    style={{ marginLeft: -124 }}
                    className="aa-product-catg aa-related-item-slider"
                  >
                    {products.map((product) => (
                      <li key={product._id}>
                        <figure>
                          <Link
                            className="aa-product-img"
                            to={"/product/" + product._id}
                          >
                            <img src={product.image} alt="piiza image" />
                          </Link>
                          <a className="aa-add-card-btn" href="#">
                            <span className="fa fa-shopping-cart" />
                            Add To Cart
                          </a>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">{product.name}</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                            <span className="aa-product-price">
                              <del>${product.price}</del>
                            </span>
                          </figcaption>
                        </figure>
                        <div className="aa-product-hvr-content">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Wishlist"
                          >
                            <span className="fa fa-heart-o" />
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <span className="fa fa-exchange" />
                          </a>
                          <a
                            href="#"
                            data-toggle2="tooltip"
                            data-placement="top"
                            title="Quick View"
                            data-toggle="modal"
                            data-target="#quick-view-modal"
                          >
                            <span className="fa fa-search" />
                          </a>
                        </div>
                        {/* product badge */}
                        <span className="aa-badge aa-sale" href="#">
                          SALE!
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* quick view modal */}
                  <div
                    className="modal fade"
                    id="quick-view-modal"
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
                          <div className="row">
                            {/* Modal view slider */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="aa-product-view-slider">
                                <div
                                  className="simpleLens-gallery-container"
                                  id="demo-1"
                                >
                                  <div className="simpleLens-container">
                                    <div className="simpleLens-big-image-container">
                                      <a
                                        className="simpleLens-lens-image"
                                        data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                      >
                                        <img
                                          src={product.image}
                                          className="simpleLens-big-image"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Modal view content */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="aa-product-view-content">
                                <h3>{product.name}</h3>
                                <div className="aa-price-block">
                                  <span className="aa-product-view-price">
                                    ${product.price}
                                  </span>
                                  <p className="aa-product-avilability">
                                    Avilability: <span>In stock</span>
                                  </p>
                                </div>
                                <p>{product.description}</p>
                                <h4>Size</h4>
                                <div className="aa-prod-view-size">
                                  <a href="#">S</a>
                                  <a href="#">M</a>
                                  <a href="#">L</a>
                                  <a href="#">XL</a>
                                </div>
                                <div className="aa-prod-quantity">
                                  <form action>
                                    Qty:{" "}
                                    <select
                                      value={qty}
                                      onChange={(e) => {
                                        setQty(e.target.value);
                                      }}
                                    >
                                      {[
                                        ...Array(product.countInStock).keys(),
                                      ].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
                                    </select>
                                  </form>
                                  <p className="aa-prod-category">
                                    Category: <a href="#">Polo T-Shirt</a>
                                  </p>
                                </div>
                                <div className="aa-prod-view-bottom">
                                  <Link to="/product">
                                    <a href="#" className="aa-add-to-cart-btn">
                                      View Details
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* / quick view modal */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / product category */}
    </div>
  );
};

export default ProductScreen;
