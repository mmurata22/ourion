import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = e => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append("image", selectedImage);
    setLoading(true);
    
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/process-image`,  // ← Back to process.env!
        {
          method: "POST",
          body: formData,
        }
      );
      
      if (!res.ok) {
        const text = await res.text();
        console.error('❌ Backend error response:', text);
        alert(`Backend error: ${text}`);
        setLoading(false);
        return;
      }
      
      const data = await res.json();
      console.log('📦 BACKEND DATA RECEIVED:', data);
      setProcessedData(data);
      
      navigate(`/recycle/${data.category}`, { state: { productData: data } });
      
    } catch (err) {
      console.error("Upload error:", err);
      alert(`Error: ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload Image"}
      </button>
      {processedData && (
        <div style={{ marginTop: 20 }}>
          <h2>Product Info</h2>
          <pre>{JSON.stringify(processedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;