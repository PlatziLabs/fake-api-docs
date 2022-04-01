/* jsxImportSource: react */
import React, { useState, useEffect } from 'react';
import './ProductsAPI.css';

export default function ProductsAPI() {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

	return (
		<div className='prod-gallery'>
			{products.map(item => (
        <div>
          <img src={item.images[0]} alt="product" />
          <div className='title'>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
		</div>
	);
}
