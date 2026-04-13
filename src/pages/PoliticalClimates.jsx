import React, { useState, useEffect } from 'react';

const ContactPoliticians = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => { const handleResize = () => setIsMobile(window.innerWidth < 768); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>Contact your representatives</h1>
        <p style={styles.subtitle}>Your elected officials work for you. Here's exactly how to reach them and make your voice heard on environmental issues.</p>
      </header>

      {/* STEP 1: FIND REPRESENTATIVES */}
      <section style={styles.whiteCardBordered}>
        <h2 style={styles.stepHeading}>Step 1: Find your representatives</h2>
        <div style={styles.flexRow}>
          <div style={styles.flex1}>
            <p style={styles.boldLabel}>Who to contact:</p>
            <p style={styles.subLabel}>Local level (most impact on waste):</p>
            <ul style={styles.list}><li>• City council members</li><li>• Mayor's office</li><li>• County commissioners</li><li>• Public works department</li></ul>
            <p style={styles.subLabel}>State level:</p>
            <ul style={styles.list}><li>• State representative</li><li>• State senator</li><li>• Governor's office</li></ul>
            <p style={styles.subLabel}>Federal level:</p>
            <ul style={styles.list}><li>• U.S. House representative</li><li>• U.S. Senators (2 per state)</li></ul>
          </div>
          <div style={styles.flexColumnGap}>
            <p style={styles.boldLabel}>How to find them:</p>
            <div style={styles.infoBox}><p style={styles.boxTitle}>🔍 Federal officials:</p><ul style={styles.listSmall}><li>• usa.gov/elected-officials</li><li>• commoncause.org/find-your-representative</li><li>• house.gov (enter zip)</li><li>• senate.gov</li></ul></div>
            <div style={styles.infoBox}><p style={styles.boxTitle}>🏛️ State officials:</p><ul style={styles.listSmall}><li>• Search "[Your State] legislature"</li><li>• openstates.org</li><li>• Your state's official website</li></ul></div>
            <div style={styles.infoBox}><p style={styles.boxTitle}>🏡 Local officials:</p><ul style={styles.listSmall}><li>• Your city's official website</li><li>• Call city hall directly</li></ul></div>
          </div>
        </div>
      </section>

      {/* STEP 2: CHOOSE METHOD */}
      <section style={styles.maxWidth900}>
        <h2 style={styles.stepHeadingCentered}>Step 2: Choose your method</h2>
        <div style={{ ...styles.grid2, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
          <div style={styles.methodCard}>
            <p style={styles.cardIconTitle}>📞 Phone calls (most effective!)</p>
            <p style={styles.whyText}><strong>Why it works:</strong> Offices tally calls daily. Just 10-20 calls on an issue is considered significant!</p>
            <div style={styles.scriptBox}><p style={styles.scriptTitle}>Script template:</p><p style={styles.scriptBody}>"Hello, my name is [Your Name] and I'm a constituent. I'm calling to ask [Rep Name] to support [Policy]. This is important because [Reason]. Thank you."</p></div>
            <p style={styles.tipsHeader}>Tips:</p>
            <ul style={styles.list}><li>• Call during business hours</li><li>• Keep it under 2 minutes</li><li>• Be polite but firm</li></ul>
          </div>
          <div style={styles.methodCard}>
            <p style={styles.cardIconTitle}>✉️ Email (very effective)</p>
            <p style={styles.whyText}><strong>Why it works:</strong> Creates a written record. Easy to forward to relevant committees.</p>
            <div style={styles.scriptBox}><p style={styles.scriptTitle}>Structure:</p><ul style={styles.listExtraSmall}><li>• Subject: Specific and clear</li><li>• Body: Your request and 2-3 specific points</li><li>• Closing: Ask for a response</li></ul></div>
            <p style={styles.tipsHeader}>Tips:</p>
            <ul style={styles.list}><li>• Keep it to 3-4 paragraphs</li><li>• Personal stories are powerful</li><li>• Always include your address</li></ul>
          </div>
        </div>
      </section>

      {/* STEP 3: TEMPLATES */}
      <section style={styles.maxWidth900Centered}>
        <h2 style={styles.stepHeading}>Step 3: Use these templates</h2>
        <div style={styles.templateContainer}>
          <h4 style={styles.templateTitle}>📄 Template 1: Recycling infrastructure</h4>
          <div style={styles.templateOuterBox}>
            <div style={styles.templateInnerContent}>
              <p style={styles.templateMeta}><b>Subject:</b> Urgent: Expand Recycling Programs in [City/State]</p>
              <p style={styles.templateMeta}><b>Dear [Representative Name],</b></p>
              <p style={styles.templateMeta}>My name is [Your Name] and I am your constituent living at [Your Address] in [District]. I am writing to urge you to support expanded recycling infrastructure in our community.</p>
              <p style={styles.templateMeta}><b>Current problems I see:</b></p>
              <ul style={styles.templateList}>
                <li>• Our curbside recycling only accepts plastics #1 and #2, while most packaging is #3-7</li>
                <li>• There is no composting program, forcing organic waste to landfills</li>
                <li>• Recycling education is minimal, leading to contamination</li>
              </ul>
              <p style={styles.templateMeta}>Currently, our city diverts only [X]% of waste from landfills. Cities with comprehensive programs achieve 60-80%. We can do better. I expect to see action on this issue and request a response outlining your position on expanding recycling infrastructure.</p>
              <p style={styles.templateMeta}><b>Sincerely,</b><br/>[Your Full Name]<br/>[Your Full Address]<br/>[Your Phone Number]<br/>[Your Email]</p>
            </div>
          </div>
        </div>
        <div style={styles.templateContainer}>
          <h4 style={styles.templateTitle}>📄 Template 2: Extended producer responsibility</h4>
          <div style={styles.templateOuterBox}>
            <div style={styles.templateInnerContent}>
              <p style={styles.templateMeta}><b>Subject:</b> Support EPR Legislation for Packaging Waste</p>
              <p style={styles.templateMeta}><b>Dear [Representative Name],</b></p>
              <p style={styles.templateMeta}>I am [Your Name], a constituent from [District/Address]. I am writing to ask you to support Extended Producer Responsibility (EPR) legislation for packaging waste.</p>
              <p style={styles.templateMeta}><b>Why this matters:</b></p>
              <ul style={styles.templateList}>
                <li>• Taxpayers currently pay $300+ million annually for waste management</li>
                <li>• Manufacturers design packaging with no responsibility for disposal</li>
                <li>• EPR shifts costs to producers, incentivizing better design</li>
              </ul>
              <p style={styles.templateMeta}>Maine, Oregon, and Colorado have already passed EPR laws with bipartisan support. [State/City] should join them. Please confirm your support for EPR legislation and let me know how you plan to advance this policy.</p>
              <p style={styles.templateMeta}><b>Respectfully,</b><br/>[Your Full Name]<br/>[Your Full Address]<br/>[Your Phone Number]<br/>[Your Email]</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: TIPS FOR MAXIMUM IMPACT */}
      <section style={styles.maxWidth900}>
        <div style={styles.whiteCardPlain}>
          <h2 style={styles.stepHeading}>Tips for Maximum Impact</h2>
          <div style={styles.flexRow}>
            <div style={styles.flex1}>
              <p style={styles.boldGreenLabel}>✅ DO:</p>
              <ul style={styles.tipList}>
                <li>• Include your full address (proves you're a constituent)</li>
                <li>• Be specific about what action you want</li>
                <li>• Share personal stories and local examples</li>
                <li>• Be polite and respectful</li>
                <li>• Follow up if you don't hear back in 2 weeks</li>
                <li>• Thank them when they do the right thing</li>
                <li>• Coordinate with others for mass contact days</li>
                <li>• Call AND email for urgent issues</li>
              </ul>
            </div>
            <div style={styles.flex1}>
              <p style={styles.boldRedLabel}>❌ DON'T:</p>
              <ul style={styles.tipList}>
                <li>• Be rude or threatening (it doesn't work)</li>
                <li>• Use form letters without personalizing</li>
                <li>• Contact representatives from other districts</li>
                <li>• Bring up multiple unrelated issues in one message</li>
                <li>• Give up after one attempt</li>
                <li>• Assume they won't listen</li>
                <li>• Use overly technical jargon</li>
                <li>• Write essays (keep it concise)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer style={styles.greenFooter}>
        <h2 style={styles.footerHeading}>Take Action Today</h2>
        <p style={styles.footerText}>
          Don't wait for the perfect moment. Pick up the phone or send that email right now. 
          Your representatives need to hear from you.
        </p>
        <div style={{ 
          ...styles.flexRowCenter, 
          flexDirection: isMobile ? 'column' : 'row',
          gap: '15px' 
        }}>
          {/* Updated Organizing Link: The Commons Library is a robust guide for 2026 */}
          <button 
            style={styles.btnOutline}
            onClick={() => window.open('https://commonslibrary.org/organising-start-here/', '_blank')}
          >
            Guide to Organizing
          </button>

          {/* Corrected Drawdown Link: Now points to the new Explorer "Increase Recycling" page */}
          <button 
            style={styles.btnSolid}
            onClick={() => window.open('https://drawdown.org/explorer/increase-recycling', '_blank')}
          >
            How Recycling Impacts Emissions
          </button>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#F3F3E7', minHeight: '100vh', padding: '60px 20px', fontFamily: "'Inria Sans', sans-serif", color: '#2d4a22', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '42px', fontWeight: 'bold', color: '#38761D', margin: '0 0 10px 0' },
  subtitle: { color: '#6B9E3E', fontSize: '16px', fontWeight: '300', lineHeight: '1.5' },
  whiteCardBordered: { backgroundColor: '#FFFFF7', border: '1.5px solid #38761D', borderRadius: '12px', padding: '40px', maxWidth: '900px', width: '100%', marginTop: '30px', boxSizing: 'border-box' },
  whiteCardPlain: { backgroundColor: '#FFFFF7', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '900px', width: '100%', boxSizing: 'border-box' },
  stepHeading: { color: '#6ba35e', fontSize: '28px', fontWeight: '300', marginBottom: '30px', textAlign: 'center' },
  stepHeadingCentered: { color: '#6ba35e', fontSize: '28px', fontWeight: '300', marginBottom: '30px', textAlign: 'center' },
  flexRow: { display: 'flex', flexWrap: 'wrap', gap: '40px' },
  flex1: { flex: 1, textAlign: 'left' },
  boldLabel: { fontWeight: 'bold', fontSize: '18px', color: '#38761D', marginBottom: '15px' },
  boldGreenLabel: { fontWeight: 'bold', fontSize: '16px', color: '#38761D', marginBottom: '10px' },
  boldRedLabel: { fontWeight: 'bold', fontSize: '16px', color: '#c0392b', marginBottom: '10px' },
  subLabel: { fontWeight: 'bold', fontSize: '14px', color: '#6B9E3E', marginTop: '15px', marginBottom: '5px' },
  list: { listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.8' },
  tipList: { listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#666', lineHeight: '2' },
  flexColumnGap: { flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' },
  infoBox: { backgroundColor: '#EBEBDC', padding: '15px', borderRadius: '12px', border: '1px solid rgba(56, 118, 29, 0.1)' },
  boxTitle: { fontWeight: 'bold', fontSize: '14px', color: '#38761D', margin: '0 0 8px 0' },
  listSmall: { listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#666', lineHeight: '1.6' },
  maxWidth900: { width: '100%', maxWidth: '900px', margin: '40px auto' },
  maxWidth900Centered: { width: '100%', maxWidth: '900px', margin: '40px auto', textAlign: 'center' },
  grid2: { display: 'grid', gap: '20px', marginTop: '30px' },
  methodCard: { backgroundColor: '#FFFFF7', border: '1.5px solid #38761D', borderRadius: '12px', padding: '30px', boxSizing: 'border-box' },
  cardIconTitle: { fontSize: '18px', fontWeight: 'bold', color: '#38761D', margin: '0 0 15px 0' },
  whyText: { fontSize: '13px', color: '#666', lineHeight: '1.4', marginBottom: '15px' },
  scriptBox: { backgroundColor: '#FDF8E6', padding: '15px', borderRadius: '12px', border: '1px solid #f0e6c0', marginBottom: '15px' },
  scriptTitle: { fontWeight: 'bold', fontSize: '12px', color: '#886d11', marginBottom: '5px' },
  scriptBody: { fontSize: '12px', fontStyle: 'italic', color: '#444', margin: 0, lineHeight: '1.6' },
  tipsHeader: { fontWeight: 'bold', fontSize: '14px', color: '#38761D', marginTop: '10px', marginBottom: '5px' },
  listExtraSmall: { listStyle: 'none', padding: 0, margin: 0, fontSize: '11px', color: '#666', lineHeight: '1.6' },
  templateContainer: { backgroundColor: '#FFFFF7', border: '1px solid #38761D', borderRadius: '12px', padding: '40px', textAlign: 'left', marginBottom: '30px' },
  templateTitle: { fontWeight: 'bold', color: '#38761D', fontSize: '18px', margin: '0 0 20px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' },
  templateOuterBox: { backgroundColor: '#FDF8E6', padding: '25px', borderRadius: '12px', border: '1px solid #f0e6c0' },
  templateInnerContent: { fontSize: '13px', color: '#444', lineHeight: '1.8' },
  templateMeta: { marginBottom: '10px' },
  templateList: { listStyle: 'none', padding: 0, margin: '0 0 15px 20px', fontSize: '13px', color: '#666' },
  greenFooter: { backgroundColor: '#38761D', padding: '40px', borderRadius: '24px', maxWidth: '900px', width: '100%', textAlign: 'center', boxSizing: 'border-box' },
  footerHeading: { color: 'white', fontWeight: 'bold', fontSize: '32px', marginBottom: '15px' },
  footerText: { color: 'white', opacity: 0.9, fontSize: '16px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' },
  flexRowCenter: { display: 'flex', justifyContent: 'center', gap: '15px' },
  btnOutline: { backgroundColor: '#74A84B', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  btnSolid: { backgroundColor: 'white', color: '#38761D', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }
};

export default ContactPoliticians;