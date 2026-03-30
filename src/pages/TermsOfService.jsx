import React, { useState, useEffect } from 'react';

const TermsOfService = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={pageContainer}>
      <div style={{ 
        ...documentCardStyle, 
        padding: isMobile ? '40px 25px' : '60px 80px',
        margin: isMobile ? '0 20px' : '0 auto' 
      }}>
        <h1 style={titleStyle}>Terms of Service</h1>
        <p style={dateStyle}>Last Updated: February 2026</p>

        <section style={sectionStyle}>
          <h2 style={subTitleStyle}>1. Acceptance of Terms</h2>
          <p style={textStyle}>
            By accessing or using Ourion, you agree to be bound by these Terms of Service. 
            This is an independent research project developed at Lehigh University.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitleStyle}>2. AI Analysis Disclaimer</h2>
          <p style={textStyle}>
            Ourion uses Artificial Intelligence (YOLOv8) to identify materials. While we strive for accuracy, 
            the "Ourion Brain" is in development. Analysis results are <strong>informational suggestions</strong> 
            and do not override the official recycling regulations of your local municipality.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitleStyle}>3. User Conduct</h2>
          <p style={textStyle}>
            You agree to use Ourion only for lawful purposes. You are prohibited from uploading 
            images that are offensive, illegal, or violate the privacy of others.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitleStyle}>4. Intellectual Property</h2>
          <p style={textStyle}>
            The Ourion brand, logo, and "Ourion Brain" models are the property of Michele Harumi De Guzman Murata. 
            Project assets are protected by copyright and intellectual property laws.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitleStyle}>5. Limitation of Liability</h2>
          <p style={textStyle}>
            Ourion is provided "as is." We are not responsible for any contamination of recycling 
            streams or fines incurred by users following AI-generated suggestions.
          </p>
        </section>

        <section style={{ ...sectionStyle, borderBottom: 'none' }}>
          <h2 style={subTitleStyle}>6. Contact</h2>
          <p style={textStyle}>
            For questions regarding these terms, please contact <strong>hello@ourion.app</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

// --- STYLES ---

const pageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '80px 0',
  fontFamily: "'Inria Sans', sans-serif",
  display: 'flex',
  justifyContent: 'center'
};

const documentCardStyle = {
  backgroundColor: '#FFFFF7',
  maxWidth: '800px',
  width: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(56, 118, 29, 0.05)',
  border: '1px solid rgba(56, 118, 29, 0.1)',
  boxSizing: 'border-box'
};

const titleStyle = {
  fontFamily: "'Faculty Glyphic', cursive",
  color: '#38761D',
  fontSize: '42px',
  marginBottom: '10px',
  textAlign: 'center'
};

const dateStyle = {
  textAlign: 'center',
  color: '#6B9E3E',
  fontSize: '14px',
  marginBottom: '40px',
  opacity: 0.8
};

const sectionStyle = {
  marginBottom: '30px',
  paddingBottom: '20px',
  borderBottom: '1px solid rgba(107, 158, 62, 0.1)'
};

const subTitleStyle = {
  color: '#38761D',
  fontSize: '20px',
  marginBottom: '15px',
  fontWeight: 600
};

const textStyle = {
  color: '#666',
  fontSize: '15px',
  lineHeight: '1.7',
  margin: 0
};

export default TermsOfService;