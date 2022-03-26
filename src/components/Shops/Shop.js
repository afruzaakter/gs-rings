import React from 'react';
import './Shop.css'

// import { FaShoppingCart } from 'react-icons/fa';
import RingModal from '../RingItems/RingModal';

const Shop = (props) => {
    // console.log(props.rings);
    const {name,price,img,metaType}  = props.rings;
  
    // const handlarAddToCart = (id) => {
    //     console.log("click me",id );
    // }

    return (
        <div className='card col-md-6 col-lg-4 mb-5 container'>
           <div className='image-container'>
           <img className='img-fluid' src={img} alt="" />
           </div>
            <h4 className='mt-3 text-color'>{name}</h4>
            <h4 className='text-color'>Price: ${price} </h4>
            <h6 className='text-color'>Meta Type: {metaType} </h6>
            <div>
                {/* <button onClick={() => props.handlarAddToCart(props.rings) } className='btn mt-2 cart-btn '> Add to Cart <FaShoppingCart size ={27} /> </button>  */}

                <RingModal></RingModal>
            </div>


        </div>
    );
};

export default Shop;