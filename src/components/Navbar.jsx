import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) setMenuOpen(false);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav style={navContainerStyle}>
      {isMobile ? (
        /* --- MOBILE LAYOUT --- */
        <div style={mobileWrapperStyle}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/Ourion_Logo.png" alt="Ourion Logo" style={{ height: '35px' }} />
          </Link>
          
          <button onClick={toggleMenu} style={hamburgerButtonStyle}>
            {menuOpen ? '✕' : '☰'}
          </button>

          {menuOpen && (
            <div style={mobileDropdownStyle}>
              <Link to="/information" onClick={toggleMenu} style={mobileLinkStyle}>Information</Link>
              <Link to="/supportus" onClick={toggleMenu} style={mobileLinkStyle}>Support Us</Link>
              <Link to="/aboutus" onClick={toggleMenu} style={mobileLinkStyle}>About Us</Link>
              <hr style={{ border: '0.5px solid rgba(107, 158, 62, 0.2)', width: '80%', margin: '10px auto' }} />
              <Link to="/beyond-ourion" onClick={toggleMenu} style={mobileLinkStyle}>Beyond Ourion</Link>
              <Link to="/scope-emissions" onClick={toggleMenu} style={mobileLinkStyle}>Scope Emissions</Link>
              <Link to="/political-climates" onClick={toggleMenu} style={mobileLinkStyle}>Political Climates</Link>
              <Link to="/contact-politicians" onClick={toggleMenu} style={mobileLinkStyle}>Contact Politicians</Link>
            </div>
          )}
        </div>
      ) : (
        /* --- DESKTOP LAYOUT --- */
        <div style={desktopGridStyle}>
          {/* Left Links */}
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'flex-end', paddingRight: '40px' }}>
            <Link to="/information" style={linkStyle}>Information</Link>
            <Link to="/supportus" style={linkStyle}>Support Us</Link>
          </div>

          {/* Centered Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="/Ourion_Logo.png" 
              alt="Ourion Logo" 
              style={{ height: '40px', width: 'auto' }} 
            />
          </Link>

          {/* Right Links */}
          <div style={{ display: 'flex', gap: '30px', paddingLeft: '40px', alignItems: 'center' }}>
            <Link to="/aboutus" style={linkStyle}>About Us</Link>
            
            {/* Dropdown Container */}
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <button 
                onClick={toggleDropdown} 
                style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Beyond Ourion {dropdownOpen ? '▴' : '▾'}
              </button>

              {dropdownOpen && (
                <div style={desktopDropdownMenuStyle}>
                  <Link to="/beyond-ourion" style={dropdownLinkStyle} onClick={() => setDropdownOpen(false)}>Beyond Ourion</Link>
                  <Link to="/scope-emissions" style={dropdownLinkStyle} onClick={() => setDropdownOpen(false)}>Understanding Scope Emissions</Link>
                  <Link to="/political-climates" style={dropdownLinkStyle} onClick={() => setDropdownOpen(false)}>Action in Political Climates</Link>
                  <Link to="/contact-politicians" style={dropdownLinkStyle} onClick={() => setDropdownOpen(false)}>Contact Your Local Politicians</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- STYLES ---

const navContainerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 2000,
  backgroundColor: "#F3F3E7",
  fontFamily: "'Inria Sans', sans-serif",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
  width: '100%'
};

const desktopGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr", 
  alignItems: "center",
  padding: "10px 40px",
  maxWidth: '1400px',
  margin: '0 auto'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#6B9E3E',
  fontSize: '13px',
  fontWeight: '600'
};

const desktopDropdownMenuStyle = {
  position: 'absolute',
  top: 'calc(100% + 15px)',
  right: 0,
  backgroundColor: '#F3F3E7',
  minWidth: '240px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 0',
  border: '1px solid rgba(107, 158, 62, 0.1)'
};

const dropdownLinkStyle = {
  textDecoration: 'none',
  color: '#6B9E3E',
  fontSize: '12px',
  fontWeight: '500',
  padding: '10px 20px',
  transition: 'background-color 0.2s',
  display: 'block',
  whiteSpace: 'nowrap'
};

/* Mobile Specific Styles */
const mobileWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px'
};

const hamburgerButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#6B9E3E',
  fontSize: '28px',
  cursor: 'pointer'
};

const mobileDropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  backgroundColor: '#F3F3E7',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
  borderBottom: '1px solid rgba(0,0,0,0.05)'
};

const mobileLinkStyle = {
  textDecoration: 'none',
  color: '#6B9E3E',
  fontSize: '18px',
  fontWeight: '600',
  padding: '12px 0',
  textAlign: 'center'
};

export default Navbar;