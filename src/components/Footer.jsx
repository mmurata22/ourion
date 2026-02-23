import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={footerGridStyle}>
          
          {/* Brand Column */}
          <div style={columnStyle}>
            <h3 style={{ 
              fontFamily: "'Faculty Glyphic', cursive", 
              fontSize: 28, 
              marginBottom: 10,
              fontWeight: 'normal' 
            }}>
              Ourion
            </h3>
            <p style={{ fontSize: 14, opacity: 0.9, maxWidth: 300, lineHeight: '1.6' }}>
              We believe recycling should be accessible and simple. 
              With confidence, you can now recycle correctly, 
              playing a key role in protecting our planet.
            </p>
            <p style={{ fontSize: 14, marginTop: 15 }}>
              <a href="mailto:hello@ourion.eco" style={{ color: 'white', textDecoration: 'none' }}>
                📧 hello@ourion.eco
              </a>
            </p>
          </div>

          {/* Navigation Column */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Information</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Link to="/howitworks" style={footerLinkStyle}>How It Works</Link>
              </li>
              <li style={listItemStyle}>
                <Link to="/supportus" style={footerLinkStyle}>Support Us</Link>
              </li>
              <li style={listItemStyle}>
                <Link to="/aboutus" style={footerLinkStyle}>About Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Resources</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Link to="/information" style={footerLinkStyle}>Recycling Guide</Link>
              </li>
              <li style={listItemStyle}>
                <Link to="/terms" style={footerLinkStyle}>Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 20, fontSize: 12, opacity: 0.6 }}>
          © {new Date().getFullYear()} Ourion. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- STYLES ---

const footerStyle = {
  background: "#38761D",
  color: "#FFFFFF",
  padding: "60px 20px 30px",
  textAlign: "center",
  fontFamily: "'Inria Sans', sans-serif"
};

const footerGridStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  flexWrap: "wrap", // This ensures it stacks on mobile
  gap: 40
};

const columnStyle = {
  textAlign: "left",
  flex: "1 1 200px", // Allows columns to grow/shrink and wrap at 200px
};

const headingStyle = {
  fontSize: 16,
  marginBottom: 20,
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0
};

const listItemStyle = {
  marginBottom: 12
};

const footerLinkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: 14,
  opacity: 0.8,
  transition: "opacity 0.2s"
};

export default Footer;