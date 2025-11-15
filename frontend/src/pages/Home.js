import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/process-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const packaging = data.packaging.toLowerCase();

      // Example mapping (can expand later)
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
      console.error(err);
      alert("Error processing image.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>RecycleVision - Upload Product</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Upload Image
      </button>
    </div>
  );
}

export default Home;
