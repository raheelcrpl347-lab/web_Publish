import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero.png')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content container text-center animate-fade-in">
          <h1 className="hero-title">Find the Dress That Defines Your Moment</h1>
          <p className="hero-subtitle">Exquisite craftsmanship for the modern bride.</p>
          <div className="hero-cta-group">
            <Link to="/shop" className="btn-primary">Shop Collection</Link>
            <Link to="/appointment" className="btn-secondary">Book Appointment</Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof section bg-champagne text-center">
        <div className="container">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"An unforgettable experience. The dress made me feel like royalty on my special day."</p>
          <p className="testimonial-author">- Elena R., Aura Bride</p>
          <div className="featured-in">
            <span>As featured in Vogue</span>
            <span>Harper's Bazaar</span>
            <span>Brides</span>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers section container">
        <div className="section-header text-center">
          <h2>The Signature Collection</h2>
          <p>Our most loved bespoke and ready-to-wear pieces</p>
        </div>
        <div className="product-grid">
          <ProductCard id="1" name="The Celeste Gown" price="3,250" image="/images/dress1.png" />
          <ProductCard id="2" name="The Seraphina Mermaid" price="4,100" image="/images/dress2.png" />
          <ProductCard id="3" name="Opal A-Line Pearl" price="2,800" image="/images/dress1.png" />
          <ProductCard id="4" name="Aurelia Lace Classic" price="3,500" image="/images/dress2.png" />
        </div>
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link to="/shop" className="btn-secondary">View All Styles</Link>
        </div>
      </section>

      {/* Emotional Story Section */}
      <section className="story-section section bg-ivory">
        <div className="container story-container">
          <div className="story-image">
            <img src="/images/boutique.png" alt="Aura Bridal Boutique" />
          </div>
          <div className="story-content">
            <h2>Your Journey Begins Here</h2>
            <p>Every Aura Bridal dress is a testament to timeless elegance, crafted meticulously for the sophisticated bride. We don't just sell dresses; we curate the feeling of absolute confidence.</p>
            <Link to="/about" className="btn-secondary">Discover Our Atelier</Link>
          </div>
        </div>
      </section>

      {/* Urgency & Final CTA */}
      <section className="final-cta section text-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>The Spring Collection is Limiting Fast</h2>
          <p>Reserve your fitting before our calendar closes for the season.</p>
          <Link to="/appointment" className="btn-primary">Start Your Bridal Journey Today</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
