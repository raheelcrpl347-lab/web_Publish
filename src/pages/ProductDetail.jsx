import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [size, setSize] = useState('');

  // Mock product data based on ID
  const product = {
    name: id === '2' ? "The Seraphina Mermaid" : "The Celeste Gown",
    price: id === '2' ? "4,100" : "3,250",
    image: id === '2' ? "/images/dress2.png" : "/images/dress1.png",
    description: "An absolute masterpiece of modern bridal couture. Delicate hand-embroidered lace flows across the bodice, melting into a dramatic, voluminous skirt. Designed for the bride who wants to leave an unforgettable impression.",
    fabric: "French Alençon Lace, Silk Mikado, Tulle",
    silhouette: id === '2' ? "Mermaid" : "A-Line",
  };

  return (
    <div className="product-detail-page page animate-fade-in" style={{paddingTop: '100px'}}>
      <div className="container section pdp-container">
        
        {/* Gallery */}
        <div className="pdp-gallery">
          <img src={product.image} alt={product.name} className="pdp-main-image" />
          <div className="pdp-thumbnails">
            <img src={product.image} alt="Thumb 1" />
            <img src="/images/hero.png" alt="Thumb 2" />
          </div>
        </div>

        {/* Info */}
        <div className="pdp-info">
          <h1 className="pdp-title">{product.name}</h1>
          <p className="pdp-price">${product.price}</p>
          
          <div className="pdp-description">
            <p>{product.description}</p>
          </div>

          <div className="pdp-details-list">
            <p><strong>Fabric:</strong> {product.fabric}</p>
            <p><strong>Silhouette:</strong> {product.silhouette}</p>
          </div>

          <div className="pdp-size-selector">
            <div className="size-header">
              <span>Select Size</span>
              <Link to="/" className="size-guide">Size Guide</Link>
            </div>
            <div className="size-grid">
              {['0', '2', '4', '6', '8', '10', '12', '14'].map(s => (
                <button 
                  key={s} 
                  className={`size-btn ${size === s ? 'selected' : ''}`}
                  onClick={() => setSize(s)}
                >
                  US {s}
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-actions">
            <button className="btn-primary w-100">Add to Bag - ${product.price}</button>
            <Link to="/appointment" className="btn-secondary w-100 pdp-book-btn">Book a Fitting</Link>
          </div>

          {/* Trust Signals */}
          <div className="pdp-trust">
            <div className="trust-item">
              <ShieldCheck size={24} />
              <span>Secure Payment</span>
            </div>
            <div className="trust-item">
              <RefreshCcw size={24} />
              <span>14-Day Returns</span>
            </div>
            <div className="trust-item">
              <Truck size={24} />
              <span>Complimentary Shipping</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
