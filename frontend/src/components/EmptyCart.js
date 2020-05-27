import React from "react";

const EmptyCart = (props) => {
  return (
    <section id="cart-view">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cart-view-area">
              <div className="cart-view-table">
                <form action>
                  <div className="table-responsive">
                    <table className="table"></table>
                  </div>
                </form>
                {/* Cart Total view */}
                <div className="cart-view-total">
                  <h4>Cart Totals</h4>

                  <a href="#" className="aa-cart-view-btn">
                    shop more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
