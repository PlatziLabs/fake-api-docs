/* jsxImportSource: react */
import React, { useState, useEffect } from 'react';
import './UsersAPI.css';

export default function UsersAPI() {

  const [items, setItems] = useState([]);

  async function fetchAPI() {
    const response = await fetch('https://api.escuelajs.co/api/v1/users');
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

	return (
		<div className='users-gallery'>
			{items.map((item, index) => (
        <div key={index}>
          <img src={item.avatar} alt="user" />
          <div className='title'>
            <h5>{item.email}</h5>
          </div>
        </div>
      ))}
		</div>
	);
}
