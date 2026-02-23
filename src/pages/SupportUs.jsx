import React, { useState, useEffect } from 'react';

const SupportUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNotUpYet = (feature) => {
    setToast(`${feature} is coming soon!`);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div style={supportPageContainer}>
      {/* Toast Notification */}
      {toast && (
        <div style={toastStyle}>✨ {toast}</div>
      )}

      {/* Header Section */}
      <section style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
        <h1 style={{ ...titleStyle, fontSize: isMobile ? '36px' : '48px' }}>Support Us</h1>
        <p style={{ ...subtitleStyle, fontSize: isMobile ? '16px' : '18px' }}>
          Help us grow and continue providing free recycling guidance to everyone.
        </p>
      </section>

      {/* Why Support Matters Banner */}
      <section style={{ 
        ...greenHeroBanner, 
        width: isMobile ? 'calc(100% - 40px)' : '90%', 
        padding: isMobile ? '40px 20px' : '60px 40px' 
      }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🌼</div>
        <h2 style={{ color: 'white', fontSize: isMobile ? '28px' : '36px', marginBottom: '20px' }}>Why Your Support Matters</h2>
        <p style={{ color: 'white', maxWidth: '750px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6', fontSize: isMobile ? '14px' : '16px' }}>
          Ourion is free for everyone because environmental action should be accessible to all. 
          Your contributions help us keep it that way while expanding our reach.
        </p>
      </section>

      {/* Ways You Can Help Grid */}
      <section style={{ marginTop: '80px', textAlign: 'center', padding: '0 25px' }}>
        <h2 style={{ ...sectionHeadingStyle, fontSize: isMobile ? '28px' : '36px' }}>Ways You Can Help</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: '30px', 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          <SupportCard 
            icon="📄" 
            title="Donate" 
            desc="A small donation helps cover server costs and keeps Ourion running smoothly." 
            buttonText="Coming Soon"
            onClick={() => handleNotUpYet("Donations")}
          />
          <SupportCard 
            icon="📋" 
            title="Share" 
            desc="Share Ourion with friends and family to help more people recycle correctly." 
            buttonText="Coming Soon"
            onClick={() => handleNotUpYet("Sharing")}
          />
          <SupportCard 
            icon="📝" 
            title="Review" 
            desc="Your suggestions help us improve and reach more users who care about the environment." 
            buttonText="Coming Soon"
            onClick={() => handleNotUpYet("Reviews")}
          />
        </div>
      </section>

      {/* What We Can Do Section */}
      <section style={{ 
        ...futureGoalsBanner, 
        width: isMobile ? 'calc(100% - 40px)' : '90%',
        padding: isMobile ? '40px 20px' : '60px'
      }}>
        <h2 style={{ color: 'white', fontSize: isMobile ? '24px' : '32px', marginBottom: '40px', textAlign: 'center' }}>
          Future Goals
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '30px' : '40px 60px' 
        }}>
          <GoalItem title="Improve Recognition" desc="Better image analysis for a wider variety of items." />
          <GoalItem title="Localize Guidelines" desc="Customized instructions based on your specific city requirements." />
          <GoalItem title="Mobile Apps" desc="Native iOS and Android apps for better experience on the go." />
          <GoalItem title="More Content" desc="More resources to help everyone become recycling experts." />
        </div>
      </section>

      {/* Thank You Footer */}
      <section style={{ textAlign: 'center', padding: '80px 20px' }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>☀️</div>
        <h2 style={{ color: '#38761D', fontSize: '32px', marginBottom: '20px' }}>Thank You!</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#6B9E3E', lineHeight: '1.6', fontSize: isMobile ? '14px' : '16px' }}>
          Together, we're making recycling accessible to everyone and reducing our collective environmental impact.
        </p>
      </section>
    </div>
  );
};

// --- HELPER COMPONENTS ---

function SupportCard({ icon, title, desc, buttonText, onClick }) {
  return (
    <div style={cardStyle}>
      <div style={iconCircleStyle}>{icon}</div>
      <h3 style={{ color: '#38761D', fontSize: '22px', margin: '15px 0' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>{desc}</p>
      <button onClick={onClick} style={notUpYetButtonStyle}>{buttonText}</button>
    </div>
  );
}

function GoalItem({ title, desc }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <h4 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>{title}</h4>
      <p style={{ color: 'white', opacity: 0.8, fontSize: '14px', lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}

// --- STYLE DEFINITIONS ---

const supportPageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '60px 0',
  fontFamily: "'Inria Sans', sans-serif",
  overflowX: 'hidden'
};

const titleStyle = { color: '#38761D', fontWeight: 500, marginBottom: '20px' };
const subtitleStyle = { maxWidth: '700px', margin: '0 auto', color: '#6B9E3E', opacity: 0.8, lineHeight: '1.6' };
const sectionHeadingStyle = { color: '#38761D', marginBottom: '50px' };

const greenHeroBanner = {
  backgroundColor: '#74A84B',
  borderRadius: '24px',
  margin: '0 auto',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(116, 168, 75, 0.15)',
  boxSizing: 'border-box'
};

const cardStyle = {
  backgroundColor: '#FFFFF7',
  padding: '40px 30px',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(56, 118, 29, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid rgba(56, 118, 29, 0.05)',
  boxSizing: 'border-box'
};

const iconCircleStyle = {
  width: '50px', height: '50px', borderRadius: '50%',
  backgroundColor: '#38761D', color: 'white',
  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'
};

const notUpYetButtonStyle = {
  padding: '10px 20px',
  borderRadius: '20px',
  border: '1px dashed #6B9E3E',
  background: 'rgba(107, 158, 62, 0.05)',
  color: '#6B9E3E',
  fontSize: '13px',
  fontWeight: 500,
  cursor: 'pointer',
  width: '100%'
};

const toastStyle = {
  position: 'fixed',
  top: '100px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#38761D',
  color: 'white',
  padding: '10px 25px',
  borderRadius: '30px',
  zIndex: 3000,
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  whiteSpace: 'nowrap'
};

const futureGoalsBanner = {
  backgroundColor: '#6B9E3E',
  borderRadius: '24px',
  margin: '80px auto 0',
  boxShadow: '0 10px 30px rgba(107, 158, 62, 0.15)',
  boxSizing: 'border-box'
};

export default SupportUs;