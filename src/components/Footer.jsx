import React from "react";

const Footer = () => {
  return (
    <footer style={{
      background: "#38761D",
      color: "#FFFFFF",
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "'Inria Sans', sans-serif"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: "wrap",
          gap: 40
        }}>
          <div style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: 24, marginBottom: 10 }}>Ourion</h3>
            <p style={{ fontSize: 14, opacity: 0.9, maxWidth: 300 }}>
              We believe recycling should be accessible and simple. 
              Know how. With confidence, you can now recycle 
              correctly, playing a key role in protecting our planet.
            </p>
            <p style={{ fontSize: 14, marginTop: 15 }}>
              📧 hello@ourion.eco
            </p>
          </div>

          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: 16, marginBottom: 10 }}>Information</h4>
            <ul style={{ listStyle: "none", padding: 0, fontSize: 14, opacity: 0.9 }}>
              <li style={{ marginBottom: 8 }}>How It Works</li>
              <li style={{ marginBottom: 8 }}>Support Us</li>
              <li style={{ marginBottom: 8 }}>About Us</li>
            </ul>
          </div>

          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: 16, marginBottom: 10 }}>Resources</h4>
            <ul style={{ listStyle: "none", padding: 0, fontSize: 14, opacity: 0.9 }}>
              <li style={{ marginBottom: 8 }}>Recycling Guide</li>
              <li style={{ marginBottom: 8 }}>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;