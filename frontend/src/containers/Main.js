import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

//Screen
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartScreen from "../screens/CartScreen";
import ShippingScreen from "../screens/ShippingScreen";

//Components
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/Checkout" component={CheckoutScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
