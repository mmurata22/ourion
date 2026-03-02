import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient.jsx";
import { LocationContext } from "../context/LocationContext"; 
import { recyclingInstructions, statusConfig } from "../data/recyclingData";

function RecyclingInstructions() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { zipCode } = useContext(LocationContext); 

  const [localInstructions, setLocalInstructions] = useState(null);
  const [loading, setLoading] = useState(true);

  const productData = location.state?.productData;
  const lookupKey = (productData?.category || category)?.toLowerCase();
  const baseData = recyclingInstructions[lookupKey];

  useEffect(() => {
    async function fetchDynamicRules() {
      if (!baseData) {
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        // 1. First, look up the ZIP to find the City and the Overall Note
        const { data: zipData } = await supabase
          .from('zip_lookup')
          .select('city_name, overall_city_note')
          .eq('zip_code', zipCode)
          .single();

        let cityConfig = null;

        // 2. If we found a city in our database, fetch specific material rules for that city
        if (zipData?.city_name) {
          const { data: config } = await supabase
            .from('city_configs')
            .select('special_instructions')
            .eq('city_name', zipData.city_name)
            .eq('category_id', baseData.materialCode)
            .limit(1)
            .single();
          
          cityConfig = config;
        }

        applyFormatting(baseData, zipData, cityConfig);
      } catch (error) {
        console.error("Lookup error:", error);
        // Fallback to base data if ZIP isn't in our system
        applyFormatting(baseData, null, null);
      } finally {
        setLoading(false);
      }
    }

    function applyFormatting(base, zipInfo, local) {
      // Filter out the "Research" image if any ZIP/Location context is present
      let finalSteps = base.steps.filter(step => 
        !(zipCode && step.image?.includes("Research_AI"))
      );

      // Combine material-specific special instructions into ONE block
      if (local?.special_instructions && Array.isArray(local.special_instructions)) {
        const combinedDescription = local.special_instructions.join("\n• ");
        
        const localSummaryStep = {
          title: "LOCAL SPECIAL INSTRUCTIONS",
          description: `• ${combinedDescription}`,
          image: null 
        };
        
        finalSteps = [localSummaryStep, ...finalSteps];
      }

      setLocalInstructions({
        ...base,
        steps: finalSteps,
        // Pull overallNote from zip_lookup, NOT city_configs
        overallNote: zipInfo?.overall_city_note || ""
      });
    }

    fetchDynamicRules();
  }, [lookupKey, zipCode, baseData]);

  if (loading) return <div style={{ textAlign: 'center', padding: '100px', fontFamily: 'Inria Sans' }}>Analyzing local regulations for {zipCode || 'your area'}...</div>;

  if (!localInstructions) {
    return (
      <div style={{ padding: "100px 20px", maxWidth: "600px", margin: "0 auto", textAlign: 'center' }}>
        <h1 style={{ color: "#38761D" }}>Category Not Found</h1>
        <p>We don't have instructions for "{category}" yet.</p>
        <button onClick={() => navigate("/")} style={backButtonStyle}>Go Back</button>
      </div>
    );
  }

  const status = statusConfig[localInstructions.status];

  return (
    <div style={{ minHeight: "100vh", background: "#F3F3E7", fontFamily: "'Inria Sans', sans-serif" }}>
      
      {/* 1. Status Header */}
      <div style={{ background: status.color, color: status.textColor, padding: "60px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 72, marginBottom: 10 }}>{status.icon}</div>
        <h1 style={{ fontSize: 48, margin: 0, fontWeight: 300 }}>{status.title}</h1>
        <p style={{ fontSize: 16, marginTop: 10, opacity: 0.9 }}>{status.subtitle}</p>
        {localInstructions.overallNote && (
           <p style={{ 
             fontSize: 16, 
             fontWeight: 'bold', 
             marginTop: 20, 
             background: 'rgba(255,255,255,0.2)', 
             padding: '10px', 
             borderRadius: '8px', 
             display: 'inline-block' 
           }}>
             📍 {localInstructions.overallNote}
           </p>
        )}
      </div>

      {/* 2. Main Steps Card */}
      <div style={cardContainerStyle}>
        {localInstructions.steps.map((step, index) => (
          <div key={index} style={{ marginBottom: 40, padding: "0 20px" }}>
            <h3 style={stepTitleStyle}>{step.title}</h3>
            
            {step.image && (
              <div style={imagePlaceholderStyle}>
                <img src={step.image} alt={step.title} style={imageStyle} />
              </div>
            )}

            <p style={stepDescStyle}>{step.description}</p>
          </div>
        ))}
      </div>

      {/* 3. Material Info Section */}
      <div style={materialInfoCardStyle}>
        <div style={{ ...symbolCircleStyle, border: `3px solid ${status.color}` }}>
          <div style={{ fontSize: 12, color: "#666" }}>Material</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: status.color }}>{localInstructions.materialCode}</div>
        </div>
        <h2 style={{ fontSize: 32, color: "#333", marginBottom: 20 }}>{localInstructions.materialName}</h2>
        <p style={infoTextStyle}>{localInstructions.materialInfo?.description}</p>
        <p style={infoTextStyle}>{localInstructions.materialInfo?.recyclingNote}</p>
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

// Set to left alignment so the bullets look correct
const stepDescStyle = { 
  fontSize: 14, 
  color: "#666", 
  lineHeight: 1.6, 
  textAlign: "left", 
  whiteSpace: "pre-line",
  maxWidth: "450px",
  margin: "0 auto"
};

const materialInfoCardStyle = { maxWidth: 600, margin: "0 auto", background: "#FFFFF7", padding: "40px 20px", textAlign: "center", borderRadius: 16, boxShadow: "0 4px 20px rgba(56, 118, 29, 0.05)" };
const symbolCircleStyle = { display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 100, height: 100, borderRadius: "50%", marginBottom: 20 };
const infoTextStyle = { fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 20 };
const backButtonStyle = { marginTop: 20, padding: "12px 24px", background: "#6B9E3E", color: "white", border: "none", borderRadius: 6, cursor: "pointer" };

export default RecyclingInstructions;