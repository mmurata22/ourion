import React, { useState } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [loading, setLoading] = useState(false);

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
        `${process.env.REACT_APP_API_URL}/process-image`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setProcessedData(data);
    } catch (err) {
      console.error("Upload error:", err);
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
