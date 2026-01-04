import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. Define the API URL based on the environment
// It looks for the variable first. If missing, it falls back to localhost.
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Home() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
        alert("Please select a file first!");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    console.log("Sending request to:", API_URL);

    try {
      const res = await fetch(`${API_URL}/process-image`, {
        method: "POST",
        body: formData,
      });

      console.log("Response Status:", res.status);

      const data = await res.json();
      console.log("📦 BACKEND DATA RECEIVED:", data);

      const prediction = data.packaging || data.result; 

      if (!prediction) {
        alert("Backend connected, but returned empty prediction. Check Console.");
        return;
      }

      const packaging = prediction.toLowerCase();
      console.log("Detected:", packaging);

      if (packaging.includes("plastic") || packaging.includes("pet")) {
        navigate("/plastics");
      } else if (packaging.includes("paper") || packaging.includes("cardboard")) {
        navigate("/paper-cardboard");
      } else if (packaging.includes("glass")) {
        navigate("/glass");
      } else if (packaging.includes("aluminum") || packaging.includes("metal")) {
        navigate("/aluminum");
      } else {
        navigate("/miscellaneous");
      }

    } catch (err) {
      console.error("Error:", err);
      alert("Error processing image. See Console for details.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Ourion - Upload Product</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Upload Image
      </button>
    </div>
  );
}

export default Home;