import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { recyclingInstructions } from "../data/recyclingInstructions";

function RecyclingInstructions() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get product data passed from ImageUpload (if available)
  const productData = location.state?.productData;
  
  // Get the instructions for this category
  const instructions = recyclingInstructions[category?.toLowerCase()];

  if (!instructions) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Category Not Found</h1>
        <p>We don't have instructions for "{category}" yet.</p>
        {productData && (
          <div style={{ marginTop: 20, background: '#f0f0f0', padding: 10 }}>
            <h3>Product Details:</h3>
            <p><strong>Name:</strong> {productData.name}</p>
            <p><strong>Barcode:</strong> {productData.barcode}</p>
          </div>
        )}
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      {productData && (
        <div style={{ marginBottom: 20, background: '#e8f5e9', padding: 15, borderRadius: 5 }}>
          <h3>Scanned Product</h3>
          <p><strong>Product:</strong> {productData.name}</p>
          <p><strong>Barcode:</strong> {productData.barcode}</p>
        </div>
      )}
      
      <h1>{instructions.title}</h1>
      <p>{instructions.description}</p>
      <ul>
        {instructions.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      
      <button onClick={() => navigate("/")} style={{ marginTop: 20 }}>
        Scan Another Item
      </button>
    </div>
  );
}

export default RecyclingInstructions;