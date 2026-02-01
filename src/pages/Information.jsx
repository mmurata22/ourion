import React from 'react';

// --- 1. STYLE DEFINITIONS (Moved to Top) ---
const infoPageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '80px 20px',
  fontFamily: "'Inria Sans', sans-serif"
};

const sectionHeadingStyle = {
  fontSize: '36px',
  color: '#38761D',
  textAlign: 'center',
  marginBottom: '50px',
  fontWeight: 400
};

const bannerStyle = {
  backgroundColor: '#38761D',
  padding: '40px',
  borderRadius: '24px',
  textAlign: 'center',
  maxWidth: '900px',
  margin: '0 auto',
  boxShadow: '0 10px 30px rgba(56, 118, 29, 0.2)'
};

const ruleTextStyle = {
  color: '#F3F3E7',
  fontWeight: 500,
  fontSize: '18px'
};

const categoryWrapperStyle = {
  maxWidth: '900px',
  margin: '0 auto 60px',
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '32px',
  boxShadow: '0 10px 30px rgba(56, 118, 29, 0.05)'
};

const ruleCardStyle = {
  border: '1px solid #E0E0D0',
  borderRadius: '16px',
  padding: '20px'
};

const greenCircleStyle = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#74A84B'
};

// --- 2. HELPER COMPONENTS (Defined as functions) ---
function GoldenRulesBanner() {
  return (
    <div style={bannerStyle}>
      <h3 style={{ color: 'white', margin: '0 0 15px 0' }}>The Golden Rules</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
        <div style={ruleTextStyle}>✨ Keep it Clean</div>
        <div style={ruleTextStyle}>✨ Keep it Dry</div>
        <div style={ruleTextStyle}>✨ Keep it Loose (No bags)</div>
      </div>
    </div>
  );
}

function CategorySection({ title, children }) {
  return (
    <div style={categoryWrapperStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
        <div style={greenCircleStyle} />
        <h3 style={{ fontSize: '28px', color: '#38761D', margin: 0 }}>{title}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {children}
      </div>
    </div>
  );
}

function RecycleRule({ icon, type, status, sub, color }) {
  return (
    <div style={ruleCardStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: 600, color: '#38761D' }}>{type}</span>
            <span style={{ 
              backgroundColor: `${color}22`, 
              color: color, 
              fontSize: '12px', 
              padding: '2px 8px', 
              borderRadius: '10px',
              border: `1px solid ${color}`
            }}>
              {status}
            </span>
          </div>
          <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#666' }}>Example: {sub}</p>
        </div>
      </div>
    </div>
  );
}

// --- 3. MAIN PAGE COMPONENT ---
const Information = () => {
  return (
    <div style={infoPageContainer}>
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', color: '#38761D', fontWeight: 500 }}>Recycling Information Guide</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#6B9E3E', opacity: 0.8, fontSize: '18px' }}>
          Understanding what can and cannot be recycled is the first step to making a real environmental impact.
        </p>
      </section>

      <GoldenRulesBanner />

      <section style={{ marginTop: '80px' }}>
        <h2 style={sectionHeadingStyle}>General Guidelines</h2>
        
        {/* PLASTICS */}
        <CategorySection title="Plastics">
          <RecycleRule icon="✅" type="Plastic #1 (PET)" status="Recyclable" sub="Water bottles, soda bottles, fruit trays" color="#74A84B" />
          <RecycleRule icon="✅" type="Plastic #2 (HDPE)" status="Recyclable" sub="Milk jugs, shampoo bottles, detergent" color="#74A84B" />
          <RecycleRule icon="✅" type="Plastic #5 (PP)" status="Recyclable" sub="Yogurt cups, medicine bottles, straws" color="#74A84B" />
          <RecycleRule icon="🚫" type="Plastic #4 & #7" status="Check Local" sub="Grocery bags, squeeze bottles, pouches" color="#D4A017" />
          <RecycleRule icon="🚫" type="Plastic #6 (PS)" status="Not Recyclable" sub="Styrofoam, plastic cutlery, peanuts" color="#A84B4B" />
        </CategorySection>

        {/* PAPER & CARDBOARD */}
        <CategorySection title="Paper & Cardboard">
          <RecycleRule icon="✅" type="Corrugated Cardboard" status="Recyclable" sub="Shipping boxes (flattened)" color="#74A84B" />
          <RecycleRule icon="✅" type="Mixed Paper" status="Recyclable" sub="Magazines, junk mail, envelopes, office paper" color="#74A84B" />
          <RecycleRule icon="🚫" type="Soiled Paper" status="Not Recyclable" sub="Greasy pizza boxes, used napkins/tissues" color="#A84B4B" />
        </CategorySection>

        {/* GLASS & METAL */}
        <CategorySection title="Glass & Metal">
          <RecycleRule icon="✅" type="Glass Containers" status="Recyclable" sub="Clear, green, and brown bottles and jars" color="#74A84B" />
          <RecycleRule icon="✅" type="Aluminum Cans" status="Recyclable" sub="Soda cans, beer cans, clean foil" color="#74A84B" />
          <RecycleRule icon="✅" type="Steel/Tin Cans" status="Recyclable" sub="Soup cans, coffee cans, veggie cans" color="#74A84B" />
        </CategorySection>

        {/* SPECIAL HANDLING (E-WASTE) */}
        <CategorySection title="Special Handling">
          <RecycleRule icon="⚠️" type="Electronics" status="Drop-off Only" sub="Laptops, phones, tablets, monitors" color="#38761D" />
          <RecycleRule icon="⚠️" type="Batteries" status="Drop-off Only" sub="Lithium-ion, alkaline, car batteries" color="#38761D" />
          <RecycleRule icon="🚫" type="Hazardous Waste" status="Special Event" sub="Paints, chemicals, oil, lightbulbs" color="#A84B4B" />
        </CategorySection>
      </section>
    </div>
  );
};

export default Information;