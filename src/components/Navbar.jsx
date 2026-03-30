import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient"; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. Get initial user session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // 2. Listen for auth changes (Login/Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
              <Link to="/howitworks" onClick={toggleMenu} style={mobileLinkStyle}>How it Works</Link>
              <Link to="/aboutus" onClick={toggleMenu} style={mobileLinkStyle}>About Us</Link>
              <div style={{ padding: '10px 20px' }}>
                {user ? (
                  <Link to="/profile" onClick={toggleMenu} style={mobileAuthButtonStyle}>My Profile</Link>
                ) : (
                  <Link to="/auth" onClick={toggleMenu} style={mobileAuthButtonStyle}>Login / Sign Up</Link>
                )}
              </div>
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

          {/* Right Links + Dynamic Button */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', paddingLeft: '40px' }}>
            <Link to="/howitworks" style={linkStyle}>How it Works</Link>
            <Link to="/aboutus" style={linkStyle}>About Us</Link>
            
            {user ? (
              <Link to="/profile" style={desktopAuthButtonStyle}>Profile</Link>
            ) : (
              <Link to="/auth" style={desktopAuthButtonStyle}>Login</Link>
            )}
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

const desktopAuthButtonStyle = {
  textDecoration: 'none',
  backgroundColor: '#6B9E3E',
  color: 'white',
  fontSize: '12px',
  fontWeight: '600',
  padding: '8px 20px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(107, 158, 62, 0.2)'
};

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
  padding: '15px 0',
  textAlign: 'center'
};

const mobileAuthButtonStyle = {
  display: 'block',
  textDecoration: 'none',
  backgroundColor: '#6B9E3E',
  color: 'white',
  fontSize: '16px',
  fontWeight: '600',
  padding: '15px 0',
  textAlign: 'center',
  borderRadius: '12px',
  marginTop: '10px'
};

export default Navbar;