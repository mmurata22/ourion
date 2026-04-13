import React, { useState, useEffect } from 'react';
// Importing the image ensures the build tool handles the path correctly
import RecyclingBins from '../images/RecyclingBins.jpeg';

const BeyondOurion = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#F3F3E7', fontFamily: "'Inria Sans', sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ ...heroSectionStyle, padding: isMobile ? '40px 25px' : '60px 25px' }}>
        <div style={iconCircleStyle}>
          <span style={{ fontSize: isMobile ? '32px' : '40px' }}>🍃</span>
        </div>
        <h1 style={{ ...titleStyle, fontSize: isMobile ? '42px' : '62px' }}>Environmental activism guide</h1>
        <p style={{ ...subtitleStyle, fontSize: isMobile ? '18px' : '22px' }}>
          Make a difference through recycling, waste reduction, and understanding your environmental impact
        </p>
      </section>

      {/* 2. RECYCLING & WASTE MANAGEMENT */}
      <section style={sectionContainerStyle}>
        <h2 style={{ ...sectionHeadingStyle, fontSize: isMobile ? '36px' : '48px' }}>Recycling & waste management</h2>
        
        <div style={{ ...contentGridStyle, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          
          <div style={{ ...imagePlaceholderStyle, overflow: 'hidden', padding: 0 }}>
             <img 
               src={RecyclingBins} 
               alt="Labeled recycling bins for paper, plastic, and glass" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
          </div>

          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#38761D', marginBottom: '15px' }}>The 5 R's of zero waste</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {fiveRs.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '15px' }}>
                  <span style={smallIconCircle}>{index + 1}</span>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: '#38761D', margin: 0, fontSize: '16px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: '#666', margin: '2px 0 0 0', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. WHAT CAN BE RECYCLED GRID */}
        <div style={whiteCardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '24px' }}>♻️</span>
            <h3 style={{ color: '#38761D', fontSize: '22px', margin: 0 }}>What can be recycled?</h3>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
            gap: '25px',
            textAlign: 'left'
          }}>
            <RecycleList title="Paper" items={["Newspapers", "Cardboard", "Office paper", "Magazines"]} />
            <RecycleList title="Plastics" items={["#1 PET bottles", "#2 HDPE containers", "#5 PP containers", "Clean plastics"]} />
            <RecycleList title="Metal" items={["Aluminum cans", "Steel cans", "Metal lids", "Clean foil"]} />
            <RecycleList title="Glass" items={["Glass bottles", "Glass jars", "Clear glass", "Clean containers"]} />
          </div>
          <div style={alertBoxStyle}>
            <strong>Important:</strong> Always check your local recycling guidelines as accepted materials vary by location.
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS SECTION */}
      <section style={sectionContainerStyle}>
        <h2 style={{ ...sectionHeadingStyle, fontSize: isMobile ? '32px' : '42px' }}>The impact of your actions</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
          gap: '20px', 
          maxWidth: '900px', 
          margin: '0 auto',
          padding: '0 25px'
        }}>
          <StatCard val="75%" label="of waste is recyclable, yet we only recycle about 30%" />
          <StatCard val="1 ton" label="of recycled paper saves 17 trees and 7,000 gallons of water" />
          <StatCard val="95%" label="less energy needed to recycle aluminum than to make it new" />
          <StatCard val="20%" label="of global emissions come from waste management" />
        </div>
      </section>

      {/* 5. FOOTER CALL TO ACTION */}
      <section style={ctaContainerStyle}>
        <div style={whiteCardStyle}>
          <h2 style={{ color: '#38761D', fontSize: isMobile ? '28px' : '38px', marginBottom: '10px' }}>Every action counts</h2>
          <p style={{ color: '#6B9E3E', fontSize: '16px', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
            Small changes in daily habits create massive environmental impact. Start with one action today and build from there.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', gap: '15px' }}>
            
            <button 
              style={primaryButtonStyle}
              onClick={() => window.open('https://www.epa.gov/ghgemissions/household-carbon-footprint-calculator', '_blank')}
            >
              Calculate Your Emissions
            </button>

            <button 
              style={secondaryButtonStyle}
              onClick={() => window.open('https://climatenetwork.org/get-involved/', '_blank')}
            >
              Join the Movement
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

// --- HELPER COMPONENTS ---
const RecycleList = ({ title, items }) => (
  <div>
    <h4 style={{ color: '#38761D', borderBottom: '1px solid #EBEBDC', paddingBottom: '6px', marginBottom: '10px', fontSize: '15px' }}>✓ {title}</h4>
    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', color: '#666', lineHeight: '1.8' }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
);

const StatCard = ({ val, label }) => (
  <div style={statCardStyle}>
    <h3 style={{ fontSize: '32px', margin: 0, color: '#FFFFF7' }}>{val}</h3>
    <p style={{ fontSize: '13px', marginTop: '10px' }}>{label}</p>
  </div>
);

// --- DATA ---
const fiveRs = [
  { title: 'Refuse', desc: "Say no to single-use plastics and unnecessary packaging." },
  { title: 'Reduce', desc: "Minimize consumption and choose quality over quantity." },
  { title: 'Reuse', desc: "Choose reusable products like water bottles and bags." },
  { title: 'Recycle', desc: "Properly sort and recycle paper, glass, metal, and plastics." },
  { title: 'Rot (compost)', desc: "Compost organic waste to create nutrient-rich soil." },
];

// --- STYLES ---
const heroSectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' };
const titleStyle = { color: '#38761D', fontWeight: 500, margin: '15px 0 8px' };
const subtitleStyle = { color: '#6B9E3E', maxWidth: '700px', fontWeight: 300 };
const sectionContainerStyle = { padding: '40px 0', textAlign: 'center' };
const sectionHeadingStyle = { color: '#38761D', marginBottom: '30px', fontWeight: 300 };
const contentGridStyle = { maxWidth: '900px', margin: '0 auto', padding: '0 25px', display: 'grid' };
const iconCircleStyle = { width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#38761D', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const smallIconCircle = { backgroundColor: '#38761D', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 };
const imagePlaceholderStyle = { backgroundColor: '#EBEBDC', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' };
const whiteCardStyle = { backgroundColor: '#FFFFF7', padding: '30px 40px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(56, 118, 29, 0.08)', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box' };
const alertBoxStyle = { marginTop: '20px', backgroundColor: '#FDF8E6', padding: '12px', borderRadius: '12px', fontSize: '13px', color: '#886d11', border: '1px solid #f0e6c0' };
const statCardStyle = { backgroundColor: '#6B9E3E', color: 'white', padding: '25px 20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const ctaContainerStyle = { padding: '20px 25px 60px', textAlign: 'center' };
const primaryButtonStyle = { backgroundColor: '#38761D', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const secondaryButtonStyle = { backgroundColor: '#74A84B', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

export default BeyondOurion;