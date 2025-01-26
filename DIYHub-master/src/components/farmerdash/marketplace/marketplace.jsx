import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Marketplace.css';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('furniture');

  const API_KEY = 'RRm5Yoak8byFcyDpo1GIo9FO38QRhFK9GRSKAX5qCq576qoJ83ebHrub'; // Replace with your Pexels API key

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query: searchQuery,
            per_page: 12,
          },
        });
        setProducts(response.data.photos);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="marketplace-container">
      <header className="marketplace-header">
        <h1 className="marketplace-title">Sustainable Furniture Marketplace</h1>
        <p className="marketplace-subtitle">Discover unique, handcrafted, and upcycled furniture pieces.</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">🔍</button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.src.medium}
              alt={product.alt}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.alt || 'Beautiful Furniture'}</h3>
              <p className="product-price">${(Math.random() * 500 + 50).toFixed(2)}</p>
              <button
                className="buy-btn"
                onClick={() => alert(`You have selected to buy "${product.alt || 'Beautiful Furniture'}".`)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
