import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import { detailsProduct } from "../actions/productActions";
import Slider from "../components/Slider";
import Testimonial from "../components//Testimonial";

const HomeScreen = (props) => {
  const productList = useSelector((state) => state.productList);

  const { products, loading, error } = productList;

  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    dispatch(detailsProduct(props.match.params.id));

    return () => {
      //
    };
  }, []);
  const handleAddToCart = () => {
    props.history.push("/product/");
  };
  return loading ? (
    <div> Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <div>
        <div>
          <section style={{ marginTop: 19 }} id="aa-catg-head-banner">
            <img src="/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
            <div className="aa-catg-head-banner-area">
              <div className="container">
                <div className="aa-catg-head-banner-content">
                  <h2>Enjoy Our COVID-19 Deals </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Slider />
      <section id="aa-popular-category">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-popular-category-area">
                  <ul className="nav nav-tabs aa-products-tab">
                    <li className="active">
                      <a href="#popular" data-toggle="tab">
                        Pizzas
                      </a>
                    </li>
                    <li>
                      <a href="#featured" data-toggle="tab">
                        Pasta
                      </a>
                    </li>
                    <li>
                      <a href="#latest" data-toggle="tab">
                        Buger
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tab-content">
        <div className="tab-pane fade in active" id="men">
          <ul className="aa-product-catg">
            {products.map((product) => (
              <li key={product._id}>
                <figure>
                  <Link
                    className="aa-product-img"
                    to={"/product/" + product._id}
                  >
                    <img src={product.image} alt="piiza image" />

                    <a className="aa-add-card-btn" onClick={handleAddToCart}>
                      <span className="fa fa-shopping-cart" />
                      View Details
                    </a>
                  </Link>
                  <figcaption>
                    <h4 className="aa-product-title">
                      <a href="#">{product.name}</a>
                    </h4>
                    <span className="aa-product-price">${product.price}</span>
                    <span className="aa-product-price">
                      <del>$100</del>
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
        </div>
      </div>

      <section style={{ marginTop: -53 }} id="aa-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-banner-area">
                  <a href="#">
                    <img
                      src="img/fashion-banner.jpg"
                      alt="fashion banner img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

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
                    <div className="simpleLens-gallery-container" id="demo-1">
                      <div className="simpleLens-container">
                        <div className="simpleLens-big-image-container">
                          <a
                            className="simpleLens-lens-image"
                            data-lens-image="img/view-slider/large/polo-shirt-1.png"
                          >
                            <img
                              src="img/view-slider/medium/polo-shirt-1.png"
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
                    <h3>100</h3>
                    <div className="aa-price-block">
                      <span className="aa-product-view-price">$34.99</span>
                      <p className="aa-product-avilability">
                        Avilability: <span>In stock</span>
                      </p>
                    </div>
                    <p>Great pizza</p>
                    <h4>Size</h4>
                    <div className="aa-prod-view-size">
                      <a href="#">S</a>
                      <a href="#">M</a>
                      <a href="#">L</a>
                      <a href="#">XL</a>
                    </div>
                    <div className="aa-prod-quantity">
                      <form action>
                        <select name id>
                          <option value={0} selected={1}>
                            1
                          </option>
                          <option value={1}>2</option>
                          <option value={2}>3</option>
                          <option value={3}>4</option>
                          <option value={4}>5</option>
                          <option value={5}>6</option>
                        </select>
                      </form>
                      <p className="aa-prod-category">
                        Category: <a href="#">Tuna Fish</a>
                      </p>
                    </div>
                    <div className="aa-prod-view-bottom">
                      <Link to="/">
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
    </>
  );
};

export default HomeScreen;
