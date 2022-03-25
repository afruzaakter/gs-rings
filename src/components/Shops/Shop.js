import React from 'react';
import './Shop.css'
const Shop = (props) => {
    console.log(props.rings);
    const {name,price,img, }  = props.rings;
    return (
        <div className='card col-md-6 col-lg-4 mb-5 container'>
           <div className='image-container'>
           <img  src={img} alt="" />
           </div>
            <h4 className='mt-3'>{name}</h4>
            <h6>Price: ${price} </h6>
            <div>
                <button>Add to Cart </button>
            </div>
        </div>
    );
};

export default Shop;