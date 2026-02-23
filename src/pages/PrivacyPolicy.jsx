import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement('script');
    
    // 2. Add the attributes from the code you sent earlier
    script.id = "usercentrics-ppg";
    script.src = "https://policygenerator.usercentrics.eu/api/privacy-policy";
    script.setAttribute("privacy-policy-id", "cab8825a-263a-4c14-9927-f6cf8afb477c");
    script.setAttribute("data-language", "en");
    script.async = true;

    // 3. Append it to the document body to trigger the fetch
    document.body.appendChild(script);

    // 4. Cleanup function to remove the script if the user leaves the page
    return () => {
      const existingScript = document.getElementById("usercentrics-ppg");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div style={pageContainer}>
      <div style={documentCardStyle}>
        {/* This is the div from your snippet where the policy will appear */}
        <div className="uc-privacy-policy">
          <p style={{ textAlign: 'center', color: '#6B9E3E' }}>Loading Privacy Policy...</p>
        </div>
      </div>
    </div>
  );
};

// --- STYLES (Matching your Terms of Service for consistency) ---

const pageContainer = {
  backgroundColor: '#F3F3E7',
  minHeight: '100vh',
  padding: '80px 20px',
  fontFamily: "'Inria Sans', sans-serif",
  display: 'flex',
  justifyContent: 'center'
};

const documentCardStyle = {
  backgroundColor: '#FFFFF7',
  maxWidth: '800px',
  width: '100%',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(56, 118, 29, 0.05)',
  border: '1px solid rgba(56, 118, 29, 0.1)',
  boxSizing: 'border-box'
};

export default PrivacyPolicy;