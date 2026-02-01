import React from 'react';

// --- 1. MAIN PAGE COMPONENT ---
const HowItWorks = () => {
  return (
    <div style={pageContainer}>
      {/* Header Section */}
      <section style={headerSection}>
        <h1 style={titleStyle}>How Ourion Works</h1>
        <p style={subtitleStyle}>
          Every item we recycle correctly makes a real difference. But knowing what goes where can be confusing. That's where Ourion comes in.
        </p>
      </section>

      {/* Steps List */}
      <section style={stepsListSection}>
        <ProcessStep 
          number="1"
          title="Snap a Photo"
          desc="Take a picture of any item you want to recycle using your phone camera or upload an existing photo."
        />
        <ProcessStep 
          number="2"
          title="Get an Analysis"
          desc="Our system analyzes your image and identifies the item, material type, and recycling category."
        />
        <ProcessStep 
          number="3"
          title="Follow a Guide"
          desc="Receive clear, step-by-step instructions on how to properly prepare and recycle your item."
        />
        <ProcessStep 
          number="4"
          title="Recycle"
          desc="Dispose of your item in the right bin with confidence, knowing you're making a positive impact."
        />
      </section>
    </div>
  );
};

// --- 2. HELPER COMPONENTS ---

function ProcessStep({ number, title, desc }) {
  return (
    <div style={stepCardStyle}>
      <div style={numberBoxStyle}>{number}</div>
      <div style={textContainerStyle}>
        <h2 style={stepTitleStyle}>{title}</h2>
        <p style={stepDescStyle}>{desc}</p>
      </div>
    </div>
  );
}

// --- 3. STYLE DEFINITIONS ---

const pageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '80px 20px',
  fontFamily: "'Inria Sans', sans-serif"
};

const headerSection = {
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 80px auto'
};

const titleStyle = {
  fontSize: '56px',
  color: '#38761D',
  marginBottom: '20px',
  fontWeight: 400
};

const subtitleStyle = {
  fontSize: '20px',
  color: '#6B9E3E',
  lineHeight: '1.6',
  opacity: 0.9
};

const stepsListSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  maxWidth: '900px',
  margin: '0 auto'
};

const stepCardStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '100%',
  padding: '40px 50px',
  borderRadius: '32px',
  boxShadow: '0 10px 40px rgba(56, 118, 29, 0.05)',
  gap: '40px'
};

const numberBoxStyle = {
  fontSize: '36px',
  color: '#38761D',
  border: '2px solid #38761D',
  borderRadius: '8px',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontWeight: 300
};

const textContainerStyle = {
  textAlign: 'left'
};

const stepTitleStyle = {
  fontSize: '42px',
  color: '#38761D',
  margin: '0 0 10px 0',
  fontWeight: 400
};

const stepDescStyle = {
  fontSize: '18px',
  color: '#6B9E3E',
  lineHeight: '1.5',
  margin: 0
};

export default HowItWorks;