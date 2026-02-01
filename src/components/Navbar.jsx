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
        <Link to="/information" style={linkStyle}>Information</Link>
        <Link to="/supportus" style={linkStyle}>Support Us</Link>
      </div>

      {/* Centered Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/Ourion_Logo.png" 
          alt="Ourion Logo" 
          style={{ height: '40px', width: 'auto' }} 
        />
      </Link>

      {/* Right Links */}
      <div style={{ display: 'flex', gap: '30px', paddingLeft: '40px' }}>
        <Link to="/howitworks" style={linkStyle}>How it Works</Link>
        <Link to="/aboutus" style={linkStyle}>About Us</Link>
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