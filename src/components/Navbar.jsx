import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 850);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={navStyle}>
      {/* 1. TOP LEFT: Pretty Font Name Only */}
      <Link to="/" style={logoContainerStyle}>
        <span style={brandNameStyle}>Ourion</span>
      </Link>

      {/* 2. DESKTOP LINKS (Hidden on Mobile) */}
      {!isMobile && (
        <div style={linkGroupStyle}>
          <Link to="/information" style={linkStyle}>Information</Link>
          <Link to="/howitworks" style={linkStyle}>How it Works</Link>
          <Link to="/supportus" style={linkStyle}>Support Us</Link>
          <Link to="/aboutus" style={linkStyle}>About Us</Link>
        </div>
      )}

      {/* 3. MOBILE HAMBURGER (Only on Mobile) */}
      {isMobile && (
        <button onClick={toggleMenu} style={hamburgerButtonStyle}>
          {isOpen ? '✕' : '☰'}
        </button>
      )}

      {/* 4. MOBILE DROPDOWN MENU */}
      {isMobile && isOpen && (
        <div style={mobileMenuDropdownStyle}>
          <Link to="/information" style={mobileLinkStyle} onClick={toggleMenu}>Information</Link>
          <Link to="/howitworks" style={mobileLinkStyle} onClick={toggleMenu}>How it Works</Link>
          <Link to="/supportus" style={mobileLinkStyle} onClick={toggleMenu}>Support Us</Link>
          <Link to="/aboutus" style={mobileLinkStyle} onClick={toggleMenu}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

// --- STYLES ---

const navStyle = {
  // Fix: Removed duplicate 'position' key to resolve ESLint warning
  position: "sticky",
  top: 0,
  zIndex: 2000,
  backgroundColor: "#F3F3E7",
  padding: "15px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "'Inria Sans', sans-serif",
  borderBottom: "1px solid rgba(56, 118, 29, 0.1)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
};

const brandNameStyle = {
  fontFamily: "'Faculty Glyphic', cursive", 
  fontSize: '28px', // Slightly larger since there is no icon logo
  color: '#38761D',
  fontWeight: 'normal'
};

const linkGroupStyle = {
  display: 'flex',
  gap: '30px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#6B9E3E',
  fontSize: '13px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const hamburgerButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '28px',
  color: '#38761D',
  cursor: 'pointer'
};

const mobileMenuDropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#F3F3E7',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
  borderBottom: '1px solid rgba(56, 118, 29, 0.1)',
  boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
};

const mobileLinkStyle = {
  ...linkStyle,
  fontSize: '16px',
  textAlign: 'center',
  padding: '15px 0'
};

export default Navbar;