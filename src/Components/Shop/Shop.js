import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';

import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data))
    },[])
    return (
        <div>

            <div className='container'>
                 <div className="products">
                    {
                        products.map(product => {
                            return <Product></Product>
                        })
                   }
            </div>
            <div className="cart">
                <h3>Cart</h3>
            </div>
            </div>
           
        </div>
    );
};

export default Shop;