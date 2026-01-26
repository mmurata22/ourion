import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EyeIcon from '../assets/icons/Eye_Vector.png';
import DocumentIcon from '../assets/icons/Document_Vector.png';
import PlantIcon from '../assets/icons/Plant_Vector.png';
import PlanetIcon from '../assets/icons/Planet_Vector.png';
import SparkleIcon from '../assets/icons/Sparkle_Vector.png';
import Mountains from '../assets/images/MountainImage.png';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    await handleUpload(file);
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    setLoading(true);
    
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/process-image`,
        { method: "POST", body: formData }
      );
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      
      navigate(`/recycle/${data.category}`, { state: { productData: data } });
      
    } catch (err) {
      console.error("Upload error:", err);
      alert(`Upload failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#F3F3E7', fontFamily: "'Inria Sans', sans-serif" }}>
      
      {/* 1. HERO SECTION */}
      <section style={heroSectionStyle}>
        <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
        <div style={logoGroupStyle}>
          <img src="/Ourion_Logo.png" alt="Logo" style={{ height: '80px' }} />
          <h1 style={titleStyle}>Ourion</h1>
        </div>
        <p style={subtitleStyle}>See waste differently</p>
        <button onClick={() => fileInputRef.current.click()} style={buttonStyle} disabled={loading}>
          <span style={{ fontSize: '24px' }}></span> 
          {loading ? "Analyzing..." : "Scan Package"}
        </button>
      </section>

      {/* 2. WHAT WE DO SECTION */}
      <section style={sectionContainerStyle}>
        <h2 style={sectionHeadingStyle}>What We Do</h2>
        <div style={gridStyle}>
          <FeatureCard 
            icon={EyeIcon}
            title="Instant Analysis" 
            desc="Simply snap a photo and get immediate recycling guidance for any item." 
          />
          <FeatureCard 
            icon={DocumentIcon}
            title="Clear Instructions" 
            desc="Get step-by-step instructions on how to properly recycle each item." 
          />
          <FeatureCard 
            icon={PlantIcon}
            title="Eco-Friendly Tips" 
            desc="Learn helpful tips to reduce waste and live more sustainably." 
          />
        </div>
      </section>

      {/* 3. WHY RECYCLE SECTION */}
      <section style={sectionContainerStyle}>
        <h2 style={sectionHeadingStyle}>Why Recycle?</h2>
        <p style={subTextStyles}>Every item we recycle correctly makes a real difference. 
            But knowing  what goes where can be confusing. That's where Ourion comes in.</p>
        <div style={gridStyle}>
          <StatCard val="75%" label="of waste is recyclable, but only 30% gets recycled" />
          <StatCard val="95%" label="less energy needed to recycle aluminum than produce new" />
          <StatCard val="1 Ton" label="of recycled paper saves 17 trees and 7,000 gallons of water" />
        </div>
      </section>

      {/* 3.5 DETAILED INFO CARDS SECTION */}
    <section style={{ ...sectionContainerStyle, padding: '40px 20px' }}>
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '40px',
        maxWidth: '1280px', // Matches the CTA box width for perfect alignment
        margin: '0 auto'
    }}>
        <InfoCard 
        icon={PlanetIcon}
        title="Help Our Planet"
        desc="Proper recycling reduces landfill waste, conserves natural resources, and helps combat climate change. Each correctly recycled item contributes to a healthier ecosystem for future generations."
        points={["Reduces pollution", "Preserves wildlife habitats", "Conserves water and energy"]}
        />
        <InfoCard 
        icon={SparkleIcon}
        title="Simple Process"
        desc="No more guessing or searching through complicated recycling guides. Ourion gives you instant, personalized recycling instructions for any item, right at your fingertips."
        points={["Instant answers", "Works with your waste", "Easy-to-follow guidance"]}
        />
    </div>
    </section>

      {/* 4. FOOTER CALL TO ACTION */}
        <section style={{ 
        padding: '40px 20px 100px',
        display: 'flex', 
        justifyContent: 'center' 
        }}>
        <div style={{ 
            display: 'flex', 
            flexWrap: 'nowrap',
            maxWidth: '1280px',
            width: '100%',
            minHeight: '550px', 
            overflow: 'hidden',
            borderRadius: '32px',
            boxShadow: '0 15px 40px rgba(56, 118, 29, 0.12)' 
        }}>
            
            {/* Left: Green Text Box */}
            <div style={ctaGreenBoxStyle}>
            <h2 style={{ fontSize: '38px', marginBottom: '20px', fontWeight: 500, lineHeight: 1.2 }}>
                Start Making a Difference Today
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
                Join a group of eco-conscious individuals who are making recycling easier and more effective. 
                Every scan helps build a sustainable future, one item at a time.
            </p>
            </div>

            {/* Right: Image Box */}
            <div style={{
            ...ctaImageStyle,
            backgroundImage: `url(${Mountains})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '450px'
            }}>
            {/* Handled by background-image */}
            </div>
        </div>
        </section>
    </div>
  );
};

// --- HELPER COMPONENTS ---
const FeatureCard = ({ icon, title, desc }) => (
  <div style={cardStyle}>
    <div style={iconCircleStyle}>
      <img 
        src={icon} 
        alt={title} 
        style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
      />
    </div>
    <h3 style={{ color: '#38761D', margin: '15px 0', fontWeight: 600 }}>{title}</h3>
    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

const StatCard = ({ val, label }) => (
  <div style={{ ...cardStyle, backgroundColor: '#6B9E3E', color: 'white', border: 'none' }}>
    <h3 style={{ fontSize: '42px', margin: 0, fontWeight: 700 }}>{val}</h3>
    <p style={{ fontSize: '14px', marginTop: '10px', lineHeight: '1.4' }}>{label}</p>
  </div>
);

// --- STYLE DEFINITIONS ---
const heroSectionStyle = {
  height: '85vh', 
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center', 
  textAlign: 'center', 
  padding: '0 20px'
};

const logoGroupStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' };
const titleStyle = { fontSize: '72px', color: '#38761D', margin: 0, fontWeight: 500 };
const subtitleStyle = { fontSize: '24px', color: '#6B9E3E', marginBottom: '40px', opacity: 0.9 };
const sectionContainerStyle = { padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' };
const sectionHeadingStyle = { fontSize: '48px', color: '#38761D', marginBottom: '60px', fontWeight: 300 };
const subTextStyles = { fontSize: '18px', color: '#666', marginBottom: '40px' };


const buttonStyle = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '15px', 
  padding: '20px 40px',
  backgroundColor: '#74A84B', 
  color: 'white', 
  border: 'none', 
  borderRadius: '8px',
  fontSize: '22px', 
  cursor: 'pointer', 
  boxShadow: '0 8px 20px rgba(116, 168, 75, 0.3)',
  transition: 'transform 0.2s ease'
};

const gridStyle = {
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px', 
  padding: '0 20px'
};

const cardStyle = {
  backgroundColor: '#FFFFF7', 
  padding: '50px 30px', borderRadius: '24px',
  boxShadow: '0 10px 30px rgba(56, 118, 29, 0.05)', 
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  border: '1px solid rgba(56, 118, 29, 0.1)'
};

const iconCircleStyle = {
  width: '70px', 
  height: '70px', 
  borderRadius: '50%', 
  backgroundColor: '#38761D',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontSize: '30px'
};

const ctaGreenBoxStyle = {
  flex: '1', 
  minWidth: '350px', 
  backgroundColor: '#38761D', 
  color: 'white',
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  padding: '60px'
};

const ctaImageStyle = {
  flex: '1', 
  minWidth: '350px', 
  background: 'url("/Landscape_Eco.png") center/cover no-repeat',
  minHeight: '400px'
};

const InfoCard = ({ icon, title, desc, points }) => (
  <div style={{ ...cardStyle, alignItems: 'flex-start', textAlign: 'left', padding: '60px 45px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
      <div style={{ ...iconCircleStyle, backgroundColor: '#38761D', width: '60px', height: '60px' }}>
        <img src={icon} alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </div>
      <h3 style={{ color: '#38761D', fontSize: '32px', margin: 0, fontWeight: 500 }}>{title}</h3>
    </div>
    
    <p style={{ fontSize: '16px', color: '#6B9E3E', lineHeight: '1.6', marginBottom: '30px' }}>
      {desc}
    </p>

    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {points.map((point, index) => (
        <li key={index} style={{ 
          fontSize: '16px', 
          color: '#6B9E3E', 
          marginBottom: '12px', 
          display: 'flex', 
          alignItems: 'center',
          gap: '10px' 
        }}>
          <span style={{ fontSize: '8px' }}>•</span> {point}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;