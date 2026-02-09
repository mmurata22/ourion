import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';

// Asset Imports
import EyeIcon from '../assets/icons/Eye_Vector.png';
import DocumentIcon from '../assets/icons/Document_Vector.png';
import PlantIcon from '../assets/icons/Plant_Vector.png';
import PlanetIcon from '../assets/icons/Planet_Vector.png';
import SparkleIcon from '../assets/icons/Sparkle_Vector.png';
import Mountains from '../assets/images/MountainImage.png';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // 1. Load the "Ourion Brain" on Mount
  useEffect(() => {
    const loadOurionModel = async () => {
      try {
        // Points to your public/models/yolov8n_web_model/ folder
        const loadedModel = await tf.loadGraphModel('/models/yolov8n_web_model/model.json');
        setModel(loadedModel);
        console.log("✅ Ourion CV Model Loaded Successfully");
      } catch (err) {
        console.error("❌ Model loading failed:", err);
      }
    };
    loadOurionModel();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    await handleUpload(file);
  };

  const handleUpload = async (file) => {
    if (!model) {
      alert("AI Model is still loading, please wait a moment.");
      return;
    }

    setLoading(true);
    
    try {
      // 2. Client-Side Pre-processing (Preparing pixels for YOLO)
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      await new Promise(resolve => img.onload = resolve);

      const tensor = tf.tidy(() => {
        return tf.browser.fromPixels(img)
          .resizeNearestNeighbor([640, 640]) // YOLOv8 standard input
          .toFloat()
          .div(255.0) // Normalize to [0, 1]
          .expandDims(0);
      });

      // 3. Local Inference (The "Visual Hint")
      const predictions = await model.executeAsync(tensor);
      const outputData = await predictions.data();
      
      // Determine a local guess based on model confidence
      let localGuess = "unknown";
      // We look for any class probability over 0.6
      const maxConfidence = outputData.reduce((a, b) => Math.max(a, b), 0);
      if (maxConfidence > 0.6) {
          localGuess = "bottle"; 
      }

      // 4. The Hybrid Handshake: Prepare Envelope for Flask
      const formData = new FormData();
      formData.append("image", file);
      formData.append("local_cv_guess", localGuess);
      
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/process-image`,
        { method: "POST", body: formData }
      );
      
      if (!res.ok) throw new Error(await res.text());
      const resData = await res.json();
      
      // 5. Navigate to Results Page
      // We force lowercase to match your URL params and pass data in state
      const targetCategory = resData.category ? resData.category.toLowerCase() : 'unknown';
      console.log(`Navigating to /recycle/${targetCategory}`);
      
      navigate(`/recycle/${targetCategory}`, { 
        state: { productData: resData } 
      });

      // 6. Memory Cleanup (Prevent browser from crashing)
      tf.dispose(tensor);
      tf.dispose(predictions);
      URL.revokeObjectURL(img.src);
      
    } catch (err) {
      console.error("Analysis failed:", err);
      alert(`Oops! Analysis error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#F3F3E7', fontFamily: "'Inria Sans', sans-serif" }}>
      
      {/* 1. HERO SECTION */}
      <section style={heroSectionStyle}>
        <input 
          type="file" 
          accept="image/*" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileChange} 
        />
        <div style={logoGroupStyle}>
          <img src="/Ourion_Logo.png" alt="Logo" style={{ height: '80px' }} />
          <h1 style={titleStyle}>Ourion</h1>
        </div>
        <p style={subtitleStyle}>See waste differently</p>
        <button 
          onClick={() => fileInputRef.current.click()} 
          style={buttonStyle} 
          disabled={loading || !model}
        >
          {loading ? "Analyzing..." : !model ? "Loading AI..." : "Scan Package"}
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
            But knowing what goes where can be confusing. That's where Ourion comes in.</p>
        <div style={gridStyle}>
          <StatCard val="75%" label="of waste is recyclable, but only 30% gets recycled" />
          <StatCard val="95%" label="less energy needed to recycle aluminum than produce new" />
          <StatCard val="1 Ton" label="of recycled paper saves 17 trees and 7,000 gallons of water" />
        </div>
      </section>

      {/* 3.5 DETAILED INFO CARDS SECTION */}
      <section style={{ ...sectionContainerStyle, padding: '40px 20px' }}>
        <div style={infoGridStyle}>
            <InfoCard 
              icon={PlanetIcon}
              title="Help Our Planet"
              desc="Proper recycling reduces landfill waste, conserves natural resources, and helps combat climate change."
              points={["Reduces pollution", "Preserves wildlife habitats", "Conserves water and energy"]}
            />
            <InfoCard 
              icon={SparkleIcon}
              title="Simple Process"
              desc="No more guessing or searching through complicated recycling guides. Ourion gives you instant answers."
              points={["Instant answers", "Works with your waste", "Easy-to-follow guidance"]}
            />
        </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section style={ctaContainerStyle}>
        <div style={ctaWrapperStyle}>
            <div style={ctaGreenBoxStyle}>
              <h2 style={ctaHeadingStyle}>Start Making a Difference Today</h2>
              <p style={ctaTextStyle}>
                Join a group of eco-conscious individuals who are making recycling easier. 
                Every scan helps build a sustainable future.
              </p>
            </div>
            <div style={{ ...ctaImageStyle, backgroundImage: `url(${Mountains})` }} />
        </div>
      </section>
    </div>
  );
};

// --- HELPER COMPONENTS ---
const FeatureCard = ({ icon, title, desc }) => (
  <div style={cardStyle}>
    <div style={iconCircleStyle}>
      <img src={icon} alt={title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
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

const InfoCard = ({ icon, title, desc, points }) => (
  <div style={{ ...cardStyle, alignItems: 'flex-start', textAlign: 'left', padding: '60px 45px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
      <div style={{ ...iconCircleStyle, backgroundColor: '#38761D', width: '60px', height: '60px' }}>
        <img src={icon} alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </div>
      <h3 style={{ color: '#38761D', fontSize: '32px', margin: 0, fontWeight: 500 }}>{title}</h3>
    </div>
    <p style={{ fontSize: '16px', color: '#6B9E3E', lineHeight: '1.6', marginBottom: '30px' }}>{desc}</p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {points.map((point, index) => (
        <li key={index} style={pointStyle}><span style={{ fontSize: '8px' }}>•</span> {point}</li>
      ))}
    </ul>
  </div>
);

// --- STYLES ---
const heroSectionStyle = { height: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' };
const logoGroupStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' };
const titleStyle = { fontSize: '72px', color: '#38761D', margin: 0, fontWeight: 500 };
const subtitleStyle = { fontSize: '24px', color: '#6B9E3E', marginBottom: '40px', opacity: 0.9 };
const sectionContainerStyle = { padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' };
const sectionHeadingStyle = { fontSize: '48px', color: '#38761D', marginBottom: '60px', fontWeight: 300 };
const subTextStyles = { fontSize: '18px', color: '#666', marginBottom: '40px' };
const buttonStyle = { display: 'flex', alignItems: 'center', gap: '15px', padding: '20px 40px', backgroundColor: '#74A84B', color: 'white', border: 'none', borderRadius: '8px', fontSize: '22px', cursor: 'pointer', boxShadow: '0 8px 20px rgba(116, 168, 75, 0.3)' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '0 20px' };
const infoGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', maxWidth: '1280px', margin: '0 auto' };
const cardStyle = { backgroundColor: '#FFFFF7', padding: '50px 30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(56, 118, 29, 0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(56, 118, 29, 0.1)' };
const iconCircleStyle = { width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#38761D', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const pointStyle = { fontSize: '16px', color: '#6B9E3E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' };
const ctaContainerStyle = { padding: '40px 20px 100px', display: 'flex', justifyContent: 'center' };
const ctaWrapperStyle = { display: 'flex', flexWrap: 'nowrap', maxWidth: '1280px', width: '100%', minHeight: '550px', overflow: 'hidden', borderRadius: '32px', boxShadow: '0 15px 40px rgba(56, 118, 29, 0.12)' };
const ctaGreenBoxStyle = { flex: '1', minWidth: '350px', backgroundColor: '#38761D', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px' };
const ctaHeadingStyle = { fontSize: '38px', marginBottom: '20px', fontWeight: 500, lineHeight: 1.2 };
const ctaTextStyle = { fontSize: '16px', lineHeight: '1.6', opacity: 0.9 };
const ctaImageStyle = { flex: '1', minWidth: '350px', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '450px' };

export default Home;