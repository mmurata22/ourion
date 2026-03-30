import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient.jsx";
import { LocationContext } from "../context/LocationContext"; 
import { recyclingInstructions, statusConfig } from "../data/recyclingData";

function RecyclingInstructions() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { zipCode, loading: contextLoading } = useContext(LocationContext); 

  const [localInstructions, setLocalInstructions] = useState(null);
  const [loading, setLoading] = useState(true);

  const productData = location.state?.productData;
  const lookupKey = (productData?.category || category)?.toLowerCase();
  
  // 1. Move baseData into the dependency loop
  const baseData = recyclingInstructions[lookupKey];

  useEffect(() => {
    // 2. STAGE 1: Wait for Context
    if (contextLoading) return;

    // 3. STAGE 2: If we have no base material data, we can't look up city rules
    if (!baseData) {
      setLoading(false);
      return;
    }

    const applyFormatting = (base, zipInfo, local) => {
      let finalSteps = base.steps.filter(step => !(zipCode && step.image?.includes("Research_AI")));
      if (local?.special_instructions && Array.isArray(local.special_instructions)) {
        const combinedDescription = local.special_instructions.join("\n• ");
        finalSteps = [{ title: "LOCAL SPECIAL INSTRUCTIONS", description: `• ${combinedDescription}`, image: null }, ...finalSteps];
      }
      setLocalInstructions({ ...base, steps: finalSteps, overallNote: zipInfo?.overall_city_note || "" });
    };

    const fetchDynamicRules = async () => {
      setLoading(true);
      try {
        let zipData = null;
        let cityConfig = null;

        if (zipCode) {
          // Query 1: Find City
          const { data: zipRows } = await supabase.from('zip_lookup').select('city_name, overall_city_note').eq('zip_code', zipCode).limit(1);
          zipData = zipRows?.[0] || null;

          if (zipData?.city_name) {
            // Query 2: Find Rules (Check if materialCode matches your DB!)
            const { data: configRows } = await supabase
              .from('city_configs')
              .select('special_instructions')
              .eq('city_name', zipData.city_name)
              .eq('category_id', baseData.materialCode) 
              .limit(1);

            cityConfig = configRows?.[0] || null;
            console.log("DB Result for Bethlehem:", cityConfig);
          }
        }
        applyFormatting(baseData, zipData, cityConfig);
      } catch (error) {
        console.error("Lookup error:", error);
        applyFormatting(baseData, null, null);
      } finally {
        setLoading(false);
      }
    };

    fetchDynamicRules();
  }, [lookupKey, zipCode, contextLoading, baseData]); // Re-run if baseData or zipCode changes

  if (contextLoading || loading) return <div style={{ textAlign: 'center', padding: '100px', fontFamily: 'Inria Sans', color: '#38761D' }}>Analyzing local regulations for {zipCode || 'your area'}...</div>;

  if (!localInstructions) return <div style={{ padding: "100px 20px", textAlign: 'center' }}><h1 style={{ color: "#38761D" }}>Category Not Found</h1><button onClick={() => navigate("/")} style={backButtonStyle}>Go Back</button></div>;

  const status = statusConfig[localInstructions.status];

  return (
    <div style={{ minHeight: "100vh", background: "#F3F3E7", fontFamily: "'Inria Sans', sans-serif" }}>
      <div style={{ background: status.color, color: status.textColor, padding: "60px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 72, marginBottom: 10 }}>{status.icon}</div>
        <h1 style={{ fontSize: 48, margin: 0, fontWeight: 300 }}>{status.title}</h1>
        {localInstructions.overallNote && <p style={badgeStyle}>📍 {localInstructions.overallNote}</p>}
      </div>
      <div style={cardContainerStyle}>
        {localInstructions.steps.map((step, index) => (
          <div key={index} style={{ marginBottom: 40, padding: "0 20px" }}>
            <h3 style={stepTitleStyle}>{step.title}</h3>
            {step.image && <div style={imagePlaceholderStyle}><img src={step.image} alt={step.title} style={imageStyle} /></div>}
            <p style={stepDescStyle}>{step.description}</p>
          </div>
        ))}
      </div>
      <div style={materialInfoCardStyle}>
        <div style={{ ...symbolCircleStyle, border: `3px solid ${status.color}` }}>
          <div style={{ fontSize: 12, color: "#666" }}>Material</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: status.color }}>{localInstructions.materialCode}</div>
        </div>
        <h2 style={{ fontSize: 32, color: "#333", marginBottom: 20 }}>{localInstructions.materialName}</h2>
      </div>
    </div>
  );
}

// --- STYLES ---
const cardContainerStyle = { maxWidth: 600, margin: "20px auto", background: "#FFFFF7", borderRadius: 16, padding: 40, boxShadow: "0 4px 20px rgba(56, 118, 29, 0.1)" };
const stepTitleStyle = { fontSize: 14, color: "#6B9E3E", marginBottom: 12, fontWeight: 600, textAlign: "center" };
const imagePlaceholderStyle = { width: "100%", height: 200, margin: "0 auto 12px", background: "#E8E8E0", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
const stepDescStyle = { fontSize: 14, color: "#666", lineHeight: 1.6, textAlign: "left", whiteSpace: "pre-line" };
const materialInfoCardStyle = { maxWidth: 600, margin: "0 auto", background: "#FFFFF7", padding: "40px 20px", textAlign: "center", borderRadius: 16 };
const symbolCircleStyle = { display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 100, height: 100, borderRadius: "50%", marginBottom: 20 };
const backButtonStyle = { marginTop: 20, padding: "12px 24px", background: "#6B9E3E", color: "white", border: "none", borderRadius: 6 };
const badgeStyle = { fontSize: 16, fontWeight: 'bold', marginTop: 20, background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '8px', display: 'inline-block' };

export default RecyclingInstructions;