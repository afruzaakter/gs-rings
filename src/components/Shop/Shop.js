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
// add to cart even handler 
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product]

         setCart(newCart);
         
    }

//choose for me even handler add

   const chooseForMeAdd = () => {
    //    console.log('click me');
    if (cart.length > 0) {
        const luckyIndex = [Math.floor(Math.random() * cart.length)];
        setCart([cart[luckyIndex]]);
    } else {
        alert('Please! Choose Your Favorite Product')
    }

   }

//choose Again evenhandler add 

const chooseAgainHandleAdd = () => {
    // console.log('click');
   setCart([])

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
                <h3 className='mt-5'>Selected  Gold</h3>
               
               {
             cart.map(singleCart =><Cart key = {singleCart.id} cart= {singleCart}></Cart> )
               }
               <div>
               <button onClick={chooseForMeAdd } className='btn btn-primary'>Choose 1 For me</button>
               </div>
                <div>
                <button onClick={chooseAgainHandleAdd} className='btn btn-primary mt-3'>Choose Again</button>
                </div>
            </div>

         

            <div className='card w-50 p-3 m-5 mb-5 align-items-center'>
            <h4>Question: How React Works</h4>
            <p>React is a very popular JavaScript library. React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes</p>
            <h4>Question:Difference between props and state</h4>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            <h4>Question: How useState works</h4>
            <p>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components</p>
            </div>
        </div>
    );
};

export default Shop;