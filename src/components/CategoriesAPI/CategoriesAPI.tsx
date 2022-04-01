/* jsxImportSource: react */
import React, { useState, useEffect } from 'react';
import './CategoriesAPI.css';

export default function CategoriesAPI({url}) {

  const [items, setItems] = useState([]);

  async function fetchAPI() {
    const response = await fetch(url);
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

	return (
		<div className='gallery'>
			{items.map(item => (
        <div>
          <img src={item.image} alt="category" />
          <div className='title'>
            <h5>{item.name}</h5>
          </div>
        </div>
      ))}
		</div>
	);
}
