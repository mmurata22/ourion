import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- 1. MAIN PAGE COMPONENT ---
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div style={aboutPageContainer}>
      {/* Header Section */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '56px', color: '#38761D', fontWeight: 400 }}>About Us</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#6B9E3E', fontSize: '20px', lineHeight: '1.6' }}>
          We're on a mission to make recycling accessible, simple, and effective for everyone. 
          Because small actions today create a sustainable tomorrow.
        </p>
      </section>

      {/* Our Mission Hero */}
      <section style={missionHeroStyle}>
        <div style={{ fontSize: '50px', marginBottom: '20px' }}>🌼</div>
        <h2 style={{ color: 'white', fontSize: '42px', marginBottom: '20px' }}>Our Mission</h2>
        <p style={{ color: 'white', maxWidth: '800px', margin: '0 auto', fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
          To empower individuals with the knowledge and tools they need to recycle correctly, 
          reducing waste and protecting our planet for future generations.
        </p>
      </section>

      {/* Story & Impact Grid */}
      <section style={aboutGridSection}>
        <div style={infoCardStyle}>
          <h2 style={cardHeadingStyle}>Our Story</h2>
          <p style={cardBodyStyle}>
            Ourion was born from a simple observation: people want to recycle, but they don't always know how. 
            With confusing symbols, varying local rules, and constantly changing guidelines, proper recycling felt like a puzzle.
          </p>
          <p style={cardBodyStyle}>
            We believed technology could bridge this gap. By combining image recognition with comprehensive recycling data, 
            we created a tool that gives anyone instant, accurate guidance on how to recycle their item.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h2 style={cardHeadingStyle}>Why It Matters</h2>
          <p style={cardBodyStyle}>
            Every year, millions of tons of recyclable materials end up in landfills simply because people don't know the proper way to recycle them. 
            This waste represents lost resources, wasted energy, and unnecessary environmental damage.
          </p>
          <p style={cardBodyStyle}>
            At the same time, contaminated recycling causes entire batches of materials to be sent to landfills instead of being processed. 
            Ourion addresses both problems by making it easy to recycle correctly the first time, every time.
          </p>
        </div>
      </section>

      {/* Join Us CTA */}
      <section style={joinUsSection}>
        <h2 style={{ fontSize: '48px', color: '#38761D', marginBottom: '20px' }}>Join Us</h2>
        <p style={{ color: '#6B9E3E', fontSize: '18px', marginBottom: '40px', maxWidth: '700px' }}>
          We are united by a common goal: making the world a cleaner, greener place. 
          Every scan brings us closer to that vision.
        </p>
        <button 
          onClick={() => navigate('/')} 
          style={ctaButtonStyle}
        >
          Scan Package
        </button>
      </section>
    </div>
  );
};

// --- 2. STYLE DEFINITIONS ---

const aboutPageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '80px 20px',
  fontFamily: "'Inria Sans', sans-serif",
  textAlign: 'center'
};

const missionHeroStyle = {
  backgroundColor: '#74A84B',
  padding: '80px 40px',
  borderRadius: '40px',
  maxWidth: '1100px',
  margin: '0 auto 80px auto',
  boxShadow: '0 15px 40px rgba(116, 168, 75, 0.2)'
};

const aboutGridSection = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '40px',
  maxWidth: '1100px',
  margin: '0 auto'
};

const infoCardStyle = {
  backgroundColor: 'white',
  padding: '60px 50px',
  borderRadius: '32px',
  textAlign: 'left',
  boxShadow: '0 10px 40px rgba(56, 118, 29, 0.05)'
};

const cardHeadingStyle = {
  fontSize: '36px',
  color: '#38761D',
  marginBottom: '25px',
  fontWeight: 400
};

const cardBodyStyle = {
  fontSize: '17px',
  color: '#6B9E3E',
  lineHeight: '1.7',
  marginBottom: '20px'
};

const joinUsSection = {
  padding: '120px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const ctaButtonStyle = {
  backgroundColor: '#38761D',
  color: 'white',
  border: 'none',
  padding: '18px 45px',
  borderRadius: '12px',
  fontSize: '20px',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(56, 118, 29, 0.3)',
  transition: 'transform 0.2s ease'
};

export default AboutUs;