import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import Product from "./pages/Product";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/CartPage";
import { Route, Switch, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideCart from "./components/SideCart";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar></Sidebar>
        <SideCart></SideCart>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" exact component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          
          <Route path="/products/:id"  component={SingleProduct} />
          <Route component={Default} />
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}
export default App;
