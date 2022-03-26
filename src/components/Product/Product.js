import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);

    const {name, img, price,seller,ratings} = props.product;
// const {handleAddToCart} = props
//    console.log(props);
    return (
        
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p> 
           <p>Price: ${price}</p>
           <p><small>Seller: {seller} </small></p>
           <p><small>Rating: {ratings} </small></p>
          </div>
          <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'><p className='btn-text'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </p>
          
          </button>
        </div>
    );
};

export default Product;


  