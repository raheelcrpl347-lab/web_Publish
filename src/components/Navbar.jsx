import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Left: Desktop Nav */}
        <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/custom" onClick={() => setIsMobileMenuOpen(false)}>Lookbook</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </nav>

        {/* Center: Logo */}
        <Link to="/" className="navbar-logo">
          VOUGE
        </Link>

        {/* Right: Actions */}
        <div className="navbar-actions">
          <button className="icon-btn d-none-mobile" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn d-none-mobile" aria-label="User">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
