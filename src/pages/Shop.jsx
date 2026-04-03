import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const products = [
  { id: 1, name: "The Celeste Gown", price: "3,250", image: "/images/dress1.png", category: "A-Line" },
  { id: 2, name: "The Seraphina Mermaid", price: "4,100", image: "/images/dress2.png", category: "Mermaid" },
  { id: 3, name: "Opal A-Line Pearl", price: "2,800", image: "/images/dress1.png", category: "A-Line" },
  { id: 4, name: "Aurelia Lace Classic", price: "3,500", image: "/images/dress2.png", category: "Ball Gown" },
  { id: 5, name: "Evelyn Silk Slip", price: "1,900", image: "/images/dress1.png", category: "Slip" },
  { id: 6, name: "Victoria Corset", price: "4,500", image: "/images/dress2.png", category: "Ball Gown" }
];

const Shop = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="shop-page page animate-fade-in">
      
      <section className="shop-header text-center bg-champagne">
        <div className="container" style={{paddingTop: '100px'}}>
          <h1>The Collection</h1>
          <p>Discover our curated selection of breathtaking bridal wear.</p>
        </div>
      </section>

      <section className="shop-content container section">
        
        <div className="shop-filters">
          <span>Filter by Silhouette:</span>
          {['All', 'A-Line', 'Mermaid', 'Ball Gown', 'Slip'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
          
          <div className="shop-sort">
            <select>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </section>
    </div>
  );
};

export default Shop;
