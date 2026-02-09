// src/pages/RecyclingInstructions.jsx
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { recyclingInstructions, statusConfig } from "../data/recyclingData";

function RecyclingInstructions() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Grab the full scan results from the navigation state
  const productData = location.state?.productData;
  const lookupKey = (productData?.category || category)?.toLowerCase();
  const instructions = recyclingInstructions[lookupKey];

  if (!instructions) {
    return (
      <div style={{ padding: "100px 20px", maxWidth: "600px", margin: "0 auto", textAlign: 'center' }}>
        <h1 style={{ color: "#38761D" }}>Category Not Found</h1>
        <p>We don't have specific instructions for "{category}" in Bethlehem yet.</p>
        <button 
          onClick={() => navigate("/")}
          style={backButtonStyle}
        >
          Go Back & Try Again
        </button>
      </div>
    );
  }

  const status = statusConfig[instructions.status];

  return (
    <div style={{ minHeight: "100vh", background: "#F3F3E7", fontFamily: "'Inria Sans', sans-serif" }}>
      
      {/* 1. Status Header */}
      <div style={{ background: status.color, color: status.textColor, padding: "60px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 72, marginBottom: 10 }}>{status.icon}</div>
        <h1 style={{ fontSize: 48, margin: 0, fontWeight: 300 }}>{status.title}</h1>
        <p style={{ fontSize: 16, marginTop: 10, opacity: 0.9 }}>{status.subtitle}</p>
      </div>

      {/* 2. Main Steps Card */}
      <div style={cardContainerStyle}>
        {instructions.steps.map((step, index) => (
          <div key={index} style={{ marginBottom: index === instructions.steps.length - 1 ? 0 : 40, padding: "0 20px" }}>
            <h3 style={stepTitleStyle}>{step.title}</h3>
            
            <div style={imagePlaceholderStyle}>
              <img 
                src={step.image} 
                alt={step.title} 
                style={imageStyle}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerText = 'Instructional Image';
                }}
              />
            </div>

            <p style={stepDescStyle}>{step.description}</p>
          </div>
        ))}
      </div>

      {/* 3. Material Info Section */}
      <div style={materialInfoCardStyle}>
        <div style={{ ...symbolCircleStyle, border: `3px solid ${status.color}` }}>
          <div style={{ fontSize: 12, color: "#666" }}>Plastic</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: status.color }}>{instructions.materialCode}</div>
        </div>

        <h2 style={{ fontSize: 32, color: "#333", marginBottom: 20 }}>{instructions.materialName}</h2>
        <p style={infoTextStyle}>{instructions.materialInfo.description}</p>
        <p style={infoTextStyle}>{instructions.materialInfo.recyclingNote}</p>
      </div>

      <div style={{ height: "60px" }}></div>
    </div>
  );
}

// --- STYLES ---
const cardContainerStyle = { maxWidth: 600, margin: "20px auto", background: "#FFFFF7", borderRadius: 16, padding: 40, boxShadow: "0 4px 20px rgba(56, 118, 29, 0.1)" };
const stepTitleStyle = { fontSize: 14, color: "#6B9E3E", marginBottom: 12, fontWeight: 600, textAlign: "center", letterSpacing: "0.5px" };
const imagePlaceholderStyle = { width: "100%", maxWidth: 400, height: 200, margin: "0 auto 12px", background: "#E8E8E0", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
const stepDescStyle = { fontSize: 14, color: "#666", lineHeight: 1.6, textAlign: "center" };
const materialInfoCardStyle = { maxWidth: 600, margin: "0 auto", background: "#FFFFF7", padding: "40px 20px", textAlign: "center", borderRadius: 16, boxShadow: "0 4px 20px rgba(56, 118, 29, 0.05)" };
const symbolCircleStyle = { display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 100, height: 100, borderRadius: "50%", marginBottom: 20 };
const infoTextStyle = { fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 20 };
const backButtonStyle = { marginTop: 20, padding: "12px 24px", background: "#6B9E3E", color: "white", border: "none", borderRadius: 6, cursor: "pointer" };

export default RecyclingInstructions;