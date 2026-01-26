import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#F3F3E7",
      padding: "10px 40px",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr", // Creates three equal columns
      alignItems: "center",
      fontFamily: "'Inria Sans', sans-serif",
      borderBottom: "1px solid rgba(0,0,0,0.05)"
    }}>
      {/* Left Links */}
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'flex-end', paddingRight: '40px' }}>
        <Link to="/info" style={linkStyle}>Information</Link>
        <Link to="/support" style={linkStyle}>Support Us</Link>
      </div>

      {/* Centered Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/logo.svg" 
          alt="Ourion Logo" 
          style={{ height: '40px', width: 'auto' }} 
        />
      </Link>

      {/* Right Links */}
      <div style={{ display: 'flex', gap: '30px', paddingLeft: '40px' }}>
        <Link to="/how-it-works" style={linkStyle}>How it Works</Link>
        <Link to="/about" style={linkStyle}>About Us</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#6B9E3E',
  fontSize: '13px',
  fontWeight: '600'
};

export default Navbar;