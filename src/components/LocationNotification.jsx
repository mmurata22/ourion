import React, { useState, useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import { supabase } from '../supabase/supabaseClient'; 

const LocationNotification = () => {
  const { zipCode, updateLocation } = useContext(LocationContext);
  const [inputZip, setInputZip] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  // Do not render if the location is already set or the user dismissed it
  if (zipCode || !isVisible) return null;

  const handleZipSubmit = async () => {
    if (inputZip.length < 5) {
      setErrorMsg("Please enter a 5-digit ZIP.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const { data } = await supabase
        .from('zip_lookup')
        .select('city_name')
        .eq('zip_code', inputZip)
        .single();

      if (data) {
        updateLocation(inputZip, data.city_name);
      } else {
        setErrorMsg("We aren't in your area yet—try 18015!");
        // Clear error after 4 seconds
        setTimeout(() => setErrorMsg(""), 4000);
      }
    } catch (err) {
      setErrorMsg("Connection error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={floatingContainer}>
      <div style={glassCard}>
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)} 
          style={closeButtonStyle}
          title="Dismiss"
        >
          ✕
        </button>

        <div style={textSide}>
          <span style={leafIcon}>🌿</span>
          <div style={textContent}>
            <p style={mainText}>Personalize your guide</p>
            <p style={subText}>Enter ZIP for local Bethlehem & Allentown rules</p>
          </div>
        </div>

        <div style={inputSide}>
          <input 
            type="text" 
            placeholder="18015" 
            value={inputZip} 
            onChange={(e) => setInputZip(e.target.value.replace(/\D/g, ''))} // Only allow numbers
            style={minimalInput}
            maxLength={5}
          />
          <button 
            onClick={handleZipSubmit} 
            style={actionButton}
            disabled={loading}
          >
            {loading ? '...' : 'Go'}
          </button>
        </div>
        
        {/* Animated Error Badge */}
        {errorMsg && (
          <div style={errorBadge}>
            {errorMsg}
          </div>
        )}
      </div>
    </div>
  );
};

// --- STYLES ---

const floatingContainer = {
  position: 'fixed',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 9999,
  width: 'max-content',
  // Ensure you have the @keyframes slideUp in your App.css or index.css
  animation: 'slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
};

const glassCard = {
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  padding: '14px 28px',
  backgroundColor: 'rgba(243, 243, 231, 0.9)', // Ourion Off-White
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(107, 158, 62, 0.2)', // Soft Nature Green
  borderRadius: '100px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
  position: 'relative'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '-12px',
  right: '15px',
  backgroundColor: '#F3F3E7',
  border: '1px solid rgba(107, 158, 62, 0.3)',
  color: '#6B9E3E',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '10px',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.2s ease'
};

const textSide = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px'
};

const leafIcon = { fontSize: '22px' };

const textContent = { display: 'flex', flexDirection: 'column' };

const mainText = {
  margin: 0,
  fontSize: '14px',
  fontWeight: '700',
  color: '#38761D', // Ourion Deep Green
  fontFamily: "'Inria Sans', sans-serif"
};

const subText = {
  margin: 0,
  fontSize: '11px',
  color: '#6B9E3E', 
  opacity: 0.9,
  fontFamily: "'Inria Sans', sans-serif"
};

const inputSide = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '50px',
  padding: '4px 4px 4px 14px',
  border: '1px solid #E0E0D0'
};

const minimalInput = {
  border: 'none',
  outline: 'none',
  width: '70px',
  fontSize: '14px',
  color: '#333',
  backgroundColor: 'transparent',
  letterSpacing: '1px'
};

const actionButton = {
  backgroundColor: '#38761D',
  color: 'white',
  border: 'none',
  padding: '8px 18px',
  borderRadius: '50px',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: '700',
  transition: 'transform 0.2s active',
  opacity: 1
};

const errorBadge = {
  position: 'absolute',
  top: '-40px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#C55050', // Ourion Error Red
  color: 'white',
  padding: '6px 16px',
  borderRadius: '20px',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  boxShadow: '0 4px 10px rgba(197, 80, 80, 0.3)',
  fontFamily: "'Inria Sans', sans-serif"
};

export default LocationNotification;