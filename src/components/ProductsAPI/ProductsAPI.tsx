/* jsxImportSource: react */
import React, { useState, useEffect } from 'react';
import './ProductsAPI.css';

export default function ProductsAPI({url}) {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

	return (
		<div className='gallery'>
			{products.map(item => (
        <div>
          <img src={item.images[0]} alt="" />
          <div className='title'>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
		</div>
	);
}
