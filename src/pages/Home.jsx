import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* High-Fashion Hero Section */}
      <section className="hero-section">
        <div className="hero-image-half" style={{ backgroundImage: "url('/images/hero.png')" }}></div>
        <div className="hero-content-half animate-fade-in">
          <div className="hero-text-wrapper">
            <h4 className="hero-label">New Arrival</h4>
            <h1 className="hero-title">Timeless Elegance</h1>
            <p className="hero-subtitle">Discover our exclusive collection designed for the modern aesthetic. Pure, unadulterated luxury.</p>
            <div className="hero-cta-group">
              <Link to="/shop" className="btn-primary">Shop The Look</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Featured Categories */}
      <section className="categories-section section container">
        <div className="category-grid">
          <div className="category-card">
            <img src="/images/celeste_ivory.jpg" alt="Bridal Gowns" />
            <div className="category-card-overlay">
              <h3>Bridal Gowns</h3>
              <Link to="/shop" className="btn-secondary">Explore</Link>
            </div>
          </div>
          <div className="category-card">
            <img src="/images/dress2.png" alt="Evening Wear" />
            <div className="category-card-overlay">
              <h3>Evening Wear</h3>
              <Link to="/shop" className="btn-secondary">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalism Best Sellers */}
      <section className="best-sellers section container">
        <div className="section-header text-center">
          <h2>Trending Now</h2>
        </div>
        <div className="product-grid">
          <ProductCard id="1" name="The Celeste Gown" price="$3,250" image="/images/celeste_ivory.jpg" colors={[
            { hex: '#ffffff', src: '/images/celeste_ivory.jpg' }, 
            { hex: '#f5e6e8', src: '/images/dress1_blush.png' }, 
            { hex: '#e8e2d4', src: '/images/dress1_champagne.png' }
          ]} />
          <ProductCard id="2" name="The Seraphina Mermaid" price="$4,100" image="/images/dress2.png" />
          <ProductCard id="3" name="Opal A-Line Pearl" price="$2,800" image="/images/dress1.png" />
          <ProductCard id="4" name="Aurelia Lace Classic" price="$3,500" image="/images/hero.png" />
        </div>
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <Link to="/shop" className="btn-secondary">View All Styles</Link>
        </div>
      </section>

      {/* Asymmetrical Editorial Story Section */}
      <section className="story-section section">
        <div className="container story-container">
          <div className="story-content">
            <h2 className="story-headline">Redefining Minimalist Luxury.</h2>
            <p>At Vouge, we believe in the power of simplicity. Every silhouette is an exploration of form and fabric, stripping away the excess to reveal the essential beauty of the wearer.</p>
            <Link to="/about" className="link-underline">Read Our Story</Link>
          </div>
          <div className="story-image-wrapper">
            <img src="/images/boutique.png" alt="Vouge Editorial" className="story-image" />
          </div>
        </div>
      </section>

      {/* High Contrast Final CTA */}
      <section className="final-cta section text-center">
        <div className="container cta-content">
          <h2>The Autumn Editorial</h2>
          <p>Sign up to our newsletter for access to exclusive releases.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="YOUR EMAIL ADDRESS" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
