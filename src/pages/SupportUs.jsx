import React from 'react';

// --- 1. MAIN PAGE COMPONENT ---
const SupportUs = () => {
  return (
    <div style={supportPageContainer}>
      {/* Header Section */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', color: '#38761D', fontWeight: 500 }}>Support Us</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#6B9E3E', opacity: 0.8, fontSize: '18px', lineHeight: '1.6' }}>
          Help us grow and continue providing free recycling guidance to everyone. Your support helps us maintain and improve Ourion for a greener future.
        </p>
      </section>

      {/* Why Support Matters Banner */}
      <section style={greenHeroBanner}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🌼</div>
        <h2 style={{ color: 'white', fontSize: '36px', marginBottom: '20px' }}>Why Your Support Matters</h2>
        <p style={{ color: 'white', maxWidth: '750px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
          Ourion is free for everyone because we believe environmental action should be accessible to all. Your contributions help us keep it that way while expanding our features and reach.
        </p>
      </section>

      {/* Ways You Can Help Grid */}
      <section style={{ marginTop: '80px', textAlign: 'center' }}>
        <h2 style={sectionHeadingStyle}>Ways You Can Help</h2>
        <div style={supportGridStyle}>
          <SupportCard 
            icon="📄" 
            title="Donate" 
            desc="A small donation helps cover server costs and keeps Ourion running smoothly for everyone." 
            buttonText="Donate"
          />
          <SupportCard 
            icon="📋" 
            title="Share" 
            desc="Share Ourion with friends, family, and on social media to help more people recycle correctly." 
            buttonText="Share"
          />
          <SupportCard 
            icon="📝" 
            title="Review" 
            desc="Your reviews and suggestions help us improve and reach more users who care about the environment." 
            buttonText="Review"
          />
        </div>
      </section>

      {/* What We Can Do Section */}
      <section style={futureGoalsBanner}>
        <h2 style={{ color: 'white', fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>
          What We Can Do With Your Support
        </h2>
        <div style={goalsGridStyle}>
          <GoalItem title="Improve Recognition" desc="Better image analysis means more accurate recycling guidance for a wider variety of items." />
          <GoalItem title="Localize Guidelines" desc="Customized recycling instructions based on your specific city or region's requirements." />
          <GoalItem title="Mobile Apps" desc="Native iOS and Android apps for an even better experience on the go." />
          <GoalItem title="More Content" desc="More resources, guides, and tips to help everyone become recycling experts." />
        </div>
      </section>

      {/* Thank You Footer */}
      <section style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>☀️</div>
        <h2 style={{ color: '#38761D', fontSize: '32px', marginBottom: '20px' }}>Thank You!</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#6B9E3E', lineHeight: '1.6' }}>
          Every contribution, whether financial or through sharing, helps us create a more sustainable future. Together, we're making recycling accessible to everyone and reducing our collective environmental impact.
        </p>
      </section>
    </div>
  );
};

// --- 2. HELPER COMPONENTS ---

function SupportCard({ icon, title, desc, buttonText }) {
  return (
    <div style={cardStyle}>
      <div style={iconCircleStyle}>{icon}</div>
      <h3 style={{ color: '#38761D', fontSize: '24px', margin: '15px 0' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>{desc}</p>
      <button style={actionButtonStyle}>{buttonText}</button>
    </div>
  );
}

function GoalItem({ title, desc }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <h4 style={{ color: 'white', fontSize: '20px', marginBottom: '10px' }}>{title}</h4>
      <p style={{ color: 'white', opacity: 0.8, fontSize: '14px', lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}

// --- 3. STYLE DEFINITIONS ---

const supportPageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '80px 20px',
  fontFamily: "'Inria Sans', sans-serif"
};

const sectionHeadingStyle = { fontSize: '36px', color: '#38761D', marginBottom: '50px' };

const greenHeroBanner = {
  backgroundColor: '#74A84B',
  padding: '60px 40px',
  borderRadius: '32px',
  maxWidth: '1000px',
  margin: '0 auto',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(116, 168, 75, 0.2)'
};

const supportGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  maxWidth: '1100px',
  margin: '0 auto'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '40px 30px',
  borderRadius: '24px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const iconCircleStyle = {
  width: '60px', height: '60px', borderRadius: '50%',
  backgroundColor: '#38761D', color: 'white',
  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'
};

const actionButtonStyle = {
  backgroundColor: '#38761D', color: 'white', border: 'none',
  padding: '12px 40px', borderRadius: '10px', cursor: 'pointer', fontSize: '16px',
  width: '100%'
};

const futureGoalsBanner = {
  backgroundColor: '#6B9E3E',
  padding: '80px 60px',
  borderRadius: '32px',
  maxWidth: '1100px',
  margin: '80px auto 0',
  boxShadow: '0 10px 30px rgba(107, 158, 62, 0.2)'
};

const goalsGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '40px 60px'
};

export default SupportUs;