import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, name, price, image }) => {
  return (
    <div className="product-card animate-fade-in">
      <div className="product-image-container">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="product-image" />
        </Link>
        <div className="product-actions">
          <Link to={`/product/${id}`} className="btn-secondary btn-quickview">Quick View</Link>
          <Link to="/appointment" className="btn-primary btn-try">Book Fitting</Link>
        </div>
      </div>
      <div className="product-details">
        <Link to={`/product/${id}`}>
          <h3 className="product-name">{name}</h3>
        </Link>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
