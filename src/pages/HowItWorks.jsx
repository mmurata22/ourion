import React, { useState, useEffect } from 'react';

const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={pageContainer}>
      {/* Header Section */}
      <section style={headerSection}>
        <h1 style={{ ...titleStyle, fontSize: isMobile ? '36px' : '56px' }}>How Ourion Works</h1>
        <p style={{ ...subtitleStyle, fontSize: isMobile ? '16px' : '20px' }}>
          Every item we recycle correctly makes a real difference. But knowing what goes where can be confusing. That's where Ourion comes in.
        </p>
      </section>

      {/* Steps List */}
      <section style={{ 
        ...stepsListSection, 
        padding: isMobile ? '0 25px' : '0' // This creates the "floating" effect on mobile
      }}>
        <ProcessStep 
          number="1"
          title="Snap a Photo"
          desc="Take a picture of any item you want to recycle using your phone camera or upload an existing photo."
          isMobile={isMobile}
        />
        <ProcessStep 
          number="2"
          title="Get an Analysis"
          desc="Our system analyzes your image and identifies the item, material type, and recycling category."
          isMobile={isMobile}
        />
        <ProcessStep 
          number="3"
          title="Follow a Guide"
          desc="Receive clear, step-by-step instructions on how to properly prepare and recycle your item."
          isMobile={isMobile}
        />
        <ProcessStep 
          number="4"
          title="Recycle"
          desc="Dispose of your item in the right bin with confidence, knowing you're making a positive impact."
          isMobile={isMobile}
        />
      </section>
    </div>
  );
};

// --- HELPER COMPONENTS ---

function ProcessStep({ number, title, desc, isMobile }) {
  return (
    <div style={{ 
      ...stepCardStyle, 
      flexDirection: isMobile ? 'column' : 'row', // Stacks number on top of text on mobile
      textAlign: isMobile ? 'center' : 'left',
      padding: isMobile ? '30px 20px' : '40px 50px',
      gap: isMobile ? '20px' : '40px'
    }}>
      <div style={numberBoxStyle}>{number}</div>
      <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
        <h2 style={{ ...stepTitleStyle, fontSize: isMobile ? '28px' : '42px' }}>{title}</h2>
        <p style={{ ...stepDescStyle, fontSize: isMobile ? '15px' : '18px' }}>{desc}</p>
      </div>
    </div>
  );
}

// --- STYLE DEFINITIONS ---

const pageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '60px 0', // Changed padding to allow the section gutter to handle the sides
  fontFamily: "'Inria Sans', sans-serif",
  overflowX: 'hidden'
};

const headerSection = {
  textAlign: 'center',
  maxWidth: '700px', // Slightly narrower to match Instructions page feel
  margin: '0 auto 60px auto',
  padding: '0 20px'
};

const titleStyle = {
  color: '#38761D',
  marginBottom: '20px',
  fontWeight: 400
};

const subtitleStyle = {
  color: '#6B9E3E',
  lineHeight: '1.6',
  opacity: 0.9
};

const stepsListSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  maxWidth: '700px', // This ensures the boxes stay centered and don't get too wide
  margin: '0 auto'
};

const stepCardStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FFFFF7', // Matched to your other cards
  width: '100%',
  borderRadius: '16px', // Matched to Instructions page
  boxShadow: '0 4px 20px rgba(56, 118, 29, 0.08)',
  boxSizing: 'border-box',
  border: '1px solid rgba(56, 118, 29, 0.05)'
};

const numberBoxStyle = {
  fontSize: '28px',
  color: '#38761D',
  border: '2px solid #38761D',
  borderRadius: '8px',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontWeight: 400,
  margin: '0 auto' // Centers the number box when in column mode
};

const stepTitleStyle = {
  color: '#38761D',
  margin: '0 0 10px 0',
  fontWeight: 400
};

const stepDescStyle = {
  color: '#6B9E3E',
  lineHeight: '1.5',
  margin: 0
};

export default HowItWorks;