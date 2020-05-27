import React from "react";

function Testimonial() {
  return (
    <div>
      {/* Support section */}
      <section style={{ marginTop: 22 }} id="aa-support">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-support-area">
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-truck" />
                    <h4>FREE SHIPPING </h4>
                    <p>We did not charge for shipping</p>
                  </div>
                </div>
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-clock-o" />
                    <h4>Deliver Piza in 30 mints</h4>
                    <p>After Submited order you will get in 30 mint sharp.</p>
                  </div>
                </div>
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-phone" />
                    <h4>SUPPORT 24/7</h4>
                    <p>Contact Us any Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Support section */}

      {/* Latest Blog */}
      <section id="aa-latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-latest-blog-area">
                <h2>LATEST Pizza Deals</h2>
                <div className="row">
                  {/* single latest blog */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#">
                          <img src="img/promo-banner-1.jpg" alt="img" />
                        </a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#">
                            <i className="fa fa-eye" />
                            5K
                          </span>
                          <a href="#">
                            <i className="fa fa-thumbs-o-up" />
                            426
                          </a>
                          <a href="#">
                            <i className="fa fa-comment-o" />
                            20
                          </a>
                          <span href="#">
                            <i className="fa fa-clock-o" />
                            June 26, 2016
                          </span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title">
                          <a href="#">Buy one get one Free Tuna piza</a>
                        </h3>

                        <a href="#" className="aa-read-mor-btn">
                          Read more <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* single latest blog */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#">
                          <img src="img/promo-banner-3.jpg" alt="img" />
                        </a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#">
                            <i className="fa fa-eye" />
                            5K
                          </span>
                          <a href="#">
                            <i className="fa fa-thumbs-o-up" />
                            426
                          </a>
                          <a href="#">
                            <i className="fa fa-comment-o" />
                            20
                          </a>
                          <span href="#">
                            <i className="fa fa-clock-o" />
                            June 26, 2016
                          </span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title">
                          <a href="#">Extra large BBQ With 2 Drinks Free</a>
                        </h3>

                        <a href="#" className="aa-read-mor-btn">
                          Read more <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* single latest blog */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#">
                          <img src="img/promo-banner-1.jpg" alt="img" />
                        </a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#">
                            <i className="fa fa-eye" />
                            5K
                          </span>
                          <a href="#">
                            <i className="fa fa-thumbs-o-up" />
                            426
                          </a>
                          <a href="#">
                            <i className="fa fa-comment-o" />
                            20
                          </a>
                          <span href="#">
                            <i className="fa fa-clock-o" />
                            June 26, 2016
                          </span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title">
                          <a href="#">Turkis pizza Discount for Students</a>
                        </h3>

                        <a href="#" className="aa-read-mor-btn">
                          Read more <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Latest Blog */}
      {/* Client Brand */}
    </div>
  );
}
export default Testimonial;
