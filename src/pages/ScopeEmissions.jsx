import React, { useState, useEffect } from 'react';

const CarbonEmissionsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#F3F3E7', fontFamily: "'Inria Sans', sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <header style={{ ...heroSectionStyle, padding: isMobile ? '40px 25px' : '60px 25px' }}>
        <h1 style={{ ...titleStyle, fontSize: isMobile ? '42px' : '62px' }}>Understanding carbon emissions</h1>
        <p style={{ ...subtitleStyle, fontSize: isMobile ? '18px' : '22px' }}>
          Emissions are categorized into three "scopes" to help organizations and individuals understand their environmental impact.
        </p>
      </header>

      {/* 2. SCOPE CARDS GRID - Perfectly centered side-by-side */}
      <section style={sectionContainerStyle}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: '20px', 
          maxWidth: '900px', 
          margin: '0 auto',
          padding: '0 25px'
        }}>
          {emissionsData.map((scope, index) => (
            <div key={index} style={whiteCardStyleSmall}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
                <span style={iconCircleStyle}>{scope.icon}</span>
                <h2 style={{ fontSize: '22px', color: '#38761D', margin: 0 }}>{scope.title}</h2>
              </div>
              <h3 style={{ fontSize: '15px', color: '#6B9E3E', marginBottom: '10px', fontWeight: 'bold' }}>{scope.subtitle}</h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '15px' }}>{scope.description}</p>
              <div style={alertBoxStyle}>{scope.action}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY IT MATTERS - Centered Row */}
      <section style={sectionContainerStyle}>
        <div style={whiteCardStyleFull}>
          <h2 style={{ color: '#38761D', fontSize: isMobile ? '28px' : '32px', marginBottom: '20px', fontWeight: 300 }}>Why understanding scopes matters</h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '30px', textAlign: 'left' }}>
            <div style={{ flex: 1 }}>
              <h3 style={subHeadingStyle}>For individuals</h3>
              <ul style={listStyle}>
                <li>• Scope 1: Your direct choices (car, heating)</li>
                <li>• Scope 2: Your energy provider decisions</li>
                <li>• Scope 3: Your purchasing power</li>
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={subHeadingStyle}>For organizations</h3>
              <ul style={listStyle}>
                <li>• Required for climate reporting</li>
                <li>• Helps identify reduction opportunities</li>
                <li>• Transparency builds stakeholder trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WASTE CONNECTION - Contained Green Box */}
      <section style={sectionContainerStyle}>
        <div style={greenCardStyle}>
          <h2 style={{ color: 'white', fontSize: isMobile ? '28px' : '32px', marginBottom: '10px', fontWeight: 300 }}>Waste & recycling connection</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', marginBottom: '30px' }}>Most waste-related emissions fall under **Scope 3**.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            {connectionPoints.map((point, index) => (
              <div key={index} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>{point.icon}</span>
                <p style={{ margin: 0, fontSize: '14px', color: 'white' }}>
                  <strong>{point.title}:</strong> {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <footer style={ctaContainerStyle}>
        <div style={whiteCardStyleFull}>
          <h2 style={{ color: '#38761D', fontSize: isMobile ? '28px' : '38px', marginBottom: '10px' }}>Ready to reduce your impact?</h2>
          <p style={{ color: '#6B9E3E', fontSize: '16px', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
            Now that you understand emissions, learn how to take political action and make systemic change.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', gap: '15px' }}>
            
            {/* Direct tool to find and contact local/state/federal reps */}
            <button 
              style={primaryButtonStyle}
              onClick={() => window.open('https://www.commoncause.org/find-your-representative/', '_blank')}
            >
              Contact Your Politicians
            </button>

            {/* Practical toolkit for effective non-partisan political advocacy */}
            <button 
              style={secondaryButtonStyle}
              onClick={() => window.open('https://bolderadvocacy.org/resource-library/', '_blank')}
            >
              Advocacy Toolkit
            </button>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- DATA ---
const emissionsData = [
  { icon: '🏭', title: 'Scope 1', subtitle: 'Direct emissions', description: 'Emissions from sources you own or directly control, like your car or home heating.', action: 'Action: Switch to EVs, improve insulation.' },
  { icon: '⚡', title: 'Scope 2', subtitle: 'Indirect energy', description: 'Emissions from the generation of purchased energy you consume (electricity).', action: 'Action: Use solar or renewable providers.' },
  { icon: '🌲', title: 'Scope 3', subtitle: 'Value chain', description: 'Indirect emissions from your lifestyle and purchases. Often 75-90% of total impact.', action: 'Action: Reduce waste, buy sustainable.' },
];

const connectionPoints = [
  { icon: '🗑️', title: 'Landfill waste', desc: 'Decomposing organic waste produces methane, 25x stronger than CO2.' },
  { icon: '♻️', title: 'Recycling', desc: 'Avoiding virgin material production saves massive energy.' },
  { icon: '🌱', title: 'Composting', desc: 'Properly composting can reduce methane by up to 90%.' },
];

// --- STYLES (Synchronized with Home/Beyond) ---
const heroSectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' };
const titleStyle = { color: '#38761D', fontWeight: 500, margin: '15px 0 8px' };
const subtitleStyle = { color: '#6B9E3E', maxWidth: '700px', fontWeight: 300 };

const sectionContainerStyle = { padding: '30px 0', textAlign: 'center' };

const whiteCardStyleSmall = { backgroundColor: '#FFFFF7', padding: '25px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(56, 118, 29, 0.05)', boxSizing: 'border-box', textAlign: 'center' };
const whiteCardStyleFull = { ...whiteCardStyleSmall, maxWidth: '900px', margin: '0 auto', padding: '40px' };

const greenCardStyle = { backgroundColor: '#38761D', padding: '40px', borderRadius: '24px', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box' };

const iconCircleStyle = { border: '1px solid #38761D', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' };
const alertBoxStyle = { backgroundColor: '#FDF8E6', padding: '10px', borderRadius: '8px', fontSize: '11px', color: '#886d11', border: '1px solid #f0e6c0' };

const subHeadingStyle = { color: '#38761D', fontSize: '18px', marginBottom: '10px', fontWeight: 'bold' };
const listStyle = { listStyle: 'none', padding: 0, fontSize: '14px', color: '#666', lineHeight: '1.8' };

const ctaContainerStyle = { padding: '20px 25px 60px', textAlign: 'center' };
const primaryButtonStyle = { backgroundColor: '#38761D', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const secondaryButtonStyle = { backgroundColor: '#74A84B', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

export default CarbonEmissionsPage;