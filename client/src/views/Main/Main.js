import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import axios from "axios";
import ProductList from "../../components/ProductForm/ProductList/ProductList";
import ProductForm from "../../components/ProductForm/ProductForm/ProductForm";






const Main = () => {
  const [allProducts, setAllProducts] = useState([]); // lifting state

  return (
    <div className="Main">
      <ProductForm allProducts={allProducts} setAllProducts={setAllProducts} />
      <ProductList allProducts={allProducts} setAllProducts={setAllProducts} />
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;