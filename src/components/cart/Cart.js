import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const {name,img} = props.cart
    return (
        <div>
          <img className='img-fluid w-25 rounded-circle' src={img} alt="" />   
          <p>{name} </p>
        </div>
    );
};

export default Cart;