import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';





const ProductList =  (props) => {
  
  const {allProducts, setAllProducts} = props;

  useEffect(()=>{
      axios.get("http://localhost:8000/api/products")
          .then(res=>setAllProducts(res.data.products))
          .catch(err=>console.log(err)) 
  }, [allProducts]); 

  return (
    
  <div className="ProductList">
    <h2>All products:</h2>
    { 
       allProducts.map((elt, index)=> {
        return (
          <div key={index} className='one_product'>
            <Link to={`/products/${elt._id}`}> 
              {elt.title} Page details! 
            </Link>
          </div>
        );
      }) 
    } 
  </div>
  );
};




ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
