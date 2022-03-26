import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
//    console.log(products);
    useEffect(() =>{
     fetch("data.json")
     .then(res => res.json())
     .then(data => setProduct(data))
    },[])
// console.log(products);
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product]

         setCart(newCart);
         
    }
    // console.log(cart);
    return (
        <div className='shop-container'>
            <div className='product-container'>
              
           { 
               products.map(product => <Product key = {product.id} product = {product} handleAddToCart = {handleAddToCart}    ></Product> )
           }

            </div>
            <div className='cart-container'>
                <h3 className='mt-5'>Order Now</h3>
               {
             cart.map(singleCart =><Cart key = {singleCart.id} cart= {singleCart}></Cart> )
               }
            </div>

        </div>
    );
};

export default Shop;