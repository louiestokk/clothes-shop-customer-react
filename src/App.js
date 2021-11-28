import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
