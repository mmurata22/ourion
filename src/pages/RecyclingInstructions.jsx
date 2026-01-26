// src/pages/RecyclingInstructions.jsx
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { recyclingInstructions, statusConfig } from "../data/recyclingData";

function RecyclingInstructions() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const productData = location.state?.productData;
  const instructions = recyclingInstructions[category?.toLowerCase()];

  if (!instructions) {
    return (
      <div style={{ padding: "40px 20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Category Not Found</h1>
        <p>We don't have instructions for "{category}" yet.</p>
        {productData && (
          <div style={{ 
            marginTop: 20, 
            background: "#f0f0f0", 
            padding: 15,
            borderRadius: 8
          }}>
            <h3>Product Details:</h3>
            <p><strong>Name:</strong> {productData.name}</p>
            <p><strong>Barcode:</strong> {productData.barcode}</p>
          </div>
        )}
        <button 
          onClick={() => navigate("/")}
          style={{
            marginTop: 20,
            padding: "12px 24px",
            background: "#6B9E3E",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  const status = statusConfig[instructions.status];

  return (
    <div style={{ 
      minHeight: "100vh",
      background: "#F3F3E7",
      fontFamily: "'Inria Sans', sans-serif"
    }}>
      {/* Status Header */}
      <div style={{
        background: status.color,
        color: status.textColor,
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <div style={{
          fontSize: 72,
          marginBottom: 10
        }}>
          {status.icon}
        </div>
        <h1 style={{
          fontSize: 48,
          margin: 0,
          fontWeight: 300
        }}>
          {status.title}
        </h1>
        <p style={{
          fontSize: 16,
          marginTop: 10,
          opacity: 0.9
        }}>
          {status.subtitle}
        </p>
      </div>

      {/* --- BOX 1: Main Content Card (Steps) --- */}
      <div style={{
        maxWidth: 600,
        margin: "20px auto 20px",
        background: "#FFFFF7", // CHANGED: Background color
        borderRadius: 16,
        padding: 40,
        boxShadow: "0 4px 20px rgba(56, 118, 29, 0.1)" // CHANGED: Green shadow @ 10%
      }}>
        {/* Steps Section */}
        {instructions.steps.map((step, index) => (
          <div key={index} style={{ marginBottom: index === instructions.steps.length - 1 ? 0 : 40, padding: "0 20px" }}>
            <h3 style={{
              fontSize: 14,
              color: "#6B9E3E",
              marginBottom: 12,
              fontWeight: 600,
              letterSpacing: "0.5px",
              textAlign: "center"
            }}>
              {step.title}
            </h3>
            
            <div style={{
              width: "100%",
              maxWidth: 400,
              margin: "0 auto 12px",
              // Remove height: 150 if you want the image to dictate height, 
              // or keep it and use object-fit: contain
              background: "#E8E8E0",
              borderRadius: 8,
              overflow: "hidden", // Ensures image stays within rounded corners
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {/* REPLACE THE PLACEHOLDER WITH THIS: */}
              <img 
                src={step.image} 
                alt={step.title} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Or "contain" depending on your AI image aspect ratios
                  display: "block"
                }}
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide if image path is broken
                  e.target.parentNode.innerText = 'Image not found';
                }}
              />
            </div>

            <p style={{
              fontSize: 14,
              color: "#666",
              lineHeight: 1.6,
              margin: 0,
              textAlign: "center"
            }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* --- BOX 2: Material Info Section --- */}
      <div style={{
        maxWidth: 600,
        margin: "0 auto",
        background: "#FFFFF7",
        padding: "40px 20px",
        textAlign: "center",
        borderRadius: "0 0 16px 16px",
        boxShadow: "none"
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 120,
          border: `3px solid ${status.color}`,
          borderRadius: "50%",
          marginBottom: 20
        }}>
          <div>
            <div style={{
              fontSize: 12,
              color: "#666",
              marginBottom: 5
            }}>
              Recycling Symbol
            </div>
            <div style={{
              fontSize: 28,
              fontWeight: 700,
              color: status.color
            }}>
              {instructions.materialCode}
            </div>
          </div>
        </div>

        <h2 style={{
          fontSize: 32,
          color: "#333",
          marginBottom: 20
        }}>
          {instructions.materialName}
        </h2>

        <p style={{
          fontSize: 14,
          color: "#666",
          lineHeight: 1.8,
          marginBottom: 20
        }}>
          {instructions.materialInfo.description}
        </p>

        <p style={{
          fontSize: 14,
          color: "#666",
          lineHeight: 1.8,
          marginBottom: 20
        }}>
          {instructions.materialInfo.recyclingNote}
        </p>

        {instructions.materialInfo.additionalInfo && (
          <p style={{
            fontSize: 14,
            color: "#666",
            lineHeight: 1.8,
            fontStyle: "italic"
          }}>
            {instructions.materialInfo.additionalInfo}
          </p>
        )}
      </div>

      {/* Space before the footer */}
      <div style={{ height: "40px", backgroundColor: "#F3F3E7" }}></div>
    </div>
  );
}

export default RecyclingInstructions;