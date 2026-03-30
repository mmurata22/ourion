import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import { supabase } from '../supabase/supabaseClient'; 

const LocationNotification = () => {
  const { zipCode, updateLocation } = useContext(LocationContext);
  const [inputZip, setInputZip] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [profileHasZip, setProfileHasZip] = useState(false);

  useEffect(() => {
    const checkProfileZip = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data } = await supabase
          .from('profiles')
          .select('home_zip')
          .eq('id', session.user.id)
          .single();
        
        if (data?.home_zip) {
          setProfileHasZip(true);
        }
      }
    };
    checkProfileZip();
  }, []);

  // Do not render if the profile already has a ZIP, the context has a ZIP, or user dismissed it
  if (profileHasZip || zipCode || !isVisible) return null;

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
        setErrorMsg("Try a local ZIP like 18015!");
        setTimeout(() => setErrorMsg(""), 4000);
      }
    } catch (err) {
      setErrorMsg("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={floatingContainer}>
      <div style={glassCard}>
        <button onClick={() => setIsVisible(false)} style={closeButtonStyle} title="Dismiss">✕</button>

        <div style={textSide}>
          <span style={leafIcon}>🌿</span>
          <div style={textContent}>
            <p style={mainText}>Localize Ourion</p>
            <p style={subText}>Enter ZIP for Bethlehem rules</p>
          </div>
        </div>

        <div style={inputSide}>
          <input 
            type="text" 
            placeholder="18015" 
            value={inputZip} 
            onChange={(e) => setInputZip(e.target.value.replace(/\D/g, ''))}
            style={minimalInput}
            maxLength={5}
          />
          <button onClick={handleZipSubmit} style={actionButton} disabled={loading}>
            {loading ? '...' : 'Go'}
          </button>
        </div>
        
        {errorMsg && <div style={errorBadge}>{errorMsg}</div>}
      </div>
    </div>
  );
};

// --- STYLES ---
const floatingContainer = { position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999, width: 'max-content', animation: 'slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)' };
const glassCard = { display: 'flex', alignItems: 'center', gap: '24px', padding: '14px 28px', backgroundColor: 'rgba(243, 243, 231, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 158, 62, 0.2)', borderRadius: '100px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', position: 'relative' };
const closeButtonStyle = { position: 'absolute', top: '-12px', right: '15px', backgroundColor: '#F3F3E7', border: '1px solid rgba(107, 158, 62, 0.3)', color: '#6B9E3E', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' };
const textSide = { display: 'flex', alignItems: 'center', gap: '14px' };
const leafIcon = { fontSize: '22px' };
const textContent = { display: 'flex', flexDirection: 'column' };
const mainText = { margin: 0, fontSize: '14px', fontWeight: '700', color: '#38761D', fontFamily: "'Inria Sans', sans-serif" };
const subText = { margin: 0, fontSize: '11px', color: '#6B9E3E', opacity: 0.9, fontFamily: "'Inria Sans', sans-serif" };
const inputSide = { display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', padding: '4px 4px 4px 14px', border: '1px solid #E0E0D0' };
const minimalInput = { border: 'none', outline: 'none', width: '70px', fontSize: '14px', color: '#333', backgroundColor: 'transparent', letterSpacing: '1px' };
const actionButton = { backgroundColor: '#38761D', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '50px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' };
const errorBadge = { position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C55050', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', whiteSpace: 'nowrap', boxShadow: '0 4px 10px rgba(197, 80, 80, 0.3)', fontFamily: "'Inria Sans', sans-serif" };

export default LocationNotification;