import React, { useEffect, useState } from 'react';
import Shop from '../Shops/Shop';

const Product = () => {

    const [rings, setRings] = useState([]);
//even handlar add
const [ringCart, setRingCart] = useState([])
// console.log(ringCart);

const handlarAddToCart = (ring) => {
    // console.log(ring );
    const newRing = [...ringCart, ring]
    // console.log(newRing);
    setRingCart(newRing);
}

//   console.log(rings);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setRings(data))
    },[])

    return (
        
        <div className='container' >


{/* <div>
      
      {
        ringCart.map((item) =>(<h key={item.id} > {item.name
        }
        </h1>
        ))
    }
    
          </div>  */}



            <h1 className='mt-4 mb-4'> Gold & Silver Rings</h1>
           <div className='row '>
           {
                rings.map(ring => <Shop key = {ring.id} rings = {ring} handlarAddToCart= {handlarAddToCart} ></Shop>)
            }
           </div>

  
     



        </div>
    );
};

export default Product;