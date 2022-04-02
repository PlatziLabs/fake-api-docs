/* jsxImportSource: react */
import React, { useState, useEffect } from 'react';
import './CategoriesAPI.css';

export default function CategoriesAPI() {

  const [items, setItems] = useState([]);

  async function fetchAPI() {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

	return (
		<div className='categories-gallery'>
			{items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="category" />
          <div className='title'>
            <h5>{item.name}</h5>
          </div>
        </div>
      ))}
		</div>
	);
}
