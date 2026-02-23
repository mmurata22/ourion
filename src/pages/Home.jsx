import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';

// Asset Imports (keep as is)
import EyeIcon from '../assets/icons/Eye_Vector.png';
import DocumentIcon from '../assets/icons/Document_Vector.png';
import PlantIcon from '../assets/icons/Plant_Vector.png';
import PlanetIcon from '../assets/icons/Planet_Vector.png';
import SparkleIcon from '../assets/icons/Sparkle_Vector.png';
import Mountains from '../assets/images/MountainImage.png';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // AI Model Logic (keep as is)
  useEffect(() => {
    const loadOurionModel = async () => {
      try {
        const loadedModel = await tf.loadGraphModel('/models/yolov8n_web_model/model.json');
        setModel(loadedModel);
      } catch (err) { console.error(err); }
    };
    loadOurionModel();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleUpload(file);
  };

  const handleUpload = async (file) => {
    if (!model) return;
    setLoading(true);
    try {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      await new Promise(resolve => img.onload = resolve);
      const tensor = tf.tidy(() => tf.browser.fromPixels(img).resizeNearestNeighbor([640, 640]).toFloat().div(255.0).expandDims(0));
      const predictions = await model.executeAsync(tensor);
      const outputData = await predictions.data();
      let localGuess = "unknown";
      if (outputData.reduce((a, b) => Math.max(a, b), 0) > 0.6) { localGuess = "bottle"; }
      const formData = new FormData();
      formData.append("image", file);
      formData.append("local_cv_guess", localGuess);
      const res = await fetch(`${process.env.REACT_APP_API_URL}/process-image`, { method: "POST", body: formData });
      const resData = await res.json();
      const targetCategory = resData.category ? resData.category.toLowerCase() : 'unknown';
      navigate(`/recycle/${targetCategory}`, { state: { productData: resData } });
      tf.dispose(tensor);
      tf.dispose(predictions);
    } catch (err) { alert(err.message); } finally { setLoading(false); }
  };

  return (
    <div style={{ backgroundColor: '#F3F3E7', fontFamily: "'Inria Sans', sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{...heroSectionStyle, height: isMobile ? '70vh' : '85vh'}}>
        <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
        <div style={{...logoGroupStyle, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '20px'}}>
          <img src="/Ourion_Logo.png" alt="Logo" style={{ height: isMobile ? '60px' : '80px' }} />
          <h1 style={{...titleStyle, fontSize: isMobile ? '52px' : '72px'}}>Ourion</h1>
        </div>
        <p style={{...subtitleStyle, fontSize: isMobile ? '18px' : '24px'}}>See waste differently</p>
        <button 
          onClick={() => fileInputRef.current.click()} 
          style={{...buttonStyle, padding: isMobile ? '15px 30px' : '20px 40px', fontSize: isMobile ? '18px' : '22px'}} 
          disabled={loading || !model}
        >
          {loading ? "Analyzing..." : !model ? "Loading AI..." : "Scan Package"}
        </button>
      </section>

      {/* 2. WHAT WE DO SECTION */}
      <section style={sectionContainerStyle}>
        <h2 style={{...sectionHeadingStyle, fontSize: isMobile ? '36px' : '48px'}}>What We Do</h2>
        {/* FORCE SPACING: Removed class, used explicit gaps and max-width */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: isMobile ? '30px' : '40px', 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: '0 25px' 
        }}>
          <FeatureCard icon={EyeIcon} title="Instant Analysis" desc="Simply snap a photo and get immediate recycling guidance." />
          <FeatureCard icon={DocumentIcon} title="Clear Instructions" desc="Get step-by-step instructions on how to properly recycle." />
          <FeatureCard icon={PlantIcon} title="Eco-Friendly Tips" desc="Learn helpful tips to reduce waste and live sustainably." />
        </div>
      </section>

      {/* 3. WHY RECYCLE SECTION */}
      <section style={sectionContainerStyle}>
        <h2 style={{...sectionHeadingStyle, fontSize: isMobile ? '36px' : '48px'}}>Why Recycle?</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: isMobile ? '20px' : '30px', 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: '0 25px' 
        }}>
          <StatCard val="75%" label="of waste is recyclable, but only 30% gets recycled" />
          <StatCard val="95%" label="less energy needed to recycle aluminum" />
          <StatCard val="1 Ton" label="of recycled paper saves 17 trees" />
        </div>
      </section>

      {/* 3.5 DETAILED INFO CARDS SECTION */}
      <section style={{ ...sectionContainerStyle, padding: '40px 25px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: '40px', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
            <InfoCard icon={PlanetIcon} title="Help Our Planet" desc="Proper recycling reduces landfill waste." points={["Reduces pollution", "Preserves wildlife"]} isMobile={isMobile} />
            <InfoCard icon={SparkleIcon} title="Simple Process" desc="No more guessing. Ourion gives answers." points={["Instant answers", "Easy guidance"]} isMobile={isMobile} />
        </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section style={ctaContainerStyle}>
        <div style={{ ...ctaWrapperStyle, flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ ...ctaGreenBoxStyle, padding: isMobile ? '40px 25px' : '60px' }}>
              <h2 style={{...ctaHeadingStyle, fontSize: isMobile ? '28px' : '38px'}}>Start Making a Difference Today</h2>
              <p style={ctaTextStyle}>Join eco-conscious individuals making recycling easier.</p>
            </div>
            <div style={{ ...ctaImageStyle, backgroundImage: `url(${Mountains})`, minHeight: isMobile ? '300px' : '450px' }} />
        </div>
      </section>
    </div>
  );
};

// --- HELPER COMPONENTS ---
const FeatureCard = ({ icon, title, desc }) => (
  <div style={cardStyle}>
    <div style={iconCircleStyle}>
      <img src={icon} alt={title} style={{ width: '30px', height: '30px' }} />
    </div>
    <h3 style={{ color: '#38761D', margin: '15px 0', fontSize: '18px' }}>{title}</h3>
    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

const StatCard = ({ val, label }) => (
  <div style={{ ...cardStyle, backgroundColor: '#6B9E3E', color: 'white', border: 'none', padding: '30px 20px' }}>
    <h3 style={{ fontSize: '38px', margin: 0 }}>{val}</h3>
    <p style={{ fontSize: '13px', marginTop: '10px' }}>{label}</p>
  </div>
);

const InfoCard = ({ icon, title, desc, points, isMobile }) => (
  <div style={{ ...cardStyle, alignItems: 'flex-start', textAlign: 'left', padding: isMobile ? '30px 20px' : '40px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
      <div style={{ ...iconCircleStyle, backgroundColor: '#38761D', width: '45px', height: '45px' }}>
        <img src={icon} alt="" style={{ width: '22px', height: '22px' }} />
      </div>
      <h3 style={{ color: '#38761D', fontSize: isMobile ? '22px' : '26px', margin: 0 }}>{title}</h3>
    </div>
    <p style={{ fontSize: '15px', color: '#6B9E3E', lineHeight: '1.6' }}>{desc}</p>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {points.map((p, i) => <li key={i} style={pointStyle}>• {p}</li>)}
    </ul>
  </div>
);

// --- STYLES ---
const heroSectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' };
const logoGroupStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' };
const titleStyle = { color: '#38761D', fontWeight: 500 };
const subtitleStyle = { color: '#6B9E3E', marginBottom: '40px' };
const sectionContainerStyle = { padding: '80px 0', textAlign: 'center' };
const sectionHeadingStyle = { color: '#38761D', marginBottom: '40px', fontWeight: 300 };
const buttonStyle = { display: 'flex', alignItems: 'center', backgroundColor: '#74A84B', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' };
const cardStyle = { backgroundColor: '#FFFFF7', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(56,118,29,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(56,118,29,0.05)', boxSizing: 'border-box' };
const iconCircleStyle = { width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#38761D', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const pointStyle = { fontSize: '14px', color: '#6B9E3E', marginBottom: '10px' };
const ctaContainerStyle = { padding: '40px 20px 100px', display: 'flex', justifyContent: 'center' };
const ctaWrapperStyle = { display: 'flex', maxWidth: '900px', width: '100%', overflow: 'hidden', borderRadius: '24px', boxShadow: '0 15px 40px rgba(56, 118, 29, 0.12)' };
const ctaGreenBoxStyle = { flex: '1', backgroundColor: '#38761D', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const ctaHeadingStyle = { marginBottom: '20px' };
const ctaTextStyle = { fontSize: '16px', opacity: 0.9 };
const ctaImageStyle = { flex: '1', backgroundSize: 'cover', backgroundPosition: 'center' };

export default Home;