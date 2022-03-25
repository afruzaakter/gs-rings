import React, { useEffect, useState } from 'react';
import Shop from '../Shops/Shop';

const Product = () => {

    const [rings, setRings] = useState([]);
//   console.log(rings);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setRings(data))
    },[])

    return (
        <div className='container' >
           <div className='row '>
           {
                rings.map(ring => <Shop key = {ring.id} rings = {ring}></Shop>)
            }
           </div>
        </div>
    );
};

export default Product;