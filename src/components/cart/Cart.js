
import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const {name,img} = props.cart
    return (
        <div >
         
        <div className='d-flex  '>
        <img className='img-fluid w-25 ms-2 rounded-circle' src={img} alt="" />  
          <p className='mt-4 ms-3'>{name} </p>
          
        </div>
       
        </div>
        
    );
};

export default Cart;


