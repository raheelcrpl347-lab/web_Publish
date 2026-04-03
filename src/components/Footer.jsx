import React from 'react';
import { Link } from 'react-router-dom';
// Removed lucide imports to fix build
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <h2 className="footer-logo">AURA BRIDAL</h2>
          <p className="footer-desc">Crafting unforgettable moments through luxury bridal wear. Elegance redefined for your special day.</p>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/shop">The Collection</Link>
            <Link to="/custom">Bespoke Design</Link>
            <Link to="/appointment">Book a Fitting</Link>
          </div>

          <div className="footer-column">
            <h3>Customer Care</h3>
            <Link to="/contact">Contact Us</Link>
            <Link to="/">Shipping & Returns</Link>
            <Link to="/">Track Order</Link>
            <Link to="/">Size Guide</Link>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>The Inner Circle</h3>
          <p>Subscribe to receive updates on new collections and exclusive events.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Join</button>
          </form>
          <div className="footer-socials">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">X</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Aura Bridal. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
