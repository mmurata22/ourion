import React from 'react';

const ContactPoliticians = () => {
  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px' }}>
        <h1 style={titleStyle}>Contact Your Representatives</h1>
        <p style={subtitleStyle}>
          Your elected officials work for you. Here's exactly how to reach them and make your voice heard on environmental issues.
        </p>
      </header>

      {/* STEP 1: FIND REPRESENTATIVES */}
      <section style={sectionWrapper}>
        <div style={whiteCard}>
          <h2 style={stepHeader}>Step 1: Find Your Representatives</h2>
          <div style={flexRow}>
            {/* Who to Contact */}
            <div style={{ flex: 1.2, minWidth: '300px' }}>
              <h4 style={subHeader}>Who to Contact:</h4>
              <div style={contactLevel}>
                <p style={levelTitle}>Local Level (Most Impact on Waste):</p>
                <ul style={bulletList}>
                  <li>• City Council Members</li>
                  <li>• Mayor's Office</li>
                  <li>• County Commissioners</li>
                  <li>• Public Works Department</li>
                </ul>
              </div>
              <div style={contactLevel}>
                <p style={levelTitle}>State Level:</p>
                <ul style={bulletList}>
                  <li>• State Representative</li>
                  <li>• State Senator</li>
                  <li>• Governor's Office</li>
                </ul>
              </div>
              <div style={contactLevel}>
                <p style={levelTitle}>Federal Level:</p>
                <ul style={bulletList}>
                  <li>• U.S. House Representative</li>
                  <li>• U.S. Senators (2 per state)</li>
                </ul>
              </div>
            </div>

            {/* How to Find Them */}
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h4 style={subHeader}>How to Find Them:</h4>
              <LinkBox icon="🔍" title="Federal Officials" items={["usa.gov/elected-officials", "commoncause.org/find-your-representative", "house.gov (enter zip code)", "senate.gov (select your state)"]} />
              <LinkBox icon="🏛️" title="State Officials" items={["Search '[Your State] legislature'", "openstates.org", "Your state's official website"]} />
              <LinkBox icon="📍" title="Local Officials" items={["Your city's official website", "Search '[Your City] city council'", "Local newspaper websites", "Call city hall directly"]} />
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2: CHOOSE YOUR METHOD */}
      <section style={sectionWrapper}>
        <h2 style={{ ...stepHeader, textAlign: 'center', marginBottom: '30px' }}>Step 2: Choose Your Method</h2>
        <div style={flexRow}>
          {/* Phone Card */}
          <div style={whiteCardHalf}>
            <h3 style={methodTitle}>📞 Phone Calls (MOST EFFECTIVE!)</h3>
            <p style={whyText}><strong>Why it works:</strong> Offices tally calls daily. Just 10-20 calls on an issue is considered significant!</p>
            <div style={templateBox}>
              <p style={{fontWeight: 'bold', marginBottom: '5px'}}>Script Template:</p>
              <p style={scriptText}>
                "Hello, my name is [Your Name] and I'm a constituent from [Address/District]."<br/>
                "I'm calling to ask [Representative Name] to support [specific policy]."<br/>
                "This is important because [one reason]."<br/>
                "Thank you for your time."
              </p>
            </div>
            <p style={{fontWeight: 'bold', fontSize: '14px', marginTop: '15px'}}>Tips:</p>
            <ul style={bulletList}>
              <li>• Call during business hours (9am - 5pm)</li>
              <li>• You'll usually talk to a staffer, not the official</li>
              <li>• Keep it under 2 minutes</li>
              <li>• Be polite but firm</li>
              <li>• Leave your name and zip code</li>
              <li>• One issue per call</li>
            </ul>
          </div>

          {/* Email Card */}
          <div style={whiteCardHalf}>
            <h3 style={methodTitle}>✉️ Email (Very Effective)</h3>
            <p style={whyText}><strong>Why it works:</strong> Creates a written record. Easy to forward to relevant committees.</p>
            <div style={templateBox}>
              <p style={{fontWeight: 'bold', marginBottom: '5px'}}>Structure:</p>
              <ul style={{...bulletList, fontSize: '13px'}}>
                <li>• <b>Subject:</b> Specific and clear</li>
                <li>• <b>Opening:</b> State who you are and where you live</li>
                <li>• <b>Body:</b> Your request with 2-3 specific points</li>
                <li>• <b>Closing:</b> Ask for a response</li>
                <li>• <b>Signature:</b> Full name, address, phone</li>
              </ul>
            </div>
            <p style={{fontWeight: 'bold', fontSize: '14px', marginTop: '15px'}}>Tips:</p>
            <ul style={bulletList}>
              <li>• Keep it to 3-4 paragraphs</li>
              <li>• Personal stories are powerful</li>
              <li>• Include local data/examples</li>
              <li>• Be respectful but direct</li>
              <li>• Always include your address (proves you're a constituent)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meetings Grid */}
      <section style={{ ...sectionWrapper, display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={meetingCard}>
          <h4 style={meetingTitle}>💬 Town Halls & Meetings</h4>
          <ul style={bulletList}>
            <li>• <b>When:</b> Check representative websites for schedules</li>
            <li>• <b>Prepare:</b> Write your question beforehand (2 min max)</li>
            <li>• <b>Record:</b> Ask if you can record their answer</li>
            <li>• <b>Follow up:</b> Email them referencing the meeting</li>
            <li>• <b>Bring friends:</b> Show community support</li>
            <li>• <b>Arrive early:</b> Sign up for Q&A time</li>
          </ul>
        </div>
        <div style={meetingCard}>
          <h4 style={meetingTitle}>📍 City Council Meetings</h4>
          <ul style={bulletList}>
            <li>• <b>Schedule:</b> Usually monthly, check city website</li>
            <li>• <b>Public Comment:</b> Sign up when you arrive (first come, first serve)</li>
            <li>• <b>Time Limit:</b> Usually 2-3 minutes per person</li>
            <li>• <b>Bring Materials:</b> Handouts, petitions, photos</li>
            <li>• <b>Pack the Room:</b> Bring supporters to show numbers</li>
            <li>• <b>Follow Up:</b> Submit written comments for the record</li>
          </ul>
        </div>
      </section>

      {/* STEP 3: TEMPLATES */}
      <section style={sectionWrapper}>
        <h2 style={{ ...stepHeader, textAlign: 'center', marginBottom: '30px' }}>Step 3: Use These Templates</h2>
        
        {/* Template 1 */}
        <div style={whiteCardFull}>
          <h4 style={templateHeader}>📄 Template 1: Recycling Infrastructure</h4>
          <div style={templateContent}>
            <p><b>Subject:</b> Urgent: Expand Recycling Programs in [City/State]</p>
            <p><b>Dear [Representative Name],</b></p>
            <p>My name is [Your Name] and I am your constituent living at [Your Address] in [District]. I am writing to urge you to support expanded recycling infrastructure in our community.</p>
            <p><b>Current problems I see:</b></p>
            <ul style={bulletList}>
              <li>• Our curbside recycling only accepts plastics #1 and #2, while most packaging is #3-7</li>
              <li>• There is no composting program, forcing organic waste to landfills</li>
              <li>• Recycling education is minimal, leading to contamination</li>
            </ul>
            <p><b>What I'm asking you to do:</b></p>
            <ul style={bulletList}>
              <li>• Vote YES on any proposals to expand recycling programs</li>
              <li>• Allocate funding for municipal composting</li>
              <li>• Support public education campaigns on proper sorting</li>
            </ul>
            <p>Currently, our city diverts only [X]% of waste from landfills. Cities with comprehensive programs achieve 60-80%. We can do better. I expect to see action on this issue and request a response outlining your position.</p>
            <p>Sincerely,<br/>[Your Name]<br/>[Your Address]<br/>[Your Phone Number]<br/>[Your Email]</p>
          </div>
        </div>

        {/* Template 2 */}
        <div style={whiteCardFull}>
          <h4 style={templateHeader}>📄 Template 2: Extended Producer Responsibility</h4>
          <div style={templateContent}>
            <p><b>Subject:</b> Support EPR Legislation for Packaging Waste</p>
            <p><b>Dear [Representative Name],</b></p>
            <p>I am [Your Name], a constituent from [District/Address]. I am writing to ask you to support Extended Producer Responsibility (EPR) legislation for packaging waste.</p>
            <p><b>Why this matters:</b></p>
            <ul style={bulletList}>
              <li>• Taxpayers currently pay $300+ million annually for waste management</li>
              <li>• Manufacturers design packaging with no responsibility for disposal</li>
              <li>• EPR shifts costs to producers, incentivizing better design</li>
              <li>• States with EPR see 30-50% increases in recycling rates</li>
            </ul>
            <p>Maine, Oregon, and Colorado have already passed EPR laws with bipartisan support. [State/City] should join them. Please confirm your support for EPR legislation and let me know how you plan to advance this policy.</p>
            <p>Respectfully,<br/>[Your Name]<br/>[Your Address]<br/>[Your Phone Number]<br/>[Your Email]</p>
          </div>
        </div>

        {/* Template 3 */}
        <div style={whiteCardFull}>
          <h4 style={templateHeader}>📄 Template 3: Plastic Waste Reduction</h4>
          <div style={templateContent}>
            <p><b>Subject:</b> Ban Single-Use Plastics in [City/State]</p>
            <p><b>Dear [Representative Name],</b></p>
            <p>As a resident of [District/Address], I am writing to urge you to support legislation banning single-use plastics in our community.</p>
            <p><b>The problem:</b></p>
            <ul style={bulletList}>
              <li>• Only 9% of plastic ever produced has been recycled</li>
              <li>• Plastic bags, straws, and utensils are used for minutes but last centuries</li>
              <li>• Our landfills and waterways are overwhelmed</li>
            </ul>
            <p>Over 500 cities and 8 states have already enacted similar bans successfully. Local businesses adapt quickly and customers support it. I urge you to introduce or co-sponsor legislation to reduce single-use plastics. Please respond with your position on this issue.</p>
            <p>Thank you,<br/>[Your Name]<br/>[Your Address]<br/>[Your Phone Number]<br/>[Your Email]</p>
          </div>
        </div>
      </section>

      {/* DO / DON'T Section */}
      <section style={sectionWrapper}>
        <div style={whiteCard}>
          <h2 style={{ ...stepHeader, textAlign: 'center', marginBottom: '30px' }}>Tips for Maximum Impact</h2>
          <div style={flexRow}>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: '#3e632e', fontSize: '18px', marginBottom: '15px' }}>✅ DO:</h4>
              <ul style={impactList}>
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
            <div style={{ flex: 1 }}>
              <h4 style={{ color: '#c0392b', fontSize: '18px', marginBottom: '15px' }}>❌ DON'T:</h4>
              <ul style={impactList}>
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

{/* Footer CTA */}
      <footer style={greenFooter}>
        <h2 style={{ color: 'white', margin: '0 0 10px 0' }}>Take Action Today</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>
          Don't wait for the perfect moment. Pick up the phone or send that email right now. 
          Your representatives need to hear from you.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          {/* Link to find local representatives and their contact info */}
          <button 
            style={btnLight}
            onClick={() => window.open('https://www.commoncause.org/find-your-representative/', '_blank')}
          >
            Contact Your Reps
          </button>

          {/* Link to convert daily habits into measurable CO2 data */}
          <button 
            style={btnLightOutline}
            onClick={() => window.open('https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator', '_blank')}
          >
            Calculate Your Impact
          </button>
          
        </div>
      </footer>
    </div>
  );
};

// --- Sub-Components ---
const LinkBox = ({ icon, title, items }) => (
  <div style={linkBoxStyle}>
    <div style={{ fontWeight: 'bold', color: '#4a7c44', marginBottom: '8px', fontSize: '14px' }}>{icon} {title}</div>
    {items.map((item, i) => <div key={i} style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>• {item}</div>)}
  </div>
);

// --- Styles ---
const containerStyle = { backgroundColor: "#F3F3E7", minHeight: "100vh", padding: "60px 20px", fontFamily: "'Inria Sans', sans-serif", color: "#2d4a22", display: 'flex', flexDirection: 'column', alignItems: 'center' };
const titleStyle = { fontSize: '42px', fontWeight: 'bold', color: '#4a7c44', margin: '0 0 10px 0' };
const subtitleStyle = { color: '#666', fontSize: '17px', lineHeight: '1.5' };
const sectionWrapper = { width: '100%', maxWidth: '1000px', marginBottom: '50px' };
const stepHeader = { color: '#6ba35e', fontSize: '28px', marginBottom: '25px', fontWeight: 'bold' };
const whiteCard = { backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%', boxSizing: 'border-box' };
const whiteCardHalf = { ...whiteCard, flex: 1, minWidth: '340px' };
const whiteCardFull = { ...whiteCard, marginBottom: '25px' };

const flexRow = { display: 'flex', flexWrap: 'wrap', gap: '30px' };
const subHeader = { color: '#4a7c44', fontSize: '18px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' };
const contactLevel = { marginBottom: '20px' };
const levelTitle = { fontWeight: 'bold', fontSize: '14px', marginBottom: '8px', color: '#3e632e' };
const bulletList = { listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.6' };

const linkBoxStyle = { backgroundColor: '#fdf8e6', padding: '15px', borderRadius: '8px', border: '1px solid #f0e6c0' };
const methodTitle = { fontSize: '20px', color: '#4a7c44', marginBottom: '15px' };
const whyText = { fontSize: '13px', color: '#666', marginBottom: '15px' };
const templateBox = { backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' };
const scriptText = { fontSize: '13px', fontStyle: 'italic', color: '#444', lineHeight: '1.6' };

const meetingCard = { backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', flex: 1, minWidth: '300px' };
const meetingTitle = { color: '#4a7c44', marginBottom: '15px', fontSize: '18px' };

const templateHeader = { color: '#4a7c44', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' };
const templateContent = { fontSize: '14px', color: '#555', lineHeight: '1.8' };

const impactList = { ...bulletList, lineHeight: '2' };

const greenFooter = { backgroundColor: '#3e632e', width: '100%', maxWidth: '1000px', padding: '50px 40px', borderRadius: '16px', textAlign: 'center', boxSizing: 'border-box' };
const btnLight = { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 30px', borderRadius: '8px', border: '1px solid white', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' };
const btnLightOutline = { backgroundColor: 'white', color: '#3e632e', padding: '12px 30px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' };

export default ContactPoliticians;