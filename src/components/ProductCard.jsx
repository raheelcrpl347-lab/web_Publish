import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ id, name, price, image, colors = [] }) => {
  const [activeColor, setActiveColor] = useState(colors.length > 0 ? colors[0] : null);

  const displayImage = activeColor ? activeColor.src : image;

  return (
    <div className="product-card animate-fade-in">
      <div className="product-image-container">
        <Link to={`/product/${id}`}>
          <div className="image-wrapper">
             <img src={displayImage} alt={name} className="product-image" />
          </div>
        </Link>
        <div className="product-actions">
          <button className="btn-quick-add">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="product-details">
        <div className="product-info-left">
          <Link to={`/product/${id}`}>
            <h3 className="product-name">{name}</h3>
          </Link>
          <p className="product-price">{price}</p>
        </div>
        
        {/* Color Swatches */}
        {colors.length > 0 && (
          <div className="product-colors">
            {colors.map((colorObj, index) => (
              <button
                key={index}
                className={`color-swatch ${activeColor && activeColor.hex === colorObj.hex ? 'active' : ''}`}
                style={{ backgroundColor: colorObj.hex }}
                onClick={(e) => {
                  e.preventDefault(); // Prevent link navigation
                  setActiveColor(colorObj);
                }}
                aria-label={`Select color ${colorObj.hex}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
